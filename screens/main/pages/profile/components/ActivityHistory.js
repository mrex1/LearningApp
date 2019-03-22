import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

export default class ActivityHistory extends Component{
    _keyExtractor = (item,index)=>index.toString()

    renderActivityItem({item:{title,details}}){
        return (
            <View style={styles.item} key={title}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemDetails}>{details}</Text>
            </View>
        )
    }

    render(){
        const {ActivityList} = this.props

        return(
            <View style={styles.container}>
                <FlatList
                style={{flex:1}}
                data={ActivityList}
                extraData={ActivityList}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={this.renderActivityItem}
                />
            </View>
                
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        flex: 1
    },
    item:{
        width:"100%",
        borderBottomWidth:1,
        borderColor:'grey',
        padding:'1%'
    },
    itemTitle:{
        fontSize:17,
        color:'black'
    },
    itemDetails:{

    }
})