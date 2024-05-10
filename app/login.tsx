import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Orientation } from "expo-screen-orientation";
import { useScreenOrientation } from "@/hooks/orientationHook";
import { useActions } from "@/hooks/storeHooks";
import { useSelector } from "react-redux";

import { CustomLink } from "@/shared/components/CustomLink";
import { ErrorNotification } from "@/shared/components/ErrorNotification";
import { Input } from "@/shared/components/Input";
import {
  selectUser,
  selectUserLoading,
  selectUserError,
} from "@/store/selectors/index.";
import { Button } from "@/shared/components/Button";
import GoogleIcon from "@/assets/icons/google";
import { Colors, width } from "@/shared/config/theme";


export default function Login() {
  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { singIn, signInWithGoogle } = useActions();
  const user = useSelector(selectUser);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const orientation = useScreenOrientation();
  const widthForInput =
    orientation === Orientation.PORTRAIT_UP ? "auto" : width / 2 - 16 - 48;

  const onSubmitSingInEmail = () => {
    if (!email) {
      setLocalError("Не введён email");
      return;
    }
    if (!password) {
      setLocalError("Не введён пароль");
      return;
    }
    if (error) {
      setLocalError(error);
      return
    }
    singIn({ email, password });
  };

  const onSubmitSingInGoogle = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    console.log(error);
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      router.replace("/(app)");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <ErrorNotification error={localError} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <Image
          style={styles.logo}
          source={require("@/assets/logo.png")}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <View
            style={{
              ...styles.inputs,
              flexDirection:
                orientation === Orientation.PORTRAIT_UP ? "column" : "row",
            }}
          >
            <Input
              style={{
                width: widthForInput,
              }}
              placeholder="Email"
              onChangeText={setEmail}
            />
            <Input
              style={{
                width: widthForInput,
              }}
              isPassword
              placeholder="Пароль"
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.containerBtns}>
            <Button
              text="Войти"
              onPress={onSubmitSingInEmail}
              isLoading={loading}
            />
            <Text style={styles.text}>OR</Text>
            <Pressable onPress={onSubmitSingInGoogle} style={styles.googleIcon}>
              <GoogleIcon />
            </Pressable>
          </View>
          <View style={styles.containerBtns}>
            <Text style={styles.text}>Not Registered? </Text>
            <CustomLink text="Sign up!" href={"/Singup"} style={styles.link} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 25,
    backgroundColor: Colors.white,
  },
  content: {
    alignItems: "center",
    gap: 50,
  },
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
  containerBtns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 220,
  },
  inputs: {
    gap: 16,
  },
  text: {
    color: Colors.blackLight,
    fontSize: 15,
    textAlign: "center",
  },
  link: { color: Colors.link, fontWeight: "bold" },
  googleIcon: {
    height: 75,
    width: 75,
  },
});