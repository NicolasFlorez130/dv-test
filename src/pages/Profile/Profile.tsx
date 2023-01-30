import { Card } from '@material-tailwind/react';
import { useMatch } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { FullUser, Repo, User } from '../../../types/api';
import { getPopulatedUserData } from '../../core/api';
import { colors } from '../../utils/language-colors';
import Repository from './components/Repository';
import Stat from './components/Stat';

const Profile = () => {
   const [data, setData] = useState<FullUser>();
   const [repos, setRepos] = useState<Repo[]>();

   const [loading, setLoading] = useState<boolean>(true);

   const { params } = useMatch({ from: '/$username' });

   // const daysOdDifference = ;

   const populateData = async () => {
      const response = await getPopulatedUserData(params.username);
      if (response) {
         setData(response.data);
         setRepos(response.repos);
      }
      setLoading(false);
   };

   useEffect(() => {
      populateData();
   }, []);

   return (
      <div className="flex">
         {!loading ? (
            <main className="w-full">
               <section>
                  <div className="general-info | aspect-[4/3] bg-github-space bg-contain grid grid-rows-[3fr_4fr_6fr_4fr] bg-space-black">
                     <div />
                     <div className="image-container | aspect-square justify-self-center w-1/3">
                        <img
                           className="border-4 border-white rounded-full"
                           src={data?.avatar_url}
                           alt={`${data?.name} profile image`}
                        />
                     </div>
                     <div className="text | flex flex-col items-center justify-between mt-2 text-white">
                        <h1 className="font-bold text-xl">{data?.name}</h1>
                        <p className="">{data?.location}</p>
                        <p className="text-sm w-2/3 max-h-4 text-center">
                           {data?.bio?.slice(0, 70)}
                           {(data?.bio?.length ?? 0) >= 70 && '...'}
                        </p>
                     </div>
                  </div>
                  <div className="stats | flex justify-evenly my-4">
                     <Stat label="repositories" value={data?.public_repos} />
                     <Stat label="followers" value={data?.followers} />
                     <Stat label="following" value={data?.following} />
                  </div>
                  <hr />
               </section>
               <section className="repositories | bg-gray-50 flex flex-col gap-8 p-4 max-h-screen overflow-scroll">
                  {repos
                     ?.sort((a, b) => parseInt(b.updated_at) - parseInt(a.updated_at))
                     .map(repo => (
                        <Repository repo={repo} />
                     ))}
               </section>
            </main>
         ) : (
            <></>
         )}
      </div>
   );
};

export default Profile;
