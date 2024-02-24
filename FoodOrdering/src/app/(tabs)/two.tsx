import { StyleSheet } from 'react-native';//Imports Stylesheets to creativiy and design

import EditScreenInfo from '../../../src/components/EditScreenInfo';//Imports the editscreen tag made in EditScreenInfo.tsx on how to edit a screen
import { Text, View } from '../../../src/components/Themed';// Imports the text and view tags

export default function TabTwoScreen() { //A function that creates the second/order tab(We did not finish this)
  return (
    <View style={styles.container}>
      {/* container View for all in tab two*/}
      <Text style={styles.title}>Tab Two</Text>{/*A Text tag that displays the title of the order tab*/}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />{/*Creates the seperator as a gray line*/}
      <EditScreenInfo path="app/(tabs)/two.tsx" />{/* Directions on where to edit this tab*/}

    </View>
  );
}
//Styles for the order tab (we did not get to this)
const styles = StyleSheet.create({
  //Container that centers the text
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Style for the title of the tab
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  //Style to separate the title and information
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
