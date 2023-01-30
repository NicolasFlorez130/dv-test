import { Outlet } from '@tanstack/react-router';
import Header from '../shared/components/Header';

const AppLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
};

export default AppLayout;
