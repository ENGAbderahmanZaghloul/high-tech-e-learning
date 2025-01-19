import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import TopSec from "./components/landingPage/TopSec"
import CoursesSection from "./components/landingPage/CourseSec"
import CertificatesSec from "./components/landingPage/CertificatesSec"
import OpinionSec from "./components/landingPage/OpinionsSec"
import TeamSec from "./components/landingPage/TeamSec"
import Footer from "./components/Footer"
import Courses from "./components/Courses"
function App() {


  return (
    <>
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <TopSec />
              <CoursesSection />
              <CertificatesSec />
              <OpinionSec />
              <TeamSec />
              <Footer />
            </>
          }
        />

        {/* صفحة الكورسات */}
        <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <Courses />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
