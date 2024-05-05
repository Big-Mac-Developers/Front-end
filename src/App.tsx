import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import KanbanPage from "./pages/KanbanPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import LandingPage from "./pages/LandingPage";
import UnitsPage from "./pages/UnitsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@/components/theme-provider";
import { Toaster } from "./components/ui/toaster";

function App() {
	const { theme } = useTheme();
	console.log(theme);
	return (
		<>
			<Nav />
			<Toaster />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/kanban/:id" element={<KanbanPage />} />
				<Route path="/assignments/:id" element={<AssignmentsPage />} />
				<Route path="/units" element={<UnitsPage />} />
			</Routes>
			<ToastContainer position="top-right" theme={theme} />
		</>
	);
}

export default App;
