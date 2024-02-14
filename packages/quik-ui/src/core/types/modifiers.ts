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
  g: "gap";
  p: "padding";
  m: "margin";
};

type Values = {
  sm: number;
  md: number;
  lg: number;
};

type KeyofTransform = keyof Transform;

type KeyofValues = keyof Values;

type Modifier = `${KeyofTransform}-${KeyofValues}`;

type ModifierList =
  | Modifier
  | `${Modifier} ${Modifier}`
  | `${Modifier} ${Modifier} ${Modifier}`;

const TRANSFORMS: Transform = {
  g: "gap",
  p: "padding",
  m: "margin",
};

const VALUES: Values = {
  sm: 4,
  md: 8,
  lg: 16,
};

function transform(value: ModifierList): any {
  let obj: any = {};
  const arr = value.split(" ");
  arr.forEach((i) => {
    const [property, value] = i.split("-") as [KeyofTransform, KeyofValues];
    obj[TRANSFORMS[property]] = VALUES[value];
  });

  return obj;
}

console.log(transform("g-sm p-lg"));
