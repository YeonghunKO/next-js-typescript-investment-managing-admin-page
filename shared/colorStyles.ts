import type { ColorProps } from '@types/shared/color';

const backgroundColor = (props: ColorProps) => {
  // Fallback value if we can't get access to props
  if (props.backgroundColor) return props.backgroundColor;
  if (!props || !props.theme || !props.theme.primary) return '#00FFFF';
  // If no variant is specified, return the primary colour in our theme
  if (!props.variant) return props.theme.primary;

  // Dynamically determine the background colour based on props
  let colour;

  switch (props.variant) {
    case 'primary':
      colour = props.theme.purple800;
      break;
    case 'secondary':
      colour = props.theme.secondary;
      break;
    case 'tertiary':
      colour = props.theme.tertiary;
      break;
    default:
      colour = props.theme.primary;
      break;
  }

  return colour;
};

const textColour = (props: ColorProps) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary) return 'white';

  // If no variant is specified, return the white colour
  if (!props.variant) return 'white';

  // Dynamically determine the background colour based on props
  let colour;
  switch (props.variant) {
    case 'primary':
      colour = props.theme.offWhite;
      break;
    case 'secondary':
      colour = props.theme.white;
      break;
    case 'tertiary':
      colour = props.theme.black;
      break;
    default:
      colour = props.theme.white;
      break;
  }

  return colour;
};

export { backgroundColor, textColour };
