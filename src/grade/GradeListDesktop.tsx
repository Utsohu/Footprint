import * as React from 'react';
import {
    DatagridConfigurable,
    Identifier,
    TextField,
} from 'react-admin';

import rowSx from './rowSx';

import ENumShowField from './ENumShowField';

export interface GradeListDesktopProps {
    selectedRow?: Identifier;
}
const GradeStatus = ['Completed','Uncompleted'];
const TermType = ['1A','1B','2A','2B','3A','3B','4A','4B'];
const BoolType = ['Yes','No'];
const GradeListDesktop = ({ selectedRow }: GradeListDesktopProps) => (
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
        <ENumShowField source="term" label = "Term" shows={TermType}/>
        <TextField source="name" label = "Name"/>
        <TextField source="description" label = "Description"/>
        <TextField source="grade" label = "Grade"/>
        <ENumShowField source="isMajor" label = "Major" shows={BoolType}/>
        <ENumShowField source="status" label = "Status" shows={GradeStatus}/>
    </DatagridConfigurable>
);

export default GradeListDesktop;
