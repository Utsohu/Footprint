import * as React from 'react';
import {
    AutocompleteInput,
} from 'react-admin';

const HonourFilters = [
    <AutocompleteInput label="Term" 
    source="term"
    choices={[
        { id: 0, name: '1A' },
        { id: 1, name: '1B' },
        { id: 2, name: '2A' },
        { id: 3, name: '2B' },
        { id: 4, name: '3A' },
        { id: 5, name: '3B' },
        { id: 6, name: '4A' },
        { id: 7, name: '4B' },
    ]}
    />,
];

export default HonourFilters;
