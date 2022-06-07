import React,{Component} from 'react';
import {Text,View,Stylesheet, SafeAreaView,Platform,StatusBar, ImageBackground,Linking} from 'react-native';
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class DailyPic extends Component{
    constructor(props){
        super(props);
        this.state={
            apod:{}
        }
    }
    getAPOD=()=>{
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=bgLmNU1nm1uMwN8j6FzYNaS7fE11U66AXTBTboth")
            .then(response=>{
                this.setState({apod:response.data})
            })
    }
    componentDidMount(){
        getApod();
    }
    render(){
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
            <ImageBackground source={require("../assets/daily-pictures.png")} style={styles.backgroundImage}>
                <Text style={styles.routeText}>Picture of the day</Text>
                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                <TouchableOpacity style={{flex:1}} onPress={()=>Linking.openURL(this.state.apod.url)}>
                <View style={styles.iconContainer}>
                    <Image source={require("../assets/play-video.png")} style={{width:50,height:50}}></Image>
                </View>
                </TouchableOpacity>
                    <Text style={styles.explanationText}>{this.state.apod.explanationText}</Text>
               
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
    },
    explanationText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    iconContainer:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    }
})