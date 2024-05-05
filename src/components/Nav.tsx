import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { KanbanIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import AuthDialog from "./AuthDialog";

export default function Nav() {
	return (
		<header className="flex items-center justify-between px-4 md:px-[12.5%] border-b py-3 flex-wrap gap-4">
			<nav className="flex items-center gap-x-1 md:gap-x-6 flex-wrap">
				<Button size="icon" variant="ghost" asChild>
					<Link to="/">
						<KanbanIcon />
					</Link>
				</Button>
				<Button variant="link" asChild>
					<Link to="/units">Your Quests</Link>
				</Button>
			</nav>

			<nav className="flex items-center gap-3 flex-wrap">
				<ModeToggle />
				<AuthDialog />
			</nav>
		</header>
	);
}
