import './App.css'
import { Button } from './components/Button'
import { Content } from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <Header></Header>

      <div className="mainContainer  uhf-container has-default-focus">
        <div className="columns has-large-gaps display-flex">
          <Menu>
            <p>Лабораторная 1</p>
            <p>Лабораторная 2</p>
            <p>Лабораторная 3</p>
            <p>Лабораторная 4</p>
            <p>Лабораторная 5</p>
            <p>Лабораторная 6</p>
          </Menu>
          <Content>
            <h2>Лабораторная работа 1</h2>
            <p>
              Реализовать скрипт, который уведомит о полной загрузке страницы
              <p>
                Реализовать кнопку счетчик, которая будет увеличивать счетчик на
                1 и вывести его значение на страницу (button onclick)
              </p>
              <p>
                Реализовать кнопку счетчик, которая будет уменьшать счетчик на 1
                реализовать с помощью listener click
              </p>
              <p>Реализовать форму аутентификации пользователя (form)</p>
              <p>Реализовать скрипт очистки данных формы</p>
              <p>
                Реализовать скрипт отправки данных формы с помощью listener
                submit.
              </p>
              <p>
                Без отправки на сервер провести валидацию введенных данных, если
                login==admin & pass==admin вывести сообщение об успехе, иначе
                сообщение о неуспехе
              </p>
              <p></p>Реализовать скрипт сохранения учетных данных и
              автоподстановку оных с помощью localStorage
            </p>
            <Button label="Готово" />
          </Content>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
