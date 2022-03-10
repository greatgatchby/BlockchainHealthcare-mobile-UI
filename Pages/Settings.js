import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Section from '../Components/Reusable/Section';
import styles from '../styles/styles';
import Switch from 'react-native/Libraries/Components/Switch/Switch';

const imageStyle = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
      <Section title={'Access Control'}>
        <View style={[styles.card, styles.flex, styles.centeredView]}>
          <Image
            style={imageStyle.logo}
            source={{
              uri: 'https://www.symbiosis.ae/images/doctors/Dr_Ateeque1.png',
            }}
          />
          <Text style={styles.settingsText}>Dr Brenton Kub</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </Section>
      <Section title={'Notifications'}>
        <View style={[styles.card, styles.flex, styles.centeredView]}>
          <Image
            style={imageStyle.logo}
            source={{
              uri: 'https://www.symbiosis.ae/images/doctors/Dr_Ateeque1.png',
            }}
          />
          <Text style={styles.settingsText}>Dr Brenton Kub</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </Section>
      <Section title={'Notifications'}>
        <View style={[styles.card, styles.flex, styles.centeredView]}>
          <Text style={styles.settingsText}>Dr Brenton Kub</Text>
        </View>
      </Section>
    </ScrollView>
  );
};

export default Settings;
