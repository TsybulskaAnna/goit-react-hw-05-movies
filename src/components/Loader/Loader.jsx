import { Bars } from 'react-loader-spinner';

const Loader = () => {
  console.log('Loader invoked');
  return (
    <div className='loader'>
      <Bars height="40" width="40" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loader;