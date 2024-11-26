import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HOME, REGISTER } from "../constant"
import { HomePage } from "../pages/home"
import { RegisterPage } from "../pages/register"

export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<HomePage/>}/>
                <Route path={REGISTER} element={<RegisterPage/>}/>

                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}