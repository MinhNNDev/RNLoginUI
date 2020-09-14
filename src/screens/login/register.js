import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import InputValue from '../../components/InputValue';

export default function register() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InputValue title="Name" icon="user" />
        <InputValue title="Email" icon="mail" />
        <InputValue title="Password" icon="lock" isPassword />
        <View style={styles.policy}>
          <View style={styles.box} />
          <Text style={styles.policyText}>
            I have read and argee the{' '}
            <Text style={styles.policyTextColor}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#D3D4D5',
    borderRadius: 4,
  },
  policy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginBottom: 40,
  },
  policyText: {
    fontSize: 16,
    color: '#9A9B9B',
    fontWeight: '500',
    marginLeft: 10,
  },
  policyTextColor: {
    color: '#F1ABA8',
  },
});
