import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
export default function Button({children}) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#EB64CF', '#ED736F']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <Text style={styles.Text}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '600',
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
