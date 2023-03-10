import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import { empleado, empleadoContext } from './empleadoInterface';
import { useContext } from 'react';

export default function UseContext() {

  const { image, id, name, joinedDate, expireDate, web, phone } = useContext<empleado>(empleadoContext)

  return (
    <View style={styles.card}>
    <Image style={styles.image} source={require('/assets/favicon.png')} />
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{'ID: ' + id} - {'Nombre: ' + name}</Text>
      <Text style={styles.joinedDate}>Se unió: {joinedDate}</Text>
      <Text style={styles.expireDate}>Expira: {expireDate}</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.contact}>{web}</Text>
        <Text style={styles.contact}>{phone}</Text>
      </View>
    </View>
  </View>
  );
}