import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import AuthBackground from "@/components/AuthBackground";
import { SafeAreaView } from "react-native-safe-area-context";
import Woman from "@/assets/images/woman.png";
import Crown from "@/assets/images/crown.png";
import Coin from "@/assets/images/coin.png";
import Speaker from "@/assets/images/speaker.png";
import { wendy } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import ArrowLeft from "@/assets/images/Arrow-Left.png";

const profile = () => {
  return (
    <AuthBackground>
      <SafeAreaView>
        <Text className="text-[36px] text-center font-bold font-wendy mt-3 py-2 text-white">
          My Account
        </Text>

        <ScrollView className="mx-auto my-5 space-y-5 mb-[120px]">
          <View className="w-[380px] h-[316px] border border-[#FFFFFF1a] bg-[#0000001F] rounded-2xl p-6">
            <View className="flex flex-row ">
              <View>
                <Image
                  source={Woman}
                  className="bg-white w-[128px] h-[102px] rounded-md"
                  resizeMode="contain"
                />
                <View className="flex flex-row items-center gap-x-2 mt-4">
                  <Text className="font-bold font-wendy text-white text-[18px]">
                    Summer
                  </Text>
                  <Image
                    source={{
                      uri: `https://flagsapi.com/NG/shiny/64.png`,
                    }}
                    className="w-[24px] h-[16px] ml-4"
                  />
                </View>
                <Text className="font-bold font-wendy text-[12px] mt-2 text-[#FFA61E]">
                  Level 1
                </Text>
              </View>
              <View className="ml-6 mt-5">
                <View className="flex flex-col gap-y-8">
                  <ProfileCard icon={Crown} lable="Rank" text="Professional" />
                  <ProfileCard icon={Coin} lable="Coins" text="$ 23,400" />
                  <ProfileCard icon={Crown} lable="Rank" text="Professional" />
                </View>
              </View>
            </View>

            <View className="flex items-center gap-x-8 flex-row mt-16">
              <Image source={Speaker} className="w-[40px] h-[40px]" />

              <TouchableOpacity className="w-[156px]">
                <LinearGradient
                  colors={["#FFD96B", "#D7A100"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  className="h-[52px] border border-[#3FB6DE38] rounded-xl justify-center items-center"
                >
                  <Text style={wendy.styledText} className="font-wendy">
                    Edit Profile
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-[380px] h-[389px] py-4 border border-[#FFFFFF1a] bg-[#0000001F] rounded-2xl">
            <View className="p-5 flex flex-row items-center justify-between">
              <Text className="font-bold text-white font-wendy text-[18px]">
                Notifications
              </Text>
              <Image source={ArrowLeft} className="w-[24px] h-[24px]" />
            </View>
            <View className="p-5 flex flex-row items-center justify-between">
              <Text className="font-bold text-white font-wendy text-[18px]">
                Security
              </Text>
              <Image source={ArrowLeft} className="w-[24px] h-[24px]" />
            </View>
            <View className="p-5 flex flex-row items-center justify-between">
              <Text className="font-bold text-white font-wendy text-[18px]">
                Support
              </Text>
              <Image source={ArrowLeft} className="w-[24px] h-[24px]" />
            </View>
            <View className="p-5 flex flex-row items-center justify-between">
              <Text className="font-bold text-white font-wendy text-[18px]">
                Verifications
              </Text>
              <Image source={ArrowLeft} className="w-[24px] h-[24px]" />
            </View>
            <View className="p-5 flex flex-row items-center justify-between">
              <Text className="font-bold text-white font-wendy text-[18px]">
                Terms and conditions & Privacy policy
              </Text>
              <Image source={ArrowLeft} className="w-[24px] h-[24px]" />
            </View>
            <View className="p-5 flex flex-row items-center justify-between">
              <Text className="font-bold text-white font-wendy text-[18px]">
                Logout
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </AuthBackground>
  );
};

export default profile;

const ProfileCard = ({
  icon,
  lable,
  text,
}: {
  icon: any;
  lable: string;
  text: string;
}) => {
  return (
    <View className="border border-[#A57C0099] rounded-xl flex flex-row items-center gap-x-3 h-[44px] w-[200px] mb-2">
      <View>
        <Image source={icon} className="w-[28px] h-[28px]" />
      </View>
      <View>
        <Text className="text-[8px] font-bold font-wendy text-white">
          {lable}
        </Text>
        <Text className="text-white text-[14px] font-bold font-wendy">
          {text}
        </Text>
      </View>
    </View>
  );
};
