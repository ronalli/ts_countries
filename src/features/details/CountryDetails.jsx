import { InfoCard } from './InfoCard';
import { useDetails } from './use-details';

export const CountryDetails = ({ name = '', navigate }) => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <InfoCard {...currentCountry} />}
    </>
  );
};
