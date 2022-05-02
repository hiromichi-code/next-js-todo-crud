export const Complete = (props) => {
	const { completeTodos, onClickBack } = props;
	return (
		<div className="w-1/2 bg-indigo-500 text-white">
			<h1 className="my-3 text-center">CompleteArea</h1>
			{completeTodos.map((todo, index) => {
				return (
					<ul>
						<div key={todo} className="w-64 mx-auto mb-5 flex justify-center">
							<li className="text-white py-2">{todo}</li>
							<button
								onClick={() => onClickBack(index)}
								className="bg-white text-indigo-400 py-2 px-3 ml-2">
								戻る
							</button>
						</div>
					</ul>
				);
			})}
		</div>
	);
};
