import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faBagShopping, faChevronDown, faChevronRight, faDotCircle, faEllipsis, faHandDots, faHeart, faSearch, faStar, faStore } from '@fortawesome/free-solid-svg-icons';

import Camera from "../assets/camera.png"
import DownloadImage from "../assets/download.png";
import BagImage from "../assets/bag.png";
import EarImage from "../assets/ear.png";
import TshirtImage from "../assets/tshirt.png";
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const ProductDetails = ({ route }) => {
    const product = route?.params?.product;
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const imageMap = {
        '1': Camera,
        '2': DownloadImage,
        '3': BagImage,
        '4': EarImage,
        '5': TshirtImage,
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
                            <Text style={{ fontSize: 20, marginTop: -5, marginLeft: 10 }}>Details</Text>
                        </View>


                        <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-between' }}>
                            <FontAwesomeIcon icon={faSearch} color="#000000" size={20} />
                            <FontAwesomeIcon icon={faBagShopping} color="#000000" size={20} />
                            <FontAwesomeIcon icon={faEllipsis} color="#000000" size={20} />
                        </View>
                    </View>
                </>
            ),
        });
    }, [navigation]);
    return (
        <ScrollView style={{ flex: 1, height: 500 }}>
            {product ?
            <View style={styles.productImagecontainer}>
                <Image source={imageMap[product?.id]} style={styles.productimage} />
            </View> : 
            <Text>Please add the product</Text>
            }
            <View style={styles.productDetails}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faStore} color="#40A2E3" size={18} />
                    <Text style={{ color: '#40A2E3', marginLeft: 5 }}>Muhsan store</Text>
                </View>
                <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5 }}>
                    <Text style={{ fontSize: 25, color: '#000000', fontWeight: "600" }}>{product?.name}</Text>
                    <FontAwesomeIcon icon={faHeart} color="#607274" size={18} />
                </View>
                <Text style={{ fontSize: 18, color: '#40A2E3', fontWeight: "600", marginTop: 10 }}>-30%</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80 }}>
                    <Text>$299</Text>
                    <Text>$399</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: 170 }}>
                    <FontAwesomeIcon icon={faStar} color="#40A2E3" size={18} />
                    <Text>4.9(100)</Text>
                    <FontAwesomeIcon icon={faChevronRight} color="#607274" size={16} />
                    <Text>1.5K sold</Text>


                </View>


            </View>
            <View style={{ padding: 10 }}>
                <Text>Color Family</Text>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ backgroundColor: "#F5F7F8", width: 70, height: 30, marginTop: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                        <Text>Blue</Text>
                    </View>

                    <View style={{ backgroundColor: "#F5F7F8", width: 70, height: 30, marginTop: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
                        <Text>White</Text>
                    </View>
                    <View style={{ backgroundColor: "#F5F7F8", width: 70, height: 30, marginTop: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
                        <Text>Grey</Text>
                    </View>
                    <View style={{ backgroundColor: "#40A2E3", width: 70, height: 30, marginTop: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
                        <Text>Red</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', marginTop: 10, padding: 10 }}>
                    <Text style={{ fontSize: 18 }}>Show Size</Text>
                    <Text style={{ marginLeft: 100, fontSize: 18 }}>Quantity</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 2, padding: 10 }}>
                    <View style={{ backgroundColor: "#F5F7F8", width: 150, padding: 5, height: 30, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <Text>Select One</Text>
                        <FontAwesomeIcon icon={faChevronDown} color="#607274" size={16} />
                    </View>
                    <View style={{ backgroundColor: "#F5F7F8", width: 150, padding: 5, height: 30, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginLeft: 20 }}>
                        <Text>Select One</Text>
                        <FontAwesomeIcon icon={faChevronDown} color="#607274" size={16} />
                    </View>
                </View>

            </View>
            <View style={{ flexDirection: 'row', padding: 10, marginTop: 15, alignItems: "flex-start", height: 150 }}>
                <View style={{ marginTop: 5 }}>
                    <FontAwesomeIcon icon={faCommentDots} color="#40A2E3" size={25} />
                    <Text style={{ marginTop: 5 }}>Chat</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%' }}>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: "#40A2E3", height: 50, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}
                     onPress={() => navigation.navigate('Cart')}
                    >
                        <Text style={{ fontSize: 20, color: '#000000', fontWeight: "700" }}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#40A2E3", height: 50, width: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, color: '#000000', fontWeight: "700", color: '#FFFFFF' }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    productImagecontainer: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingBottom: 20,
    },
    productDetails: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }

})