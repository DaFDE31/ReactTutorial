import React from 'react';//Imports react
import FontAwesome from '@expo/vector-icons/FontAwesome';//Imports FontAwesome for symbols
import { Link, Tabs } from 'expo-router';//Imports links and tabs 
//import { Pressable } from 'react-native';

import Colors from '../../../src/constants/Colors';// Imports the colors.ts for the main colorscheme
import { useColorScheme } from '../../../src/components/useColorScheme';// Imports light and dark theme
import { useClientOnlyValue } from '../../../src/components/useClientOnlyValue';// Import the useClientOnlyValue that returns for the client

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {//This creates a function that allows new tabs to be made with a fontAwesome symbol that's passed in
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />; // Creates the size styles and more of the tab icons
}

export default function TabLayout() {// Depending on the theme, chooses the color scheme of the icons
  const colorScheme = useColorScheme();

  return (

    <Tabs
      screenOptions={{ //Creates screen options for the tab bar
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, //makes the active tab icon light blue or white depending on the theme
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true), //  False server, True client
      }}>
        <Tabs.Screen name = "index" options = {{href: null}}/>
      <Tabs.Screen
        name="menu" // Name of tab two is menu
        
        options={{ // Creating options for tab1
          headerShown: false, //Prevents the header from being shown
          title: 'Menu', // Makes the title of tab one Menu to show up under the icon and when we pick it
          tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} />,// Makes tab one a blue fork and knife
        }}
      />
      <Tabs.Screen
        name="two"// Name of tab two is just two
        options={{ // Creating options for tab2
          title: 'Orders',// Makes the title of tab one Orders to show up under the icon and when we pick it
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />, // Makes tab two a list icon
        }}
      />
    </Tabs>
  );
}
