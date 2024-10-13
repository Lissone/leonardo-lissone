import ReactSwitch from 'react-switch';
import styled from 'styled-components';

import { useData } from '@contexts/DataContext';

export function LanguageSwitch() {
  const { data, toggleDataLanguage } = useData();
  const { lang } = data;

  return (
    <Container
      checked={lang === 'en-us'}
      onChange={toggleDataLanguage}
      handleDiameter={26}
      width={100}
      height={40}
      borderRadius={40}
      offColor="#313131"
      onColor="#313131"
      onHandleColor="#CA3E47"
      offHandleColor="#CA3E47"
      boxShadow="0rem 0rem 0.625rem #CA3E47"
      activeBoxShadow="0rem 0rem 0.625rem #CA3E47"
      uncheckedIcon={
        <div
          style={{
            ...languageSwitchDefaultStyle,
            paddingRight: 14,
            color: 'var(--gray-300)',
          }}
        >
          BR
        </div>
      }
      checkedIcon={
        <div
          style={{
            ...languageSwitchDefaultStyle,
            paddingLeft: 14,
            color: 'var(--gray-500)',
          }}
        >
          EN
        </div>
      }
    />
  );
}

const languageSwitchDefaultStyle = {
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: 18,
  fontWeight: 700,
};

export const Container = styled(ReactSwitch)`
  border: 2px solid var(--red-400);
  box-shadow: 0rem 0rem 1.25rem var(--red-400);
`;
