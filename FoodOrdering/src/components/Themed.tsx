/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';
import Colors from '../../src/constants/Colors';
import { useColorScheme } from './useColorScheme';

// creates the theme  based on the color scheme (light or dark)
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};
// creates  a text component that will be either light or dark depending on the user's color scheme preference
export type TextProps = ThemeProps & DefaultText['props'];
// creates  a view component that uses the correct colors for the current color scheme
export type ViewProps = ThemeProps & DefaultView['props'];

/**
 * a reusable function to get the text style props based on the color scheme
 * @param {object} props - the props passed into the component
 * @returns {{color: string}} an object with the color property set to the appropriate value
 **/
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

/**
 * a  wrapper around react native's default `View` component but it will 
 * use the color defined in the current color scheme
 **/
export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

/**
 * A wrapper around react-native's 
 * `View` component that gets its color from the current color scheme
 */
export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
