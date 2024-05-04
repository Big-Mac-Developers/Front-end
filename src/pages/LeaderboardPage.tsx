import { useParams } from "react-router-dom";

export default function LeaderboardPage() {
	const { id } = useParams();

	return (
		<div>
			<p>BIG MAC DEVELOPERS LEADERBOARD PAGE </p>
			<p>ID: {id}</p>
		</div>
	);
}
