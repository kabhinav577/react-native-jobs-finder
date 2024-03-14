import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  return (
    <View>
      <View>
        <Text style={styles.userName}>Hi" I'm Abhinav</Text>
      </View>
    </View>
  );
};

export default Welcome;
