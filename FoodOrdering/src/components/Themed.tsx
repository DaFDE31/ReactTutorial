/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native'; // import of default Text and View components renamed to the corresponding component

import Colors from '../../src/constants/Colors'; // import Colors object from constants directory
import { useColorScheme } from './useColorScheme'; // import useColorScheme from useColorScheme.ts

type ThemeProps = {   // defining ThemeProps properties.
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props']; //combining ThemeProps properties with DefaultText, defining interfaces
export type ViewProps = ThemeProps & DefaultView['props']; //combining ThemeProps properties with DefaultView, defining interfaces

export function useThemeColor(    // using theme colors based on dark and light mode and props
  props: { light?: string; dark?: string }, 
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light'; // constant of current theme using useColorScheme hook
  const colorFromProps = props[theme]; // check if there's color in the current theme in props

  if (colorFromProps) {  //if color is provided in props, then return that color
    return colorFromProps;
  } else { // else: return default given color name 
    return Colors[theme][colorName]; 
  }
}

export function Text(props: TextProps) {  //custom text component modifying text color
  const { style, lightColor, darkColor, ...otherProps } = props; // destructure of props. Seperating style, light color, dark color and otherProps.
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text'); //using useThemeColor hook to retrieve text color based on light or dark mode.

  return <DefaultText style={[{ color }, style]} {...otherProps} />; // Merge default style with color style and go to the other props.
}

export function View(props: ViewProps) { // custom view component using useThemeColor for the background.
  const { style, lightColor, darkColor, ...otherProps } = props; // constant destruction of props. Seperating style, lightColor, darkColor and otherProps.
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background'); // uses useThemeColor function to get the background color depending on the light/dark mode

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />; // combines default and backgroundColor style and sends to other props 
}
