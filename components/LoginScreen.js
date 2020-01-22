import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import Constants from 'expo-constants';
import {Ionicons} from '@expo/vector-icons';

export default class LoginScreen extends React.Component {
  state = {
    name : ""
  }
  continue = () =>{
    this.props.navigation.navigate("Chat",{name : this.state.name})
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.circle}/>
      <View style={{marginTop: 64}}>
      <Image source={require("../assets/aeg.png")}
      style={{width: 200,height: 100,alignSelf:"center"}}
      />
      </View>
      <View style={{marginHorizontal: 32}}>
        <Text style={styles.paragraph}>
        MEHFIL - E - SHAYARI
        </Text>
        <TextInput style = {styles.input}
        placeholder="User name"
        onChangeText={name =>{
          this.setState({ name });
        }}
        value={this.state.name}
        />
        <View style={{alignItems:"flex-end",marginTop: 64}}>
        <TouchableOpacity style={styles.continue} onPress={this.continue}>
        <Ionicons name="md-arrow-round-forward" size={24} color="#31427c"/>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#31427c',
    padding: 8,
  },
  paragraph: {
    marginTop: 24,
    color:"#31427c",
    fontSize: 18,
    fontWeight: 'bold',
  },
  circle:{
    width: 500,
    height: 500,
    borderRadius: 500/2,
    backgroundColor: "#fff",
    position: "absolute",
    left: -129,
    top : -20,
    },
    input:{
      marginTop: 32,
      height: 50,
      fontSize: 20,
      backgroundColor:"#fff",
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#31427c",
      borderRadius: 30,
      paddingHorizontal: 16,
      color: "#31427c",
      fontWeight: "600",
    },
    continue:{
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
});
