import React, {Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'

export default class Tab2 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Tab2</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})