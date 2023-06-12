import React from 'react';
import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Controls } from './components/Controls';

import './App.css';
import axios from 'axios';
import { allContries } from './config';
import { List } from './components/List';
import { Card } from './components/Card';

const App = () => {
  const [contries, setContries] = useState([]);

  useEffect(() => {
    axios(allContries).then(({ data }) => setContries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {contries.map((el) => {
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
            return <Card key={el.name.comon} {...countryInfo} />;
          })}
        </List>
      </Main>
    </>
  );
};

export default App;
