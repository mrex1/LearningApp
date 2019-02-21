import React,{Component} from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Header} from 'react-native-elements'
import * as Tabs from './tabs'
import * as Pages from './pages'
import {stackNavigator} from './stackNavigator'

export default class Main extends Component {
  state = {
    index: 0,
    routes: Object.keys(Tabs).map(item=>{return {key:item,title:item}}),
    page:null
  }

  navigator=new stackNavigator()
  backhome=()=>{
    this.setState({page:this.navigator.backhome()})
  }
  back=()=>{
    if(!this.state.page)return this.props.go('Login')
    this.setState({page:this.navigator.back()})
  }
  go=(page)=>{
    this.setState({page:this.navigator.go(page)})
  }

  render() {
    let PageName=this.state.page
    let CurrentPage = PageName?Pages[PageName]:null
    return (
        <View style={styles.container}>
            <Header
            containerStyle={styles.header}
            backgroundColor='black'
            leftComponent={{ icon: CurrentPage?'arrow-back':'logout',type:CurrentPage?'material':'simple-line-icon', color: '#f46242',onPress:this.back} }
            centerComponent={{ text: PageName?PageName:'Main', style: { color: '#f46242' } }}
            rightComponent={{ icon: CurrentPage?'home':'profile',type:'antdesign', color: '#f46242',onPress:() =>CurrentPage?this.backhome():this.go('Profile') }}
            />
            {CurrentPage?<CurrentPage go={this.go}/>:
            <TabView
                renderTabBar={props =>
                  <TabBar
                    {...props}
                    style={{backgroundColor:'grey'}}
                    labelStyle={{color:'orange'}}
                    indicatorStyle={{backgroundColor:'#f46242'}}
                  />
                }
                navigationState={this.state}
                renderScene={SceneMap(Tabs)}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width,height: Dimensions.get('window').height}}
            />}
              
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
  },
  tabBar:{
    backgroundColor:'#f46242',
    color:'grey'
  }
});