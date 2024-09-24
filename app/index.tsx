import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  } else {
    return <Redirect href="/(auth)/welcome" />;
  }
};

export default index;
