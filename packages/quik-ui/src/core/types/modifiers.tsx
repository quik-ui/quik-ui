import { FC } from "react";

type FlexTransforms = {
  flex: "flex";
  grow: "flexGrow";
  shrink: "flexShrink";
  wrap: "flexWrap";
  direction: "flexDirection";
  mainAxis: "justifyContent";
  crossAxis: "alignItems";
  align: "alignContent";
  content: "alignSelf";
  g: "gap";
  gx: "rowGap";
  gy: "columnGap";
};

type PaddingTransforms = {
  p: "padding";
  pt: "paddingTop";
  pr: "paddingRight";
  pb: "paddingBottom";
  pl: "paddingLeft";
  px: "paddingHorizontal";
  py: "paddingVertical";
};

type MarginTransforms = {
  m: "margin";
  mt: "marginTop";
  mr: "marginRight";
  mb: "marginBottom";
  ml: "marginLeft";
  mx: "marginHorizontal";
  my: "marginVertical";
};

type PositionTransforms = {
  position: "position";
  top: "top";
  right: "right";
  bottom: "bottom";
  left: "left";
  z: "zIndex";
};

type SizeTransforms = {
  w: "width";
  h: "height";
  minW: "minWidth";
  minH: "minHeight";
  maxW: "maxWidth";
  maxH: "maxHeight";
};

type FlexModifiers = {};

type PaddingModifiers = {};

type MarginModifiers = {};

type PositionModifiers = {};

type SizeModifiers = {};

// As a String or as a Prop
// <Container flex mx-lg py-sm />
// <Container flex mx="lg" py="sm" />
// <Container styles="flex mx-lg p-xs" />

type Transform = {
  p: "padding";
  pt: "paddingTop";
  pr: "paddingRight";
  pb: "paddingBottom";
  pl: "paddingLeft";
  px: "paddingHorizontal";
  py: "paddingVertical";
  m: "margin";
  mt: "marginTop";
  mr: "marginRight";
  mb: "marginBottom";
  ml: "marginLeft";
  mx: "marginHorizontal";
  my: "marginVertical";
  g: "gap";
  gx: "rowGap";
  gy: "columnGap";
};

type Values = {
  sm: number;
  md: number;
  lg: number;
};

type KeyofTransform = keyof Transform;

type PropertyOfTransform = Transform[KeyofTransform];

type KeyofValues = keyof Values;

type PropertyOfValues = Values[KeyofValues];

type Modifier = `${KeyofTransform}-${KeyofValues}`;

const TRANSFORMS: Transform = {
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingHorizontal",
  py: "paddingVertical",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginHorizontal",
  my: "marginVertical",
  g: "gap",
  gx: "rowGap",
  gy: "columnGap",
};

const VALUES: Values = {
  sm: 4,
  md: 8,
  lg: 16,
};

type Many<
  T extends string,
  Candidates extends string,
  F extends string = T,
> = T extends "" | " "
  ? F | (F extends `${string} ` ? `${F}${Candidates}` : never)
  : T extends ` ${infer Tail}`
    ? Many<Tail, Candidates, F>
    : T extends `${Candidates}${infer Tail}`
      ? Many<Tail, Candidates, F>
      : `Modifiers`;

function transform<T extends string>(value: Many<T, Modifier>): any {
  let obj: any = {};
  const arr = value.split(" ");
  arr.forEach((i) => {
    const [property, value] = i.split("-") as [KeyofTransform, KeyofValues];
    obj[TRANSFORMS[property]] = VALUES[value];
  });

  return obj;
}

export type ExampleProps<T extends string> = {
  styles: Many<T, Modifier>;
};

function Example<T extends string>({ styles }: { styles: Many<T, Modifier> }) {
  return <></>;
}

const Use = () => {
  return <Example styles="p-lg"></Example>;
};

console.log(transform("p-lg"));
console.log(transform("g-sm h-lg"));
