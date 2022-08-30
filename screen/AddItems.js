import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import * as Font from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';
import db from '../config';
import firebase from 'firebase';

let customFonts = {
  Drip: require('../assets/DripinkpersonaluseBlack-x3XKK.otf'),
  Orange: require('../assets/OranjupersonaluseNormita-BWmz3.otf'),
};
export default class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image1',
      dropDownHeight: 40,
      yourName: '',
      productName: '',
      condition: '',
      description: '',
      no: '',
      isButtonPressed: '',
      isButtonNotPressed: '',
      isButtonPressed1: '',
   
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  saveNameTo = async (yourName, productName, condition, description, no, previewImage) => {
    db.collection('name').add({
      username: yourName,
      product: productName,
      condition: condition,
      description: description,
      no: no,
    
    });

    this.setState({
      yourName: '',
      productName: '',
      condition: '',
      description: '',
      no: '',
    });
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
      let preview_Image = {
        image1: require('../assets/shirt.png'),
        image2: require('../assets/sweaters.jpg'),
        image3: require('../assets/jeans.png'),
        image4: require('../assets/coat.webp'),
      };

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
          <Text style={
                  isButtonPressed != style
                    ? [
                        styles.title,
                        {
                          color: '#ee4483',
                        },
                      ]
                    : [
                        styles.title,
                        {
                          color: '#094f38',
                        },
                      ]
                }>ADD ITEMS </Text>

         

    
         

          <View  style={
                  isButtonPressed != style
                    ? [
                        styles.form,
                        {
                          color: 'black',
                        },
                      ]
                    : [
                        styles.form,
                        {
                          color: 'white',
                        },
                      ]
                }>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={this.state.yourName}
              onChangeText={(text) =>
                this.setState({
                  yourName: text,
                })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Product Name"
              value={this.state.productName}
              onChangeText={(text) =>
                this.setState({
                  productName: text,
                })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Condition Of Item"
              value={this.state.condition}
              onChangeText={(text) =>
                this.setState({
                  condition: text,
                })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={this.state.description}
              onChangeText={(text) =>
                this.setState({
                  description: text,
                })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Phone No."
              value={this.state.no}
              onChangeText={(text) =>
                this.setState({
                  no: text,
                })
              }
            />
            <TouchableOpacity
              onPress={() => {
                this.saveNameTo(
                  this.state.yourName,
                  this.state.productName,
                  this.state.description,
                  this.state.condition,
                  this.state.no,
                  this.state.previewImage
                );
              }}>
              <Text
                style={{
                  border: 'solid',
                  borderRadius: 10,
                  marginTop: 30,
                  marginLeft: 80,
                  width: 130,
                  fontSize: 20,
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                }}>
                {' '}
                ADD TO APP{' '}
              </Text>
            </TouchableOpacity>

          </View>

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
  container: {
    flex: 1,
    backgroundColor: '#f3ff98',
    
  },
  title: {
    fontFamily: 'Drip',
    fontSize: 50,
    color: '#ee4483',
    textAlign: 'center',
  },
  imageClothes: {
    height: 100,
    width: 100,
    border: 'solid',
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  input: {
    border: 'solid',
    width: 200,
    marginLeft: 60,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  form: {
    backgroundColor: '#24bab9',
    width: 300,
    marginLeft: 15,
    borderRadius: 10,
    border: 'solid',
  },
});
