import axios from 'axios';
import { FullUser, Repo, User, Users } from './../../types/api.d';

const baseUrl = 'https://api.github.com';

export const getUsersByString = (string: string) => {
   return axios<Users>({
      method: 'get',
      baseURL: `${baseUrl}/search/users`,
      params: {
         q: string,
      },
      headers: {
         // since: 30,
         per_page: 100,
      },
   });
};

export const getUserByUsername = (username: string) => {
   return axios<FullUser>({
      method: 'get',
      baseURL: `${baseUrl}/users/${username}`,
   });
};

export const getPopulatedUserData = async (username: string) => {
   const getRepos = axios.get<Repo[]>(`${baseUrl}/users/${username}/repos`);

   return Promise.all([getUserByUsername(username), getRepos]).then(res => ({
      data: res.at(0)?.data as FullUser | undefined,
      repos: res.at(1)?.data as Repo[] | undefined,
   }));

   // return new Promise(async res => {
   //    let tasksComplete = 0;

   //    const sumAndReturn = <Type>(res: Type): Type => {
   //       tasksComplete++;
   //       return res;
   //    };

   //    const data = getUsersByUsername(username).then(res => {
   //       tasksComplete++;
   //       return res;
   //    });
   //    const repos = getRepos.then(res => {
   //       tasksComplete++;
   //       return res;
   //    });
   //    const followers = getFollowers.then(res => {
   //       tasksComplete++;
   //       return res;
   //    });

   // });
};
