import { ReactNode } from "react";
import { CourseGoal as Goal } from "../types";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
	goals: Goal[];
	onDeleteGoal: (id: number) => void;
}

const maximumGoalsCount = 6;

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
	if (goals.length === 0) {
		return (
			<InfoBox mode="hint">
				Life can feel bland without some goals... why not spice it up and add
				one?
			</InfoBox>
		);
	}

	let warningBox: ReactNode;

	if (goals.length > maximumGoalsCount) {
		warningBox = (
			<InfoBox mode="warning" severity="medium">
				Hm... It's good to have ambition, but are you spreading yourself too
				thin? Why not try focusing on fewer goals for now?
			</InfoBox>
		);
	}

	return (
		<>
			{warningBox}
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
