import octocat from './../../../assets/sad-octocat.png';

const NotFoundScreen = () => {
   return (
      <div className="flex flex-wrap justify-center gap-10 m-6">
         <h1 className="font-bold text-3xl text-center">
            We're sorry, the user you're trying to find doesn't exists
         </h1>
         <img src={octocat} />
      </div>
   );
};

export default NotFoundScreen;
