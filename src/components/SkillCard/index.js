import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const SkillCard = () => {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      key="1"
    >
      <Text
        style={styles.textSkill}
      >
        skill
      </Text>
    </TouchableOpacity>
  )
}