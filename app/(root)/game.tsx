import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "./(tabs)/home";
import Sound from "@/components/Icons/sound";
import CloseIcon from "@/components/Icons/close";
import { BG, Clock } from "@/constants";
import { router } from "expo-router";

const Game = () => {
  const [count, setCount] = useState(20);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [count, isRunning]);

  useEffect(() => {
    if (count === 0) {
      router.push("/(root)/main");
    }
  }, [count]);
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
          <View className="bg-[#0000001F] border border-[#FFFFFF1F] w-[160px] flex-row items-center justify-center rounded-xl">
            <Image source={Clock} className="h-[60px] w-[60px]" />
            <Text className="text-white text-[32px] font-wendy">10:00</Text>
          </View>
        </View>

        <View className="mt-[230px] justify-center items-center">
          <Text className="text-[#FFBF00] font-roboto text-xl">
            Your new word starts in
          </Text>
          <Text className="text-white text-5xl font-wendy">{count}</Text>

          {/* <Button title="Reset Timer" onPress={resetTimer} /> */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Game;
