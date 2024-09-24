import HomeIcon from "@/components/Icons/home";
import ShopIcon from "@/components/Icons/shop";
import TrophyIcon from "@/components/Icons/trophy";
import UserIcon from "@/components/Icons/user";
import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({
  children,
  focused,
}: {
  children: ReactNode;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center relative w-[200px]`}
  >
    {children}
    <View
      className={`absolute h-1  w-11 top-4 rounded-full ${
        focused ? "bg-[#E50606]" : ""
      }`}
    />
  </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#021147",
          paddingBottom: 0, // ios only
          overflow: "hidden",
          height: 74,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <HomeIcon
                stroke="white"
                fill={focused ? "white" : "transparent"}
              />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="trophy"
        options={{
          title: "Trophy",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <TrophyIcon fill={focused ? "white" : "transparent"} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <ShopIcon fill={focused ? "white" : "transparent"} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <UserIcon fill={focused ? "white" : "transparent"} />
            </TabIcon>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
