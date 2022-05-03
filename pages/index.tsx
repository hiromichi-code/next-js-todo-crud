import Head from "next/head";
import Input from "./Input";
import { Incomplete } from "./components/Incomplete";
import { Complete } from "./components/Complete";
import { useState } from "react";

export default function Home() {
	const [todoText, setTodoText] = useState("");
	const [incompleteTodos, setIncompleteTodos] = useState([]);
	const [completeTodos, setCompleteTodos] = useState([]);

	const onChangeTodoText = (e) => setTodoText(e.target.value);

	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
	};

	const onClickDelete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	};

	const onClickComplete = (index) => {
		const newIncompleteTodos = [...incompleteTodos];
		newIncompleteTodos.splice(index, 1);
		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setIncompleteTodos(newIncompleteTodos);
	};

	const onClickBack = (index) => {
		const newOnClickBackTodos = [...completeTodos];
		newOnClickBackTodos.splice(index, 1);
		const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
		setCompleteTodos(newOnClickBackTodos);
		setIncompleteTodos(newInCompleteTodos);
	};

	return (
		<div className="w-screen">
			<Head>
				<title>Simple Todolist</title>
				<meta name="description" content="Simple Todolist" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="h-screen w-5/6 mx-auto">
				<Input
					todoText={todoText}
					onChange={onChangeTodoText}
					onClick={onClickAdd}
				/>
				<div className="h-4/6 w-full flex">
					<Incomplete
						incompleteTodos={incompleteTodos}
						onClickDelete={onClickDelete}
						onClickComplete={onClickComplete}
					/>
					<Complete completeTodos={completeTodos} onClickBack={onClickBack} />
				</div>
			</div>
		</div>
	);
}
