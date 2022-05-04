export const Incomplete = (props) => {
	const { posts, onClickDelete, onClickComplete } = props;

	return (
		<div className="w-1/2 bg-indigo-400">
			<h1 className="my-3 text-center text-white">IncompleteArea</h1>
			{posts.map((todo, index) => {
				return (
					<ul key={todo}>
						<div className="w-64 mx-auto mb-5 flex justify-center">
							<li className="text-white py-2">{todo}</li>
							<button
								onClick={() => onClickComplete(index)}
								className="bg-white text-indigo-400 py-2 px-3 ml-2">
								完了
							</button>
							<button
								onClick={() => onClickDelete(index)}
								className="bg-white text-indigo-400 py-2 px-3 ml-2">
								削除
							</button>
						</div>
					</ul>
				);
			})}
		</div>
	);
};
