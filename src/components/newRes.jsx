import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function Form() {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [address, setAddress] = useState('');

  const handlePlaceSelect = async (selected) => {
    setAddress(selected);
    try {
      const results = await geocodeByAddress(selected);
      const latLng = await getLatLng(results[0]);
      console.log('Geocode Results:', latLng);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Tel:', tel);
    console.log('Address:', address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="tel">Tel:</label>
        <input type="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handlePlaceSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input {...getInputProps({ placeholder: 'Enter Address' })} />
              <div>
                {loading ? <div>Loading...</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
