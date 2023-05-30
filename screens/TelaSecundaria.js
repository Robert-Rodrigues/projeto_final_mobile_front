import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/luffy.jpg')}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Pierre Aronnax</Text>
        <Text style={styles.description}>
          Olá, sou Pierre! Estou aqui para compartilhar minha vida e me conectar com novas pessoas.
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Idade: 22 anos</Text>
        <Text style={styles.infoText}>Localização: Recife, Brasil</Text>
        <Text style={styles.infoText}>Interesses: Viagens, fotografia, música</Text>
      </View>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 30,
    color: '#6B6E72',
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#6B6E72',
  },
});
