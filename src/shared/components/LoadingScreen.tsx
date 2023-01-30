import loader from './../../assets/purple-loader.gif';

const LoadingScreen = () => {
   return (
      <div className="container | flex items-center h-full">
         <img src={loader} alt="" />
      </div>
   );
};

export default LoadingScreen;
