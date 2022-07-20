import React, {useState, useEffect} from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';

const index = ({ route, navigation }:any) => {
    const [item, setItem] = useState();

    useEffect(() => {
        let { item } = route.params;
        setItem(item)
    }, [item])
    console.log(item)
  return (
    <View>
        <Text>heree</Text>
        {/* <Image style={styles.img} source={{ uri: `${item.image}` }}/>
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View> */}
    </View>
    
  )
}

export default index