import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import InputValue from '../../components/InputValue';

export default class register extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <InputValue title="Name" icon="user" />
          <InputValue title="Email" icon="mail" />
          <InputValue title="Password" icon="lock" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
