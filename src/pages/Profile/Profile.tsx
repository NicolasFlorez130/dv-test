import { useMatch } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { FullUser, Repo, User } from '../../../types/api';
import { getPopulatedUserData } from '../../core/api';
import Repository from './components/Repository';
import ReposList from './components/ReposList';
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
         console.error(error);
         setFound(false);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      populateData();
   }, []);

   return (
      <InfoValidator found={found} loading={loading}>
         <main className="max-w-screen-xl pt-20 self-start w-full lg:grid lg:grid-cols-[1fr_2fr]">
            <section className="lg:m-4 lg:mr-0 lg:rounded-lg lg:overflow-hidden">
               <div
                  className="general-info | 
                  aspect-[4/3] bg-github-space bg-cover bg-top grid grid-rows-[3fr_4fr_6fr_4fr] bg-space-black
                  sm:aspect-[4/2] lg:aspect-[4/3]
               ">
                  <div />
                  <div className="image-container | aspect-square justify-self-center w-1/3 md:w-1/4">
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
               <div className="stats | bg-white flex justify-evenly py-4 lg:rounded-b-lg">
                  <Stat label="repositories" value={data?.public_repos} />
                  <Stat label="followers" value={data?.followers} />
                  <Stat label="following" value={data?.following} />
               </div>
               <hr />
            </section>
            <section className="repositories | bg-offWhite">
               {repos?.length ? (
                  <>
                     <p className="m-4">
                        Click over a repository in order to explore its github page
                     </p>
                     <ReposList repos={repos} />
                  </>
               ) : (
                  <p className="m-4">This user doesn't have repositories to show</p>
               )}
            </section>
         </main>
      </InfoValidator>
   );
};

export default Profile;
