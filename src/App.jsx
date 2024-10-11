import React from "react";
import ConverterForm from "./components/ConverterForm";
import Footer from "./components/Footer"; // Correct path

const App = () => {
  return (
    <div id="root">
      <div className="currency-converter">
        <h2 className="converter-title">Currency Converter</h2>
        
       <ConverterForm/>
      </div>
      
      {/* Footer is outside of the form container */}
      <Footer />
    
    </div>
  );
}

export default App;
