import React from 'react';
import {StyleSheet, View} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {
  return (
    <View style={styles.container}>
      <CountDown
        until={259200}
        size={20}
        timeLabels={{d: 'DAY(S)', h: 'HOUR(S)', m: 'MINUTE(S)', s: 'SECOND(S)'}}
        // eslint-disable-next-line react-native/no-inline-styles
        digitTxtStyle={{color: '#FFF', fontSize: 24}}
        // eslint-disable-next-line react-native/no-inline-styles
        digitStyle={{
          backgroundColor: '#000',
          height: 40,
          marginLeft: 5,
          marginRight: 5,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        timeLabelStyle={{color: '#FFF', fontSize: 8, marginTop: 8}}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{padding: 0}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7900e5',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
