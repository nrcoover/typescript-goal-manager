import { type FormEvent } from "react";

const NewGoal = () => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		new FormData(event.currentTarget);
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your Goal</label>
				<input id="goal" type="text" />
			</p>
			<p>
				<label htmlFor="summary">Short Summary</label>
				<input id="summary" type="text" />
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
};

export default NewGoal;
