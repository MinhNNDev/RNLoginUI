import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

export default function ButtonIcon({nameIcon, color}) {
  return (
    <View style={[styles.container, {borderColor: {color}}]}>
      <Icons name={nameIcon} size={30} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
