const customStyles = {
  control: (provided, state) => ({
        ...provided,
      
    // width:'224px',
    // height: '48px',
    // padding: '14px 89px 14px 18px',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: '14px',
    background:' #F7F7FB',
    // border: '1px solid #ccc',
    // borderRadius: '4px',
    // boxShadow: state.isFocused ? '0 0 5px rgba(0, 0, 0, 0.5)' : 'none',
  }),
//   option: (provided, state) => ({
//     ...provided,
//     // Налаштовуємо стилі для опцій випадаючого списку
//     backgroundColor: state.isSelected ? '#007bff' : 'white',
//     color: state.isSelected ? 'white' : 'black',
//     '&:hover': {
//       backgroundColor: '#007bff',
//       color: 'white',
//     },
//   }),
};