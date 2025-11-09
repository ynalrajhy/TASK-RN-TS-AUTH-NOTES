import { removeToken } from "@/api/storage";
import colors from "../../../../data/styling/colors";
import { Stack } from "expo-router";
import React from "react";
import { useContext } from "react";
import AuthContext from "@/Context /AthuContext";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native";

const HomeLayout = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <TouchableOpacity
              onPress={async () => {
                await removeToken();
                setIsAuthenticated(false);
              }}
            >
              <SimpleLineIcons name="logout" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="[noteId]" options={{ title: "Note Details" }} />
    </Stack>
  );
};

export default HomeLayout;
