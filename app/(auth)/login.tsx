import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import AuthBackground from "@/components/AuthBackground";
import { Logo, wendy } from "@/constants";
import { LoginPayload } from "@/types";
import { getCharacterValidationError } from "@/lib";
import { Yup } from "../../lib/yup";
import { Formik, Field, FormikProps, ErrorMessage, Form } from "formik";
import Input from "@/components/Input";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const initialValues: LoginPayload = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Please input your email"),
    password: Yup.string()
      .min(8)
      .required("Password is required")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  });

  const onSubmit = (values: LoginPayload) => {};

  return (
    <AuthBackground>
      <View className="px-4 justify-center h-screen mt-[20px]">
        <View className="justify-center items-center gap-y-[40px]">
          <Text className="font-wendy text-4xl text-white">Sign In</Text>
          <Image source={Logo} className="h-[103px] w-[100px]" />
        </View>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            setFieldTouched,
          }: FormikProps<LoginPayload>) => (
            <View className="relative mt-[120px] mb-14">
              <Input
                value={values.email}
                error={errors?.email}
                onFocus={() => setFieldTouched("email")}
                placeholder="Enter your email"
                onChangeText={handleChange("email")}
                touched={touched.email}
              />
              <Input
                value={values.password}
                onFocus={() => setFieldTouched("password")}
                password
                error={errors.password}
                placeholder="Enter your password"
                onChangeText={handleChange("password")}
                touched={touched.password}
              />

              <TouchableOpacity className="px-2 w-full py-1">
                <Text className="text-base font-roboto font-medium text-white text-right">
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="w-[380px] pt-3"
                onPress={() => {
                  handleSubmit();
                }}
              >
                <LinearGradient
                  colors={["#FFD96B", "#D7A100"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="h-[52px] border border-[#3FB6DE38] rounded-xl justify-center items-center"
                >
                  <Text style={wendy.styledText} className="font-wendy">
                    Get started
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <Pressable
          className="w-[380px] justify-center items-center mt-[60px]"
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="font-roboto text-white text-sm capitalize">
            Dont have an account?
            <Text className="font-bold font-robotoBold text-base">
              {" "}
              Sign up
            </Text>
          </Text>
        </Pressable>
      </View>
    </AuthBackground>
  );
};

export default Login;
