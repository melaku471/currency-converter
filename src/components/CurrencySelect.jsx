// CurrencySelect.js
const currencyFlagMap = {
    AED: "AE",  // United Arab Emirates
    AFN: "AF",  // Afghanistan
    ALL: "AL",  // Albania
    AMD: "AM",  // Armenia
    ANG: "NL",  // Netherlands Antillean Guilder (Netherlands)
    AOA: "AO",  // Angola
    ARS: "AR",  // Argentina
    AUD: "AU",  // Australia
    AWG: "AW",  // Aruba
    AZN: "AZ",  // Azerbaijan
    BAM: "BA",  // Bosnia and Herzegovina
    BBD: "BB",  // Barbados
    BDT: "BD",  // Bangladesh
    BGN: "BG",  // Bulgaria
    BHD: "BH",  // Bahrain
    BIF: "BI",  // Burundi
    BMD: "BM",  // Bermuda
    BND: "BN",  // Brunei
    BOB: "BO",  // Bolivia
    BRL: "BR",  // Brazil
    BSD: "BS",  // Bahamas
    BTN: "BT",  // Bhutan
    BWP: "BW",  // Botswana
    BYN: "BY",  // Belarus
    BZD: "BZ",  // Belize
    CAD: "CA",  // Canada
    CDF: "CD",  // Democratic Republic of the Congo
    CHF: "CH",  // Switzerland
    CLP: "CL",  // Chile
    CNY: "CN",  // China
    COP: "CO",  // Colombia
    CRC: "CR",  // Costa Rica
    CUP: "CU",  // Cuba
    CVE: "CV",  // Cape Verde
    CZK: "CZ",  // Czech Republic
    DJF: "DJ",  // Djibouti
    DKK: "DK",  // Denmark
    DOP: "DO",  // Dominican Republic
    DZD: "DZ",  // Algeria
    EGP: "EG",  // Egypt
    ERN: "ER",  // Eritrea
    ETB: "ET",  // Ethiopia
    EUR: "EU",  // European Union
    FJD: "FJ",  // Fiji
    FKP: "FK",  // Falkland Islands
    FOK: "FO",  // Faroe Islands
    GBP: "GB",  // Great Britain (United Kingdom)
    GEL: "GE",  // Georgia
    GGP: "GG",  // Guernsey
    GHS: "GH",  // Ghana
    GIP: "GI",  // Gibraltar
    GMD: "GM",  // Gambia
    GNF: "GN",  // Guinea
    GTQ: "GT",  // Guatemala
    GYD: "GY",  // Guyana
    HKD: "HK",  // Hong Kong
    HNL: "HN",  // Honduras
    HRK: "HR",  // Croatia
    HTG: "HT",  // Haiti
    HUF: "HU",  // Hungary
    IDR: "ID",  // Indonesia
    ILS: "IL",  // Israel
    IMP: "IM",  // Isle of Man
    INR: "IN",  // India
    IQD: "IQ",  // Iraq
    IRR: "IR",  // Iran
    ISK: "IS",  // Iceland
    JEP: "JE",  // Jersey
    JMD: "JM",  // Jamaica
    JOD: "JO",  // Jordan
    JPY: "JP",  // Japan
    KES: "KE",  // Kenya
    KGS: "KG",  // Kyrgyzstan
    KHR: "KH",  // Cambodia
    KID: "KI",  // Kiribati
    KMF: "KM",  // Comoros
    KRW: "KR",  // South Korea
    KWD: "KW",  // Kuwait
    KYD: "KY",  // Cayman Islands
    KZT: "KZ",  // Kazakhstan
    LAK: "LA",  // Laos
    LBP: "LB",  // Lebanon
    LKR: "LK",  // Sri Lanka
    LRD: "LR",  // Liberia
    LSL: "LS",  // Lesotho
    LYD: "LY",  // Libya
    MAD: "MA",  // Morocco
    MDL: "MD",  // Moldova
    MGA: "MG",  // Madagascar
    MKD: "MK",  // North Macedonia
    MMK: "MM",  // Myanmar
    MNT: "MN",  // Mongolia
    MOP: "MO",  // Macau
    MRU: "MR",  // Mauritania
    MUR: "MU",  // Mauritius
    MVR: "MV",  // Maldives
    MWK: "MW",  // Malawi
    MXN: "MX",  // Mexico
    MYR: "MY",  // Malaysia
    MZN: "MZ",  // Mozambique
    NAD: "NA",  // Namibia
    NGN: "NG",  // Nigeria
    NIO: "NI",  // Nicaragua
    NOK: "NO",  // Norway
    NPR: "NP",  // Nepal
    NZD: "NZ",  // New Zealand
    OMR: "OM",  // Oman
    PAB: "PA",  // Panama
    PEN: "PE",  // Peru
    PGK: "PG",  // Papua New Guinea
    PHP: "PH",  // Philippines
    PKR: "PK",  // Pakistan
    PLN: "PL",  // Poland
    PYG: "PY",  // Paraguay
    QAR: "QA",  // Qatar
    RON: "RO",  // Romania
    RSD: "RS",  // Serbia
    RUB: "RU",  // Russia
    RWF: "RW",  // Rwanda
    SAR: "SA",  // Saudi Arabia
    SBD: "SB",  // Solomon Islands
    SCR: "SC",  // Seychelles
    SDG: "SD",  // Sudan
    SEK: "SE",  // Sweden
    SGD: "SG",  // Singapore
    SHP: "SH",  // Saint Helena
    SLE: "SL",  // Sierra Leone
    SLL: "SL",  // Sierra Leone
    SOS: "SO",  // Somalia
    SRD: "SR",  // Suriname
    SSP: "SS",  // South Sudan
    STN: "ST",  // São Tomé and Príncipe
    SYP: "SY",  // Syria
    SZL: "SZ",  // Eswatini (Swaziland)
    THB: "TH",  // Thailand
    TJS: "TJ",  // Tajikistan
    TMT: "TM",  // Turkmenistan
    TND: "TN",  // Tunisia
    TOP: "TO",  // Tonga
    TRY: "TR",  // Turkey
    TTD: "TT",  // Trinidad and Tobago
    TVD: "TV",  // Tuvalu
    TWD: "TW",  // Taiwan
    TZS: "TZ",  // Tanzania
    UAH: "UA",  // Ukraine
    UGX: "UG",  // Uganda
    USD: "US",  // United States
    UYU: "UY",  // Uruguay
    UZS: "UZ",  // Uzbekistan
    VES: "VE",  // Venezuela
    VND: "VN",  // Vietnam
    VUV: "VU",  // Vanuatu
    WST: "WS",  // Samoa
    XAF: "CM",  // Central African CFA franc (Cameroon)
    XCD: "AG",  // East Caribbean Dollar (Antigua and Barbuda)
    XOF: "SN",  // West African CFA franc (Senegal)
    XPF: "PF",  // CFP franc (French Polynesia)
    YER: "YE",  // Yemen
    ZAR: "ZA",  // South Africa
    ZMW: "ZM",  // Zambia
    ZWL: "ZW"   // Zimbabwe
  };
  

  const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
  ];
  
  const CurrencySelect = ({ selectedCurrency, onCurrencyChange }) => {
    // Get the flag code, use currency code itself if not found in the map
    const flagCode = currencyFlagMap[selectedCurrency] || selectedCurrency;
  
    // Fallback image for broken flags (you can replace it with a generic image)
    const fallbackImage = "https://via.placeholder.com/64?text=Flag+Not+Available";
  
    return (
      <div className="currency-select">
        <img
          src={`https://flagsapi.com/${flagCode}/flat/64.png`}
          alt={`${selectedCurrency} Flag`}
          onError={(e) => {
            e.target.src = fallbackImage;  // Set fallback image if flag is unavailable
          }}
        />
        <select
          className="currency-dropdown"
          value={selectedCurrency}
          onChange={onCurrencyChange}
        >
          {currencyCodes.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CurrencySelect;