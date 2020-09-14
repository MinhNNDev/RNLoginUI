import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import InputValue from '../../components/InputValue';
export default function login() {
  return (
    <View>
      <View style={styles.container}>
        <InputValue title="Email" icon="mail" />
        <InputValue title="Password" icon="lock" isPassword />
      </View>
      <Button style={styles.button}>LOGIN</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
  },
});
