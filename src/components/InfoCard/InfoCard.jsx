import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { filterByCode } from '../../config';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  matgin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export const InfoCard = (props) => {
  const {
    name,
    flags,
    capital,
    population,
    borders = [],
    currencies,
    languages,
    subregion,
    region,
    tld,
  } = props;

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (borders.length)
      axios.get(filterByCode(borders)).then(({ data }) => {
        setNeighbors(data.map((el) => el.name.common));
      });
  }, [borders]);

  // console.log(neighbors);

  return (
    <Wrapper>
      <InfoImage src={flags.svg} alt={flags.alt} />
      <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native name: </b> {name.official}
            </ListItem>
            <ListItem>
              <b>Population: </b> {population}
            </ListItem>
            <ListItem>
              <b>Region: </b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region: </b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital: </b> {capital[0]}
            </ListItem>
          </List>

          <List>
            <ListItem>
              <b>Top Level Domain: </b>{' '}
              {tld.map((domain) => (
                <span key={domain}>{domain} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency: </b>{' '}
              {Object.entries(currencies).map((el) => (
                <span key={el[0]}>{el[1].name}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages: </b>{' '}
              {Object.entries(languages).map((el) => (
                <span key={el[0]}>{el[1]}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>

        <Meta>
          <b>Border Countries</b>
          <TagGroup>
            {!borders.length
              ? 'There is no border countries'
              : neighbors.map((b) => (
                  <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                    {b}{' '}
                  </Tag>
                ))}
          </TagGroup>
        </Meta>
      </div>
    </Wrapper>
  );
};