import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HOME } from "../constant"
import { HomePage } from "../pages/home"

export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<HomePage/>}/>

                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}