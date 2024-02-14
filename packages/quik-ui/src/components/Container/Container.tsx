import React from "react";
import { StyleSheet, View } from "react-native";
import { Component } from "../../types/component";

interface ContainerProps {
  testID?: string;
}

const Container: Component<ContainerProps> = ({ testID }) => {
  return <View testID={testID} style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});

export { Container };
export type { ContainerProps };
