import * as React from 'react';
import { Card, CardHeader, List } from '@mui/material';
import { useGetList,Loading } from 'react-admin';
import { MyCourse } from './MyCourse';

const MyCourses = () => {
    const { data: grades, isLoading:Loading1} = useGetList('grade', {
        pagination: { page: 1, perPage: 30 },
        sort: { field: 'id', order: 'DESC' },
    });
    if(Loading1 ) return (<Loading></Loading>)

    return (
        <Card sx={{ flex: 1 }}>
            <CardHeader title={'Courses'} />
            <List dense={true}>
                {grades!=null && grades.map(record => (
                    <MyCourse grade={record} />
                ))}
            </List>
        </Card>
    );
};

export default MyCourses;
