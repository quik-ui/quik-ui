import { Components } from "../types";
import React, { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

type DeveloperProps = {
  components: Components;
};

const Developer: FC<DeveloperProps> = ({ components }) => {
  return <SafeAreaView style={{ zIndex: 10000 }}></SafeAreaView>;
};

const styles = StyleSheet.create({});

export { Developer };
