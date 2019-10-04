import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Subtitle({title}) {
  return (
    <View >
      <Text style = {styles.subtitltetext}> {title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({

    subtitltetext: {
        fontSize : 20,
        fontWeight : 'bold',
        color: '#3f4e66',
    },
});