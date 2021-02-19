import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const TodoScreen = ({ removeTodo, goBack, todo }) => {
	return (
		<View>
			<Text>{todo.title}</Text>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<Button title="Назад" onPress={goBack} />
				</View>
				<View style={styles.button}>
					<Button
						title="Удалить"
						color="#aa0000"
						onPress={() => console.log(`To remove todo with id ${todo.id}`)}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		width: "40%",
	},
});
