import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../../data/styling/colors";
import { useRouter } from "expo-router";
import UserInfo from "@/types/UserInfo";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth";
import * as ImagePicker from "expo-image-picker";
const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { mutate: registerMutation } = useMutation({
    mutationKey: ["Register"],
    mutationFn: () => register({ email, password }, image || "", name),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleRegister = () => {
    if (email && password) {
      registerMutation;
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", padding: 20 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Register
          </Text>
          <Text style={{ color: colors.white, fontSize: 16 }}>
            Create your account
          </Text>
          <TextInput
            style={{
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={{
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={{
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={{ marginTop: 20 }} onPress={pickImage}>
            <Text style={{ color: colors.white, fontSize: 16 }}>
              Upload Profile Image
            </Text>
          </TouchableOpacity>
          {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              alignItems: "center",
            }}
            onPress={handleRegister}
          >
            <Text
              style={{
                color: colors.primary,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={{ color: colors.white, fontSize: 16 }}>
              Already have an account?{" "}
              <TouchableOpacity onPress={() => router.push("/Login")}>
                <Text style={{ color: colors.white, fontSize: 16 }}>Login</Text>
              </TouchableOpacity>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({});
