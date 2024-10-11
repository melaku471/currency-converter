import React, { useState, useEffect } from "react";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {
  // State for selected currencies
  const [fromCurrency, setFromCurrency] = useState("USD"); // default to USD
  const [toCurrency, setToCurrency] = useState("ETB"); // default to ETB
  const [amount, setAmount] = useState(1); // Default amount to 1 for initial conversion rate display
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState(null);

  // Handlers for form inputs
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Swap the fromCurrency and toCurrency
  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  // Function to fetch exchange rate
  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      setExchangeRate(data.conversion_rate);  // Save the exchange rate
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch exchange rate.");
    }
  };

  // Fetch the exchange rate on initial page load
  useEffect(() => {
    getExchangeRate(); // Call the API to fetch default conversion rate on initial load
  }, [fromCurrency, toCurrency]); // Re-fetch whenever currencies change

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  return (
    <form className="converter-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label className="form-label">Enter Amount</label>
        <input
          type="number"
          className="form-input"
          value={amount}
          onChange={handleAmountChange}
          required
        />
      </div>

      <div className="form-group form-currency-group">
        <div className="form-section">
          <label className="form-label">From</label>
          <CurrencySelect selectedCurrency={fromCurrency} onCurrencyChange={handleFromCurrencyChange} />
        </div>

        <div className="swap-icon" onClick={handleSwap} style={{ cursor: "pointer" }}>
          <svg width="15" height="20" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 
              .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="form-section">
          <label className="form-label">To</label>
          <CurrencySelect selectedCurrency={toCurrency} onCurrencyChange={handleToCurrencyChange} />
        </div>
      </div>

      <button type="submit" className="submit-button">Get Exchange</button>

      {exchangeRate && (
        <p className="exchange-rate-result">
          {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)} {toCurrency}
        </p>
      )}

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default ConverterForm;
