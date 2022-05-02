export default function Input(props) {
	const { todoText, onChange, onClick } = props;
	return (
		<div className="h-2/6 bg-indigo-300 flex flex-col items-center justify-center">
			<h1 className="text-3xl text-white">Simple Todolist</h1>
			<input
				className="w-1/5 p-2 mt-4 mb-3 text-gray-400"
				value={todoText}
				onChange={onChange}
				placeholder="Please enter todo"
			/>
			<button
				onClick={onClick}
				className="px-3 py-2 duration-500 hover:px-7 bg-white text-gray-400">
				Add
			</button>
		</div>
	);
}
