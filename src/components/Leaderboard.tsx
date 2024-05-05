import { Progress } from "./ui/progress";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";

export default function LeaderBoard() {
	const teams = [
		{
			rank: "1",
			name: "Thunderbolts",
			score: "80",
		},
		{
			rank: "2",
			name: "Firebirds",
			score: "55",
		},
		{
			rank: "3",
			name: "Dragonflies",
			score: "30",
		},
		{
			rank: "4",
			name: "Phoenix",
			score: "60",
		},
		{
			rank: "5",
			name: "Eagles",
			score: "20",
		},
		{
			rank: "6",
			name: "Raptors",
			score: "30",
		},
		{
			rank: "7",
			name: "Cobras",
			score: "80",
		},
	];

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h1 className="md:text-4xl text-2xl font-bold text-nowrap">
					{"🏅 Leaderboard"}
				</h1>
				<h2 className="md:text-2xl text-xl font-bold text-nowrap opacity-90">
					Your Rank: 2
				</h2>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Rank</TableHead>
						<TableHead>Team Name</TableHead>
						<TableHead className="text-right">
							Experience points 🟢
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{teams.map((team) => (
						<TableRow key={team.rank}>
							<TableCell className="font-medium">
								{team.rank}
							</TableCell>
							<TableCell>{team.name}</TableCell>
							<TableCell className="flex justify-end gap-4">
								<Progress
									value={Number(team.score)}
									className="w-[60%]"
								/>
								<p>{team.score}/100</p>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
