import { Route, Routes } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import PrivetRoutes from "./routes/PrivetRoutes";

export default function App() {
    const { auth } = useAuth();
    return (
        <Routes>
            {/* privet routes */}
            <Route element={<PrivetRoutes />}>
                <Route
                    path='/'
                    element={<Home />}
                    errorElement={<ErrorPage />}
                    exact
                />
                <Route
                    path='/profile'
                    element={<Profile />}
                />
            </Route>

            {/* //public routes */}

            <Route
                path='/login'
                element={<Login />}
            />
            <Route
                path='/register'
                element={<Registration />}
            />

            <Route errorElement={<ErrorPage />} />

            <Route
                path='*'
                element={<ErrorPage />}
            />
        </Routes>
    );
}

