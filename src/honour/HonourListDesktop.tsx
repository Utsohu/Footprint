import * as React from 'react';
import {
    DatagridConfigurable,
    Identifier,
    TextField,
} from 'react-admin';

import rowSx from './rowSx';

import ENumShowField from './ENumShowField';

export interface HonourListDesktopProps {
    selectedRow?: Identifier;
}
const TermType = ['1A','1B','2A','2B','3A','3B','4A','4B'];
const HonourListDesktop = ({ selectedRow }: HonourListDesktopProps) => (
    <DatagridConfigurable
        rowClick="edit"
        rowSx={rowSx(selectedRow)}
        bulkActionButtons={false}
        sx={{
            '& .RaDatagrid-thead': {
                borderLeftColor: 'transparent',
                borderLeftWidth: 5,
                borderLeftStyle: 'solid',
            },
            '& .column-comment': {
                maxWidth: '18em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
        }}
    >
        <TextField source="honour" label = "Honour"/>
        <ENumShowField source="term" label = "Term" shows={TermType}/>
        <TextField source="description" label = "Description"/>
    </DatagridConfigurable>
);

export default HonourListDesktop;
