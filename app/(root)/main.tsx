import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BG, Clock } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "./(tabs)/home";
import Sound from "@/components/Icons/sound";
import CloseIcon from "@/components/Icons/close";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import OTPTextInput from "react-native-otp-textinput";
import CustomKeyboard from "@/components/CustomKeyBoard";

const Main = () => {
  const word = "Holiday";
  const wordLength = word.length;
  const [time, setTime] = useState(600);
  const [progress, setProgress] = useState(0);
  const otpInputRef = useRef<OTPTextInput | null>(null);
  const [otp, setOtp] = useState("");

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

  const handleKeyPress = (key: string) => {
    if (key === "") {
      // Handle delete (clear last character)
      setOtp((prev) => prev.slice(0, -1));
    } else if (otp.length < 6) {
      // Add key to OTP if under length limit
      setOtp((prev) => prev + key);
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
              handleTextChange={(code) => setOtp(code)}
              keyboardType="url"
              textInputStyle={styles.inputBox}
              tintColor={"transparent"}
              offTintColor={"transparent"}
            />
          </View>
        </View>
      </SafeAreaView>
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
    color: "white",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
