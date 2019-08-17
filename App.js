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
            time: {
                minutes: 25,
                seconds: 0,
            }, // time is messured in seconds. We transform to minutes in Timer.
            mode: pomodoroModes.pause,
            running: false
        }
    }

    componentDidMount() {
        this.timerCountDown()
    }


    timerCountDown= () => {
        setInterval(() => {
            
            if(this.state.time.seconds !== 0) {
                this.setState(prevState => ({
                    time: {
                        minutes: prevState.time.minutes,
                        seconds: prevState.time.seconds - 1,
                    }
                }))
            }

            else if (this.state.time.seconds === 0) {
                this.setState(prevState => ({
                    time: {
                        minutes: prevState.time.minutes - 1,
                        seconds: 59,
                    }
                }))
            }
        }, 1000)
    }


    render() {
        return (
            <View style={styles.container}>
                <Timer  minutes={this.state.time.minutes}
                        seconds={this.state.time.seconds}/>
                <Controller />
            </View>
        );
    }
}
