import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Cheese'},
    {id: uuidv4(), text: 'Avocados'},
    {id: uuidv4(), text: 'Kale'},
    {id: uuidv4(), text: 'Irish Sea Moss'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  
  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: uuidv4(), text},...prevItems]
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
