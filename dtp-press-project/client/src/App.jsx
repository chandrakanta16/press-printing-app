import ProtectedRoute from "./components/ProtectedRout";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Service/Services";
import ImageSlider from "./components/imageSlider/Slider";
import Books from "./pages/Bookspub/Books";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AdminLogin from "./pages/AdminLogin/Login";
import Dashboard from "./pages/AdminLogin/AdminDashboad";




export default function App() {
  return (
    <>
      
 <Routes>

      {/* WEBSITE ROUTES */}

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <ImageSlider />
            <Home />
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />

      <Route
        path="/services"
        element={
          <>
            <Navbar />
            <Services />
            <Footer />
          </>
        }
      />

      <Route
        path="/books"
        element={
          <>
            <Navbar />
            <Books />
            <Footer />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        }
      />


      <Route
        path="/login"
        element={
          <>
        <Navbar />
       <AdminLogin />
        <Footer />
        </>
        }
      />

      {/* PROTECTED */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
             <Navbar/>
            <Dashboard />
             <Footer />
          </ProtectedRoute>
        }
      />

    </Routes>

    </>
  )
}
