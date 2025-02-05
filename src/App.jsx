
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='h-auto w-full overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90'>
      <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
