import { convert } from '../../../utils/math';

interface Props {
   label: string;
   value: string | number | undefined;
}

const Stat = ({ label, value }: Props) => {
   return (
      <div className="flex flex-col items-center">
         <p className="font-bold text-3xl text-deep-purple-600">
            {convert(parseInt(value as string))}
         </p>
         <p className="text-deep-purple-200">{label}</p>
      </div>
   );
};

export default Stat;
