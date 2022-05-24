import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import Home from './src/screens/Home';
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import CourseDetails from "./src/screens/CourseDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    <AppLoading />
  }

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Home" options={{headerShown: false,}}>
        {(props) => <Home {...props} channelName={"online classes"} />}
      </Stack.Screen>
    
      {/* Course Screen */}
      <Stack.Screen name="Course" component={Course} options={{headerTitleStyle: {fontSize: 25, fontFamily: 'Nunito_600SemiBold',}, headerTitle: 'Courses', headerTitleAlign: 'center',}} />

      {/* UserData Screen */}
      <Stack.Screen name="Student" component={UserData} options={{headerTitleStyle: {fontSize: 25, fontFamily: 'Nunito_600SemiBold',}, headerTitle: 'Student', headerTitleAlign: 'center',}} />

      {/* About Screen */}
      <Stack.Screen name="About" component={About} options={{headerTitleStyle: {fontSize: 25, fontFamily: 'Nunito_600SemiBold',}, headerTitle: 'About', headerTitleAlign: 'center',}} />

      {/* Contact Screen */}
      <Stack.Screen name="Contact" component={Contact} options={{headerTitleStyle: {fontSize: 25, fontFamily: 'Nunito_600SemiBold',}, headerTitle: 'Contact', headerTitleAlign: 'center',}} />

     {/* CourseDetails Screen */}
     <Stack.Screen name="CourseDetails" component={CourseDetails} options={{headerTitleStyle: {fontSize: 25, fontFamily: 'Nunito_600SemiBold',}, headerTitle: 'Course Details', headerTitleAlign: 'center',}} />
    </Stack.Navigator>
  </NavigationContainer>
}