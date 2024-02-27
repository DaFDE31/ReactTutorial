import {Stack, Link} from 'expo-router';// Importing stack and link from expo-router to be used later
import { Pressable} from 'react-native';// Imports pressable that will make the menu item work
import { FontAwesome } from '@expo/vector-icons';// Font awesome allows symbols to be placed.
import Colors from '../../../constants/Colors'; // Importing colors from the Colors.ts file to create a uniform theme of light or dark blue

export default function MenuStack(){ // Creating a function MenuStack to make a layout for everything on the menu
    return <Stack screenOptions={{ // Putting the items in a stack and creating a list of screen options
        headerRight: () => ( 
        // I couldn't create a comment on the line below so I put it here
        //Makes each menu option a link that goes into its own separate page. COME BACK TO THIS
            <Link href="/cart" asChild> 
              <Pressable> 
                {({ pressed }) => ( // On press it enacts the function below.
                  <FontAwesome
                    name="shopping-cart" // Creates the shopping cart icon for the button
                    size={25} // Makes the size of that shopping cart button 25
                    color={Colors.light.tint}// Uses Colors.ts to make the shooping cart light blue
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} // Moves it into place
                  />
                //Below is the end of the Pressable
                )}
              </Pressable>
            </Link>
            // End of the link
          )
    }}>
        {// A tag to edit the screen of this stack
        }
        <Stack.Screen
            name='index' options={{title:'Menu'}} //Names the screen index withthe title of Menu showing up at the top
        />
    </Stack>;
}