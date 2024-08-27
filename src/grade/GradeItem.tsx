import * as React from 'react';
import { Fragment } from 'react';
import {
    ListItem,
    ListItemText,
    Link as MuiLink,
    Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import ENumShowField from './ENumShowField';
import {
    useCreatePath,
    TextField,
    useRecordContext,
} from 'react-admin';

import { Grade } from '../types';
const GradeStatus = ['Completed','Uncompleted'];
const TermType = ['1A','1B','2A','2B','3A','3B','4A','4BA'];
const BoolType = ['Yes','No'];
export const GradeItem = () => {
    const record = useRecordContext<Grade>();
    const createPath = useCreatePath();
    if (!record) {
        return null;
    }
    return (
        <MuiLink
            to={createPath({
                resource: 'webwork',
                type: 'edit',
                id: record.id,
            })}
            component={Link}
            underline="none"
            color="inherit"
        >
            <ListItem button>
                <ListItemText
                    secondary={<Fragment>
                                    <TextField source="term" label = "Term"/>
                                    <TextField source="description" label="Description"/>
                                    <ENumShowField source="isMajor" label = "Major" shows={BoolType}/>
                                    <ENumShowField source="status" label = "Status" shows={GradeStatus}/>
                                </Fragment>}
                    primary={
                        <Fragment>
                            <TextField source="name" label = "Name"/>
                            <TextField source="grade" label="Grade"/>
                        </Fragment>
                    }
                    secondaryTypographyProps={{ noWrap: true }}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </MuiLink>
    );
};
