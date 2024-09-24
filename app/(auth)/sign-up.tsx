import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AuthBackground from "@/components/AuthBackground";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { SignUpPayload } from "@/types";
import { Formik, FormikErrors, FormikProps } from "formik";
import Input from "@/components/Input";
import { Yup } from "@/lib/yup";
import { getCharacterValidationError } from "@/lib";
import { LinearGradient } from "expo-linear-gradient";
import { wendy } from "@/constants";
import Select from "@/components/Select";
import CountryFlag from "react-native-country-flag";
import countries from "@/constants/countries";
// import flags from "react-native-country-flag/data";
const SignUp = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const initialValues: SignUpPayload = {
    name: "",
    email: "",
    about_us: "",
    country: "",
    username: "",
    referral: "",
    password: "",
  };

  const stepOneValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Please input your email"),
    name: Yup.string().required("Please input your name"),
    referral: Yup.string().optional(),
    password: Yup.string()
      .min(8)
      .required("Password is required")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  });
  const stepTwoValidationSchema = Yup.object().shape({
    about_us: Yup.string().required("Please select how you heard about us"),
    country: Yup.string().required("Please select a country"),
    username: Yup.string().required("Please input a username"),
  });

  const getValidationSchema = () =>
    currentStep === 0 ? stepOneValidationSchema : stepTwoValidationSchema;
  const handleNextStep = async (
    validateForm: () => Promise<any>,
    setTouched: (fields: Partial<Record<keyof SignUpPayload, boolean>>) => void
  ) => {
    const curretFields = currentStep === 0 ? ["email", "name", "password"] : [];

    setTouched(
      curretFields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
    );
    const validationErrors = await validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Validation errors:", validationErrors);
    }
  };

  const onSubmit = (values: SignUpPayload) => {};

  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <AuthBackground>
      <SafeAreaView className="flex-1 px-5 pt-[48px]">
        <View className="space-y-5">
          <View className="flex-row items-center space-x-16">
            <Pressable
              className="w-10 h-10 rounded-md justify-center items-center bg-[#FFFFFF0D]"
              onPress={() =>
                currentStep === 1
                  ? setCurrentStep(currentStep - 1)
                  : router.back()
              }
            >
              <Entypo name="chevron-thin-left" size={24} color="white" />
            </Pressable>

            <Text className=" text-white font-wendy text-4xl">
              Step {currentStep + 1} of 2
            </Text>
          </View>

          <View className="h-2 w-[380px] bg-[#10101087] rounded-lg">
            <View
              className={`h-2 bg-[#1E90FF] rounded-lg ${
                currentStep === 0 ? "w-1/2" : "w-full"
              }`}
            />
          </View>
        </View>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={getValidationSchema()}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            setFieldTouched,
            validateForm,
            setTouched,
          }: FormikProps<SignUpPayload>) => (
            <View className="relative mt-11 mb-14">
              {currentStep === 0 && (
                <>
                  <Input
                    value={values.email}
                    error={errors?.email}
                    onFocus={() => setFieldTouched("email")}
                    placeholder="Enter your email"
                    onChangeText={handleChange("email")}
                    touched={touched.email}
                  />
                  <Input
                    value={values.name}
                    onFocus={() => setFieldTouched("name")}
                    error={errors.name}
                    placeholder="Full name"
                    onChangeText={handleChange("name")}
                    touched={touched.name}
                  />
                  <Input
                    value={values.password}
                    onFocus={() => setFieldTouched("password")}
                    password
                    error={errors.password}
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    touched={touched.password}
                  />
                  <Input
                    value={values.referral}
                    onFocus={() => setFieldTouched("referral")}
                    error={errors.referral}
                    placeholder="Referral ID (optional)"
                    onChangeText={handleChange("referral")}
                    touched={touched.referral}
                  />

                  <TouchableOpacity
                    className="w-full pt-[160px]"
                    onPress={() => handleNextStep(validateForm, setTouched)}
                  >
                    <LinearGradient
                      colors={["#FFD96B", "#D7A100"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      className="h-[52px] border border-[#3FB6DE38] rounded-xl justify-center items-center"
                    >
                      <Text style={wendy.styledText} className="font-wendy">
                        Continue
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </>
              )}
              {currentStep === 1 && (
                <>
                  <Input
                    value={values.username}
                    error={errors?.username}
                    onFocus={() => setFieldTouched("username")}
                    placeholder="Username"
                    onChangeText={handleChange("username")}
                    touched={touched.username}
                    label="Choose a unique username for your account"
                  />
                  <Select
                    onValueChange={handleChange("about_us")}
                    options={items}
                    value={values.about_us}
                    error={errors.about_us}
                    label="How did you hear about us?"
                    touched={touched.about_us}
                    placeholder="Youtube"
                  />
                  <Select
                    onValueChange={handleChange("country")}
                    options={countries}
                    value={values.country}
                    error={errors.country}
                    label="Choose your country"
                    touched={touched.country}
                    placeholder="Select Country"
                    prefix={<CountryFlag isoCode="NG" size={25} />}
                  />
                  <TouchableOpacity
                    className="w-[380px] pt-[160px]"
                    onPress={() => {
                      handleSubmit();
                    }}
                  >
                    <LinearGradient
                      colors={["#FFD96B", "#D7A100"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      className="h-[52px] w-full border border-[#3FB6DE38] rounded-xl justify-center items-center"
                    >
                      <Text style={wendy.styledText} className="font-wendy">
                        Sign Up
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </AuthBackground>
  );
};

export default SignUp;
