import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
    >
      <Text
        style={styles.textSkill}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  )
}