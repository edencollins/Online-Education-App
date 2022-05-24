import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import Checkbox from "expo-checkbox";

const Contact = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);
    
    const submit = () => {
        if(!name && !email && !phone && !message) {
            Alert.alert('Please fill all the fields');
        } else {
            Alert.alert(`Thankyou ${name}`);
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level up your knowledge</Text>

            <Text style={styles.description}>You can reach us anytime via info@onlineclasses.com</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your Name</Text>
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder={'Abhay Patil'} 
                    value={name} 
                    onChangeText={(userData) => setName(userData)} 
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your Email</Text>
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder={'demo@onlineclasses.com'} 
                    value={email} 
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your Mobile Number</Text>
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder={'1234567891'} 
                    value={phone} 
                    onChangeText={(phone) => setPhone(phone)} 
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>How can we help you?</Text>
                <TextInput 
                    style={[styles.inputStyle, styles.multiLineStyle]} 
                    placeholder={'Tell us about yourself'} 
                    value={message} 
                    onChangeText={(msg) => setMessage(msg)}
                    numberOfLines={5}
                    multiline={true}
                />
            </View>

            {/* checkbox */}
            <View style={styles.wrapper}>
                <Checkbox 
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? '#4630EB' : undefined}
                />
                <Text style={styles.wrapperText}>I have read and agreed to TC</Text>
            </View>

            {/* submit button */}
            <TouchableOpacity 
                style={[
                    styles.buttonStyle,
                    {
                        backgroundColor: agree ? '#4630EB' :'grey',
                    }
                ]}
                disabled={!agree}
                onPress={submit}
            >
                <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
      },
      
      mainHeader: {
        fontSize: 24,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        fontFamily: "Nunito_700Bold",
        textTransform: "capitalize",
      },

      description: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 20,
        fontFamily: "JosefinSans_400Regular",
        lineHeight: 25,
      },
      
      inputContainer: {
        marginTop: 20,
      },

      labels: {
        // fontWeight: "bold",
        fontSize: 15,
        color: "#7d7d7d",
        paddingBottom: 5,
        fontFamily: "JosefinSans_400Regular",
        lineHeight: 25,
      },

      inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 2,
      },

      multiLineStyle: {
        paddingVertical: 4,
      },

      wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        fontFamily: "JosefinSans_400Regular",
      },

      wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d",
        fontFamily: "JosefinSans_400Regular",
      },

      buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
      },

      buttonText: {
        color: "#eee",
      },
});

export default Contact;