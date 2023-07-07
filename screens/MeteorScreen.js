import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default class MeteorScreen extends Component{

    constructor (props){
        super(props)
        this.state={
            meteors:{}
        }
    }

    getMeteors = ()=>{
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=859d3868-ab47-4876-83b5-80143c2aee34')
        .then(
            response=>{
              this.setState({
                meteors:response.data.near_earth_objects
              })
            }
        )
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
     componentDidMount(){
        this.getMeteors()
     }
    render(){
        if (Object.keys(this.state.meteors).length===0) {
            return(
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>
                        Loading...
                    </Text>
                </View>
            )
        } else {
            let meteor_array = Object.keys(this.state.meteors).map(
                meteor_date =>{
                    return this.state.meteors [meteor_date]
                }
            )
            let meteors=[].concat.apply([],meteor_array);
            meteors.forEach(function(element){
                let diameter = (element.estimated_diameter.kilometers.estimeated_diameter_min+element.estimated_diameter.kilometers.estimeated_diameter_max)/2;
                let threatScore= (diameter/element.close_approach_data[0].miss_distance.kilometers)*1000000000;
                element.threat_score=threatScore
            });
            return(
                <View style = {{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text>Meteor Screen </Text>
                </View>
            )
            
        }
       
    }
}