import React, {Component} from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'

export default class UserInfo extends Component{

    render(){
        const {userimg,username,useremail} = this.props

        return(
            <View style={styles.container}>
                <View style={styles.Userimg}>
                    <Image source={userimg} style={styles.Userimg} resizeMode="contain"/>
                </View>
                <View style={{flex:1,marginLeft:'2%',justifyContent:'center'}}>
                    <Text style={styles.name}>{username}</Text>
                    <Text style={styles.email}>{useremail}</Text>
                </View>
            </View>
                
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        padding:'1%'
    },
    Userimg:{
        height:70,
        width:70,
        borderRadius:35,
        overflow:'hidden'
    },
    name:{
        fontSize:17,
        color:'black'
    },
    email:{
        color:'grey'
    }
})