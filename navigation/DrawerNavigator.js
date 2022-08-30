import React from 'react';
import Clothes from '../screen/clothes';
import Home from '../screen/home';
import AddItems from '../screen/AddItems';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>







    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Add Your Things" component={AddItems} />
    <Drawer.Screen name="Clothes" component={Clothes} />


   
    
      
      
      
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
