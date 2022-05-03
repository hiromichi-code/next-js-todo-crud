import db from "../../lib/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export const Incomplete = (props) => {
	const { incompleteTodos, onClickDelete, onClickComplete } = props;
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const postData = collection(db, "posts");
		getDocs(postData).then((snapShot) => {
			setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
		});
	}, []);

	return (
		<div className="w-1/2 bg-indigo-400">
			<h1 className="my-3 text-center text-white">IncompleteArea</h1>
			{incompleteTodos.map((todo, index) => {
				return (
					<ul>
						<div key={todo} className="w-64 mx-auto mb-5 flex justify-center">
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
