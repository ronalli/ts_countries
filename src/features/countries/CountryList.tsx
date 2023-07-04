import { Card } from 'components/Card';
import { List } from 'components/List';
import { useNavigate } from 'react-router-dom';
import { useCountries } from './use-countries';

import { CountryInfo } from 'types';

export const CountryList = () => {
  const navigate = useNavigate();
  const [countries, { status, error }] = useCountries();
  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <List>
          {countries.map((el) => {
            const countryInfo: CountryInfo = {
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
            let country = countryInfo.name;
            return (
              <Card
                key={country}
                onClick={() => void navigate(`/country/${country}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
