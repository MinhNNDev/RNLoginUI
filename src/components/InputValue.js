import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

export default function InputValue({title, icon, isPassword}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <View style={styles.inputContainer}>
        <Icons name={icon} size={22} color="#d3d4d5" />
        <TextInput style={styles.input} />
        {isPassword && <Icons name="eye-off" size={22} color="#ec80b5" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  inputContainer: {
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d3d4d5',
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  title: {
    color: '#8a8b8c',
    fontWeight: '600',
    marginVertical: 8,
    fontSize: 16,
  },
  input: {
    flex: 1,
  },
});
