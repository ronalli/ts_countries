import styled from 'styled-components';

import Select, { Props } from 'react-select';
import { Region } from 'types';

export type CountryOption = {
	label: Region,
	value: Region
} | '';
 
function MySelect(props: Props<CountryOption, false>) {
	return <Select {...props}/>
}

export const CustomSelect = styled(MySelect).attrs({
  menuPosition: 'fixed',
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      border: '0',
      boxShadow: 'var(--shadow)',
      height: '50px',
			cursor: 'pointer'
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
    }),
    menuList: (provided, state) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
    z-index: 9999;
  }
`;
