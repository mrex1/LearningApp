import React,{Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Page2 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>New page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})