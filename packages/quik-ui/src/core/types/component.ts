import { PropsWithChildren, FC } from "react";

export type Component<P = {}> = FC<P>;

export type ComponentWithChildren<P = {}> = FC<PropsWithChildren<P>>;
