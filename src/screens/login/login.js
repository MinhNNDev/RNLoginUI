import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';

export default class login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Login</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
