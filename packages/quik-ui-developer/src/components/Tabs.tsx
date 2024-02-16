import React, { FC, ReactElement } from "react";
import { StyleSheet } from "react-native";

type TabsItem = {
  key: string;
  title: string;
  component: ReactElement;
};

type TabsProps = {
  items: TabsItem[];
};

const Tabs: FC<TabsProps> = () => {
  return <></>;
};

const styles = StyleSheet.create({});

export { Tabs };
