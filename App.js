import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform, StatusBar, Dimensions } from 'react-native';

export default function App() {

  const pressImage = () => console.log("Image has been pressed!")

  

  return (
    <SafeAreaView style={[styles.container/*, styles.imageSize*/]}>
      {/*<Text>Hello World! Futurama is back, baby! Really really long text. I wanna keep adding more texrt just to see what happens.</Text>
      <TouchableOpacity onPress={pressImage}>
        <Image
          style={styles.imageSize}
          blurRadius={5}
          fadeDuration={1000}
          source={{
          uri: 'https://asia.olympus-imaging.com/content/000107506.jpg'
        }} />
      </TouchableOpacity>*/}
      <Button color="red" title="click me"
        onPress={() =>
          Alert.alert("Button Press Alert", "Sup", [
          { text: "Agree", onPress: () => console.log("He's a dude bro!") },
          { text: "Disagree", onPress: () => console.log("He's not a dude bro!") }
          ])
        } />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    /*alignItems: 'center',
    justifyContent: 'center',*/
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  imageSize: {
    width: 300,
    height: 200
  }
});
