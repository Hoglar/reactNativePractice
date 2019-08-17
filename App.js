import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

let id = 0;

const Todo = function(props) {
    return (
        <Text>{props.todo.text} {props.todo.id}</Text>
    )
}

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
        }
    }

    addTodo() {
        alert("time to", "Shine")
        const text = "New Todo";
        this.setState({
            todos: [
                ...this.state.todos,
                {id: id++, text: text}
            ]
        })
    }


    render() {
        return (
          <View style={styles.container}>
            {this.state.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
            <Button
                title="Click Me"
                onPress={this.addTodo.bind(this)}
            />
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
