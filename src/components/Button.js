import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function Button({style, children}) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#EB64CF', '#ED736F']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.gradient, style]}>
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '800',
    color: '#fff',
  },
  gradient: {
    padding: 10,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
