import { NavigateFunction } from 'react-router-dom';
import { InfoCard } from './InfoCard';
import { useDetails } from './use-details';

interface CountryDetailsProps {
	navigate: NavigateFunction,
	name?: string
}


export const CountryDetails = ({ name = '', navigate }: CountryDetailsProps) => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <InfoCard {...currentCountry} navigate={navigate} />}
    </>
  );
};
