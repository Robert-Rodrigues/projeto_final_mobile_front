import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { IconButton, Provider, Snackbar } from 'react-native-paper';
import useSWR from 'swr';

const windowWidth = Dimensions.get('window').width;

const fetcher = (url) => fetch(url).then((response) => response.json());

const Feed = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const { data: posts, error: postsError, mutate } = useSWR(
    'https://api-mobile.herokuapp.com/users/1/posts',
    fetcher
  );

  if (postsError) {
    return <Text>Error loading posts</Text>;
  }

  if (!posts) {
    return <Text>Loading posts...</Text>;
  }

  const convertBase64ToImage = (base64String) => {
    return `data:image/jpeg;base64,${base64String}`;
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`https://api-mobile.herokuapp.com/users/1/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setShowSnackbar(true);
        mutate();
      } else {
        console.log(`Failed to delete post with ID: ${postId}`);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Provider>
      <View style={styles.headerContainer}>
        <IconButton
          icon="upload"
          size={25}
          onPress={() => {
            // Lógica para manipular o upload de imagem
          }}
          style={styles.uploadButton}
        />
      </View>
      <ScrollView style={styles.container}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.profilePicture }} style={styles.profilePicture} />
              <Text style={styles.username}>{post.username}</Text>
            </View>
            <View style={styles.postInfo}>
              <Image
                source={{ uri: convertBase64ToImage(post.content) }}
                style={styles.contentImage}
              />
              <IconButton
                icon="delete"
                size={25}
                onPress={() => handleDeletePost(post.id)}
                style={styles.deleteButton}
              />
              <Text style={styles.likes}>{post.likes}❤️ 1.000 curtidas</Text>
              <Text style={styles.subtitle}>{post.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => setShowSnackbar(false)}
        duration={3000}
        style={styles.snackbar}
      >
        Post deletado com sucesso.
      </Snackbar>
    </Provider>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  uploadButton: {
    marginRight: 10,
  },
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postImage: {
    width: windowWidth,
    height: windowWidth,
  },
  subtitle: {
    paddingLeft: 10,
    fontSize: 14,
    marginVertical: 0,
  },
  likes: {
    paddingLeft: 10,
    fontSize: 14,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  contentImage: {
    flex: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  snackbar: {
    marginBottom: 20,
  },
});
