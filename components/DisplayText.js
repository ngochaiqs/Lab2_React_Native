import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class DisplayText extends Component {
  render() {
    return (
      <View>
        {this.props.children}
        <Text style={{ fontSize: this.props.size }}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
