import LoadingScreen from '../../../shared/components/LoadingScreen';
import NotFoundScreen from '../components/NotFoundScreen';

interface Props {
   children: any;
   loading: boolean;
   found: boolean;
}

const InfoValidator = ({ found, loading, children }: Props) => {
   return (
      <div className="bg-offWhite flex items-center min-h-screen">
         {!loading ? found ? children : <NotFoundScreen /> : <LoadingScreen />}
      </div>
   );
};

export default InfoValidator;
