import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Platform, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default class HomeScreen extends Component{

    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.SAView}/>
                <ImageBackground source = {require("../assets/bg_image.png")} style = {styles.bgImg}>
                    <View style = {styles.titleBar}>
                        <Text style = {styles.titleText}>ISS Tracker App</Text>
                    </View>
                    <TouchableOpacity style = {styles.routCard} onPress = {()=>{
                        this.props.navigation.navigate("ISSLocation")
                    }}>
                        <Text style = {styles.routText}>ISS Location</Text>
                        <Text style = {styles.knowMore}>{"Know more -->"}</Text>
                        <Text style = {styles.digit}>1</Text>
                        <Image source = {require('../assets/blog_icon.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.routCard}onPress = {()=>{
                        this.props.navigation.navigate("Meteor")
                    }}>
                        <Text style = {styles.routText}>Meteor</Text>
                        <Text style = {styles.knowMore}>{"Know more -->"}</Text>
                        <Text style = {styles.digit}>2</Text>
                        <Image source = {require('../assets/blog_icon.png')}></Image>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    SAView:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    bgImg:{
        flex:1,
        resizeMode:'cover',

    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        color:'white'
    },
    routCard:{
        flext:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    routText:{
        fontSize:35,
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15

    },
    digit:{
        position:'absolute',
        color:'rgba(183,183,183,0.5)',
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    }
})

