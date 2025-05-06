import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './Components/HeaderComponent';
import PostComponent from './Components/PostComponent';
import FooterComponent from './Components/FooterComponent';


// View = div
// Text = h1, p, etc

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <PostComponent />
      <FooterComponent />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

//this "styles" is created using a built in component called StyleSheet that allows us to style our components

//flex 1 takes all of the available space of the parent container
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
