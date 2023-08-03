import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"


import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import ProfilePage from "./pages/ProfilePage"
import FormPage from "./pages/FormPage"
import CreateFormPage from "./pages/CreateFormPage"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forms" element={<FormPage/>} />
          <Route path="/add-form" element={<CreateFormPage/>} />
          <Route path="/forms/:id" element={<CreateFormPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/forgot" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App