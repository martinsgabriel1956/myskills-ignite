import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export const Button = () => {
  return (
    <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
        // onPress={handleAddNewSkill}
      >
        <Text
          style={styles.buttonText}
        >
          Add
        </Text>
      </TouchableOpacity>
  )
}