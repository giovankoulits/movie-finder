const Spinner = () => {
  return (
    <div className='d-flex justify-content-center mt-2'>
      <div
        className='spinner-border '
        role='status'
        style={{ width: '60px', height: '60px', color: 'var(--gold)' }}
      ></div>
    </div>
  );
};

export default Spinner;
