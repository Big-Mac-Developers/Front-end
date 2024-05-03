import { Link, Route, Routes } from "react-router-dom";
import Kanban from "./pages/Kanban";
import { KanbanIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

function App() {
	return (
		<>
			<header className="flex items-center justify-between px-[7.5%] border-b py-3">
				<nav className="flex items-center gap-6">
					<Button size="icon" variant="ghost">
						<KanbanIcon />
					</Button>
					<Button variant="link" asChild>
						<Link to="/leaderboard">Leaderboard</Link>
					</Button>
					<Button variant="link" asChild>
						<Link to="/assignments">View All Assignments</Link>
					</Button>
				</nav>

				<nav className="flex items-center gap-3">
					<Button variant="outline" asChild>
						<Link to="/login">Login</Link>
					</Button>
					<ModeToggle />
				</nav>
			</header>

			<Routes>
				<Route path="/" element={<Kanban />} />
			</Routes>
		</>
	);
}

export default App;
