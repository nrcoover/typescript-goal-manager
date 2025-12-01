import { useRef, type FormEvent } from "react";

interface NewGoalProps {
	onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
	const goalTitle = useRef<HTMLInputElement>(null);
	const goalSummary = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredGoalTitle = goalTitle.current!.value;
		const enteredGoalSummary = goalSummary.current!.value;

		event.currentTarget.reset();
		onAddGoal(enteredGoalTitle, enteredGoalSummary);
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your Goal</label>
				<input id="goal" type="text" ref={goalTitle} />
			</p>
			<p>
				<label htmlFor="summary">Short Summary</label>
				<input id="summary" type="text" ref={goalSummary} />
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
};

export default NewGoal;
