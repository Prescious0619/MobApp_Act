import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.section, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/whale.jpg')} style={styles.logo} />
        <Text variant="displaySmall" style={styles.title}>
          Login
        </Text>
      </View>
      <View style={styles.section}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          label="Email"
          placeholder="Email"
          style={styles.textInput}
          keyboardType="email-address"
          mode="outlined"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          label="Password"
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={!isShowPassword}
          mode="outlined"
          right={
            <TextInput.Icon
              onPress={() => setIsShowPassword(!isShowPassword)}
              icon={isShowPassword ? 'eye' : 'eye-off'}
            />
          }
        />
      </View>
      <View style={styles.section}>
        <View style={{ margin: 5 }}>
          <MyButton
            text="Login"
            action={() => router.replace('dashboard')}
            mode="contained"
            size="small"
          />
        </View>
        <View style={{ margin: 5 }}>
          <MyButton
            text="Sign Up"
            action={() => router.push('register')}
            mode="contained"
            size="small"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Button
            onPress={() => router.push('recover')}
            mode="text"
            textColor="#000" // Set text color to white
          >
            Forgot Password?
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAF0F8', // Matching background color
  },
  section: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  title: {
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textInput: {
    margin: 10,
  },
});
