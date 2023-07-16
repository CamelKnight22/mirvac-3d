import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faHome, faGlobe, faVideo } from '@fortawesome/free-solid-svg-icons';
import RoomModal from '../Modal/Room pop-up';
import { NavLink } from 'react-router-dom';

const RoomNavbar = () => {
    return (
        <div className='fixed inset-x-0 top-0 left-0 z-10 flex justify-center items-center m-auto'>
            <div className='flex item-center space-x-20 m-7'>
            <NavLink to='/' >
                <FontAwesomeIcon icon={faHome} size='2x'/>
            </NavLink>
                <a href="https://yarrasedge.mirvac.com/residences/Properties/apartment-601" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGlobe} size='2x' />
                </a>
                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faVideo} size='2x' />
                </a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                </a>

                <RoomModal/>
                
            </div>
        </div>
    );
}

export default RoomNavbar;