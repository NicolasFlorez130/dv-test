import { Link } from '@tanstack/react-router';
import icon from './../../assets/github-icon.png';

const Header = () => {
   return (
      <header className="bg-deep-purple-800 flex justify-center fixed top-0 w-full z-10">
         <div className="image-container | max-w-screen-xl w-full">
            <Link to="/" className='block w-20'>
               <img className="aspect-square p-4 w-full" src={icon} alt="github icon" />
            </Link>
         </div>
      </header>
   );
};

export default Header;
