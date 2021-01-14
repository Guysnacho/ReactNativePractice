import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;