import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faBagShopping, faCheck, faChevronDown, faChevronRight, faCommentDots, faDotCircle, faEllipsis, faHamburger, faHandDots, faMinus, faPlus, faSearch, faStar, faStore } from '@fortawesome/free-solid-svg-icons';
import {  faHeart,faCircle} from '@fortawesome/free-regular-svg-icons';



const Cart = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: null,
            headerStyle: {
                height: 50,
                backgroundColor: '#FFFFFF',
            },
            headerLeft: () => (
                <>
                    <View style={{ height: 40, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.icon} onPress={goBack}>
                                <FontAwesomeIcon icon={faArrowLeft} color="#000000" size={20} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, marginTop: -5, marginLeft: 10 }}>My Cart</Text>
                        </View>


                        <View style={{}}>
                            <Text style={{ color: '#40A2E3', fontWeight: '800', fontSize: 16 }}>Cancel</Text>
                        </View>
                    </View>
                </>
            ),
        });
    }, [navigation]);
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: "flex-start" }}>
                <View style={{ backgroundColor: '#40A2E3', height: 30, width: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <FontAwesomeIcon icon={faCheck} color="#FFFFFF" size={20} />
                </View>
                <View style={{marginLeft:5}}>
                    <View style={{ backgroundColor: '#F5F7F8', height: 130, width: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require("../assets/tshirt.png")} style={styles.cartImage} />
                    </View>
                </View>
                <View>
                    <View style={{marginLeft:10}}>
                        <Text style={{ fontSize: 21, color: '#000000', fontWeight: "600" }}>casual blact T shirt</Text>
                        <Text style={{ fontSize: 12 }}>Size:40 | color family: black & grey</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#000000', fontWeight: '600', fontSize: 20}}>$699</Text>
                            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 16, marginLeft: 10 }}>$999</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row', width: 150, height: 30, justifyContent: 'space-between', borderColor: 'grey', borderWidth: 1, padding: 5, marginTop: 10 }}>
                                    <FontAwesomeIcon icon={faMinus} color="#000000" size={20} />
                                    <View style={{ backgroundColor: "#D0D4CA", height: 20, width: 30, alignItems: "center" }}>
                                        <Text>02</Text>
                                    </View>
                                    <FontAwesomeIcon icon={faPlus} color="#000000" size={20} />

                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center',marginTop:8,marginLeft:10 }}>
                                <FontAwesomeIcon icon={faHeart} color="grey" size={20} />

                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: "flex-start" }}>
                <View style={{ backgroundColor: '#40A2E3', height: 30, width: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <FontAwesomeIcon icon={faCheck} color="#FFFFFF" size={20} />
                </View>
                <View style={{marginLeft:5}}>
                    <View style={{ backgroundColor: '#F5F7F8', height: 130, width: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require("../assets/download.png")} style={styles.cartImage} />
                    </View>
                </View>
                <View>
                    <View style={{marginLeft:10}}>
                        <Text style={{ fontSize: 21, color: '#000000', fontWeight: "600" }}>Flying Mens shoes</Text>
                        <Text style={{ fontSize: 12 }}>Size:40 | color family: black & grey</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#000000', fontWeight: '600', fontSize: 20}}>$699</Text>
                            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 16, marginLeft: 10 }}>$999</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row', width: 150, height: 30, justifyContent: 'space-between', borderColor: 'grey', borderWidth: 1, padding: 5, marginTop: 10 }}>
                                    <FontAwesomeIcon icon={faMinus} color="#000000" size={20} />
                                    <View style={{ backgroundColor: "#D0D4CA", height: 20, width: 30, alignItems: "center" }}>
                                        <Text>02</Text>
                                    </View>
                                    <FontAwesomeIcon icon={faPlus} color="#000000" size={20} />

                                </TouchableOpacity>
                            </View>
                            <View style={{  height: 30, width: 30, alignItems: 'center', justifyContent: 'center',marginTop:8,marginLeft:10 }}>
                                <FontAwesomeIcon icon={faHeart} color="grey" size={20} />

                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: "flex-start" }}>
                <View style={{ backgroundColor: '#40A2E3', height: 30, width: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    <FontAwesomeIcon icon={faCheck} color="#FFFFFF" size={20} />
                </View>
                <View style={{marginLeft:5}}>
                    <View style={{ backgroundColor: '#F5F7F8', height: 130, width: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require("../assets/bag.png")} style={styles.cartImage} />
                    </View>
                </View>
                <View>
                    <View style={{marginLeft:10}}>
                        <Text style={{ fontSize: 21, color: '#000000', fontWeight: "600" }}>Laptop Bags</Text>
                        <Text style={{ fontSize: 12 }}>Size:40 | color family: black & grey</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ color: '#000000', fontWeight: '600', fontSize: 20}}>$99</Text>
                            <Text style={{ color: 'grey', fontWeight: '500', fontSize: 16, marginLeft: 10 }}>$199</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row', width: 150, height: 30, justifyContent: 'space-between', borderColor: 'grey', borderWidth: 1, padding: 5, marginTop: 10 }}>
                                    <FontAwesomeIcon icon={faMinus} color="#000000" size={20} />
                                    <View style={{ backgroundColor: "#D0D4CA", height: 20, width: 30, alignItems: "center" }}>
                                        <Text>02</Text>
                                    </View>
                                    <FontAwesomeIcon icon={faPlus} color="#000000" size={20} />

                                </TouchableOpacity>
                            </View>
                            <View style={{height: 30, width: 30, alignItems: 'center', justifyContent: 'center',marginTop:8,marginLeft:10 }}>
                                <FontAwesomeIcon icon={faHeart} color="grey" size={20} />

                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <Text style={{fontSize:18,fontWeight:"700",padding:10}}>Order Summary</Text>
            <View style={{backgroundColor:'#EEEEEE',padding:20,height:200,width:'90%',marginLeft:'5%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18}}>Items</Text>
                    <Text style={{fontSize:18,fontWeight:"700"}}>2</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={{fontSize:18}}>Amount</Text>
                    <Text style={{fontSize:18,fontWeight:"700"}}>$480</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={{fontSize:18}}>Shiping Charges</Text>
                    <Text style={{fontSize:18,fontWeight:"700"}}>$60</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={{fontSize:18}}>Total</Text>
                    <Text style={{fontSize:18,fontWeight:"700"}}>$520</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, marginTop: 15, alignItems: "flex-start", height: 150 }}>
                <View style={{ marginTop: 5 }}>
                    <FontAwesomeIcon icon={faCircle} color="grey" size={25} />
                    <Text style={{ marginTop: 5 }}>All</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%' }}>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "#40A2E3", height: 50, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, color: '#000000', fontWeight: "700" }}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#40A2E3", height: 50, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, color: '#000000', fontWeight: "700", color: '#FFFFFF' }}>Check out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default Cart

const styles = StyleSheet.create({
    cartImage: {
        width: 100,
        height: 100,
        objectFit: 'contain'
    }
})