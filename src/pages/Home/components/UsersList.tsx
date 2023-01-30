import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { useNavigate } from '@tanstack/react-router';
import { Users } from '../../../../types/api';
import Keys from '../../../core/keys';
import UserCard from './USerCard';

interface Props {
   users: Users;
   query: string;
}

const UsersList = ({ users, query }: Props) => {
   const navigate = useNavigate({ from: '/' });

   return (
      <div className="users-list | flex flex-col gap-10 m-4">
         {users.items.map(user => (
            <UserCard navigate={navigate} query={query} user={user} key={user.id} />
         ))}
      </div>
   );
};

export default UsersList;
