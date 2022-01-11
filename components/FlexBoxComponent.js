import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class FlexBoxComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Text>Box 1</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text>Box 2</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text>Box 3</Text>
        </View>
        <View style={[styles.box, styles.box1]}>
          <Text>Box 1</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text>Box 2</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text>Box 3</Text>
        </View>
        <View style={[styles.box, styles.box1]}>
          <Text>Box 1</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text>Box 2</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text>Box 3</Text>
        </View>
        <View style={[styles.box, styles.box1]}>
          <Text>Box 1</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text>Box 2</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text>Box 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20,
    flexWrap: "wrap",
  },
  box: {
    width: 70,
    height: 80,
  },
  box1: {
    //flex: 1,
    backgroundColor: "red",
  },
  box2: {
    //flex: 2,
    backgroundColor: "green",
  },
  box3: {
    //flex: 3,
    backgroundColor: "blue",
  },
});
