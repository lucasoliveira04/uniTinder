import { CarouselHomeComponent } from "../../components/carousel/indexCarouselHome";
import { LoginForm } from "../../components/login";
import "../../public/css/home.css";


export const HomePage = () => {
    return (
        <div className="container-home">
            {/* Esquerda */}
            <div className="container-left">
                <LoginForm />
            </div>

            {/* Direita */}
            <div className="container-right">
                <CarouselHomeComponent />
            </div>
        </div>
    );
};
