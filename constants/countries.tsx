import CountryFlag from "react-native-country-flag";

const countries = [
  {
    label: "United States",
    value: "united states",
    prefixElement: <CountryFlag isoCode="US" size={25} />,
  },
  {
    label: "Canada",
    value: "canada",
    prefixElement: <CountryFlag isoCode="CA" size={25} />,
  },
  {
    label: "United Kingdom",
    value: "united kingdom",
    prefixElement: <CountryFlag isoCode="GB" size={25} />,
  },
  {
    label: "Australia",
    value: "australia",
    prefixElement: <CountryFlag isoCode="AU" size={25} />,
  },
  {
    label: "Germany",
    value: "germany",
    prefixElement: <CountryFlag isoCode="de" size={25} />,
  },
  {
    label: "France",
    value: "france",
    prefixElement: <CountryFlag isoCode="FR" size={25} />,
  },
  {
    label: "Italy",
    value: "italy",
    prefixElement: <CountryFlag isoCode="IT" size={25} />,
  },
  {
    label: "Spain",
    value: "spain",
    prefixElement: <CountryFlag isoCode="ES" size={25} />,
  },
  {
    label: "Mexico",
    value: "mexico",
    prefixElement: <CountryFlag isoCode="MX" size={25} />,
  },
  {
    label: "Brazil",
    value: "brazil",
    prefixElement: <CountryFlag isoCode="BR" size={25} />,
  },
  {
    label: "Japan",
    value: "japan",
    prefixElement: <CountryFlag isoCode="JP" size={25} />,
  },
  {
    label: "China",
    value: "china",
    prefixElement: <CountryFlag isoCode="CN" size={25} />,
  },
  {
    label: "India",
    value: "india",
    prefixElement: <CountryFlag isoCode="IN" size={25} />,
  },
  {
    label: "Russia",
    value: "russia",
    prefixElement: <CountryFlag isoCode="RU" size={25} />,
  },
  {
    label: "South Africa",
    value: "south africa",
    prefixElement: <CountryFlag isoCode="ZA" size={25} />,
  },
  {
    label: "South Korea",
    value: "south korea",
    prefixElement: <CountryFlag isoCode="KR" size={25} />,
  },
  {
    label: "Argentina",
    value: "argentina",
    prefixElement: <CountryFlag isoCode="AR" size={25} />,
  },
  {
    label: "Chile",
    value: "chile",
    prefixElement: <CountryFlag isoCode="CL" size={25} />,
  },
  {
    label: "Colombia",
    value: "colombia",
    prefixElement: <CountryFlag isoCode="CO" size={25} />,
  },
  {
    label: "Peru",
    value: "peru",
    prefixElement: <CountryFlag isoCode="PE" size={25} />,
  },
  {
    label: "Venezuela",
    value: "venezuela",
    prefixElement: <CountryFlag isoCode="VE" size={25} />,
  },
  {
    label: "Egypt",
    value: "egypt",
    prefixElement: <CountryFlag isoCode="EG" size={25} />,
  },
  {
    label: "Turkey",
    value: "turkey",
    prefixElement: <CountryFlag isoCode="TR" size={25} />,
  },
  {
    label: "Saudi Arabia",
    value: "saudi arabia",
    prefixElement: <CountryFlag isoCode="SA" size={25} />,
  },
  {
    label: "Iran",
    value: "iran",
    prefixElement: <CountryFlag isoCode="IR" size={25} />,
  },
  {
    label: "Thailand",
    value: "thailand",
    prefixElement: <CountryFlag isoCode="TH" size={25} />,
  },
  {
    label: "Malaysia",
    value: "malaysia",
    prefixElement: <CountryFlag isoCode="MY" size={25} />,
  },
  {
    label: "Vietnam",
    value: "vietnam",
    prefixElement: <CountryFlag isoCode="VN" size={25} />,
  },
  {
    label: "Philippines",
    value: "philippines",
    prefixElement: <CountryFlag isoCode="PH" size={25} />,
  },
  {
    label: "Indonesia",
    value: "indonesia",
    prefixElement: <CountryFlag isoCode="ID" size={25} />,
  },
  {
    label: "Singapore",
    value: "singapore",
    prefixElement: <CountryFlag isoCode="SG" size={25} />,
  },
  {
    label: "New Zealand",
    value: "new zealand",
    prefixElement: <CountryFlag isoCode="NZ" size={25} />,
  },
  {
    label: "Nigeria",
    value: "nigeria",
    prefixElement: <CountryFlag isoCode="NG" size={25} />,
  },
  {
    label: "Kenya",
    value: "kenya",
    prefixElement: <CountryFlag isoCode="KE" size={25} />,
  },
  {
    label: "Uganda",
    value: "uganda",
    prefixElement: <CountryFlag isoCode="UG" size={25} />,
  },
  {
    label: "Tanzania",
    value: "tanzania",
    prefixElement: <CountryFlag isoCode="TZ" size={25} />,
  },
  {
    label: "Rwanda",
    value: "rwanda",
    prefixElement: <CountryFlag isoCode="RW" size={25} />,
  },
  {
    label: "Ghana",
    value: "ghana",
    prefixElement: <CountryFlag isoCode="GH" size={25} />,
  },
  {
    label: "Morocco",
    value: "morocco",
    prefixElement: <CountryFlag isoCode="MA" size={25} />,
  },
  {
    label: "Algeria",
    value: "algeria",
    prefixElement: <CountryFlag isoCode="DZ" size={25} />,
  },
  {
    label: "Tunisia",
    value: "tunisia",
    prefixElement: <CountryFlag isoCode="TN" size={25} />,
  },
  {
    label: "Zimbabwe",
    value: "zimbabwe",
    prefixElement: <CountryFlag isoCode="ZW" size={25} />,
  },
  {
    label: "Sudan",
    value: "sudan",
    prefixElement: <CountryFlag isoCode="SD" size={25} />,
  },
  {
    label: "Somalia",
    value: "somalia",
    prefixElement: <CountryFlag isoCode="SO" size={25} />,
  },
  {
    label: "Syria",
    value: "syria",
    prefixElement: <CountryFlag isoCode="SY" size={25} />,
  },
  {
    label: "Iraq",
    value: "iraq",
    prefixElement: <CountryFlag isoCode="IQ" size={25} />,
  },
  {
    label: "Jordan",
    value: "jordan",
    prefixElement: <CountryFlag isoCode="JO" size={25} />,
  },
  {
    label: "Lebanon",
    value: "lebanon",
    prefixElement: <CountryFlag isoCode="LB" size={25} />,
  },
  {
    label: "Kuwait",
    value: "kuwait",
    prefixElement: <CountryFlag isoCode="KW" size={25} />,
  },
  {
    label: "Qatar",
    value: "qatar",
    prefixElement: <CountryFlag isoCode="QA" size={25} />,
  },
  {
    label: "Oman",
    value: "oman",
    prefixElement: <CountryFlag isoCode="OM" size={25} />,
  },
  {
    label: "Bahrain",
    value: "bahrain",
    prefixElement: <CountryFlag isoCode="BH" size={25} />,
  },
  {
    label: "United Arab Emirates",
    value: "united arab emirates",
    prefixElement: <CountryFlag isoCode="AE" size={25} />,
  },
  {
    label: "Yemen",
    value: "yemen",
    prefixElement: <CountryFlag isoCode="YE" size={25} />,
  },
  {
    label: "Bangladesh",
    value: "bangladesh",
    prefixElement: <CountryFlag isoCode="BD" size={25} />,
  },
  {
    label: "Nepal",
    value: "nepal",
    prefixElement: <CountryFlag isoCode="NP" size={25} />,
  },
  {
    label: "Sri Lanka",
    value: "sri lanka",
    prefixElement: <CountryFlag isoCode="LK" size={25} />,
  },
  {
    label: "Maldives",
    value: "maldives",
    prefixElement: <CountryFlag isoCode="MV" size={25} />,
  },
  {
    label: "Mongolia",
    value: "mongolia",
    prefixElement: <CountryFlag isoCode="MN" size={25} />,
  },
  {
    label: "Kazakhstan",
    value: "kazakhstan",
    prefixElement: <CountryFlag isoCode="KZ" size={25} />,
  },
  {
    label: "Uzbekistan",
    value: "uzbekistan",
    prefixElement: <CountryFlag isoCode="UZ" size={25} />,
  },
  {
    label: "Turkmenistan",
    value: "turkmenistan",
    prefixElement: <CountryFlag isoCode="TM" size={25} />,
  },
  {
    label: "Kyrgyzstan",
    value: "kyrgyzstan",
    prefixElement: <CountryFlag isoCode="KG" size={25} />,
  },
  {
    label: "Tajikistan",
    value: "tajikistan",
    prefixElement: <CountryFlag isoCode="TJ" size={25} />,
  },
  {
    label: "Azerbaijan",
    value: "azerbaijan",
    prefixElement: <CountryFlag isoCode="AZ" size={25} />,
  },
  {
    label: "Armenia",
    value: "armenia",
    prefixElement: <CountryFlag isoCode="AM" size={25} />,
  },
  {
    label: "North Macedonia",
    value: "north macedonia",
    prefixElement: <CountryFlag isoCode="MK" size={25} />,
  },
  {
    label: "Serbia",
    value: "serbia",
    prefixElement: <CountryFlag isoCode="RS" size={25} />,
  },
  {
    label: "Bosnia and Herzegovina",
    value: "bosnia and herzegovina",
    prefixElement: <CountryFlag isoCode="BA" size={25} />,
  },
  {
    label: "Montenegro",
    value: "montenegro",
    prefixElement: <CountryFlag isoCode="ME" size={25} />,
  },
  {
    label: "Croatia",
    value: "croatia",
    prefixElement: <CountryFlag isoCode="HR" size={25} />,
  },
  {
    label: "Slovenia",
    value: "slovenia",
    prefixElement: <CountryFlag isoCode="SI" size={25} />,
  },
  {
    label: "Slovakia",
    value: "slovakia",
    prefixElement: <CountryFlag isoCode="SK" size={25} />,
  },
  {
    label: "Czech Republic",
    value: "czech republic",
    prefixElement: <CountryFlag isoCode="CZ" size={25} />,
  },
  {
    label: "Hungary",
    value: "hungary",
    prefixElement: <CountryFlag isoCode="HU" size={25} />,
  },
  {
    label: "Poland",
    value: "poland",
    prefixElement: <CountryFlag isoCode="PL" size={25} />,
  },
  {
    label: "Lithuania",
    value: "lithuania",
    prefixElement: <CountryFlag isoCode="LT" size={25} />,
  },
  {
    label: "Latvia",
    value: "latvia",
    prefixElement: <CountryFlag isoCode="LV" size={25} />,
  },
  {
    label: "Estonia",
    value: "estonia",
    prefixElement: <CountryFlag isoCode="EE" size={25} />,
  },
  {
    label: "Finland",
    value: "finland",
    prefixElement: <CountryFlag isoCode="FI" size={25} />,
  },
  {
    label: "Sweden",
    value: "sweden",
    prefixElement: <CountryFlag isoCode="SE" size={25} />,
  },
  {
    label: "Norway",
    value: "norway",
    prefixElement: <CountryFlag isoCode="NO" size={25} />,
  },
  {
    label: "Denmark",
    value: "denmark",
    prefixElement: <CountryFlag isoCode="DK" size={25} />,
  },
  {
    label: "Iceland",
    value: "iceland",
    prefixElement: <CountryFlag isoCode="IS" size={25} />,
  },
  {
    label: "Ireland",
    value: "ireland",
    prefixElement: <CountryFlag isoCode="IE" size={25} />,
  },
  {
    label: "Belgium",
    value: "belgium",
    prefixElement: <CountryFlag isoCode="BE" size={25} />,
  },
  {
    label: "Netherlands",
    value: "netherlands",
    prefixElement: <CountryFlag isoCode="NL" size={25} />,
  },
  {
    label: "Luxembourg",
    value: "luxembourg",
    prefixElement: <CountryFlag isoCode="LU" size={25} />,
  },
  {
    label: "Switzerland",
    value: "switzerland",
    prefixElement: <CountryFlag isoCode="CH" size={25} />,
  },
  {
    label: "Austria",
    value: "austria",
    prefixElement: <CountryFlag isoCode="AT" size={25} />,
  },
  {
    label: "Monaco",
    value: "monaco",
    prefixElement: <CountryFlag isoCode="MC" size={25} />,
  },
  {
    label: "Liechtenstein",
    value: "liechtenstein",
    prefixElement: <CountryFlag isoCode="LI" size={25} />,
  },
  {
    label: "Malta",
    value: "malta",
    prefixElement: <CountryFlag isoCode="MT" size={25} />,
  },
  {
    label: "San Marino",
    value: "san marino",
    prefixElement: <CountryFlag isoCode="SM" size={25} />,
  },
  {
    label: "Andorra",
    value: "andorra",
    prefixElement: <CountryFlag isoCode="AD" size={25} />,
  },
  {
    label: "Cyprus",
    value: "cyprus",
    prefixElement: <CountryFlag isoCode="CY" size={25} />,
  },
];

export default countries;
