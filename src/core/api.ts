import axios from 'axios';
import { FullUser, Repo, Users } from './../../types/api.d';

const baseUrl = 'https://api.github.com';

export const getUsersByString = (string: string) => {
   try {
      return axios<Users>({
         method: 'get',
         baseURL: `${baseUrl}/search/users`,
         params: {
            q: string,
         },
      });
   } catch (error) {
      throw Error();
   }
};

export const getUserByUsername = (username: string) => {
   try {
      return axios<FullUser>({
         method: 'get',
         baseURL: `${baseUrl}/users/${username}`,
      });
   } catch (error) {
      throw Error();
   }
};

export const getPopulatedUserData = async (username: string) => {
   try {
      const getRepos = axios.get<Repo[]>(`${baseUrl}/users/${username}/repos`);

      return Promise.all([getUserByUsername(username), getRepos]).then(res => ({
         data: res.at(0)?.data as FullUser | undefined,
         repos: res.at(1)?.data as Repo[] | undefined,
      }));
   } catch (error) {
      throw Error();
   }
};
