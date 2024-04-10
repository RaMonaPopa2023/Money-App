const { default: styled } = require('styled-components');

export const SelectBox = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 16px;
  }
  @media (min-width: 1280px) {
    gap: 32px;
    width: 182px;
  }
`;
export const customSelect = {
  container: styles => ({
    ...styles,

    maxHeight: '50px',

    fontFamily: 'Poppins',

    fontSize: '16px',
    border: '1px solid var(--white, --transparency-60)',
    borderRadius: '8px',

    '@media (max-width: 767px)': {
      maxWidth: '280px',
      width: '100%',
    },
    '@media (min-width: 768px) and (max-width: 1279px)': {
      maxWidth: '160px',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '182px',
    },
  }),
  singleValue: styles => ({
    ...styles,
    color: 'var(--white)',
    fontSize: '16px',
    marginLeft: '20px',
  }),
  control: styles => ({
    ...styles,
    background: 'rgba(74, 86, 226, 0.10)',
    minHeight: '50px',
    width: '182px',
    border: 'none',
    boxShadow: 'none',
    margin: '0',

    '@media (max-width: 1279px)': {
      width: '160px',
    },
    '@media (max-width: 767px)': {
      maxWidth: '440px',
      width: '100%',
    },
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    cursor: 'pointer',
    backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
    color: isFocused ? 'var(--dashboard-text)' : 'var(--white)',
    '&:hover': {
      backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
      color: isFocused ? 'var(--dashboard-text)' : '#FBFBFB',
    },
    textAlign: 'left',
    paddingLeft: '20px',
    fontSize: '16px',
  }),
  menu: styles => ({
    ...styles,
    textAlign: 'center',
    borderRadius: '8px',
    margin: '0',
    background:
      'linear-gradient(360deg, rgba(83, 61, 186, 1) 0%, rgba(80, 48, 154, 1) 35.94%, rgba(106, 70, 165, 1) 61.04%, rgba(133, 93, 175, 1) 100%)',
  }),
  menuList: styles => ({
    ...styles,
    borderRadius: '8px',
    boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(50px)',
    maxHeight: '157px',
    '&::-webkit-scrollbar': {
      width: '4px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#bdbdbd',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#bdbdbd',
    },
  }),
  placeholder: styles => ({
    ...styles,
    paddingBottom: '2px',
    color: 'var(--white)',
    fontSize: '16px',
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
};
