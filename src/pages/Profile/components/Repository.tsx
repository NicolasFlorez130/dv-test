import { Card } from '@material-tailwind/react';
import { Repo } from '../../../../types/api';
import { colors } from '../../../utils/language-colors';

interface Props {
   repo: Repo;
}

const Repository = ({ repo }: Props) => {
   return (
      <a className="h-full" href={repo.html_url} target="_blank">
         <Card key={repo.id} className="flex h-full md:justify-center">
            <div className="sub-container | flex flex-col gap-2 p-4 ">
               <div className="layer | flex items-center gap-2">
                  <h3 className="font-bold text-lg truncate">{repo.name}</h3>
                  {repo.private ? (
                     <i className="fa-solid fa-lock text-deep-purple-300" />
                  ) : (
                     <i className="fa-solid fa-earth-americas text-deep-purple-300" />
                  )}
               </div>
               {repo.description && <p className="truncate text-sm">{repo.description}</p>}
               {repo.topics.length > 0 && (
                  <div className="topics | flex flex-wrap gap-2 my-2">
                     {repo.topics.map(topic => (
                        <div
                           key={topic}
                           className="text-xs bg-deep-purple-50 font-bold px-2 py-1 rounded-lg text-deep-purple-600">
                           {topic}
                        </div>
                     ))}
                  </div>
               )}
               <div className="flex gap-4 justify-between">
                  <div className="flex gap-2 items-baseline text-gray-600">
                     <i className="fa-solid fa-star" />
                     {repo.stargazers_count}
                  </div>
                  <div className="flex gap-2 items-baseline text-gray-600">
                     <i className="fa-solid fa-code-fork" />
                     {repo.forks_count}
                  </div>
                  <p className="text-center">
                     Edited{' '}
                     {Math.ceil(
                        Math.abs(new Date(repo.updated_at).valueOf() - new Date().valueOf()) /
                           (1000 * 60 * 60 * 24)
                     )}{' '}
                     days ago
                  </p>
                  <p
                     style={{
                        borderColor: colors[repo.language ?? 0]?.color,
                     }}
                     className="border-b-4 h-min p-1 pb-0 rounded text-center">
                     {repo.language}
                  </p>
               </div>
            </div>
         </Card>
      </a>
   );
};

export default Repository;
