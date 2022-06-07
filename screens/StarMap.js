import React,{Component} from 'react';
import {Text,View,Stylesheet,TextInput} from 'react-native';
import {WebView} from 'react-native-webview'
export default class StarMap extends Component{
    constructor(props){
        super(props);
        this.state={
            longitude:'',
            latitude:''

        };
    }
    render(){
        
        const {longitude,latitude}=this.state;
        const path=`https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
    return(
        
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Star Map</Text>
            <TextInput style={{height:40,borderColor:'gray',borderWidth:1}} placeholder={"enter longitude"} onChangeText={(text)=>this.setState({longitude:text})}></TextInput>
            <TextInput style={{height:40,borderColor:'gray',borderWidth:1}} placeholder={"enter latitude"} onChangeText={(text)=>this.setState({latitude:text})}></TextInput>
            <WebView scalesPageToFit={true} source={{uri:path}}>

            </WebView>
        </View>
    )
    };
}