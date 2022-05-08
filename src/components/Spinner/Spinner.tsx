import './Spinner.css';

const Spinner = () => {
  return (
    <div className='w-full h-full flex items-center justify-center min-h-[350px]'>
      <div className='lds-spinner'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
