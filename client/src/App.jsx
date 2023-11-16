import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Catalog from './components/Catalog'
import About from "./components/About"
import CarCreate from "./components/CarCreate"
import CarDetails from "./components/CarDetails"

function App() {


    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/data/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/data/create" element={<CarCreate />}></Route>
                <Route path="/data/catalog/:id" element={<CarDetails />}></Route>

            </Routes>
            <Footer />
        </>
    )
}

export default App
