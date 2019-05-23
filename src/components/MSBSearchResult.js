import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class extends React.Component {
    render () {
        return(<Text style={styles.card}>{this.props.card.name}</Text>);
    }
}

const styles = StyleSheet.create({
    card: {
      fontSize: 20,
      height: 44,
    },
});