import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import KanbanPage from "./pages/KanbanPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import LandingPage from "./pages/LandingPage";
import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
	return (
		<>
			<Nav />
			<div className="md:mx-[20%] mx-4">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/kanban/:id" element={<KanbanPage />} />
					<Route path="/assignments" element={<AssignmentsPage />} />
					<Route path="/leaderboard" element={<LeaderboardPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
