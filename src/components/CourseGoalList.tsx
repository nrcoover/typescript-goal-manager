import { CourseGoal as Goal } from "../types";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
	goals: Goal[];
}

const CourseGoalList = ({ goals }: CourseGoalListProps) => {
	return (
		<>
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
		</>
	);
};

export default CourseGoalList;
