import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});
const QrComponent = () => {
  return (
    <View>
      <Image
        style={[styles.logo]}
        source={{
          uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example',
        }}
      />
    </View>
  );
};

export default QrComponent;
