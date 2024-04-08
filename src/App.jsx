import { useState } from 'react'
import Header from './assets/components/Header'
import Sectionmain from './assets/components/sectionMain'
import Footer from './assets/components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='bg-red-400 text-lg text-white p-2 text-center'>Anouncement bar</h1>
      <Header />
      <Sectionmain/>
      <Footer/>
    </div>
  )
}

export default App
