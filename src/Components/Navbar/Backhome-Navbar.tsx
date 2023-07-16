import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const BackhomeNavbar = () => {
    return (
        <div className='fixed inset-x-0 top-0 left-0 z-10 flex justify-start items-start m-auto'>
            <div className='flex item-center space-x-4 m-2'>
            <NavLink to='/' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80 '>
                <FontAwesomeIcon icon={faHome} size='2x'/>
                <h1> Home </h1>
            </NavLink>
            </div>
     </div>
     
    );
}

export default BackhomeNavbar;