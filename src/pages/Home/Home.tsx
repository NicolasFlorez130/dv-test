import { Button, Input } from '@material-tailwind/react';
import { useEffect, useRef, useState } from 'react';
import { Users } from '../../../types/api';
import { getUsersByString } from '../../core/api';
import Keys from '../../core/keys';
import LoadingScreen from '../../shared/components/LoadingScreen';
import UsersList from './components/UsersList';

const Home = () => {
   const [list, setList] = useState<Users>();
   const [string, setString] = useState('');
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const lastSearch = useRef<string>();

   const getUsers = async (string: string) => {
      if (lastSearch.current === string) return;

      setIsLoading(true);
      setList(undefined);

      if (string) {
         setList((await getUsersByString(string)).data);
         lastSearch.current = string;
      }

      setIsLoading(false);
   };

   useEffect(() => {
      // const query = sessionStorage.getItem(Keys.query.toString());
      // if (query) {
      //    setString(query);
      //    getUsers(query);
      // }
   }, []);

   return (
      <main className="bg-offWhite min-h-screen">
         <section className="searcher | p-4">
            <h1 className="text-2xl text-center text-deep-purple-500">
               Welcome to the Github profile finder
            </h1>
            <div className="input-container | gap-2 grid grid-cols-[3fr_1fr] mt-4">
               <Input
                  value={string}
                  onChange={e => setString(e.target.value)}
                  color="deep-purple"
                  label="Search"
               />
               <Button onClick={() => getUsers(string)} color="deep-purple" className="capitalize">
                  Find
               </Button>
            </div>
         </section>
         <section className="flex flex-col m-4">
            {list && !isLoading ? (
               <>
                  <UsersList users={list} query={string} />
                  <p className="text-justify text-gray-800">
                     The app only shows 30 results from the query, if you want to see other profiles
                     you have to write something more specific in the prompt.
                  </p>
               </>
            ) : (
               <LoadingScreen />
            )}
         </section>
      </main>
   );
};

export default Home;
