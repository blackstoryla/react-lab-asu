import { Link } from "react-router-dom";
import { Button } from "./Button";

export function Header(){
    return (
        <header>
            <Link to={'/'}>
                <h1>Главная страница</h1>
            </Link>
            <p>Заготовка на будущее</p>
            <Link to={'/authorization'}>
                <Button>Авторизация</Button>
            </Link>
        </header>
    )
}