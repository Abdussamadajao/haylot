import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

type InputProps = {
  placeholder?: string;
  label?: string;
  error?: any;
  password?: any;
  onFocus?: any;
  onChangeText?: any;
  value?: any;
  touched?: any;
  keyboardType?: string | any;
};

const Input = ({
  error,
  onFocus,
  password,
  placeholder,
  onChangeText,
  value,
  touched,
  keyboardType,
  label,
  ...props
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="mb-5">
          {label && (
            <Text className={"text-base font-wendy text-white mb-2"}>
              {label}
            </Text>
          )}
          <View
            className="flex-row w-full px-4 border rounded-xl h-14 bg-[#0000001F]"
            style={{
              borderColor:
                error && touched
                  ? "#FF5C5C"
                  : isFocused
                  ? "#199A8E"
                  : "#FFFFFF1A",
              alignItems: "center",
            }}
          >
            <TextInput
              autoCorrect={false}
              autoCapitalize={"none"}
              onFocus={() => {
                onFocus();
                setIsFocused(true);
              }}
              onBlur={() => setIsFocused(false)}
              secureTextEntry={hidePassword}
              className="flex-1 text-white font-roboto text-base"
              placeholder={placeholder}
              placeholderTextColor={"#C4C4C4"}
              onChangeText={onChangeText}
              value={value}
              keyboardType={keyboardType}
              {...props}
            />
            {password && (
              <MaterialCommunityIcons
                onPress={() => setHidePassword(!hidePassword)}
                style={{ marginLeft: 16 }}
                name={`${hidePassword ? "eye-off-outline" : "eye-outline"}`}
                color={"#E5E7EB"}
                size={24}
              />
            )}
          </View>

          <View>
            {touched && error && (
              <Text className="text-[#FF5C5C] text-sm mt-[7px]">{error}</Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Input;

export const SearchInput: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  return (
    <View className="flex-row items-center w-full h-10 px-4 border rounded-full bg-medicalGray border-secondary">
      <EvilIcons name="search" size={24} color="#ADADAD" className="mr-6" />
      <TextInput placeholder={placeholder} placeholderTextColor={"#ADADAD"} />
    </View>
  );
};
