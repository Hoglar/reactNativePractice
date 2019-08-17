import React from "react";
import PropTypes from "prop-types";
import {View, Text} from "react-native";


// The Timer component should render the time in a nice format.
// It should get the time data as props, this means it should
// not change any data.
export default class Timer extends React.Component {
    static propTypes = {
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired
    }

    render() {
        return (
            <View>
                <Text>{this.props.minutes} : {this.props.seconds}</Text>
            </View>
        )
    }
}
