import { Repo } from '../../../../types/api';
import Repository from './Repository';

interface Props {
   repos: Repo[];
}

const ReposList = ({ repos }: Props) => {
   return (
      <div
         className="list-container grid grid-cols-1 gap-8 h-full max-h-screen overflow-y-scroll mt-4 scrollbar-hide
                  sm:gap-4 md:grid-cols-2 p-4">
         {repos
            ?.sort((a, b) => new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf())
            .map(repo => (
               <Repository repo={repo} />
            ))}
      </div>
   );
};

export default ReposList;
