import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import AuthBackground from "@/components/AuthBackground";
import { Logo } from "@/constants";
import Google from "@/components/Icons/google";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
const SignIn = () => {
  const router = useRouter();

  return (
    <AuthBackground>
      <View className="justify-center items-center h-[100vh] mt-[40px]">
        <View className="gap-y-[20px]">
          <Text className="font-wendy text-4xl text-white">Sign In</Text>
          <Image source={Logo} className="h-[103px] w-[100px]" />
        </View>

        <View className="gap-[30px] mt-[120px]">
          <TouchableOpacity className="w-[380px] bg-white h-14 rounded-xl p-4 flex-row justify-center items-center space-x-4">
            <Google />
            <Text className="text-base text-[#212121] font-roboto capitalize">
              Continue with google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[380px] bg-[#2A99FA] h-14 rounded-xl  flex-row justify-center items-center space-x-4">
            <Entypo name="facebook-with-circle" size={35} color="white" />
            <Text className="text-base text-white font-roboto capitalize">
              Continue with facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[380px] justify-center items-center"
            onPress={() => router.push("/(auth)/login")}
          >
            <Text className="font-roboto text-white text-base capitalize">
              Sign in with email
            </Text>
            <View className="border-b-2 border-white w-[129px] pt-[px]" />
          </TouchableOpacity>
        </View>
        <Pressable
          className="w-[380px] justify-center items-center mt-[60px]"
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="font-roboto text-white text-sm capitalize">
            Dont have an account?
            <Text className="font-bold font-robotoBold text-base">Sign up</Text>
          </Text>
        </Pressable>
      </View>
    </AuthBackground>
  );
};

export default SignIn;
