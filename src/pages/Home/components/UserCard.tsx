import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { useNavigate } from '@tanstack/react-router';
import { useMemo } from 'react';
import { User } from '../../../../types/api';
import Keys from '../../../core/keys';

interface Props {
   user: User;
   query: string;
}

const UserCard = ({ user, query }: Props) => {
   const navigate = useNavigate({ from: '/' });

   const fixedQuery = useMemo(() => query, []);

   return (
      <Card className="p-2 w-full">
         <CardHeader className="aspect-square justify-self-center mx-[33%] rounded-full md:mx-[36%]">
            <img src={user.avatar_url} />
         </CardHeader>
         <CardBody className="p-4 sm:p-2">
            <h3 className="font-bold text-xl text-center">{user.login}</h3>
            <p className="font-bold my-1 text-center">
               Type: <span className="text-deep-purple-300">{user.type}</span>
            </p>
         </CardBody>
         <CardFooter className="flex justify-center p-4 pt-0">
            <Button
               onClick={e => {
                  sessionStorage.setItem(Keys.query.toString(), fixedQuery);
                  navigate({ to: `/dv-test/$username`, params: { username: user.login } });
               }}
               color="deep-purple"
               className="">
               See more
            </Button>
         </CardFooter>
      </Card>
   );
};

export default UserCard;
