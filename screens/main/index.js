import React,{Component} from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {Header} from 'react-native-elements'
import * as Tabs from './tabs'

export default class Main extends Component {
  state = {
    index: 0,
    routes: Object.keys(Tabs).map(item=>{return {key:item,title:item}}),
  };

  render() {
    return (
        <View style={styles.container}>
            <Header
            containerStyle={styles.header}
            leftComponent={{ icon: 'logout',type:'simple-line-icon', color: '#fff',onPress:() => this.props.go('Login')} }
            centerComponent={{ text: 'Main', style: { color: '#fff' } }}
            rightComponent={{ icon: 'profile',type:'antdesign', color: '#fff' }}
            />
            <TabView
                navigationState={this.state}
                renderScene={SceneMap(Tabs)}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width,height: Dimensions.get('window').height}}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight:0
  },
  header:{
      borderBottomWidth:0,
      marginTop:Platform.OS === 'ios' ? 0 : - 30
  }
});