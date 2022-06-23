import React from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LikeScreen from './LikeScreen';
import CameraScreen from './CameraScreen';
import abc from './Style';



const Tab = createBottomTabNavigator();



const Tabs=()=>{

    return(
<Tab.Navigator 

screenOptions={{
    tabBarShowLabel:false,
    headerShown:false,
   
    
}}> 

    <Tab.Screen name="Home" component={HomeScreen}
    
    options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('./assets/homeprofile.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#ec6d68':'lightgrey',marginTop:10 }}></Image>
           <Text style={{fontSize:12}}></Text>
        </View>
    )
    }}
    />
    <Tab.Screen name="like" component={LikeScreen}
     options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('./assets/heart.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#ec6d68':'lightgrey',marginTop:10 }}></Image>
           <Text style={{fontSize:12}}></Text>
        </View>
    )
    }}/>

<Tab.Screen name="camera" component={CameraScreen}
     options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('./assets/camera.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#ec6d68':'lightgrey',marginTop:10 }}></Image>
           <Text style={{fontSize:12}}></Text>
        </View>
    )
    }}/>

<Tab.Screen name="Profile" component={ProfileScreen}
     options={{tabBarIcon:({focused})=>(
        <View>
           <Image source={require('./assets/avatar.png')}
           resizeMode="contain" style={{width:25,height:25,tintColor:focused?'#ec6d68':'lightgrey',marginTop:10 }}></Image>
           <Text style={{fontSize:12}}></Text>
        </View>
    )
    }}/>

    
    
   
</Tab.Navigator>

    );
}
export default Tabs;