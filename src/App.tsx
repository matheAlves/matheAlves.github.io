import Hero from './components/Hero'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className='max-h-svh relative z-0 bg-black'>
        <Hero />
      </div>
    </BrowserRouter>
  )
}

export default App
