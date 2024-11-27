import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.headerContainer}>
        <ImageBackground
source={require('../../../assets/header.jpg')}

          style={styles.headerBackground}
        >
          <View style={styles.nameTitleContainer}>
            <Text
              style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}
            >
              Prescious Grace Pajo
            </Text>
            <Text
              style={[styles.username, isDarkMode ? styles.darkText : styles.lightText]}
            >
              @presciouspajo19@gmail.com
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.avatarContainer}>
        <Image
source={require('../../../assets/profile_me.jpg')}
style={styles.avatar}
        />
      </View>

      <TouchableOpacity
        style={[styles.toggleContainer, isDarkMode && styles.darkToggleContainer]}
        onPress={toggleDarkMode}
      >
        <Icon
          name={isDarkMode ? 'light-mode' : 'dark-mode'}
          size={24}
          color={isDarkMode ? '#fff' : '#000'}
          style={styles.icon}
        />
        <Text style={[styles.toggleText, isDarkMode && styles.darkToggleText]}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Text>
        <Switch
          onValueChange={toggleDarkMode}
          value={isDarkMode}
          thumbColor={isDarkMode ? '#2214CCE' : '#2214CCE'}
          trackColor={{ false: '#ff9999', true: '#ff9999' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  darkContainer: {
    backgroundColor: '#2c2c2c',
  },

  // Header Styles
  headerContainer: {
    width: '100%',
    height: 200,
    borderBottomWidth: 4,
    borderBottomColor: '#132C67',
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  nameTitleContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    marginTop: -2,
  },
  lightText: {
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  darkText: {
    color: '#F4C2C2',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  // Avatar Styles
  avatarContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#CAF0F8',
  },

  // Dark Mode Toggle Styles
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#ffe5ff',
    margin: 20,
    borderWidth: 2,
    borderColor: '#0C0404',
    justifyContent: 'flex-start',
  },
  toggleText: {
    marginRight: 10,
    fontSize: 18,
    color: '#000',
  },
  darkToggleContainer: {
    backgroundColor: '#2c2c2c',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#132C67',
  },
  darkToggleText: {
    color: '#F4C2C2',
  },
  icon: {
    marginRight: 5,
  },
});

export default Profile;
