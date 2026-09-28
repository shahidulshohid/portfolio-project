import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-slate-50 text-gray-800 dark:bg-[#080808] dark:text-gray-100 transition-colors duration-300 relative selection:bg-[#417E38] selection:text-white">
      {/* Subtle background glow effect */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="w-11/12 max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
