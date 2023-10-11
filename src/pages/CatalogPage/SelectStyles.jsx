export const optionsMark = [
        { value: 'Buick', label: 'Buick' },
        { value: 'Volvo', label: 'Volvo' },
        { value: 'Subaru', label: 'Subaru' },
        { value: 'Hummer', label: 'Hummer' },
        { value: 'Mitsubishi', label: 'Mitsubishi' },
        { value: 'Nissan', label: 'Nissan' },
        { value: 'Lincoln', label: 'Lincoln' },
        { value: 'GMC', label: 'GMC' },
        { value: 'Hyundai', label: 'Hyundai' },
        { value: 'Mini', label: 'Mini' },
        { value: 'Bentley', label: 'Bentley' },
        { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
        { value: 'Aston Martin', label: 'Aston Martin' },
        { value: 'Pontiac', label: 'Pontiac' },
        { value: 'Lamborghini', label: 'Lamborghini' },
        { value: 'Audi', label: 'Audi' },
        { value: 'BMW', label: 'BMW' },
        { value: 'Chevrolet', label: 'Chevrolet' },
        { value: 'Chrysler', label: 'Chrysler' },
        { value: 'Kia', label: 'Kia' },
        { value: 'Land Rover', label: 'Land Rover' },                
];

export const optionsPrice =[
     { value: 20, label: '20' },
     { value: 30, label: '30' },
     { value: 40, label: '40' },
     { value: 50, label: '50' },
     { value: 60, label: '60' },
     { value: 70, label: '70' },
     { value: 80, label: '80' },
     { value: 90, label: '90' },
     { value: 100, label: '100' },
     { value: 110, label: '110' },
     { value: 120, label: '120' },
     { value: 130, label: '130' },
     { value: 140, label: '140' },
     { value: 150, label: '150' },

]


export const customStylesMark = {
       control: (provided) => ({
       ...provided,
            width: 224, 
            height: 48,
            borderRadius: 14,
            background: '#F7F7FB',
            border: 'none',
            marginRight: 18,
            fontFamily: 'Manrope, sans-serif',
            fontSize: 18,
            fontWeight: 500, 
            color: '#121417',
            paddingLeft: 18,
            
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#121417',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 18,
            fontWeight: 500,
           })
    };

export const customStylesPrice = {
       control: (provided) => ({
       ...provided,
            width: 125, 
            height: 48,
            borderRadius: 14,
            background: '#F7F7FB',
            border: 'none',
            marginRight: 18,
            fontFamily: 'Manrope, sans-serif',
            fontSize: 18,
            fontWeight: 500,
            color: '#121417',
            paddingLeft: 18
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#121417',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 18,
            fontWeight: 500,
           }),
    };
