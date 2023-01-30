import { useMatch } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { FullUser, Repo, User } from '../../../types/api';
import { getPopulatedUserData } from '../../core/api';
import LoadingScreen from '../../shared/components/LoadingScreen';
import NotFoundScreen from './components/NotFoundScreen';
import Repository from './components/Repository';
import Stat from './components/Stat';
import InfoValidator from './hocs/InfoValidator';

const Profile = () => {
   const [data, setData] = useState<FullUser>();
   const [repos, setRepos] = useState<Repo[]>();

   const [loading, setLoading] = useState<boolean>(true);
   const [found, setFound] = useState<boolean>(false);

   const { params } = useMatch({ from: '/$username' });

   const populateData = async () => {
      try {
         const response = await getPopulatedUserData(params.username);
         if (response) {
            setData(response.data);
            setRepos(response.repos);
         }
         setFound(true);
      } catch (error) {
         setFound(false);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      // populateData();
   }, []);

   return (
      <InfoValidator found={found} loading={loading}>
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
               <div className="stats | bg-white flex justify-evenly py-4">
                  <Stat label="repositories" value={data?.public_repos} />
                  <Stat label="followers" value={data?.followers} />
                  <Stat label="following" value={data?.following} />
               </div>
               <hr />
            </section>
            <section className="repositories | bg-offWhite flex flex-col gap-8 p-4 h-full max-h-screen overflow-scroll scrollbar-hide">
               {repos
                  ?.sort((a, b) => parseInt(b.updated_at) - parseInt(a.updated_at))
                  .map(repo => (
                     <Repository repo={repo} />
                  ))}
            </section>
         </main>
      </InfoValidator>
   );
};

export default Profile;
