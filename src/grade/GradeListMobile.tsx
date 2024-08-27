import * as React from 'react';
import { List } from '@mui/material';
import { RecordContextProvider, useListContext } from 'react-admin';

import { GradeItem } from './GradeItem';
import { Grade } from '../types';

const GradeListMobile = () => {
    const { data, isLoading, total } = useListContext<Grade>();
    if (isLoading || Number(total) === 0) {
        return null;
    }
    return (
        <List sx={{ width: 'calc(100vw - 33px)' }}>
            {data.map(record => (
                <RecordContextProvider value={record} key={record.id}>
                    <GradeItem />
                </RecordContextProvider>
            ))}
        </List>
    );
};

export default GradeListMobile;
