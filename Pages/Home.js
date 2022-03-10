import React from 'react';
import DeviceList from '../Components/Device/DeviceList';
import QrComponent from '../Components/PatientRecord/QRcode/qr.component';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import AccessNotification from '../Components/AccessRequest/AccessNotification';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {AccessProvider} from '../Components/Context/Appcontext';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from '../styles/styles';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

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
const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <AccessProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <AccessNotification
            institution={'Arizona State Specialist Hospital'}
            terms={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
            }
          />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title={'Aaron Shields'}>
              <View style={styles.centeredView}>
                <QrComponent />
                <Text>0x71C7656EC7ab88b098defB751B7401B5f6d8976F</Text>
              </View>
            </Section>
            <Section title="Date Of Birth">19/02/1953</Section>
            <Section title="Address">
              824 Moore Village Apt 18 Arizona US
            </Section>
            <Section title="Doctor">Dr Brenton Kub</Section>
            <Section title={'Devices/Apps'}>
              <DeviceList />
            </Section>
          </View>
        </ScrollView>
      </SafeAreaView>
    </AccessProvider>
  );
};

export default Home;
