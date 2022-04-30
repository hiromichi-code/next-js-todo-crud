import Head from "next/head";
import { Input } from "./Input";
import { InComplete } from "./InComplete";
import { Complete } from "./Complete";
import { useState } from "react";

export default function Home() {
	const [todoText, setTodoText] = useState("");
	const [inCompleteTodos, setInCompleteTodos] = useState([]);
	const [completeTodos, setCompleteTodos] = useState([]);

	const onChangeTodoText = (e) => {
		setTodoText(e.target.value);
	};

	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...inCompleteTodos, todoText];
		setInCompleteTodos(newTodos);
		setTodoText("");
	};

	const onClickDelete = (index) => {
		const newTodos = [...inCompleteTodos];
		newTodos.splice(index, 1);
		setInCompleteTodos(newTodos);
	};

	const onClickComplete = (index) => {
		const newInCompleteTodos = [...inCompleteTodos];
		newInCompleteTodos.splice(index, 1);
		const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setInCompleteTodos(newInCompleteTodos);
	};

	const onClickBack = (index) => {
		const newOnClickBackTodos = [...completeTodos];
		newOnClickBackTodos.splice(index, 1);
		const newInCompleteTodos = [inCompleteTodos, completeTodos[index]];
		setCompleteTodos(newOnClickBackTodos);
		setInCompleteTodos(newInCompleteTodos);
	};

	return (
		<div className="w-screen">
			<Head>
				<title>Simple Todolist</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="h-screen w-5/6 mx-auto">
				<Input
					todoText={todoText}
					onChange={onChangeTodoText}
					onClick={onClickAdd}
				/>
				<div className="h-4/6 w-full flex">
					<InComplete
						onClickDelete={onClickDelete}
						onClickComplete={onClickComplete}
					/>
					<Complete onClickBack={onClickBack} />
				</div>
			</div>
		</div>
	);
}