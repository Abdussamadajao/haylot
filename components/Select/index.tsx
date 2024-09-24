import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Option = {
  label: string;
  value: string;
  prefixElement?: JSX.Element; // Optional prefix element (can be a flag, icon, etc.)
};

type CustomPickerProps = {
  options: Option[];
  value?: string;
  onValueChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  prefix?: JSX.Element; // Optional prefix for the placeholder (can be a flag, icon, etc.)
};

const ListItem: React.FC<{ item: Option; onSelect: (value: string) => void }> =
  React.memo(({ item, onSelect }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(item.value)}
        className="p-4 border-b border-gray-300 flex-row items-center"
      >
        {item.prefixElement && (
          <View className="mr-3">{item.prefixElement}</View>
        )}
        <Text className="text-black">{item.label}</Text>
      </TouchableOpacity>
    );
  });

const CustomPicker: React.FC<CustomPickerProps> = ({
  options,
  value,
  onValueChange,
  label,
  placeholder = "Select an option",
  error,
  touched,
  prefix,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    onValueChange(value);
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="mb-5">
          {label && (
            <Text className="text-base font-wendy text-white mb-2">
              {label}
            </Text>
          )}

          {/* Picker Button */}
          <TouchableOpacity
            className={`flex flex-row justify-between items-center px-4 h-14 rounded-xl bg-[#0000001F] border ${
              error && touched ? "border-red-500" : "border-[#FFFFFF1A]"
            }`}
            onPress={() => setModalVisible(true)}
          >
            <View className="flex-row items-center space-x-5">
              {/* Conditional Prefix Display */}
              {value
                ? options.find((option) => option.value === value)
                    ?.prefixElement
                : prefix && <View className="mr-">{prefix}</View>}

              <Text className="text-[#C4C4C4] font-roboto text-base">
                {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="#C4C4C4"
            />
          </TouchableOpacity>

          {/* Error Message */}
          {error && touched && (
            <Text className="text-red-500 text-sm mt-1">{error}</Text>
          )}

          {/* Modal for Picker Options */}
          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View className="flex-1 justify-center bg-black bg-opacity-50">
                <View className="bg-white m-5 rounded-lg p-5">
                  <FlatList
                    data={options}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                      <ListItem item={item} onSelect={handleSelect} />
                    )}
                  />
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    className="mt-4 bg-gray-200 p-3 rounded-lg items-center"
                  >
                    <Text className="text-blue-600">Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomPicker;
