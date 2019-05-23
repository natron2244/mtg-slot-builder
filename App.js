import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import * as cardData from './assets/scryfall-default-cards-small.json';
import _ from "lodash"

// Move to a card service
const cardsData = cardData["cards"];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      cards: cardsData,
    };
  }

  filterResults() {
    return this.state.cards.filter((card) => card.name.includes(this.state.searchText));
  }
  render() {
    const filterCards = this.filterResults();
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={(searchText) => this.setState({searchText})}/>
        <FlatList
        data={filterCards}
        keyExtractor={(item, index) => item.id}
        renderItem = {({item}) => <Text style={styles.card}>{item.name}</Text>}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 100,
    fontSize: 20,
  },
  card: {
    fontSize: 20,
    height: 44,
  }
});
