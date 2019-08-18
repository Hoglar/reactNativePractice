import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Selfmade components
import Timer from "./components/timer.js";
import Controller from "./components/controller.js";

const pomodoroModes = {
    work: {
        flag: "work",
        time: 25
    },
    pause: {
        flag: "pause",
        time: 5
    },
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
                minutes: 0,
                seconds: 5,
            }, // time is messured in seconds. We transform to minutes in Timer.
            mode: pomodoroModes.work.flag,
            running: false
        }
    }

    changeMode(mode) {
        this.setState(prevState => ({
            time: {
                minutes: mode.time,
                seconds: 0
            },
            mode: mode.flag
        }))
    }

    startTimerCountDown = () => {
        if (!this.state.running) {
            this.setState(prevState => ({
                running: !prevState.running
            }))
            this.countdownIntervalID = setInterval(() => {
                console.log(this.countdownIntervalID);
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

                if (this.state.time.seconds === 0 && this.state.time.minutes === 0) {
                    if  (this.state.mode === pomodoroModes.work.flag) {
                        this.changeMode(pomodoroModes.pause)
                    }
                    else {
                        this.changeMode(pomodoroModes.work)
                    }
                }
            }, 1000)
        }
    }

    stopTimerCountdown = () => {
        if (this.state.running) {
            clearInterval(this.countdownIntervalID);

            this.setState(prevState => ({
                running: !prevState.running
            }))
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Timer  minutes={this.state.time.minutes}
                        seconds={this.state.time.seconds}/>
                <Controller stopTimerCountdown={this.stopTimerCountdown}
                            startTimerCountDown={this.startTimerCountDown}
                            running={this.state.running}/>
            </View>
        );
    }
}
