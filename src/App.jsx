import './App.css'
import { Button } from './components/Button'
import { Container } from './components/Container'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <div>
          <Container>
            <h2>Тут должен быть расположен какой-либо контент</h2>
            <p>Контейнер</p>
            <Button label="Контейнер"/>
          </Container>
        </div>
        <div>
          <Button label = "Провека связи"/>
        </div>
      </main>
    </>
  )
}

export default App
