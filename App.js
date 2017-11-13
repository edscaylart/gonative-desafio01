import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Post />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
