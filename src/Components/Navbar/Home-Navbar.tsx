import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faLandmark, faMicrochip } from '@fortawesome/free-solid-svg-icons';


const HomeNavbar = () => {

    return (
        <div className='fixed inset-x-0 bottom-20 z-10 flex justify-center items-end m-auto'>
            <div className='flex item-center space-x-4 m-2'>
            <NavLink to='/Assets' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80'>
                <FontAwesomeIcon icon={faCity} size='2x'/>
                <h1> Assets</h1>
            </NavLink>
            <NavLink to='/Something' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80'>
                <FontAwesomeIcon icon={faLandmark} size='2x'  />
                <h1> Something</h1>
            </NavLink>
            <NavLink to='/AiSomething' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80'>
                <FontAwesomeIcon icon={faMicrochip} size='2x'/>
                <h1>AiSomething</h1>
            </NavLink>
            </div>
     </div>
     
    );
}

export default HomeNavbar;