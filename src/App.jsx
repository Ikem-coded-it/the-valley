import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import PagesContainer from './components/pages-container';
import MarketPlacesPage from './pages/Marketplaces';

function App() {

  return (
    <>
      <main className="w-full max-h-[100vh] min-h-[100vh] pt-[80px]">
        <Navbar/>

        <div className="sidebar-pages-container dashboard-container flex">
          <Sidebar className="hidden lg:block"/>

          <PagesContainer>
            <MarketPlacesPage/>
          </PagesContainer>
        </div>
      </main>
    </>
  )
}

export default App
