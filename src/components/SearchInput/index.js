import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './index.css'

const SearchInput = ({value, onChange}) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);
    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
        // onChange(event.target.value);
    }

    return (
        <input type="search" value={displayValue} onChange={handleChange} />
    )
}

export default SearchInput;