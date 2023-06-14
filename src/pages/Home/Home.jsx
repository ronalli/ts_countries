import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import { Controls } from '../../components/Controls';
import { List } from '../../components/List';
import { Card } from '../../components/Card';

import { allContries } from '../../config';

const Home = ({ countries, setCountries }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length)
      axios(allContries).then(({ data }) => setCountries(data));
			
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((el) => {
          const countryInfo = {
            img: el.flags.png,
            name: el.name.common,
            info: [
              {
                title: 'Population',
                description: el.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: el.region,
              },
              {
                title: 'Capital',
                description: el.capital[0],
              },
            ],
          };
          let country = countryInfo.name.split(' ').join('');
          return (
            <Card
              key={country}
              onClick={() => navigate(`/country/${country}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default Home;
