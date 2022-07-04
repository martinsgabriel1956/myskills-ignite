import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
    setMySkills(oldState => [...oldState, newSkill])
  };

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
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
        onPress={handleAddNewSkill}
      >
        <Text
          style={styles.buttonText}
        >
          Add
        </Text>
      </TouchableOpacity>

      <Text
        style={[styles.title, { marginVertical: 50 }]}
      >
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity
            style={styles.buttonSkill}
            key={skill}
          >
            <Text
              style={styles.textSkill}
            >
              {skill}
            </Text>
          </TouchableOpacity>
        ))
      }

    </View>
  )
}

