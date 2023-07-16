import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';


const LivBuildingNavbar = () => {
    return (
        <div className='fixed inset-x-0 bottom-20 z-10 flex justify-center items-end m-auto'>
            <div className='flex item-center space-x-4 m-2'>
            <NavLink to='/Assets/Liv/Onebed' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80'>
                <FontAwesomeIcon icon={faBed} size='2x'/>
                <h1> 1 Bedroom</h1>
            </NavLink>
            <NavLink to='/Assets/Liv/Twobed' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80'>
                <FontAwesomeIcon icon={faBed} size='2x'/>
                <h1> 2 Bedroom</h1>
            </NavLink>
            <NavLink to='/Assets/Liv/Threebed' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80'>
                <FontAwesomeIcon icon={faBed} size='2x'/>
                <h1> 3 Bedroom</h1>
            </NavLink>
            </div>
     </div>
     
    );
}

export default LivBuildingNavbar;