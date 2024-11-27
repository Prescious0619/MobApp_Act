import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Recover = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <TextInput
          label="New Password"
          placeholder="Enter your new password"
          style={styles.textInput}
          mode="outlined"
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm your new password"
          style={styles.textInput}
          mode="outlined"
          secureTextEntry
        />
        <View style={{ margin: 5 }}>
          <MyButton
            text="Reset"
            action={() => router.replace('login')} // Navigate back to login
            mode="contained"
            size="small"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Recover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
  },
  section: {
    width: '100%',
    padding: 20,
  },
  textInput: {
    margin: 10,
  },
});
