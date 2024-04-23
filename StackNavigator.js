import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Image, SafeAreaView, StyleSheet, View , Text} from "react-native"
import HomeScreen from "./screens/HomeScreen"
import ProductDetails from "./screens/ProductDetails"
import Cart from "./screens/Cart"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faCartShopping, faHandHoldingDollar, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import Notifications from "./screens/Notifications"
import Profile from "./screens/Profile"


const StackNavigator = () => {
    const Tab = createBottomTabNavigator()

    const Stack = createNativeStackNavigator()

    function BottomTabs() {
        return (
            <View style={{ flex: 1 }}>
                <Tab.Navigator 
                 screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                      height: 60,
                      position: 'absolute',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal:20,
                    },
                    tabBarShowLabel:false,
                  }}
               >
                    <Tab.Screen name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarLabelStyle: {
                                color: '#424242',
                                marginBottom: 0,
                                fontFamily: "Lato-Regular",
                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (focused ?
                                <>
                                <View style={styles.iconWrappr}>
                                <View style={styles.iconContainer}>
                                <FontAwesomeIcon icon={faHome} color="#FFFFFF" size={25} />
                                </View>
                                <Text style={{marginLeft:10}}>Home</Text>
                                </View>
                                </>
                                :
                                <>
                                <View style={styles.iconWrappr}>
                                <View style={styles.iconContainer}>
                                <FontAwesomeIcon icon={faHome} color="#FFFFFF" size={25} />
                                </View>
                                <Text style={{marginLeft:10}}>Home</Text>
                                </View>
                                </>
                            )
                        }}
                    />
                    <Tab.Screen name="Cart"
                        component={Cart}
                        options={{
                            tabBarLabelStyle: {
                                color: '#424242',
                                marginBottom: 5,
                                fontFamily: "Lato-Regular",
                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (focused ?
                                // eslint-disable-next-line no-mixed-spaces-and-tabs
                                <FontAwesomeIcon icon={faCartShopping} color="#424242" size={25} />
                                
                                :
                                <FontAwesomeIcon icon={faCartShopping} color="#424242" size={25} />
                            )
                        }}
                    />
                    <Tab.Screen name="Product"
                     tabBarShowLabel={false}
                        component={ProductDetails}
                        options={{
                            tabBarLabelStyle: {
                                color: '#424242',
                                marginBottom: 5,
                                fontFamily: "Lato-Regular"
                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (focused ?
                                // eslint-disable-next-line no-mixed-spaces-and-tabs
                                <FontAwesomeIcon icon={faBell} color="#424242" size={25} />
                                :
                                <FontAwesomeIcon icon={faBell} color="#424242" size={25} />
                            )
                        }}
                    />
                     <Tab.Screen name="Notification"
                     tabBarShowLabel={false}
                        component={Profile}
                        options={{
                            tabBarLabelStyle: {
                                color: '#424242',
                                marginLeft: 5,
                                fontFamily: "Lato-Regular"
                            },
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (focused ?
                                // eslint-disable-next-line no-mixed-spaces-and-tabs
                                <FontAwesomeIcon icon={faUser} color="#424242" size={25} />
                                :
                                <FontAwesomeIcon icon={faUser} color="#424242" size={25} />
                            )
                        }}
                    />
                </Tab.Navigator>
            </View>
        )
    }





    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Products"
                        component={BottomTabs}
                        options={({ route }) => ({
                            headerShown: false,
                            tabBarVisible: route.name === 'Home',
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    );
}

export default StackNavigator;


const styles = StyleSheet.create({
    iconContainer:{
      backgroundColor:'#40A2E3',
      height:40,
      width:40,
      borderRadius:50,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    iconWrappr :{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#F3F8FF',
        borderRadius:20,
        padding:0,
        height:30,
        paddingRight:10,
        marginLeft:25,
    }
  })