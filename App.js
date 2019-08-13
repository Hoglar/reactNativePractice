import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
        }
    }


    render() {
        return (
          <View style={styles.container}>
            <Text>sd</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
