import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
export default function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
                errorElement={<ErrorPage />}
                exact
            />
            <Route errorElement={<ErrorPage />} />
            <Route
                path='/login'
                element={<Login />}
            />
            <Route
                path='/register'
                element={<Registration />}
            />
            <Route
                path='/profile'
                element={<Profile />}
            />
            <Route
                path='*'
                element={<ErrorPage />}
            />
        </Routes>
    );
}

