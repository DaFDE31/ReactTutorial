import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { forwardRef } from 'react';

// Creates the button feature as prop and initialize its type
type ButtonProps = { 
  
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>; // Allows all components under buttons to be a pressable

// Allows buttons to follow commands given when pressed
const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

// styles for the buttons come from here
const styles = StyleSheet.create({
  // container - creates the shape and color for the button
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  // text - defines how the text will look on the button
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Button;