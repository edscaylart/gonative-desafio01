import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 0 : 20,
    padding: 15,
    height: 50,
    shadowColor: '#DA6C6C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default Header;