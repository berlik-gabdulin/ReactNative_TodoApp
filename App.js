import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
	const [todoId, setTodoId] = useState("1");
	const [todos, setTodos] = useState([
		{
			id: "1",
			title: "Выучить Реакт Натив",
		},
		{
			id: "2",
			title: "написать приложение",
		},
	]);

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

	let content = (
		<MainScreen
			todos={todos}
			addTodo={addTodo}
			removeTodo={removeTodo}
			openTodo={setTodoId}
		/>
	);

	if (todoId) {
		const selectedTodo = todos.find((todo) => todo.id === todoId);
		content = (
			<TodoScreen
				goBack={() => {
					setTodoId(null);
				}}
				todo={selectedTodo}
				removeTodo={removeTodo}
			/>
		);
	}

	return (
		<View>
			<Navbar title="ToDo App!" />
			<View style={styles.container}>{content}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});
