import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },  
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: "Just don't go outside."
    }
}


export default function Weather({ temp , condition }){
    return(
        <LinearGradient
            colors = {weatherOptions["Haze"].gradient}
            style = {styles.container}
        >
            <StatusBar barStyle="white-content"/>
        <View style = {styles.halfContainer}>
        <MaterialCommunityIcons
            name = {weatherOptions["Haze"].iconName}
            size = {92}
            color = "white"
        />
        <Text style = {styles.temp}>{temp}°C</Text>
        </View>
        <View style = {styles.halfContainer}>
            <Text style = {styles.title}>Title</Text>
            <Text style = {styles.subtitle}>Subtitile</Text>

        </View>
        </LinearGradient>
        );

}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Dust",
        "Mist"
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems : "center",
    },
    title: {
        color : "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom : 10,
    },
    subtitle: {
        color : "white",
        fontWeight: "600",
        fontSize: 24
    }
});