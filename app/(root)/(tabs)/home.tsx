import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import AuthBackground from "@/components/AuthBackground";
import { SafeAreaView } from "react-native-safe-area-context";
import Lightning from "@/assets/images/lightnng.png";
import Coin from "@/assets/images/coin.png";
import Star from "@/assets/images/star.png";
import Heart from "@/assets/images/heart.png";
import Crown from "@/assets/images/crown.png";
import BG from "@/assets/images/bg.png";
import Woman from "@/assets/images/woman.png";
import Flag from "@/assets/images/nigeria.png";
import Sword from "@/assets/images/sword.png";
import Level from "@/assets/images/level.png";
import { router } from "expo-router";

const Home = () => {
  return (
    <AuthBackground>
      <ScrollView className="flex-1 mt-[75px]">
        <View className="flex-row  px-3 space-x-2 ">
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
        <View className="mt-6 flex-row space-x-6">
          <View className=" h-24 w-32 rounded-tr-xl rounded-br-xl border border-[#FFFFFF1A] px-5 justify-center items-center bg-[#0000000A]">
            <Image source={Crown} className="w-11 h-11" />

            <View className="justify-center items-center ">
              <Text className="text-[10px] text-white font-wendy">
                Your Rank
              </Text>
              <Text className="text-white font-wendy text-sm">Novice</Text>
            </View>
          </View>
          <View className=" h-24 w-32 rounded-tl-xl rounded-bl-xl border border-[#FFFFFF1A]  justify-center items-center flex-1 ">
            <View className="bg-white w-full h-[19px] rounded-tl-xl">
              <Text className="text-[10px] font-wendy text-center py-1">
                Player of the day
              </Text>
            </View>
            <ImageBackground
              source={BG}
              className="h-[77px] w-[280px] object-contain relative flex-row"
            >
              <View className="flex-row flex-1">
                <Image
                  source={Woman}
                  className="w-[69px] h-[69px] object-contain mt-[6px] ml-6"
                />

                <View className="justify-center items-center">
                  <Text className="text-white text-base font-wendy">
                    Angel Rose
                  </Text>
                  <Text className="text-xs font-wendy text-[#F7CE54]">
                    Professional
                  </Text>
                </View>
              </View>

              <Image source={Flag} className="w-[91px] h-[77px] -z-10" />
            </ImageBackground>
          </View>
        </View>

        <View className="px-5 space-y-4">
          <Text className="text-white text-center font-wendy text-[32px] mt-[36px]">
            Games Modes
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(root)/start")}
            className="border border-[#FFFFFF1a] bg-[#0000001F] w[380px] h-[232px] rounded-3xl justify-center items-center space-y-4"
          >
            <Image source={Sword} className="w-[168px] h-[100px]" />
            <View className="justify-center items-center space-y-1">
              <Text className="text-[25px]  text-white font-wendy">
                Battle Royale
              </Text>
              <Text className="font-roboto text-base text-[#C4C4C4]">
                Battle with other players get rewards
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border border-[#FFFFFF1a] bg-[#0000001F] w[380px] h-[232px] rounded-3xl justify-center items-center space-y-4">
            <Image source={Level} className="w-[247px] h-[106px]" />
            <View className="justify-center items-center space-y-1">
              <Text className="text-[25px]  text-white font-wendy">
                Quick Play
              </Text>
              <Text className="font-roboto text-base text-[#C4C4C4]">
                Play and advance in levels
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AuthBackground>
  );
};

export default Home;

export const data = [
  { icon: Lightning, value: 20, id: 1 },
  { icon: Star, value: 20, id: 2 },
  { icon: Coin, value: 1, id: 3 },
  { icon: Heart, value: 20, id: 4 },
];
