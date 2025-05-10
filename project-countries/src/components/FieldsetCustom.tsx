import { useState } from 'react';
import './FieldsetCustom.css';
const FieldsetCustom = () => {
  // const countries = ['Peru', 'Brazil', 'Argentina', 'Colombia', 'Chiles'];

  const [countries, setCountries] = useState<string[]>([]);
  const [newCountry, setNewCountry] = useState<string>('');
  const addCountry = () => {
    // const newCountry = document.querySelector('input')?.value;
    if (newCountry) {
      setCountries([...countries, newCountry]);
    }
  };

  return (
    <fieldset className="fieldset-border">
      <legend>List Countries</legend>
      <ul>
        {countries.map((country) => {
          return <li>{country}</li>;
        })}
      </ul>
      <input
        type="text"
        placeholder="Add a country"
        onChange={(event) => setNewCountry(event.target.value)}
      />
      <button onClick={addCountry}>Add Country</button>
    </fieldset>
  );
};

export default FieldsetCustom;
