import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import NamePage from "./pages/NamePage";
import AgePage from "./pages/AgePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />}>
          <Route path="name" element={<NamePage />} />
          <Route path="age" element={<AgePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
