import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { User } from '../../../../types/api';
import Keys from '../../../core/keys';

interface Props {
   navigate: any;
   user: User;
   query: string;
}

const UserCard = ({ navigate, user, query }: Props) => {
   return (
      <Card className="p-2 w-full">
         <CardHeader className="aspect-square justify-self-center mx-[33%] rounded-full">
            <img src={user.avatar_url} />
         </CardHeader>
         <CardBody className="p-4">
            <h3 className="font-bold text-xl text-center">{user.login}</h3>
            <p className="font-bold my-2 text-center">
               Type: <span className="text-deep-purple-300">{user.type}</span>
            </p>
         </CardBody>
         <CardFooter className="flex justify-center p-4 pt-0">
            <Button
               onClick={e => {
                  sessionStorage.setItem(Keys.query.toString(), query);
                  navigate({ to: `/${user.login}` });
               }}
               color="deep-purple"
               className="">
               See more!
            </Button>
         </CardFooter>
      </Card>
   );
};

export default UserCard;
