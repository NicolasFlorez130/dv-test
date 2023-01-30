import { Users } from '../../../../types/api';
import UserCard from './UserCard';

interface Props {
   users: Users;
   query: string;
}

const UsersList = ({ users, query }: Props) => {
   return (
      <div className="users-list | grid gap-10 m-4 sm:grid-cols-2 sm:gap-y-6 sm:gap-x-4 lg:grid-cols-2 2xl:grid-cols-3">
         {users.items.map(user => (
            <UserCard query={query} user={user} key={user.id} />
         ))}
      </div>
   );
};

export default UsersList;
