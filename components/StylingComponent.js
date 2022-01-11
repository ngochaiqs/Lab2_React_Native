import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class StylingComponent extends Component {
  render() {
    return (
      <View style={{ ...styles.container, marginTop: 250 }}>
        <Text
          style={[
            styles.content,
            { fontSize: 30, color: "red", fontWeight: "bold" },
          ]}
        >
          Styling Component
        </Text>
        <Text style={styles.content}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    fontStyle: "italic",
    fontSize: 20,
  },
});
