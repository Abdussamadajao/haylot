import { View, Text, ImageBackground } from "react-native";
import React from "react";
import BackgrondImage from "@/assets/images/bg-image.png";

const AuthBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground source={BackgrondImage} className="h-full w-full ">
      {children}
    </ImageBackground>
  );
};

export default AuthBackground;
