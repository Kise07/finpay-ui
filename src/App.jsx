import './App.css'
import Navbar from './sections/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <h1 className="m-10 p-5 bg-black text-white">Welcome to React + tailwindcss</h1>
      <p className="m-10 p-5 bg-gray-200 text-gray-800">This is a simple React application styled with Tailwind CSS.</p>
    </>
  )
}

export default App
