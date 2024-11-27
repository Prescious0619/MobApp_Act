import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.section, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/whale.jpg')} style={styles.logo} />
      </View>
      <View style={styles.section}>
        <TextInput
          label="Full name"
          placeholder="Full name"
          style={styles.textInput}
          mode="outlined"
        />
        <TextInput
          label="Email"
          placeholder="Email"
          style={styles.textInput}
          mode="outlined"m
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          placeholder="Password"
          style={styles.textInput}
          mode="outlined"
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm Password"
          style={styles.textInput}
          mode="outlined"
          secureTextEntry
        />
        <View style={{ margin: 5 }}>
          <MyButton
            text="Login"
            action={() => router.back()}
            mode="contained"
            size="small"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
  },
  section: {
    flex: 1,
    width: '100%',
    padding: 20, 
    marginTop: -60,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginTop: 10,
  },
  textInput: {
    margin: 5,

  },
});
