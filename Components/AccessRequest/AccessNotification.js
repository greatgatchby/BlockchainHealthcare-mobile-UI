import {
  Alert,
  Modal,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from '../../styles/styles';
import React, {useContext, useEffect} from 'react';
import {AppContext} from '../Context/Appcontext';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const AccessNotification = ({institution, terms}) => {
  const [accessRequest, setAccessRequest] = useContext(AppContext);
  useEffect(
    () =>
      setAccessRequest({
        ...accessRequest,
        state: true,
      }),
    [],
  );
  return (
    <Modal
      animationType="slide"
      propagateSwipe={true}
      visible={accessRequest.state}
      presentationStyle={'fullScreen'}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setAccessRequest(!accessRequest.state);
      }}>
      <View style={styles.modalView}>
        <ScrollView contectContainerStyle={styles.centeredView}>
          <Section title={`Access Request: ${institution}`}>
            <Text style={styles.modalText}>{terms}</Text>
          </Section>
        </ScrollView>
        <Section>
          <Pressable
            style={[styles.button, styles.buttonOpen, styles.m2]}
            onPress={() =>
              setAccessRequest({
                ...accessRequest,
                state: false,
              })
            }>
            <Text style={styles.textStyle}>Grant access</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose, styles.m2]}
            onPress={() =>
              setAccessRequest({
                ...accessRequest,
                state: false,
              })
            }>
            <Text style={styles.textStyle}>Deny Access</Text>
          </Pressable>
        </Section>
      </View>
    </Modal>
  );
};

export default AccessNotification;
