import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import Bulbasaur1 from '../assets/bulbasaur1.png'
import Bulbasaur2 from '../assets/bulbasaur2.png'

export default function PostComponent() {
  const[post, setPost] = useState([
    {
      profilePicture: Bulbasaur1,
      userName: "Bulba",
      postImage: Bulbasaur2,
      numOfLikes: "9.5K",
      description: "new fit",
      comments: [
        {
          userWhoCommented: "Bulba3D",
          userComment: "its in 3D!"
        }
      ]
    },
    {
      profilePicture: Bulbasaur2,
      userName: "Bulba3D",
      postImage: Bulbasaur1,
      numOfLikes: "16.2K",
      description: "I look good in 2D",
      comments: [
        {
          userWhoCommented: "Bulba",
          userComment: "slay Mega-Venusaur"
        }
      ]
    }
  ])

  return (
    <ScrollView>
      <StoriesComponent />
      
      {
        post.map((post,idx) => {
          return (
            <View key={idx}>
              {/* This view will contain our username, profile img, and the 3 dots*/}
              <View style={styles.profileNav}>
                {/* Profile Img Container */}
                <View style={{paddingTop: 10}}>
                  <Image source={post.profilePicture} style={styles.profileImg}/>
                </View>
                {/* Username Container */}
                <View style={styles.usernameContainer}>
                  <Text style={styles.usernameText}>{post.userName}</Text>
                </View>
                {/* Dots Container */}
                <View style={styles.dotsContainer}>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                  <Text style={styles.dotsText}>.</Text>
                </View>
              </View>
              {/* container for our image for real this time */}
              <View>
                <Image source={post.postImage} style={styles.postImg}/>
              </View>
              {/* parent Container for our icaons and likes */}
              <View>

              </View>

            </View>
          )
        })
      }

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profileNav: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'purple'
  },
  usernameContainer: {
    paddingLeft: 15,
    justifyContent: 'center',
    paddingTop: 10
  },
  usernameText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  dotsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  dotsText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 10,
  },
  postImg: {
    height: 400,
    width: '100%',
    backgroundColor: 'white'
  }
})