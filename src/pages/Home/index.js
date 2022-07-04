import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Home = () => {
  return (
    <View
      style={styles.container}
    >
      <Text 
        style={styles.title}
      >
        Welcome Gabriel
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
      >
        <Text
          style={styles.buttonText}
        >
          Add
        </Text>
      </TouchableOpacity>

      <Text
        style={[styles.title,  {marginTop: 50 }]}
      >
        My Skills
      </Text>
    </View>
  )
}

