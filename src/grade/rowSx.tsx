import { Identifier } from 'react-admin';
import type { SxProps } from '@mui/material';
import green from '@mui/material/colors/green';
import orange from '@mui/material/colors/orange';
import red from '@mui/material/colors/red';
import brown from '@mui/material/colors/brown';
import blue from '@mui/material/colors/blue';
import purple from '@mui/material/colors/purple';
import yellow from '@mui/material/colors/yellow';
import lime from '@mui/material/colors/lime';

import { Grade } from './../types';

const rowSx = (selectedRow?: Identifier) => (record: Grade): SxProps => {
    let style = {};
    if (!record) {
        return style;
    }
    if (selectedRow && selectedRow === record.id) {
        style = {
            ...style,
            backgroundColor: 'action.selected',
        };
    }
    if (record.term === 0)
        return {
            ...style,
            borderLeftColor: green[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    if (record.term === 1)
        return {
            ...style,
            borderLeftColor: orange[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    if (record.term === 2)
        return {
            ...style,
            borderLeftColor: red[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    if (record.term === 3)
        return {
            ...style,
            borderLeftColor: blue[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    if (record.term === 4)
        return {
            ...style,
            borderLeftColor: purple[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    if (record.term === 5)
        return {
            ...style,
            borderLeftColor: yellow[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    if (record.term === 6)
        return {
            ...style,
            borderLeftColor: brown[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };
    if (record.term === 7)
        return {
            ...style,
            borderLeftColor: lime[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };

    return style;
};

export default rowSx;
