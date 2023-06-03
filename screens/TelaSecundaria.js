import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.profileContainer}>
          <Card.Cover source={require('../assets/luffy.jpg')} style={styles.profilePicture} />
        </View>
        <Card.Content>
          <Text style={styles.username}>Pierre Aronnax</Text>
          <Text style={styles.description}>
            Olá, sou Pierre! Estou aqui para compartilhar minha vida e me conectar com novas pessoas.
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Idade: </Text> 22 anos ⭐️🎂
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Localização: </Text> Recife, Brasil 📍🇧🇷
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Interesses: </Text> Viagens ✈️, fotografia 📷, música 🎵
          </Text>
        </Card.Content>
      </Card>
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
  card: {
    width: '80%',
    marginBottom: 30,
    padding: 10,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#6B6E72',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#6B6E72',
  },
  infoLabel: {
    fontWeight: 'bold',
  },
});
