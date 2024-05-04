import {Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import KanbanPage from "./pages/KanbanPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<KanbanPage title={"✨ Assignment 1"} />} />
      </Routes>
    </>
  );
}

export default App;
