import { FlatList, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faBagShopping, faBars, faBox, faFilter, faHome, faSearch, faShirt, faShoePrints, faStar } from '@fortawesome/free-solid-svg-icons';
import { ServerContainer } from '@react-navigation/native';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faSquareMinus, } from '@fortawesome/free-regular-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch';





const HomeScreen = ({navigation}) => {
    const [text, onChangeText] = useState('Search');

    const data = [
        { icon: faStar, label: 'Popular' },
        { icon: faShirt, label: 'Cloths' },
        { icon: faShoePrints, label: 'Shoes' },
        { icon: faBagShopping, label: 'Bags' },
        { icon: faStopwatch, label: 'Watches' },
    ];
    
    
    
    const renderItem = ({ item, index }) => (
        <View style={styles.categoryItem}  onPress={() => navigation.navigate('Product', { product: item })}>
            <View style={[styles.categoryIconWrapper, index === 0 ? styles.firstCategoryIconWraper : null]}>
                <FontAwesomeIcon icon={item.icon} color={index === 0 ? "#FFFFFF" : "#9E9FA5"} size={30} />
            </View>
            <Text style={{ marginTop: 5 }}>{item.label}</Text>
        </View>
    );
    

    const products = [
        { id: '1', image: require("../assets/camera.png"), name: 'Tripode DSLR camera',rating:4.9,price:"$899",originalPrice:"$999",discount:'-20%' },
        { id: '2', image: require("../assets/download.png"), name: 'FlyingKit Shoes for men',rating:4.9,price:"$652",originalPrice:"$800",discount:'-20%' },
        { id: '3', image: require("../assets/bag.png"), name: 'Laptop bags',rating:4.9,price:"$99",originalPrice:"$199",discount:'-20%' },
        { id: '4', image: require("../assets/ear.png"), name: 'Dolby effects ear phones',rating:4.9 ,price:"$350",originalPrice:"$400",discount:'-20%'},
        { id: '5', image: require("../assets/tshirt.png"), name: 'Coding t shirts',rating:4.9 ,price:"$150",originalPrice:"$250",discount:'-20%'},
      ];
    
      const renderProducts = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
          <View style={styles.ratings}>
            <View>
              <Image source={item.image} style={styles.trendingimage} />
            </View>
            <View style={{ paddingHorizontal: 1 }}>
              <Text style={{ fontSize: 13 }}>{item.name}</Text>
              <View style={styles.price}>
                <Text style={{ fontSize: 11 }}>100% premium product</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );

      const renderProductItem = ({ item }) => (
        <TouchableOpacity style={styles.products} onPress={() => navigation.navigate('Product', { product: item })}>
            <View>
                <Image source={item.image} style={styles.image} />
            </View>
            <View style={{ paddingHorizontal: 14 }}>
                <Text style={styles.productTite}>{item.name}</Text>
                <View style={styles.rating}>
                    <FontAwesomeIcon icon={faStar} color="blue" size={15} />
                    <Text style={{ fontWeight: '500', fontSize: 14 }}>{item.rating}(1299)</Text>
                </View>
                <View style={styles.price}>
                    <Text style={{ fontWeight: '800', fontSize: 18 }}>{item.price}</Text>
                    <Text style={{ fontSize: 12, color: 'grey', fontWeight: "500" }}>{item.originalPrice}</Text>
                    <Text style={{ fontSize: 16, color: '#40A2E3', fontWeight: "500" }}>{item.discount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

      

    return (
        <ScrollView>
            <View style={styles.headers}>
                <View style={styles.searchContainer}>
                    <View style={styles.iocnsWrapper}>
                        <FontAwesomeIcon icon={faBars} color="#B4B4B8" size={20} />
                        <FontAwesomeIcon icon={faSearch} color="#B4B4B8" size={20} style={{ marginLeft: 10 }} />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="useless placeholder"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ marginRight: 0 }}>
                        <FontAwesomeIcon icon={faSquareMinus} color="#B4B4B8" size={20} />
                    </View>


                </View>
                <View style={styles.filterIcon}>
                    <FontAwesomeIcon icon={faFilter} color="#FFFFFF" size={20} />
                </View>
            </View>
            <View style={styles.category}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {/* <ScrollView horizontal={true} style={styles.productlist} showsHorizontalScrollIndicator={false}>
                <View style={styles.products}>
                    <View>
                        <Image source={require("../assets/camera.png")} style={styles.image} />
                    </View>
                    <View style={{paddingHorizontal:14}}>
                        <Text style={styles.productTite}>Tripode DSLR camera</Text>
                        <View style={styles.rating}>
                            <FontAwesomeIcon icon={faStar} color="blue" size={15} />
                            <Text style={{fontWeight:'500',fontSize:14}}>4.9 (1299)</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={{fontWeight:'800',fontSize:18}}>$899</Text>
                            <Text style={{fontSize:12,color:'grey',fontWeight:"500"}}>$899</Text>
                            <Text style={{fontSize:16,color:'#40A2E3',fontWeight:"500"}}>-20%</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.products}>
                    <View>
                        <Image source={require("../assets/tshirt.png")} style={styles.image} />
                    </View>
                    <View style={{paddingHorizontal:14}}>
                        <Text style={styles.productTite}>Casual Black T shirt</Text>
                        <View style={styles.rating}>
                            <FontAwesomeIcon icon={faStar} color="blue" size={15} />
                            <Text style={{fontWeight:'500',fontSize:14}}>3.8 (1299)</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={{fontWeight:'800',fontSize:18}}>$450</Text>
                            <Text style={{fontSize:12,color:'grey',fontWeight:"500"}}>$600</Text>
                            <Text style={{fontSize:16,color:'#40A2E3',fontWeight:"500"}}>-20%</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.products}>
                    <View>
                        <Image source={require("../assets/bag.png")} style={styles.image} />
                    </View>
                    <View style={{paddingHorizontal:14}}>
                        <Text style={styles.productTite}>Laptop Bag</Text>
                        <View style={styles.rating}>
                            <FontAwesomeIcon icon={faStar} color="blue" size={15} />
                            <Text style={{fontWeight:'500',fontSize:14}}>4.1 (1299)</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={{fontWeight:'800',fontSize:18}}>$99</Text>
                            <Text style={{fontSize:12,color:'grey',fontWeight:"500"}}>$199</Text>
                            <Text style={{fontSize:16,color:'#40A2E3',fontWeight:"500"}}>-20%</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.products}>
                    <View>
                        <Image source={require("../assets/ear.png")} style={styles.image} />
                    </View>
                    <View style={{paddingHorizontal:14}}>
                        <Text style={styles.productTite}>Boat Head phones</Text>
                        <View style={styles.rating}>
                            <FontAwesomeIcon icon={faStar} color="blue" size={15} />
                            <Text style={{fontWeight:'500',fontSize:14}}>4.9 (1299)</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={{fontWeight:'800',fontSize:18}}>$150</Text>
                            <Text style={{fontSize:12,color:'grey',fontWeight:"500"}}>$250</Text>
                            <Text style={{fontSize:16,color:'#40A2E3',fontWeight:"500"}}>-20%</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.products}>
                    <View>
                        <Image source={require("../assets/download.png")} style={styles.image} />
                    </View>
                    <View style={{paddingHorizontal:14}}>
                        <Text style={styles.productTite}>FlyingKit Shoes for men</Text>
                        <View style={styles.rating}>
                            <FontAwesomeIcon icon={faStar} color="blue" size={15} />
                            <Text style={{fontWeight:'500',fontSize:14}}>4.9 (1299)</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={{fontWeight:'800',fontSize:18}}>$150</Text>
                            <Text style={{fontSize:12,color:'grey',fontWeight:"500"}}>$200</Text>
                            <Text style={{fontSize:16,color:'#40A2E3',fontWeight:"500"}}>-20%</Text>

                        </View>
                    </View>
                </View>


            </ScrollView> */}
             <FlatList
            horizontal
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
        />
            <View>
                <View style={styles.trending}>
                    <Text style={{fontSize:20,fontWeight:'700'}}>Trending Now</Text>
                    <FontAwesomeIcon icon={faArrowRight} color="blue" size={20} />
                </View>
                {/* <ScrollView horizontal={true} style={styles.trendingList} showsHorizontalScrollIndicator={false}>
                <View style={styles.ratings}>
                    <View>
                        <Image source={require("../assets/camera.png")} style={styles.trendingimage} />
                    </View>
                    <View style={{paddingHorizontal:1}}>
                        <Text style={{fontSize:13}}>Tripode DSLR camera</Text>
                        <View style={styles.price}>
                            <Text style={{fontSize:11}}>100% premium product</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.ratings}>
                    <View>
                        <Image source={require("../assets/download.png")} style={styles.trendingimage} />
                    </View>
                    <View style={{paddingHorizontal:1}}>
                        <Text style={{fontSize:13}}>Tripode DSLR camera</Text>
                        <View style={styles.price}>
                            <Text style={{fontSize:11}}>100% premium product</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.ratings}>
                    <View>
                        <Image source={require("../assets/bag.png")} style={styles.trendingimage} />
                    </View>
                    <View style={{paddingHorizontal:1}}>
                        <Text style={{fontSize:13}}>Tripode DSLR camera</Text>
                        <View style={styles.price}>
                            <Text style={{fontSize:11}}>100% premium product</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.ratings}>
                    <View>
                        <Image source={require("../assets/ear.png")} style={styles.trendingimage} />
                    </View>
                    <View style={{paddingHorizontal:1}}>
                        <Text style={{fontSize:13}}>Tripode DSLR camera</Text>
                        <View style={styles.price}>
                            <Text style={{fontSize:11}}>100% premium product</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.ratings}>
                    <View>
                        <Image source={require("../assets/tshirt.png")} style={styles.trendingimage} />
                    </View>
                    <View style={{paddingHorizontal:1}}>
                        <Text style={{fontSize:13}}>Tripode DSLR camera</Text>
                        <View style={styles.price}>
                            <Text style={{fontSize:11}}>100% premium product</Text>

                        </View>
                    </View>
                </View>


            </ScrollView> */}
            </View>
            <View style={{marginBottom:100}}>
            <FlatList
      data={products}
      renderItem={renderProducts}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
    </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    headers: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    searchContainer: {
        height: 60,
        backgroundColor: "#EEEDEB",
        width: '75%',
        borderRadius: 25,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    iocnsWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        marginTop: 2,
        height: 40,
        fontSize: 18,
        color: '#B4B4B8'
    },
    filterIcon: {
        height: 45,
        width: 45,
        backgroundColor: '#000000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10
    },
    category: {
        marginVertical: 20,
        flexDirection: 'row',
        width: '100%',
        marginHorizontal: 15
    },
    firstCategoryIconWraper: {
        backgroundColor: '#40A2E3',
    },
    categoryIconWrapper: {
        backgroundColor: "#EEEDEB",
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    categoryItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginHorizontal: 10, // Adjust margin as needed
        width: 200, // Adjust width as needed
        height: 220, // Adjust height as needed
    },
    trendingimage:{
        marginHorizontal: 10, // Adjust margin as needed
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
    },
    productlist: {
        paddingHorizontal: 10,
        marginVertical:20
    },
    products:{
        alignItems:'flex-start'
    },ratings:{
        alignItems:'flex-start',
        borderWidth: 1,
        borderColor: '#ddd',
        height:160,
        padding:10,
        marginHorizontal:5,
    },
    rating:{
        flexDirection:'row',
        fontSize:15,
        marginTop:5,
    },
    price:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
    },
    productTite:{
        fontSize:17,
        fontWeight:'600'
    },
    trending:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginBottom:20
    },
    trendingList:{
       paddingBottom:100

    }

})