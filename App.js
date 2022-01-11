import { StatusBar } from "expo-status-bar";
import { Component } from "react";

import { Button, StyleSheet, Text, View } from "react-native";
import DisplayText from "./components/DisplayText";
import FlexBoxComponent from "./components/FlexBoxComponent";
import StylingComponent from "./components/StylingComponent";

class App extends Component {
  state = {
    message: "Hello React Native Application!",
    number: 0,
  };

  render() {
    return (
      <FlexBoxComponent></FlexBoxComponent>
      // <StylingComponent></StylingComponent>
      // <View style={styles.container}>
      //   {/* <Text>{this.state.message}</Text>
      //   <Text>{this.state.number}</Text> */}
      //   <DisplayText content={this.state.message} size={20}></DisplayText>
      //   <DisplayText content={this.state.number} size={25}>
      //     <Text style={{ fontSize: 30 }}>The number is : </Text>
      //   </DisplayText>
      //   <DisplayText content="Display with props" size={30}></DisplayText>
      //   <Button
      //     title="Increase"
      //     onPress={() => {
      //       this.setState({ ...this.state, number: this.state.number + 1 });
      //     }}
      //   ></Button>
      //   <StatusBar style="auto" />
      // </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
