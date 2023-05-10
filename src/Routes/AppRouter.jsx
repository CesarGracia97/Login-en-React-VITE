import { Route, Routes } from "react-router-dom"

import NavBar from "../Components/NavBar"
import { Dashboard, HomePage, LoginPage, RegisterPage } from "../Pages"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return <>
    <Routes>
        <Route  path="/" element= {<NavBar />}>
            <Route index element = {<HomePage />}/>
            <Route path="register" element = {<RegisterPage />}/>
            <Route path="login" element = {<LoginPage />}/>
            <Route path="dashboard" element = {
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }/>
        </Route>
    </Routes>
  </>
}
