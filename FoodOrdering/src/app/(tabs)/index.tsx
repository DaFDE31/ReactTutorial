import { Redirect } from "expo-router";//imports redirect so the tab buttons work

export default function TabIndex(){//Creates a tabindex function to redirect using the tabs at the bottom
    return <Redirect href = {'/menu/'}/>// Calls redirect to go to the menu
}