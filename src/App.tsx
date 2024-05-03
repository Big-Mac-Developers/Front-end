import { Link, Route, Routes } from "react-router-dom";
import Kanban from "./pages/Kanban";
import { KanbanIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<header className="flex items-center justify-between px-[7.5%] border-b py-3">
				<nav className="flex items-center gap-6">
					<Button size="icon" variant="ghost">
						<KanbanIcon />
					</Button>
					<Button variant="link" asChild>
						<Link to="/">Leaderboard</Link>
					</Button>
					<Button variant="link" asChild>
						<Link to="/">View All Assignments</Link>
					</Button>
				</nav>

				<Button variant="outline" asChild>
					<Link to="/login">Login</Link>
				</Button>
			</header>

			<Routes>
				<Route path="/" element={<Kanban />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
