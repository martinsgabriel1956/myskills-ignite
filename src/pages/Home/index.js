import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

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

      <Button onPress={handleAddNewSkill} />

      <Text
        style={[styles.title, { marginVertical: 50 }]}
      >
        My Skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  )
}

