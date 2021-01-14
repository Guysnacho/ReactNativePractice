import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/header'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setitems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Cheese'},
    {id: uuidv4(), text: 'Avocados'},
    {id: uuidv4(), text: 'Kale'},
    {id: uuidv4(), text: 'Irish Sea Moss'}
  ])
  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <FlatList 
      data={items}
      renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;