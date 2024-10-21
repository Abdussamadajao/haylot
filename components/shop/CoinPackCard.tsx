import { View, Text, Image } from "react-native";
import React from "react";
import Coin from "@/assets/images/coin.png";

const CoinPackCard = () => {
  return (
    <View className="w-[380px] h-[192px] border border-[#FFFFFF1a] bg-[#0000001F] rounded-xl mb-7">
      <View className="bg-[#D1062FCC] rounded-t-xl">
        <Text className="text-[24px] text-center font-bold font-wendy py-2 text-white">
          Coin Packs
        </Text>
      </View>

      <View className="flex flex-row justify-between  py-5 px-10">
        <View className="flex items-center space-y-2">
          <Image source={Coin} className={`w-[30px] h-[32px]`} />

          <Text className="text-white font-bold font-wendy">x10</Text>

          <View className="flex flex-row items-center space-x-2 border rounded-lg border-haylot-yellow py-1 px-2">
            <Image source={Coin} className="w-6 h-6" />
            <Text className="text-white font-bold text-[20px] font-wendy">
              40
            </Text>
          </View>
        </View>

        <View className="flex items-center space-y-2 ml-3">
          <View className="flex flex-row">
            <Image source={Coin} className={`w-[30px] h-[32px] left-2`} />
            <Image source={Coin} className={`w-[30px] h-[32px] `} />
            <Image source={Coin} className={`w-[30px] h-[32px] right-2`} />
          </View>

          <Text className="text-white font-bold font-wendy">x20</Text>

          <View className="flex flex-row items-center space-x-2 border rounded-lg border-haylot-yellow py-1 px-2">
            <Image source={Coin} className="w-6 h-6" />
            <Text className="text-white font-bold text-[20px] font-wendy">
              40
            </Text>
          </View>
        </View>
        <View className="flex items-center space-y-2 -ml-3">
          <View className="flex flex-row relative justify-center items-center  ">
            <Image source={Coin} className={`w-[30px] h-[32px] left-6`} />
            <Image source={Coin} className={`w-[30px] h-[32px] left-3`} />
            <Image source={Coin} className={`w-[30px] h-[32px] `} />
            <Image source={Coin} className={`w-[30px] h-[32px] right-2`} />
          </View>

          <Text className="text-white font-bold font-wendy">x50</Text>

          <View className="flex flex-row items-center space-x-2 border rounded-lg border-haylot-yellow py-1 px-2">
            <Image source={Coin} className="w-6 h-6" />
            <Text className="text-white font-bold text-[20px] font-wendy">
              200
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoinPackCard;
