export default function Navbar() {
  return (
   <nav className="bg-white shadow-md flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-blue-600">
            CampusGPT
        </div>  
        <div className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>  
            <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            <button className="ml-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Book Demo
            </button>
        </div>
    </nav>
  );
}