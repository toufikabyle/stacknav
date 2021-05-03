import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, View,ImageBackground, TouchableOpacity} from 'react-native';
import Red from "./Home.js";
import Yellow from "./back1.js";
import back2 from "./back2.js";
import Blue from "./Desc.js";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/Feather";
import { ScaledSheet } from "react-native-size-matters";


const App = ({navigation}) => {
  // const [visit, setVisit] = useState(false);
  
  const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg",
  };
  const image1 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image2.jpg",
  };
  const image2 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg",
  };
  const image3 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg",
  };const image4 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg",
  };
  
 
 return (
    
  <SafeAreaView style={styles.container} >
    
  <View style={styles.cover}>
  
<ImageBackground source={image4} style={styles.image}>
 <Text style={styles.title}>LandscapeTitles</Text>
 

 
<View style={styles.linkcenter}>
<ScrollView
 horizontal={true}
 showsHorizontalScrollIndicator={false}
><View style={styles.linkcenter2}>
 <Text style={styles.links} onPress={() => navigation.navigate("Red")}>Home</Text>
 </View>
 <View style={styles.linkcenter2}>
 <Text style={styles.links} onPress={() => navigation.navigate("Blue")}>Description</Text>
 </View>
 <View style={styles.linkcenter2}>
 <Text style={styles.links} onPress={() => navigation.navigate("Yellow")}>Image1</Text>
 </View>
 <View style={styles.linkcenter2}>
 <Text style={styles.links} onPress={() => navigation.navigate('back2')}>Image2</Text>
 </View>
 <View style={styles.linkcenter2}>
 <Text style={styles.links} onPress={() => navigation.navigate('back3')}>Image3</Text>
 </View>
 
</ScrollView>


</View>


</ImageBackground>



</View>





</SafeAreaView>

);
}
const styles = ScaledSheet.create({
container: {
flex: 1,
   alignItems: "center",
   flexDirection: "column",
   height: "100%",
   backgroundColor:"#2874A6"
},
image: {

//width: "100%",
//marginLeft: "5@s",
//marginRight: "5@s",
height: "100%",
resizeMode: "stretch",



},
cover:{
flex: 1,
backgroundColor:"white",
alignItems: "center",
},
title: {
color: "#01164A",
fontWeight: "700",
fontSize: "18@s",
marginRight: "160@s",
marginLeft: "0@s",
marginTop:"0%",
},

imagecontainer: {
marginTop:"35%",
alignItems: "center",
   width: "89.5%",
   height: "100%",
   position:"absolute",
  
},

text: {
flex: 1,
width: "90%",

},
innertext: {
marginTop:"0%",

},
links: {

color: "black",
fontWeight: "bold",
marginRight: "9@s",
marginLeft: "9@s",
marginTop:"0@s",
fontSize: "12@s",


},


toptext: {
color: "black",
fontWeight: "bold",
marginLeft: "4%",
marginTop: "0%",
fontSize: "14@s",
marginTop:"3%"
},
toptextb: {
color: "#696969",
fontWeight: "bold",
marginLeft: "4%",
marginTop: "0%",
fontSize: "10@s",
},

heading2: {
color: "black",
fontWeight: "700",
fontSize: "14@s",
marginTop: "20@s",
},

heading: {
color: "black",
fontWeight: "bold",

marginBottom: "5@s",
fontSize: "14@s",
},
text2: {
color: "black",
fontSize: "12@s",
},

linkcenter: {
marginVertical: "4.5@s",
height: "15%",
justifyContent: "center",
},

linkcenter2: {
height: "100%",
justifyContent: "center",
marginTop:0,
},
buttonClose: {
backgroundColor: "#2196F3",
},
textStyle: {
color: "white",
fontWeight: "bold",
textAlign: "center"
},
button: {
borderRadius: 20,
padding: 10,
elevation: 2
},
});
export default App;