import React from "react";
import PropTypes from "prop-types";
import {View, Button, Text} from "react-native";

export default class Controller extends React.Component {
    static propTypes = {
        running: PropTypes.bool,
        startTimerCountDown: PropTypes.func,
        stopTimerCountdown: PropTypes.func,
    }

    render() {
        return(
            <View>
                <Text>{this.props.running ? "Running" : "Not running"}</Text>
                <Button title="Start" onPress={this.props.startTimerCountDown}/>
                <Button title="Stop" onPress={this.props.stopTimerCountdown}/>
            </View>
        )
    }
}
