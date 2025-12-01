import { useState } from "react";

import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";
import { CourseGoal } from "./types";

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	const handleAddGoal = (goal: string, summary: string) => {
		const newGoal: CourseGoal = {
			id: Math.random(),
			title: goal,
			description: summary,
		};

		setGoals((previousGoals) => {
			return [...previousGoals, newGoal];
		});
	};

	const handleDeleteGoal = (id: number) => {
		setGoals((previousGoals) => previousGoals.filter((goal) => goal.id !== id));
	};

	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>You Course Goals</h1>
			</Header>
			<NewGoal onAddGoal={handleAddGoal} />
			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</main>
	);
}
