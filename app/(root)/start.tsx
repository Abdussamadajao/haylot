import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import { BG, wendy } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const Game = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [count, setCount] = useState(20);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [count, isRunning]);

  const resetTimer = () => {
    setCount(20);
    setIsRunning(true);
  };

  return (
    <>
      <ImageBackground source={BG} className="w-full h-full" />

      <StartModal visible={isModalVisible} onClose={toggleModal} />
    </>
  );
};

export default Game;

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export const StartModal = ({ visible, onClose }: ModalProps) => {
  const handleCancel = () => {
    router.push("/(root)/(tabs)/home");
    onClose();
  };

  const handleNext = () => {
    router.push("/(root)/game");
    onClose();
  };
  return (
    <Modal isVisible={visible} backdropOpacity={0.1} className="relative">
      <TouchableOpacity
        onPress={handleCancel}
        className="bg-[#F10A0AA6] border border-[#E50606A6] rounded-full absolute top-[26%] w-10 h-10 right-0 justify-center items-center"
      >
        <AntDesign name="close" size={14} color="white" />
      </TouchableOpacity>
      <View className="bg-[#0000001F] rounded-3xl border border-[#FFFFFF1F] h-[262px] w-full blur-sm filter">
        <View className="bg-[#D1062FCC] h-[49px] w-full rounded-tl-3xl rounded-tr-3xl justify-center items-center shadow-lg shadow-[#7E001A]">
          <Text className="text-center text-white font-wendy text-2xl">
            Level 1
          </Text>
        </View>

        <View className="space-y-10 mt-12 justify-center items-center">
          <Text className="text-white text-center text-base font-roboto max-w-[312px]">
            Find the letters to spell the word correctly within 10 seconds and
            win points
          </Text>
          <TouchableOpacity className="w-[156px]" onPress={handleNext}>
            <LinearGradient
              colors={["#7ADEFF", "#1E90FF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              className="h-[52px] border border-[#3FB6DE38] rounded-xl justify-center items-center"
            >
              <Text style={wendy.styledText} className="font-wendy">
                Play
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
