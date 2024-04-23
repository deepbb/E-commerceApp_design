import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './StackNavigator'

const App = () => {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
     <StackNavigator />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})