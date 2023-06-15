import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { searchByCountry } from '../../config';
import { Button } from '../../components/Button/Button';
import { InfoCard } from '../../components/InfoCard/InfoCard';

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  // console.log(country);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <InfoCard {...country} />}
    </div>
  );
};
