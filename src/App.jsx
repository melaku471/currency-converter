import React from 'react';
import ConverterForm from './components/ConverterForm';

const App = () => {
  return (
    <div id="root">
      <div className="currency-converter">
        <h2 className="converter-title">Currency Converter</h2>
       <ConverterForm/>
      </div>
    </div>
  );
}

export default App;
