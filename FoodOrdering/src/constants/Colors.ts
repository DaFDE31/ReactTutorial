const tintColorLight = '#2f95dc';// Creates a variable for light blue
const tintColorDark = '#fff';// Creates a variable for white

//this creates a light style variable
export default {
  light: {
    text: '#000',//black text
    background: '#fff',// white background
    tint: tintColorLight,// lightblue tint
    tabIconDefault: '#ccc', // Gray default
    tabIconSelected: tintColorLight, // LightBlue select
  },

//this creates a dark style variable
  dark: {
    text: '#fff',//white text
    background: '#000',//black background
    tint: tintColorDark,// white tint
    tabIconDefault: '#ccc',// Gray default
    tabIconSelected: tintColorDark,// White select
  },
};
