import DomRouter from '../router/dom-router'
import Navigation from '../components/Navigation'
import './App.scss'

export function App() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <DomRouter />
    </>
  )
}

export default App
