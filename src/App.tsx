import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { DonatePage } from "./pages/DonatePage";
import { AlumniPage } from "./pages/AlumniPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/alumni" element={<AlumniPage />} />
      </Routes>
    </Router>
  );
}

export default App;