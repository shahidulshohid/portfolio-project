
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='h-auto w-full overflow-hidden bg-[#000]'>
      <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
