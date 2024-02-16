import React, { FC, ReactElement } from "react";
import { StyleSheet } from "react-native";

type DrawerItem = {
  key: string;
  title: string;
  level: number;
  component: ReactElement;
};

type DrawerProps = {
  items: DrawerItem[];
};

const Drawer: FC<DrawerProps> = () => {
  return <></>;
};

const styles = StyleSheet.create({});

export { Drawer };
