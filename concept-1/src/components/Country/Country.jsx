import { useState } from "react";


const Country = ({ country,handleCountryName,handleFlags }) => {
  const { name, flags, population, capital } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  }
  console.log(country);
  return (
    <div>
      <div className= {`card  bg-base-100 shadow-xl ${visited && 'bg-red-300'}`}>
  <figure className="px-10 pt-10">
    <img src={flags.png} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name.common}</h2>
          <h4>Capital : {capital}</h4>
          <p>Population : {population} </p>
    <div className="card-actions">
            <button onClick={handleVisited} className={`btn ${visited?'btn-primary':'btn-secondary'}`}> {visited ? 'Visited' : 'Going'} </button>
            <button onClick={()=>handleCountryName(country)} className={`btn ${visited?'btn-primary':'btn-secondary'}`}> Mark visited </button>
            <button onClick={()=>handleFlags(country)} className={`btn ${visited?'btn-primary':'btn-secondary'}`}>Flags </button>
           
          </div>
           {visited?'I already visit this Country':'I want to visit this Country'}
  </div>
</div>
    </div>
  );
};

export default Country;