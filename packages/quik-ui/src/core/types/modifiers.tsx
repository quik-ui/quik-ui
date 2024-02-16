import { ViewStyle } from "react-native";

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
// <Container flex mx={16} py={8} />
// const styles = createStyles('flex', 'mx-lg', {'p-xs': true}, {'py-sm': false})
// <Container styles={styles} />
// <Container styles={['flex', 'mx-lg', 'px-lg': true]} />

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

type ModifierObject = { [K in Modifier]?: boolean };

type ModifierArray = (Modifier | ModifierObject)[];

type ModifierArgs = (Modifier | ModifierObject | ModifierArray)[];

type ModifierProps = ModifierObject;

function createStyles(...args: ModifierArgs): ModifierArgs {
  return args;
}

function transformStyles(...args: ModifierArgs): ViewStyle {
  return args.map((arg) => {
    const [transform, value] = arg.split("-") as [KeyofTransform, KeyofValues];
    const property = TRANSFORMS[transform] as PropertyOfTransform;
    const size = VALUES[value] as PropertyOfValues;
    return { [property]: size };
  });
}

function useTransformStyles() {}

createStyles("p-sm", "m-md") = {padding: 8, margin: 16}

const styles = createStyles("p-sm", "m-md", "g-lg", ["p-lg", { "m-sm": true }]);
const styles = createStyles(
  { "m-lg": true, "gy-lg": false },
  { "gx-sm": true },
  "m-md",
  "g-lg",
);

type ExampleProps = {

}

const Example =
