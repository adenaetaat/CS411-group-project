import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<LandingPage />}></Route>
        </Routes>
    )
}

export default App;
