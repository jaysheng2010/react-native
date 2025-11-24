import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CartScreen() {
  return (
    <View>
      <Pressable style={styles.getStarted}>
        <Text>Place Order</Text>
      </Pressable>
    </View>
  );
}

function GuitarSheetScreen() {
  return (
    <ImageBackground
      style={styles.screens}
      source={{
        uri: "https://media.istockphoto.com/id/915097804/photo/black-brick-wall-background-texture-dark-masonry.jpg?s=612x612&w=0&k=20&c=6E9gSLZ261VciCcXJvig-Sn0Q-ypvqWnEN7iOgv69hk=",
      }}
      resizeMode="cover"
    >
      <Pressable style={styles.getStarted}>
        <Text>Guitar</Text>
      </Pressable>
    </ImageBackground>
  );
}

// Bottom tabs
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 20,
          borderRadius: 60,
          height: 60,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Guitar"
        component={GuitarSheetScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="musical-note" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Splash screen
function SplashScreen({ navigation }) {
  return (
    <View style={styles.splashScreen}>
      <Image
        style={styles.splashImage}
        source={{
          uri: "https://i.pinimg.com/736x/eb/ca/d2/ebcad2a1482a614dd777542bfcea2848.jpg",
        }}
      />
      <View style={styles.screens}>
        <TouchableOpacity
          style={styles.getStarted}
          onPress={() => navigation.navigate("Home")} // 👈 navigate to HomeTabs
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Root app with stack
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screens: {
    flex: 1,
  },
  splashScreen: {
    flex: 1,
    backgroundColor: "rgb(140, 188, 192)",
  },
  splashImage: {
    alignSelf: "center",
    marginTop: 150,
    width: 400,
    height: 440,
  },
  getStartedText: {
    fontSize: 35,
    color: "white",
  },
  getStarted: {
    alignSelf: "center",
    marginTop: 60,
    backgroundColor: "rgb(8, 127, 236)",
    padding: 20,
    borderRadius: 15,
  },
});
