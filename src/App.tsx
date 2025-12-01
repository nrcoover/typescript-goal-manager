import goalsImg from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

export default function App() {
	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>You Course Goals</h1>
			</Header>
			<CourseGoal title="Learn React + TypeScript">
				<p>Learn it from the ground up.</p>
			</CourseGoal>
		</main>
	);
}
