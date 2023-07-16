import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const OfficeAssetNavbar = () => {
    return (
        <div className='fixed inset-x-0 bottom-20 z-10 flex justify-center items-end m-auto'>
            <div className='flex item-center space-x-4 m-2'>
            <NavLink to='/Assets/Heritagelanes/Office' className='flex items-center flex flex-col px-20 py-6 bg-white rounded-lg opacity-80'>
                <FontAwesomeIcon icon={faUser} size='2x'/>
                <h1> Office 1</h1>
            </NavLink>
            </div>
     </div>
     
    );
}

export default OfficeAssetNavbar;