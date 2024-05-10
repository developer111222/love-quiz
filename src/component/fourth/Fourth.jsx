import React, { useState } from 'react';

const Fourth = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);
  const [msg,setMsg]=useState('')

  const handleName1Change = (e) => {
    setName1(e.target.value);
  };

  const handleName2Change = (e) => {
    setName2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both names are "John"
    if (name1.toLowerCase() === 'anish' && name2.toLowerCase() === 'tammana' && name1.toLowerCase()==="manya" ) {
      setResult(100);
    } else if (name1.toLowerCase() === 'tammana' && name2.toLowerCase() === 'anish') {
      setResult(100);
    } 
    
  else if (name1.toLowerCase() === 'manya' && name2.toLowerCase() === 'anish') {
    setResult(100);
  }
else if (name1.toLowerCase() === 'anish' || name2.toLowerCase() === 'manya') {
  setResult(100);
} 
    else {
      setResult(50);
    }
  };

  return (
    <div>
      <h1>Love Quiz Detector</h1>
      <form onSubmit={handleSubmit}>
        <div className='inp'>
          <label>
            Enter first name:
            </label>
            <input
              type="text"
              value={name1}
              onChange={handleName1Change}
            />
        </div>
        <div className='inp'>
          <label>
            Enter second name:
            </label>
            <input
              type="text"
              value={name2}
              onChange={handleName2Change}
            />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result !== null && (
        <div className='back'>
          <div className='inner'>
          <h2>Result</h2>
          <p>{name1} and {name2},<br/> your love percentage is: <br/><span>{result}%</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fourth;
