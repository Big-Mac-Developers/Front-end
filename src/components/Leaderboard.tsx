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
			invoice: "1",
			paymentStatus: "Paid",
			totalAmount: "80",
			paymentMethod: "Credit Card",
		},
		{
			invoice: "2",
			paymentStatus: "Pending",
			totalAmount: "55",
			paymentMethod: "PayPal",
		},
		{
			invoice: "3",
			paymentStatus: "Unpaid",
			totalAmount: "30",
			paymentMethod: "Bank Transfer",
		},
		{
			invoice: "4",
			paymentStatus: "Paid",
			totalAmount: "60",
			paymentMethod: "Credit Card",
		},
		{
			invoice: "5",
			paymentStatus: "Paid",
			totalAmount: "20",
			paymentMethod: "PayPal",
		},
		{
			invoice: "6",
			paymentStatus: "Pending",
			totalAmount: "30",
			paymentMethod: "Bank Transfer",
		},
		{
			invoice: "7",
			paymentStatus: "Unpaid",
			totalAmount: "80",
			paymentMethod: "Credit Card",
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
						<TableHead>Name</TableHead>
						<TableHead className="text-right">
							Experience points
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{teams.map((team) => (
						<TableRow key={team.invoice}>
							<TableCell className="font-medium">
								{team.invoice}
							</TableCell>
							<TableCell>{team.paymentStatus}</TableCell>
							<TableCell className="flex justify-end gap-4">
								<Progress
									value={Number(team.totalAmount)}
									className="w-[60%]"
								/>
								<p>{team.totalAmount}/100</p>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
