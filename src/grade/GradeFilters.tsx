import * as React from 'react';
import {AutocompleteInput,} from 'react-admin';

const GradeFilters = [
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
    <AutocompleteInput label="Major" 
        source="isMajor"
        choices={[
            { id: 0, name: 'Yes' },
            { id: 1, name: 'No' }
        ]}
    />,
    <AutocompleteInput label="Status" 
        source="status"
        choices={[
            { id: 0, name: 'Completed' },
            { id: 1, name: 'Uncompleted' },
        ]}
    />,
];

export default GradeFilters;
