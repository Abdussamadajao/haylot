import { View, Text, ScrollView } from "react-native";
import React from "react";
import AuthBackground from "@/components/AuthBackground";
import EnergyPackCard from "@/components/shop/EnergyPackCard";
import LifePackCard from "@/components/shop/LifePackCard";
import CoinPackCard from "@/components/shop/CoinPackCard";

const Shop = () => {
  return (
    <AuthBackground>
      <View>
        <Text className="text-white text-center font-wendy text-[36px] mt-[75px]">
          Shop
        </Text>
      </View>
      <ScrollView>
        <View className="mt-6  mx-auto">
          <EnergyPackCard />
          <LifePackCard />
          <CoinPackCard />
          <LifePackCard />
        </View>
      </ScrollView>
    </AuthBackground>
  );
};

export default Shop;
