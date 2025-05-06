import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Bulbasaur1 from '../assets/bulbasaur1.png'
import Bulbasaur2 from '../assets/bulbasaur2.png'

export default function StoriesComponent() {
  return (
    // We are creating a carousel by adding ahorizontal to your scroll view component
    <ScrollView horizontal>
      
      {/* Container that holds our Stories */}
      <View style={styles.container}>

        {/* Gradient border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#FEDA75", "#FEDE1E", "#D62976", "#962FBF", "#4F5BD5"]}>

          {/* THis view will be our image wrapper */}
          <View style={styles.imageWrapper}>

            {/* Proile Image */}
            <Image source={Bulbasaur1} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Bulbasauar</Text>
      </View>
      <View style={styles.container}>

        {/* Gradient border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#FEDA75", "#FEDE1E", "#D62976", "#962FBF", "#4F5BD5"]}>

          {/* THis view will be our image wrapper */}
          <View style={styles.imageWrapper}>

            {/* Proile Image */}
            <Image source={Bulbasaur2} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Bulbasauar</Text>
      </View>
      <View style={styles.container}>

        {/* Gradient border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#FEDA75", "#FEDE1E", "#D62976", "#962FBF", "#4F5BD5"]}>

          {/* THis view will be our image wrapper */}
          <View style={styles.imageWrapper}>

            {/* Proile Image */}
            <Image source={Bulbasaur1} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Bulbasauar</Text>
      </View>
      <View style={styles.container}>

        {/* Gradient border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#FEDA75", "#FEDE1E", "#D62976", "#962FBF", "#4F5BD5"]}>

          {/* THis view will be our image wrapper */}
          <View style={styles.imageWrapper}>

            {/* Proile Image */}
            <Image source={Bulbasaur2} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Bulbasauar</Text>
      </View>
      <View style={styles.container}>

        {/* Gradient border around our image */}
        <LinearGradient style={styles.linearGradient} colors={["#FEDA75", "#FEDE1E", "#D62976", "#962FBF", "#4F5BD5"]}>

          {/* THis view will be our image wrapper */}
          <View style={styles.imageWrapper}>

            {/* Proile Image */}
            <Image source={Bulbasaur1} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText}>Bulbasauar</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linearGradient: {
    width: 94,
    height: 94,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: 'white',
    fontSize: 15,
    marginTop: 5
  }
})