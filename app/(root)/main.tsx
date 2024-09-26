import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { BG, Clock } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "./(tabs)/home";
import Sound from "@/components/Icons/sound";
import CloseIcon from "@/components/Icons/close";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const { width } = Dimensions.get("window");
const SIZE = width * 0.3; // Size of the clock
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const Main = () => {
  const [time, setTime] = useState(600);

  const progress = useSharedValue(1);
  Dimensions;

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCUMFERENCE * progress.value,
  }));

  useEffect(() => {
    // Simulate timer countdown
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate the stroke as the time decreases
    if (time > 0) {
      progress.value = withTiming(time / 60, {
        duration: 1000,
        easing: Easing.linear,
      });
    } else {
      progress.value = withTiming(0, {
        duration: 500, // You can adjust the duration for the end animation
        easing: Easing.linear,
      });
    }
  }, [time]);

  // Convert time into MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
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
          <Svg width={SIZE} height={SIZE}>
            <Circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              stroke="#ddd"
              strokeWidth={STROKE_WIDTH}
            />
            <AnimatedCircle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              stroke="#ff6347" // Stroke color (can be customized)
              strokeWidth={STROKE_WIDTH}
              strokeDasharray={CIRCUMFERENCE}
              animatedProps={animatedProps}
              strokeLinecap="round"
            />
          </Svg>

          <View className="bg-[#0000001F] border border-[#FFFFFF1F] w-[160px] flex-row items-center justify-center rounded-xl">
            <Image source={Clock} className="h-[60px] w-[60px]" />
            <Text className="text-white text-[32px] font-wendy">
              {formatTime(time)}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Main;
