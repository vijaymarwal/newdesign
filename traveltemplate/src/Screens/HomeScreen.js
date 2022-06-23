import React from 'react';
import {Text,View,Image,ScrollView,TouchableOpacity, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import abc from './Style';
export default class HomeScreen extends React.Component



{
    render()
{

    return(


        <View style={abc.mainview }>

            <View style={abc.where}>
                <View>
                <Text style={abc.whrtxt}>Where would </Text>
                <Text style={abc.whrtxt}>you like to travel? </Text>
                
                </View>
                <Image style={abc.usericon} source={require('./assets/user.png')} ></Image>
                
            </View>

            <View style={abc.searchbar}>
                <TextInput style={abc.textinput} placeholder='Search'></TextInput>
                <Image style={abc.optionicon} source={require('./assets/option.png')}></Image>
            </View>

            <View style={abc.third}>
                <ScrollView horizontal={true}>

                    <TouchableOpacity style={abc.touchable}><Text style={abc.touchtxt}>All</Text></TouchableOpacity>

                    <TouchableOpacity style={abc.touchableflight}><Text style={abc.touchtxt}>Flight</Text></TouchableOpacity>

                    <TouchableOpacity style={abc.cruise}><Text style={abc.touchtxt}>Cruise</Text></TouchableOpacity>

                    <TouchableOpacity style={abc.train}><Text style={abc.touchtxt}>Train</Text></TouchableOpacity>



                </ScrollView>
            </View>

<ScrollView>
            <View style={abc.imagesection}>
                <View style={abc.imagerowone}>

                    <ImageBackground style={abc.paris}  source={require('./assets/paris.jpg')}>
                        <View style={{flexDirection:'row',marginTop:160,}}>
                        <Text style={abc.paristxt}>Paris</Text>

                        <TouchableOpacity style={abc.dollars}><Text style={abc.touchtxt}>$120</Text></TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={abc.spain}  source={require('./assets/spain.jpg')}>
                        <View style={{flexDirection:'row',marginTop:90,}}>
                        <Text style={abc.spaintxt}>Spain</Text>

                        <TouchableOpacity style={abc.dollars}><Text style={abc.touchtxt}>$120</Text></TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={abc.spain}  source={require('./assets/india.jpg')}></ImageBackground>
                    


                </View>
                <View style={abc.imagerowtwo}>
                <ImageBackground style={abc.rome}  source={require('./assets/rome.jpg')}>
                        <View style={{flexDirection:'row',marginTop:90,marginLeft:-10}}>
                        <Text style={abc.spaintxt}>Rome</Text>

                        <TouchableOpacity style={abc.dollars}><Text style={abc.touchtxt}>$120</Text></TouchableOpacity>
                        </View>
                    </ImageBackground>

                <ImageBackground style={abc.bali}  source={require('./assets/bali.jpg')}>
                        <View style={{flexDirection:'row',marginTop:160,}}>
                        <Text style={abc.paristxt}>Bali</Text>

                        <TouchableOpacity style={abc.dollars}><Text style={abc.touchtxt}>$500</Text></TouchableOpacity>
                        </View>
                    </ImageBackground>

                <Image style={abc.bali}  source={require('./assets/srilanka.jpg')}></Image>
                </View>
                
            </View>
            </ScrollView>

        </View>
    )
}
}