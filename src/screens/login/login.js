import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import InputValue from '../../components/InputValue';
export default function login() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InputValue title="Email" icon="mail" />
        <InputValue title="Password" icon="lock" isPassword />
        <Button style={styles.button} >LOGIN</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
