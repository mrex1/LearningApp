import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import UserInfo from './components/UserInfo'
import ActivityHistory from './components/ActivityHistory'

export default class Profile extends Component {
  state={
    ActivityList:[{title:"some title",details:"some details"},{title:"some title",details:"some details"},{title:"some title",details:"some details"}]
  ,userinfo:{
    username:"someone",
    useremail:"someone@some.com",
    userimg:{uri:"https://newmusicshelf.com/wp-content/uploads/blank-profile-picture.png"}
  }
  }
  
  render() {
    const {ActivityList,userinfo} = this.state
    return (
      <View style={styles.container}>
          <UserInfo {...userinfo}/>
            <TouchableOpacity style={styles.activityHeader} onPress={()=>{let newlist=[...ActivityList,...ActivityList];this.setState({ActivityList:newlist})}}>
              <Text style={styles.activityHeaderText}>Manage activity history</Text> 
            </TouchableOpacity>
            <ActivityHistory
              ActivityList={ActivityList}
              /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  activityHeader: {
    padding: 5,
    width:'100%',
    backgroundColor: "orange",
  },
  activityHeaderText:{
    textAlign: 'center',
    color:'grey',
    fontWeight:'bold'
  }
});