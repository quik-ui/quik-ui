import { ReactNode } from "react";

export type Components = Component[];

type Component = {
  component: ReactNode | (() => ReactNode);
  spec: ComponentSpec;
};

type ComponentSpec = {
  name: string;
  overview?: string;
  variants?: ComponentVariants;
  props?: ComponentProps;
};

type ComponentOverview = {
  version: string;
  description: string;
  props: ComponentOverviewProps;
};

type ComponentOverviewProps = {
  [key: string]: {
    name: string;
    description: string;
    type: string;
    required: boolean;
    defaultValue: string;
    control: string;
  };
};

type ComponentProps = {
  [key: string]: any[];
};

type ComponentVariants = {
  [key: string]: object;
};
