import React, { Component } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  Drip: require('../assets/DripinkpersonaluseBlack-x3XKK.otf'),
  Orange: require('../assets/OranjupersonaluseNormita-BWmz3.otf'),
  New: require('../assets/ShiningHooves-rgVV7.ttf'),
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
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
        <View
          style={
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
          
          
          <View style={styles.appTitle}>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
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
                }>
                JOY OF GIVING
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('../assets/handjoy.png')}></Image>
            <Text style={styles.cardText}>
              WE MUST FOCUS ON THE TOPIC JOY OF GIVING. JOY OF GIVING IS TO GIVE
              OUR MOST FAVORITE THING TO SOME PERSON IN NEED TO MAKE THEM HAPPY.
              SO THIS APP WILL HELP YOU TO DONATE OR TO GIFT THINGS TO OTHER
              PERSON.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              THIS APP IS NOT ONLY TO DONATE BUT TO REUSE PRODUCTS SUCH AS
              BOOKS, TOYS. WE CAN USE THE BOOKS AGAIN. DON'T FEEL BAD TO TAKE.
            </Text>
          </View>

          <TouchableOpacity
            style={{
              flex: 0.3,
              flexDirection: 'row',
              marginLeft: 100,
              alignItems: 'center',
              marginTop: 30,
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


          <TouchableOpacity
            style={{
              flex: 0.3,
              flexDirection: 'row',
              marginLeft: 150,
              alignItems: 'center',
              marginBottom: 30,
            }}
            onPress={() => {
              this.setState({
                isButtonPressed1: style,
                isButtonNotPressed: style1,
              });
            }}>
            <Image
              style={{ height: 60, width: 60 }}
              source={require('../assets/sun.png')}
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
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Drip',
    fontSize: 50,
    marginLeft: 40,
    color: '#ee4483',
  },
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    width: 300,
    marginLeft: 20,
    marginTop: 50,
  },
  cardText: {
    fontSize: 15,
    marginLeft: 10,
    fontFamily: 'New',
    color: '#24bab9',
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 40,
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '900%',
    height: '900%',
    marginLeft: 40,
    marginTop: 40,
  },
  appTitleTextContainer: {
    justifyContent: 'center',
    marginTop: 30,
  },
});
