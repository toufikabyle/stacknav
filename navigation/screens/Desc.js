import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, View,ImageBackground, TouchableOpacity} from 'react-native';
import Red from "./Home.js";
import Yellow from "./back1.js";
import back2 from "./back2.js";
import back3 from "./back3.js";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/Feather";
import { ScaledSheet } from "react-native-size-matters";


const App = ({navigation}) => {
  // const [visit, setVisit] = useState(false);
  

  
 
 return (
    
      <SafeAreaView style={styles.container} >
      
      <View style={styles.cover}>
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
        
      
      <ScrollView style={styles.text}>
      
        <View style={styles.innertext}>
        
        
        <Text style={styles.heading2}>Template Information</Text>
          <Text style={styles.text2}>
          You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.
          </Text>

          </View>
      </ScrollView>
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
        width: "100%",
        marginLeft: "5@s",
        marginRight: "5@s",
        height: "100%",
        resizeMode: "stretch",
        
        
        
      },
      cover:{
        backgroundColor:"white",
        alignItems: "center",

      },
      imagecontainer: {
        alignItems: "center",
        width: "100%",
        height: "10%",
      },
      
      text: {
        flex: 1,
        width: "90%",
        
      },
      innertext: {
        marginTop:"0%",
        
      },
      links: {
        color: "#2874A6",
        fontWeight: "bold",
        marginRight: "9@s",
        marginLeft: "9@s",
        marginTop:"0@s",
        fontSize: "12@s",
        //textDecorationLine: 'underline',
        
        
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
        color: "#2874A6",
        fontWeight: "700",
        fontSize: "14@s",
        margin: "6@s",
      },
      title: {
        color: "#01164A",
        fontWeight: "700",
        fontSize: "18@s",
        marginRight: "160@s",
        marginLeft: "0@s",
        marginTop:"0%",
      },
    
      heading: {
        color: "black",
        fontWeight: "bold",
    
        marginBottom: "5@s",
        fontSize: "14@s",
      },
      text2: {
        color: "black",
        fontSize: "11@s",
        margin:"6@s",
        
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