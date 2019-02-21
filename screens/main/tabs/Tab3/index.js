import React, {Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'

export default class Tab3 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Tab3</Text>
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