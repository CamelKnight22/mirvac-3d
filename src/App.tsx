import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Assets from './Pages/Assets/Assets';
import Something from './Pages/Something/Something';
import AiSomething from './Pages/Ai-Something/Ai-Something';
import LivOneBed from './Rooms/LivOneBed';
import LivThreeBed from './Rooms/LivThreeBed';
import LivTwoBed from './Rooms/LivTwoBed';
import LivMunro from './Pages/Assets/Liv/Liv Munro';
import LivIndigo from './Pages/Assets/Liv/Liv Indigo';
import OfficeHeritagelanes from './Pages/Assets/Office/Office Heritagelanes';
import OfficeRoom from './Rooms/Officeroom';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/'  Component={Home} />
                <Route path='/Assets' Component={Assets} />
                <Route path='/Something' Component={Something} />
                <Route path='/AiSomething' Component={AiSomething} />
                <Route path='/Assets/Liv-Munro' Component={LivMunro} />
                <Route path='/Assets/Liv-Indigo' Component={LivIndigo} />
                <Route path='/Assets/Liv/Onebed' Component={LivOneBed} />
                <Route path='/Assets/Liv/Twobed' Component={LivTwoBed} />
                <Route path='/Assets/Liv/Threebed' Component={LivThreeBed} />
                <Route path='/Assets/Heritagelanes' Component={OfficeHeritagelanes} />
                <Route path='/Assets/Heritagelanes/Office' Component={OfficeRoom} />
                
            </Routes>
        </Router>
    );
}

export default App;