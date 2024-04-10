import { components } from 'react-select';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { StyledSelect } from './Form.styled';

const DropdownIndicator = ({ isFocused, ...props }) => (
  <components.DropdownIndicator {...props}>
    {isFocused ? <VscChevronUp /> : <VscChevronDown />}
  </components.DropdownIndicator>
);

const customScrollbarStyles = {
  menuList: provided => ({
    ...provided,
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#BFB4DD',
      borderRadius: '12px',
    },
  }),
};
export const CustomSelect = ({ onChange, options, value, className }) => {
  const findDefaultValue = (options, value) =>
    options.find(option => option.value === value) || null;

  const handleChange = selectedOption => {
    console.log('Selected option in CustomSelect:', selectedOption);
    onChange(selectedOption.value);
  };
  return (
    <div className={className}>
      <StyledSelect
        value={findDefaultValue(options, value)}
        onChange={handleChange}
        options={options}
        placeholder="Select a category"
        components={{ DropdownIndicator }}
        classNamePrefix="Select"
        styles={customScrollbarStyles}
      />
    </div>
  );
};
