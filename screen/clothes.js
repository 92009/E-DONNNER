import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import firebase from 'firebase';
import db from '../config.js';
import Button from './button';

let customFonts = {
  Drip: require('../assets/DripinkpersonaluseBlack-x3XKK.otf'),
  Orange: require('../assets/OranjupersonaluseNormita-BWmz3.otf'),
  New: require('../assets/ShiningHooves-rgVV7.ttf'),
};

export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allList: [],
      fontsLoaded: false,
      isButtonPressed: '',
      isButtonNotPressed: '',
      isButtonPressed1: '',
    };
  }
  componentDidMount = async () => {
    this.getListItems();
    this._loadFontsAsync();
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }



  getListItems = () => {
    db.collection('name')
      .limit(100)
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({
            allList: [...this.state.allList, doc.data()],
          });
        });
      });
  };

  renderItem = ({ item, i }) => {
    return (
      <View style={{ borderWidth: 1}}>
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {`Donner: ${item.username}  (${item.product})`}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {`Condition: ${item.description}`}
            </ListItem.Subtitle>

            <Text style={styles.no}>No: {item.no}</Text>
       
          </ListItem.Content>

      <Button/>

    
        </ListItem>
      </View>
    );
  };

  render() {
    const { isButtonPressed, isButtonNotPressed, isButtonPressed1 } = this.state;
    var style = true;
    var style1 = false;
    if (!this.state.fontsLoaded) {
      return (
        <View>
          <Text>load</Text>
        </View>
      );
    } else {
      return (
        <View style={
            isButtonPressed != style
              ? [
                  styles.container,
                  {
                    backgroundColor: '#f3ff98',
                  },
                ]
              : [
                  styles.container,
                  {
                    backgroundColor: 'black',
                  },
                ]}>
          <Text  style={
                  isButtonPressed != style
                    ? [
                        styles.title1,
                        {
                          color: '#ee4483',
                        },
                      ]
                    : [
                        styles.title1,
                        {
                          color: '#094f38',
                        },
                      ]
                }>CLOTHES</Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
            }}>
            Note: CONTACT TO THE PERSON THROUGH THE PROVIDED NUMBER IF YOU WANT
            THE THING.
          </Text>
          <FlatList
            style={styles.list}
            data={this.state.allList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

           <TouchableOpacity
            style={{
              marginBottom: 5,
              marginLeft: 20,
              alignItems: 'center',
              marginTop: 10,
            }}
            onPress={() => {
              this.setState({
                isButtonPressed: style,
              });
            }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../assets/moon.png')}
            />
          </TouchableOpacity>
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'New',
    color: '#24bab9',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3ff98',
  },
  title1: {
    fontFamily: 'Drip',
    fontSize: 50,
    marginLeft: 90,
    color: '#ee4483',
  },
  list: {
    backgroundColor: '',
  },
  
});
