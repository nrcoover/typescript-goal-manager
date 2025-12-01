import { useState } from "react";

import goalsImg from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

type CourseGoal = {
	id: number;
	title: string;
	description: string;
};

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	const handleAddGoal = () => {
		const newGoal: CourseGoal = {
			id: Math.random(),
			title: "Placeholder title",
			description: "Placeholder description",
		};

		setGoals((previousGoals) => {
			return [...previousGoals, newGoal];
		});
	};

	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>You Course Goals</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<ul>
				{goals.map((goal) => {
					return (
						<li key={goal.id}>
							<CourseGoal title={goal.title}>
								<p>{goal.description}</p>
							</CourseGoal>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
