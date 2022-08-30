import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import firebase from 'firebase';
import db from '../config.js';

export default function App() {
  const handleClick = event => {
    event.currentTarget.disabled = true;
    alert('CONTACT TO THE PERSON THROUGH THE GIVEN NUMBER TO GET THE THING.');
  };

  return (
    <div>
      <button  onClick={handleClick} style={{
        backgroundColor: "orange",
        fontSize: 20,
        borderRadius: 10,
        

      }}>  <Ionicons name="heart"></Ionicons> I WANT</button>
    </div>
  );
}

