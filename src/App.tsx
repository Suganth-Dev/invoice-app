
import InvoicePage1 from './components/InvoicePage1';
import InvoicePage2 from './components/InvoicePage2';
import logo from './assets/logo2.png'




function App() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 min-h-screen py-8 space-y-8">
      {/* Page 1 */}
      <InvoicePage1 logo2={logo} />
      
      {/* Page 2 */}
      <InvoicePage2 />
    </div>
  );
}

export default App;