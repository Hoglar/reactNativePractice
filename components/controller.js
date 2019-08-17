import React from "react";
import PropTypes from "prop-types";
import {View, Button} from "react-native";

export default class Controller extends React.Component {
    render() {
        return(
            <View>
                <Button title="Start"/>
                <Button title="Stop"/>
            </View>
        )
    }
}
