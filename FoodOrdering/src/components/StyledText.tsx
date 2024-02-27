import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  // in charge of the next style for all components that relies to this function
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
