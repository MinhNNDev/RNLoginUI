import React, {useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ButtonIcon from '../../components/ButtonIcon';
import TextGradient from '../../components/TextGradient';

import Register from '../login/register';
import Login from '../login/login';

export default function index() {
  const [tab, setTab] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TextGradient style={styles.title}>
        New {tab == 0 ? 'Login' : 'Register'} UI
      </TextGradient>
      <View style={styles.listTab}>
        <TouchableOpacity
          onPress={() => setTab(0)}
          style={[styles.button, tab == 0 && {borderBottomColor: '#ED719E'}]}>
          <Text style={[styles.buttonText, tab == 0 && {color: '#ED719E'}]}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(1)}
          style={[styles.button, tab == 1 && {borderBottomColor: '#ED719E'}]}>
          <Text style={[styles.buttonText, tab == 1 && {color: '#ED719E'}]}>
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        {tab == 0 && <Login />}
        {tab == 0 && <Register />}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {' '}
          OR {tab == 0 ? 'LOGIN' : 'CREATE ACCOUNT'} WITH{' '}
        </Text>
        <View style={styles.listButtonAccount}>
          <ButtonIcon nameIcon="twitter" color="#EB63D3" />
          <ButtonIcon nameIcon="google" color="#EE879F" />
          <ButtonIcon nameIcon="facebook-square" color="#ED726E" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 40,
    fontStyle: 'Italic',
  },
  listTab: {
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 13,
    borderBottomWidth: 3,
    borderBottomColor: '#F4C1ED',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  footer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '600',
    textAlign: 'center',
  },
  listButtonAccount: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
});
