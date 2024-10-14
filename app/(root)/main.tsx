import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BG, Clock, wendy } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "./(tabs)/home";
import Sound from "@/components/Icons/sound";
import CloseIcon from "@/components/Icons/close";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import OTPTextInput from "react-native-otp-textinput";
import Modal from "react-native-modal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

const words = ["Holiday", "Sunshine", "Adventure"];
const Main = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [time, setTime] = useState(600);
  const [progress, setProgress] = useState(0);
  const otpInputRef = useRef<OTPTextInput | null>(null);
  const [otp, setOtp] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const currentWord = words[currentWordIndex];
  const wordLength = currentWord.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });

      // Progress increases as time decreases
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    // Calculate progress based on time elapsed
    setProgress((600 - time) / 6); // 10 minutes corresponds to 0 to 100% fill
  }, [time]);

  // Convert time into MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const handleOtpChange = (code: string) => {
    setOtp(code);

    // Automatically check when OTP reaches word length
    if (code.length === wordLength) {
      checkSpelling(code);
      Keyboard.dismiss(); // Close the keyboard
    }
  };

  // Check spelling against current word
  const checkSpelling = (input: string) => {
    if (input.toLowerCase() === currentWord.toLowerCase()) {
      setIsModalVisible(true); // Show correct modal
    }
  };

  const goToNextWord = () => {
    setOtp(""); // Clear the input
    setIsModalVisible(false); // Hide the modal
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1); // Move to next word
    }
  };

  return (
    <ImageBackground source={BG} className="w-full h-full">
      <SafeAreaView>
        <View className="flex-row  px-3 justify-center space-x-3 pt-2">
          {data.map((item, idx) => (
            <View
              className=" w-[90px] h-[30px] border border-[#A57C0099] rounded-full relative "
              key={idx}
            >
              <View className="flex-row items-center px-1 py-[2px] space-x-1">
                <Image source={item.icon} className={` h-[24px] w-6  `} />
                <Text className="text-white font-wendy text-xs  pl-1">
                  {item.value}/100
                </Text>
              </View>
              <View className="bg-[#D39E00] h-[28px] w-[10px] absolute right-0  rounded-tr-full rounded-br-full items-center justify-center">
                <Text className="text-white text-shadow-lg">+</Text>
              </View>
            </View>
          ))}
        </View>
        <View className="flex-row px-3 pt-4 justify-between">
          <TouchableOpacity className="bg-[#F10A0AA6] border border-[#E50606A6] rounded-full  h-10 w-10 justify-center items-center">
            <Sound />
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#F10A0AA6] border border-[#E50606A6] rounded-full  h-10 w-10 justify-center items-center">
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View className="justify-center items-center ">
          <View className="bg-[#0000001F] border space-x-3 border-[#FFFFFF1F] w-[160px] flex-row items-center justify-center rounded-xl">
            <AnimatedCircularProgress
              size={50}
              width={2}
              fill={progress}
              tintColor="#09C11C"
              backgroundColor="transparent"
              rotation={+0}
              lineCap="round"
            >
              {() => <Image source={Clock} className="h-[50px] w-[50px]" />}
            </AnimatedCircularProgress>

            <Text className="text-white text-[32px] font-wendy">
              {formatTime(time)}
            </Text>
          </View>
        </View>

        <View className="justify-center items-center space-y-4 h-[60vh]">
          <Text className="text-white text-[40px] font-wendy">Holiday</Text>

          <View className="flex ">
            <OTPTextInput
              ref={otpInputRef}
              inputCount={wordLength}
              // handleTextChange={(code) => setOtp(code)}
              keyboardType="url"
              textInputStyle={styles.inputBox}
              tintColor={"transparent"}
              offTintColor={"transparent"}
              handleTextChange={handleOtpChange}
            />
          </View>
        </View>
      </SafeAreaView>

      <CustomModal
        onClose={() => setIsModalVisible(false)}
        visible={isModalVisible}
      />
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  inputBox: {
    width: 40,
    height: 40,
    textAlign: "center",
    // margin: 5,5
    fontSize: 18,
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export const CustomModal = ({ visible, onClose }: ModalProps) => {
  return (
    <Modal isVisible={visible} backdropOpacity={0.9} className="relative">
      <TouchableOpacity
        onPress={onClose}
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
          <TouchableOpacity className="w-[156px]">
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
