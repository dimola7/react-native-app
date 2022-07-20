import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
// import { Item } from '../../types/item';

const index = ({item}:any) => {
  return (
    <View style={styles.card}>
        <Image source={{ uri: `${item.image}` }}
        style={styles.img}/>
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    </View>
  )
}

export default index