import Logo from "@/assets/images/logo.png";
import BG from "@/assets/images/bg-game.png";
import Clock from "@/assets/images/clock.png";
import { StyleSheet } from "react-native";

export { Logo, BG, Clock };

export const wendy = StyleSheet.create({
  styledText: {
    color: "#fff",
    fontSize: 18,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
