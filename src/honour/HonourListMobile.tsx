import * as React from 'react';
import { List } from '@mui/material';
import { RecordContextProvider, useListContext } from 'react-admin';

import { HonourItem } from './HonourItem';
import { Honour } from '../types';

const HonourListMobile = () => {
    const { data, isLoading, total } = useListContext<Honour>();
    if (isLoading || Number(total) === 0) {
        return null;
    }
    return (
        <List sx={{ width: 'calc(100vw - 33px)' }}>
            {data.map(record => (
                <RecordContextProvider value={record} key={record.id}>
                    <HonourItem />
                </RecordContextProvider>
            ))}
        </List>
    );
};

export default HonourListMobile;
