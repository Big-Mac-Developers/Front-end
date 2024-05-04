import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import KanbanPage from "./pages/KanbanPage";
import AssignmentsPage from "./pages/AssignmentsPage";

function App() {
	return (
		<>
			<Nav />
			<div className="md:mx-[20%] mx-4">
				<Routes>
					<Route
						path="/"
						element={<KanbanPage title={"✨ Assignment 1"} />}
					/>
					<Route path="/assignments" element={<AssignmentsPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
