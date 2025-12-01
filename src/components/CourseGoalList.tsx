import { CourseGoal as Goal } from "../types";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
	goals: Goal[];
	onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
	return (
		<>
			<ul>
				{goals.map((goal) => {
					return (
						<li key={goal.id}>
							<CourseGoal
								id={goal.id}
								title={goal.title}
								onDelete={onDeleteGoal}
							>
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
