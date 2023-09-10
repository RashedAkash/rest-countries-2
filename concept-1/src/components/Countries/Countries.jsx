import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState([]);
  const [flags, setFlags] = useState([]);
  const handleFlags = (country) => {
    setFlags([...flags,country])
  }
  const handleCountryName = (country) => {
    setCountryName([...countryName,country])
    console.log(country);
  }
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mb-4">All Country in the world!!</h2>
      {
        countryName.map(country => <li>{ country.name.common }</li>)
      }
      <div>
        {
        flags.map(country=> <img className="w-[100px] h-[100px]" src={country.flags.png}></img>)
      }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        countries.map(country=> <Country country={country} key={country.cca3} handleCountryName={handleCountryName} handleFlags={handleFlags} />)
      }
      </div>
    </div>
  );
};

export default Countries;