export const Complete = (props) => {
	const { completeTodos, onClickBack } = props;
	return (
		<div className="w-1/2 bg-indigo-500 text-white">
			<h1 className="mt-3 text-center">CompleteArea</h1>
			{completeTodos.map((todo, index) => {
				return (
					<div key={todo}>
						<ul>
							<li>{todo}</li>
							<button onClick={() => onClickBack(index)}>戻る</button>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
