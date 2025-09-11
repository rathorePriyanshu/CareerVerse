import { Route, Routes } from "react-router-dom";
import HomeLayout from "./LayOut/HomeLayout";
import LandingPage from "./Pages/LandingPage";
import MainLayout from "./LayOut/MainLayout";
import StreamSelection from "./Pages/StreamSelection";
import SeniorStreanSelection from "./Pages/SeniorStreanSelection";
import QuizPage from "./Pages/QuizPage";
import Feedback from "./Pages/Feedback";
import CarreerPage from "./Pages/CarreerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/stream" element={<StreamSelection />} />
        <Route path="/seniorstream" element={<SeniorStreanSelection />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="career" element={<CarreerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
