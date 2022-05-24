import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Courses from "../api/Courseapi";

import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const CourseDetails = ({ navigation, route }) => {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        Nunito_700Bold,
      });
    
      if (!fontsLoaded) {
        <AppLoading />;
      }

    const id = route.params.courseId;
    // console.log(id);

    const selectedCourse = Courses.find((element) => {
        return id === element.id;
    });

    return (
        <View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
                <View>
                    <Image
                        style={styles.cardImage}
                        source={selectedCourse.image}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.mainHeader}>{selectedCourse.title}</Text>

                <Text style={styles.description}>{selectedCourse.description}</Text>

                <Text style={styles.subHeader}>{selectedCourse.course1}</Text>

                <Text style={styles.subHeader}>{selectedCourse.course2}</Text>

                <Text style={styles.subHeader}>{selectedCourse.course3}</Text>

                <View style={styles.buttonContainer}>
                    <Text style={styles.price}>₹{selectedCourse.price}</Text>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate("Course")}
                    >
                        <Text style={styles.buttonText}>Join Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },

    mainContainer: {
        paddingHorizontal: 20,
    },

    courseContainer: {
        padding: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        textAlign: 'center',
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },

    mainHeader: {
        fontSize: 22,
        color: '#344055',
        textTransform: 'uppercase',
        // fontWeight: 500,
        paddingBottom: 15,
        textAlign: 'center',
        fontFamily: 'Nunito_700Bold',
    },

    subHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        paddingBottom: 15,
        fontFamily: "WorkSans_400Regular",
        textAlign: "center",
    },

    description: {
        textAlign: 'left',
        fontFamily: 'WorkSans_400Regular',
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 16,
    },

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    price: {
        backgroundColor: "#344055",
        color: "#eee",
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        fontSize: 20,
        fontFamily: "WorkSans_400Regular",
        textAlign: "center",
      },

    buttonStyle: {
        backgroundColor: '#809fff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 20,
        color: '#eee',
        fontFamily: 'WorkSans_500Medium',
        textTransform: 'capitalize',
    },
});

export default CourseDetails;