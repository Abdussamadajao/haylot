import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import AuthBackground from "@/components/AuthBackground";
import { Logo, wendy } from "@/constants";
import { useRouter } from "expo-router";
import Svg, { Text as SvgText } from "react-native-svg";

const welcome = () => {
  const router = useRouter();

  return (
    <>
      <AuthBackground>
        <View className="justify-center items-center h-[100vh]">
          <Image source={Logo} className="h-[182px] w-[182px]" />
          <View className="gap-y-[20px]  mt-[170px]">
            <TouchableOpacity
              className="w-[380px]"
              onPress={() => router.push("/(auth)/sign-in")}
            >
              <LinearGradient
                colors={["#FFD96B", "#D7A100"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                className="h-[52px] border border-[#3FB6DE38] rounded-xl justify-center items-center"
              >
                <Text style={wendy.styledText} className="font-wendy">
                  Get started
                 
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity className="w-[380px] justify-center items-center">
              <Text style={wendy.styledText} className="font-wendy">
                Play as guest
              </Text>
              <View className="border-b-4 border-white w-[105px] pt-[px]" />
            </TouchableOpacity>
          </View>
        </View>
      </AuthBackground>
    </>
  );
};

export default welcome;
