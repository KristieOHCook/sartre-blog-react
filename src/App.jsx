import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article />
        <Article />
      </main>
      <Footer />
    </div>
  )
}

export default App
