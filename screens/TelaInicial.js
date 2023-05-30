import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.profilePicture}
        />
        <Text style={styles.description}>
          Bem-vindo(a) à Harmony Connect, a melhor plataforma para se conectar e compartilhar com amigos e familiares.
        </Text>
        <Text style={styles.description}>
          Explore postagens, faça amizades, curta e comente. Vamos começar!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaSecundaria')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  profilePicture: {
    width: 500,
    height: 250,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    color: '#6B6E72',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E88E5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
