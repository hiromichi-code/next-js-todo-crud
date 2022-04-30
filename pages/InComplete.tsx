export const InComplete = (props) => {
	const { inCompleteTodos, onClickDelete, onClickComplete } = props;
	return (
		<div className="w-1/2 bg-indigo-400 text-white">
			<h1 className="mt-3 text-center">IncompleteArea</h1>
			{inCompleteTodos.map((todo, index) => {
				return (
					<div key={todo}>
						<ul>
							<li>{todo}</li>
							<button onClick={() => onClickComplete(index)}>完了</button>
							<button onClick={() => onClickDelete(index)}>削除</button>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
