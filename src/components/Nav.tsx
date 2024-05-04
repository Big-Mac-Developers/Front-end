import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { KanbanIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
	return (
		<header className="flex items-center justify-between px-4 md:px-[12.5%] border-b py-3 flex-wrap gap-4 mb-10 md:mb-24">
			<nav className="flex items-center gap-x-1 md:gap-x-6 flex-wrap">
				<Button size="icon" variant="ghost">
					<Link to="/">
						<KanbanIcon />
					</Link>
				</Button>
				<Button variant="link" asChild>
					<Link to="/assignments">View All Assignments</Link>
				</Button>
			</nav>

			<nav className="flex items-center gap-3 flex-wrap">
				<ModeToggle />
				<Button variant="outline" asChild>
					<Link to="/login">Login</Link>
				</Button>
			</nav>
		</header>
	);
}
