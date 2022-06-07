import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar,Image,ImageBackground} from 'react-native';
export default class Home extends Component{
    render(){
    return(
        <View
        style={styles.container}>
         <SafeAreaView style={styles.droidSafeArea}/>
         <ImageBackground source={require("../assets/main-icon.png")} style={styles.backgroundImage}>
         <View style={styles.titleBar}>
         <Text style={styles.titleText}>Stellar</Text>
         <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("SpaceCrafts")}>
             <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
           <Text style={styles.routeText}>Space Crafts</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("StarMap")}>
             <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
           <Text style={styles.routeText}>Star Map</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("DailyPic")}>
             <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
           <Text style={styles.routeText}>Daily Picture</Text>
         </TouchableOpacity>
     </View>
     </ImageBackground>
     </View>
    )
    };
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',

    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-80
    }
})
