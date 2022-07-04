import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

import { Button, SkillCard } from '../../components';

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

      <Button />

      <Text
        style={[styles.title, { marginVertical: 50 }]}
      >
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <SkillCard />
        ))
      }

    </View>
  )
}

