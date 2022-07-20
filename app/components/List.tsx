import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

const List = ({item}:any) => {
  return (
    <View>
        <Image
        source={{ uri: `${item.image}` }}
        style={styles.img}
      />
        <Text>{item.title}</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    img: {
      width: 200,
      height: 200,
    },
  });