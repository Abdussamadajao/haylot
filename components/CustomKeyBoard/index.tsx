// CustomKeyboard.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CustomKeyboardProps {
  onKeyPress: (key: string) => void;
}

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({ onKeyPress }) => {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const rows = [
    keys.slice(0, 10),
    keys.slice(10, 20),
    keys.slice(20, 30),
    keys.slice(30, 36), // Remaining characters A-Z
  ];

  return (
    <View className="mt-4  bg-white">
      {rows.map((row, index) => (
        <View key={index} className="flex-row justify-center">
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              onPress={() => onKeyPress(key)}
              className="w-12 h-12 border-2 border-black bg-white rounded-lg m-1 justify-center items-center"
            >
              <Text className="text-lg">{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <View className="flex-row justify-center">
        <TouchableOpacity
          onPress={() => onKeyPress("")}
          className="w-12 h-12 border-2 border-black rounded-lg m-1 justify-center items-center"
        >
          <Text className="text-lg">Del</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomKeyboard;
