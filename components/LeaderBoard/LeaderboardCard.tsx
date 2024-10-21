import { View, Text, Image } from "react-native";
import React from "react";
import Star from "@/assets/images/star.png";
import Crown from "@/assets/images/crown.png";

interface LeaderboardCardProps {
  rank: number;
  countryFlag: string;
  name: string;
  score: number;
  avatar: any;
  isCurrentUser?: boolean;
}

const LeaderboardCard = ({
  rank,
  countryFlag,
  name,
  score,
  avatar,
  isCurrentUser = false,
}: LeaderboardCardProps) => {
  const rankBg =
    rank === 1
      ? "bg-red-500"
      : rank === 2
      ? "bg-blue-500"
      : rank === 3
      ? "bg-yellow-500"
      : "bg-transparent";

  const textColor =
    rank === 1 || rank === 2 || rank === 3 ? "text-black" : "text-white";
  return (
    <View
      className={`flex-row items-center  rounded-xl py-2 px-4 mb-2 shadow-lg
      ${rank === 1 || rank === 2 || rank === 3 ? "bg-white" : "bg-white/10"}
    `}
    >
      <View
        className={`w-8 h-8 rounded-full  justify-center items-center ${rankBg}`}
      >
        <Text className="text-white font-bold font-wendy">{rank}</Text>
      </View>

      <Image
        source={{ uri: `https://flagsapi.com/${countryFlag}/shiny/64.png` }}
        className="w-8 h-5 ml-4"
      />

      <Text className="text-black text-lg ml-4 Font-bold font-wendy flex-grow font-semibold">
        {name}
      </Text>

      <View className="flex-row items-center mr-2">
        {/* <Image
          source={require("../assets/star-icon.png")}
          className="w-5 h-5 mr-1"
        /> */}
        <View className="flex flex-row items-center gap-x-1">
          <Image source={Star} />
          <Text className={`font-bold font-wendy text-[14px] ${textColor}`}>
            {score}/100
          </Text>
          <Image source={Crown} className="h-[24px] w-[24px]" />
        </View>
      </View>

      {/* Avatar */}
      <Image source={{ uri: avatar }} className="w-10 h-10 rounded-full" />
    </View>
  );
};

export default LeaderboardCard;
