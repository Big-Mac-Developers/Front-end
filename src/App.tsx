import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import KanbanPage from "./pages/KanbanPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import LandingPage from "./pages/LandingPage";
import UnitsPage from "./pages/UnitsPage";
import { Toaster } from "./components/ui/toaster";

function App() {
	return (
		<>
			<Nav />
			<Toaster />
			<div className="md:mx-[20%] mx-4">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/kanban/:id" element={<KanbanPage />} />
					<Route
						path="/assignments/:id"
						element={<AssignmentsPage />}
					/>
					<Route path="/units" element={<UnitsPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
