import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";

export default function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (title) => {
		// const newTodo = {
		//   id: Date.now().toString(),
		//   title: title
		// }

		// setTodos(todos.concat([ newTodo]))

		// setTodos((prevTodos) => {
		//   return [
		//     ...prevTodos,
		//     newTodo
		//   ]
		// })

		setTodos((prev) => [
			...prev,
			{
				id: Date.now().toString(),
				title,
			},
		]);
	};
	const removeTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	return (
		<View>
			<Navbar title="ToDo App!" />
			<View style={styles.container}>
				<MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});
