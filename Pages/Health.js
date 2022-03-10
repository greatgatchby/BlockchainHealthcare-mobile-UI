import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Section from '../Components/Reusable/Section';
import DeviceList from '../Components/Device/DeviceList';
import styles from '../styles/styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AppointmentsList from '../Components/Appointents/AppointmentsList';

const HealthRecord = ({navigation}) => {
  return (
    <ScrollView>
      <Section title={'Appointments'}>
        <AppointmentsList />
      </Section>
      <View style={styles.centeredView}>
        <Pressable
          style={[styles.button, styles.buttonOpen, styles.m2]}
          onPress={() => navigation.navigate('Book an Appointment')}>
          <Text>Book an Appointment</Text>
        </Pressable>
      </View>
      <Section title={'Apps/Devices'}>
        <DeviceList />
      </Section>
      <Section title={'Encounters'}>
        <Text>Steps</Text>
      </Section>
      <Section title={'Prescriptions'}>
        <Text>Steps</Text>
      </Section>
    </ScrollView>
  );
};

export default HealthRecord;
