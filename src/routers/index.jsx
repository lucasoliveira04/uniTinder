import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { CadastroPage } from "../pages/cadastro"
import { UserPage } from "../pages/user-page/user-page"
import { RoutersPrivates } from "./RoutersPrivates"

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomePage />} />
                
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage />} />

                


                <Route 
                    path="/user" 
                    element={
                        <RoutersPrivates>
                            <UserPage/>
                        </RoutersPrivates>
                    } 
                />

            </Routes>
        </BrowserRouter>
    )
}