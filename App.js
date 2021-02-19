import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert, Platform } from 'react-native';

export default function App() {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [displaypage0, setpage0] = useState('flex');
  const [displaypage1, setpage1] = useState('none');
  const falsereg = () => {
    Alert.alert(
      "蛤？",
      "你還真以為是Twitch喔XD 還註冊哩~")
  };
  const changePage1 = () => {
    setpage0('none');
    setpage1('flex');
  };
  const changePageBack = () => {
    setpage0('flex');
    setpage1('none');
  };
  const falsesignin = () => {
    Alert.alert(
      "嗯。",
      "那我也沒辦法啊(？)，你當真以為我Twitch官方喔XD")
  };
  const condition = () => {
    if (username == '104652022' & password == '780131')
      Alert.alert(
        "安安啊",
        "阿宅又要來看實況囉")
    else
      Alert.alert(
        "帳號密碼不對R",
        "其實不登入也是可以看啦，不要貪實況主的點數R")
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.pagebg, { display: displaypage0, alignItems: 'center' }]}>
          <View style={[styles.firstpageblock, { top: '25%' }]}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={styles.texttype1}>歡迎使用Twitch</Text>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.buttontype, styles.centerstyle, { backgroundColor: '#8E47FD' }]}
                onPress={changePage1}>
                <Text style={styles.buttontext}>登入</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttontype, styles.centerstyle, { backgroundColor: '#313035' }]}
                onPress={falsereg}>
                <Text style={styles.buttontext}>註冊</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={[styles.pagebg, { display: displaypage1, flexDirection: 'column' }]}>
        <View style={{ flex: 1 }}></View>
        <View style={[styles.centerstyle, { flex: 1.5, flexDirection: 'row' }]}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={changePageBack}>
              <Text style={[styles.generaltext, { left: '10%', width: '10%' }]}>&lt;</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.centerstyle, { flex: 1 }]}>
            <Text style={styles.generaltext}>登入</Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={[styles.centerstyle, { flex: 17.5 }]} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ width: '95%', height: '40%' }} >
              <Text style={styles.generaltext}>使用者名稱</Text>
              <TextInput
                style={styles.textinputstyle}
                keyboardType={'email-address'}
                onChangeText={(text) => setUser(text)}></TextInput>
              <Text style={styles.generaltext}>密碼</Text>
              <TextInput
                style={styles.textinputstyle}
                keyboardType={'default'}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}></TextInput>
              <TouchableOpacity
                onPress={falsesignin}
                style={{ width: '30%' }}>
                <Text style={styles.generaltext1}>無法登入？</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttontype, styles.centerstyle, { backgroundColor: '#8E47FD', marginTop: '5%' }]}
                onPress={condition}>
                <Text style={styles.buttontext}>登入</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerstyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagebg: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0C0B10',
  },
  firstpageblock: {
    height: '35%',
    width: '80%',
    flexDirection: 'column'
  },
  texttype1: {
    color: '#F4F4F7',
    fontSize: 35,
    fontWeight: 'bold',
  },
  buttontype: {
    borderRadius: 10,
    margin: '3%',
    padding: '5%',
  },
  buttontext: {
    color: '#F4F4F7',
    fontSize: 15,
    fontWeight: 'bold',
  },
  generaltext: {
    color: '#F4F4F7',
    fontSize: 18,
    left: '3%',
  },
  generaltext1: {
    color: '#8E47FD',
    fontSize: 18,
    left: '3%',
  },
  textinputstyle: {
    backgroundColor: '#313134',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 40,
    borderRadius: 10,
    marginBottom: '5%',
    marginTop: '2%',
    paddingLeft: 10,
    color: '#F4F4F7',
  },
});