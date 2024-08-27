import { Title, useGetList, Loading,RecordContextProvider } from 'react-admin';
import { useMediaQuery, Theme, useTheme } from '@mui/material';
import { useTranslate } from 'react-admin';
import {
    Grid,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import CourseItem from './CourseItem';
const CourseList = () => {
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );

    const theme = useTheme();
    const { data, total, isLoading, error } = useGetList('course',{
        pagination: { page: 1, perPage: 30 },
        sort: { field: 'id', order: 'ASC' },
    });
    if (isLoading) { return <Loading />; }
    if(data == undefined) return (<p>Load Error</p>); 
    let curday = new Date().getDay() - 1;
    return (
        <>
        <Title title="Courses"></Title>
        <Grid container rowSpacing={5} columnSpacing={5} sx={{ mt: 1}}>

        {data.map((record,index) => (
            <RecordContextProvider key={record.id} value={record}>
                <Grid
                    key={record.id}
                    xs={isXSmall?12:isSmall?6:2}
                    item
                >
                    <Card sx={{ mb: '1.0em' }} style=
                        { {backgroundColor: (curday==index?theme.palette.primary.main: theme.palette.secondary.main),
                            color: theme.palette.secondary.contrastText}}>
                        <CardContent sx={{ paddingBottom: '0.5em' }}>
                            <Typography
                                variant="h5"
                                component="h2"
                                align="center"
                            >
                                {record.name}
                            </Typography>
                        </CardContent>
                    </Card>                    
                    <CourseItem datas={record.courses}></CourseItem>
                </Grid>
            </RecordContextProvider>
        ))}
        </Grid>        
        </>
        );
};

export default CourseList;
