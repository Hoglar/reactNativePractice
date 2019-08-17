import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Selfmade components
import Timer from "./components/timer.js";
import Controller from "./components/controller.js";

const pomodoroModes = {
    work: "work",
    pause: "pause",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0, // time is messured in seconds. We transform to minutes in Timer.
            mode: pomodoroModes.pause,
            running: false
        }
    }


    render() {
        return (
            <View>
                <Timer time={this.state.time} />
                <Controller />
            </View>
        );
    }
}
