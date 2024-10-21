import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthBackground from "@/components/AuthBackground";
import LeaderBoardImg from "@/assets/images/leader-board.png";
import LeaderboardCard from "@/components/LeaderBoard/LeaderboardCard";

const players = [
  {
    rank: 1,
    countryFlag: "NG",
    name: "Angel Rose",
    score: 80,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg", // Example avatar URL
    isCurrentUser: false,
  },
  {
    rank: 2,
    countryFlag: "AR",
    name: "Rusty",
    score: 75,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    isCurrentUser: false,
  },
  {
    rank: 3,
    countryFlag: "GH",
    name: "Blue",
    score: 62,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    isCurrentUser: false,
  },
  {
    rank: 4,
    countryFlag: "MY",
    name: "Rusty",
    score: 75,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    isCurrentUser: false,
  },
  {
    rank: 5,
    countryFlag: "NZ",
    name: "Blue",
    score: 62,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    isCurrentUser: false,
  },
  {
    rank: 12,
    countryFlag: "NG",
    name: "You",
    score: 65,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    isCurrentUser: true,
  },
];

const Trophy = () => {
  return (
    <AuthBackground>
      <SafeAreaView>
        <View>
          <Text className="text-white text-center font-wendy text-[36px] mt-[36px]">
            Leaderboard
          </Text>

          <Image
            source={LeaderBoardImg}
            className="w-[374px] h-[131px]  mt-5 mx-auto"
          />
        </View>

        <ScrollView className="">
          <FlatList
            data={players}
            renderItem={({ item, index }) => (
              <LeaderboardCard
                key={index}
                rank={item.rank}
                countryFlag={item.countryFlag}
                name={item.name}
                score={item.score}
                avatar={item.avatar}
                isCurrentUser={item.isCurrentUser}
              />
            )}
            keyExtractor={(item) => item.rank.toString()}
            className={"p-5"}
          />
        </ScrollView>
      </SafeAreaView>
    </AuthBackground>
  );
};

export default Trophy;
