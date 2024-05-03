import { Route, Routes } from "react-router-dom";
import Kanban from "./pages/Kanban";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Kanban />} />
			</Routes>
		</>
	);
}

export default App;
