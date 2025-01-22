import './App.css';
import GridApp from './components/Grid';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <div className="bg-gray-100">
      <Navbar />
      <div className="h-full container mx-auto p-10 grid gap-10 
          lg:grid-cols-3 lg:grid-rows-1 
          md:grid-cols-2 md:grid-rows-2 
          sm:grid-cols-1 sm:grid-rows-3">

        <div className="border-2 border-black bg-gradient-to-r from-purple-700 to-pink-600 
            rounded-lg aspect-square md:aspect-auto lg:col-span-1 md:col-span-2 sm:col-span-2"></div>

        <div className="border-2 border-black flex justify-center items-center 
            bg-white shadow-md rounded-lg aspect-square">
          <img src="../logo.jpeg" alt="E-Cell" className="h-full w-full object-contain" />
        </div>

        <div className="border-2 border-black bg-gray-400 shadow-md 
            rounded-lg p-4 aspect-square">
          <GridApp />
        </div>
      </div>
    </div>
    <div className='w-full'>
      <Profile/>
      </div>
      </>
  );
}

export default App;
