import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    return(
        <div className="flex flex-col md:flex-row justify-between items-center w-full p-10 " style={{border: "1px solid"}}>
            <div className="text-center md:text-left">
                <Link to={"/"}>
                    <h1 className="text-3xl font-bold md:text-5xl cursor-pointer">UniTinder</h1>
                </Link>
            </div>

            <div className="flex flex-row md:flex-row gap-10 mt-4 items-center">
                <Link to={"/login"}>
                    <button className="bg-gradient-to-r from-green-400 to-green-600 w-40 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </Link>

                <Link to="/cadastro">
                    <button className="bg-gradient-to-r from-blue-400 to-blue-600 w-40 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded">
                        Cadastre-se
                    </button>
                </Link>
            </div>
        </div>
    )
}