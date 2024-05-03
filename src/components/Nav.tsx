import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { KanbanIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
	return (
		<header className="flex items-center justify-between px-[12.5%] border-b py-3">
			<nav className="flex items-center gap-6">
				<Button size="icon" variant="ghost">
					<Link to="/">
						<KanbanIcon />
					</Link>
				</Button>
				<Button variant="link" asChild>
					<Link to="/leaderboard">Leaderboard</Link>
				</Button>
				<Button variant="link" asChild>
					<Link to="/assignments">View All Assignments</Link>
				</Button>
			</nav>

			<nav className="flex items-center gap-3">
				<ModeToggle />
				<Button variant="outline" asChild>
					<Link to="/login">Login</Link>
				</Button>
			</nav>
		</header>
	);
}
