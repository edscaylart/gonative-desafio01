import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  state = {
    posts: [{
      id: 1,
      title: 'Aprendendo React Native',
      author: 'Diego Schell Fernandes',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ultricies justo. Fusce lobortis orci erat, vel elementum nibh iaculis non. Praesent nisl nisi, hendrerit sed urna at, elementum consectetur magna. Fusce nec sem quis justo luctus rhoncus at congue metus. Orci varius natoque penatibus et magnis dis parturient montes.'
    }, {
      id: 2,
      title: 'Aprendendo React Native',
      author: 'Diego Schell Fernandes',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ultricies justo. Fusce lobortis orci erat, vel elementum nibh iaculis non. Praesent nisl nisi, hendrerit sed urna at, elementum consectetur magna. Fusce nec sem quis justo luctus rhoncus at congue metus. Orci varius natoque penatibus et magnis dis parturient montes.'
    }, {
      id: 3,
      title: 'Aprendendo React Native',
      author: 'Diego Schell Fernandes',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ultricies justo. Fusce lobortis orci erat, vel elementum nibh iaculis non. Praesent nisl nisi, hendrerit sed urna at, elementum consectetur magna. Fusce nec sem quis justo luctus rhoncus at congue metus. Orci varius natoque penatibus et magnis dis parturient montes.'
    }, {
      id: 4,
      title: 'Aprendendo React Native',
      author: 'Diego Schell Fernandes',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ultricies justo. Fusce lobortis orci erat, vel elementum nibh iaculis non. Praesent nisl nisi, hendrerit sed urna at, elementum consectetur magna. Fusce nec sem quis justo luctus rhoncus at congue metus. Orci varius natoque penatibus et magnis dis parturient montes.'
    }]
  };

  renderPosts() {
    return this.state.posts.map(post => <Post key={post.id} post={post} />);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="GoNativeApp" />
        <ScrollView>
          { this.renderPosts() }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE7777',
  },
});
