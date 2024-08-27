import * as React from 'react';
import { Fragment } from 'react';
import {
    ListItem,
    ListItemText,
    Link as MuiLink,
    Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
    useCreatePath,
    TextField,
    useRecordContext,
} from 'react-admin';

import { Honour } from '../types';
export const HonourItem = () => {
    const record = useRecordContext<Honour>();
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
                                </Fragment>}
                    primary={
                        <Fragment>
                            <TextField source="honour" label="Honour"/>
                        </Fragment>
                    }
                    secondaryTypographyProps={{ noWrap: true }}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </MuiLink>
    );
};
