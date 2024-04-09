import { Link } from "react-router-dom";

export function Footer(){
    return (
      <div className="border-top  margin-top-sm fixed-bottom">
        <footer className="footer-layout uhf-container has-padding">
          <Link to={'/'}>
            <p>Главная страница</p>
          </Link>
          <p>Заготовка на будущее</p>
          <p>Доп контент</p>
        </footer>
      </div>
    );
}