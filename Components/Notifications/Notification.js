import React from 'react';
import styles from '../../styles/styles';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Section from '../Reusable/Section';

const imageStyle = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});
const Notification = () => {
  return (
    <FlatList
      data={[
        {
          notifier: 'Arizona Specialist Hospital',
          notification: 'Upcoming Appointment',
          Details: '18th August 2020 - Dr Brenton Kub',
          imageUri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIZ76Kbq5E3g3SsGh3nZZqEUINi_6U7XqX-vbeZjBD0jDeoGETFrEnJtLTVQHdkGAKh8&usqp=CAU',
        },
        {
          notifier: 'Geico Insurance',
          notification: 'Insurance item paid',
          Details: 'item: appointment #12343',
          imageUri:
            'https://static.wikia.nocookie.net/logopedia/images/a/a1/GEICO_App_Icon.svg/revision/latest/scale-to-width-down/250?cb=20210303225018',
        },
      ]}
      renderItem={({item}) => (
        <View style={[styles.Notification]}>
          <Image
            style={imageStyle.logo}
            source={{
              uri: item.imageUri,
            }}
          />
          <Section title={item.notifier}>
            <Text>{item.notification}</Text> {'\n'}
            <Text style={styles.smallText}>{item.Details}</Text>
          </Section>
        </View>
      )}
    />
  );
};
export default Notification;
