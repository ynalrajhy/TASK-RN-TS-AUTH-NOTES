import { Redirect, Stack } from "expo-router";
import { useContext } from "react";
import AuthContext from "@/Context /AthuContext";

export default function AuthLayout() {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return <Redirect href="/Login" />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
