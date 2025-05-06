import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoriesComponent from './StoriesComponent'

export default function PostComponent() {
  return (
    <View>
      <StoriesComponent />
      <Text>PostComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})