import { useState } from 'react';
import './FieldsetCustom.css';
import { Button } from '@/components/ui/button';

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
    <fieldset className="border-2 border-blue-500 p-4">
      <legend>List Countries</legend>
      <ul>
        {countries.map((country) => {
          return <li>{country}</li>;
        })}
      </ul>
      <input
        type="date"
        placeholder="Add a country"
        onChange={(event) => setNewCountry(event.target.value)}
      />
      <Button onClick={addCountry}>Add Country</Button>
    </fieldset>
  );
};

export default FieldsetCustom;
