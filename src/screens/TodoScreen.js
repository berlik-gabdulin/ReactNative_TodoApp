import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const TodoScreen = ({ goBack }) => {
	return (
		<View>
			<Text>TodoScreen</Text>
			<Button title="Назад" onPress={goBack} />
		</View>
	);
};

const styles = StyleSheet.create({});
