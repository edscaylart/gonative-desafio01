import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <View style={styles.container}>
    <Text style={styles.titleStyle}>{post.title}</Text>
    <Text style={styles.authorStyles}>{post.author}</Text>
    <View style={styles.separator} />
    <Text style={styles.contentStyle}>{post.content}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    padding: 30,
    shadowColor: '#DA6C6C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
  },
  titleStyle: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16
  },
  authorStyles: {
    color: '#999999',
    fontSize: 11
  },
  separator: {
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },
  contentStyle: {
    marginTop: 7,
    color: '#666666'
  } 
});

export default Post;
