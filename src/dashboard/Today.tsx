import { useTheme } from '@mui/material';
import moment from 'moment';
import {
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import { useGetList,Loading } from 'react-admin';
const Today = () => {
    const { data: courses, isLoading } = useGetList('course', {
        pagination: { page: 1, perPage: 30 },
        sort: { field: 'id', order: 'ASC' },
    });
    if(isLoading) return <Loading></Loading>
    const theme = useTheme();
    let curday = new Date();
    var dateString = moment(curday).format('YYYY-MM-DD');
    let week = curday.getDay();
    let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday" ];

    let weekday = week-1;
    let todaycourse = null;
    if( courses != null) {
        if(weekday >= 0 && weekday < 5) {
            todaycourse = courses[weekday];
        }
        else todaycourse = courses[0];
    }

    return (
        <div>
        <Card sx={{ mt: '1em',mb: '1.0em' }} style={{ backgroundColor: theme.palette.primary.dark,color: theme.palette.primary.contrastText }}>
            <CardContent sx={{ paddingBottom: '0.5em' }}>
            <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                >
                    {weeks[week]}
                </Typography>
                <Typography
                    variant="h5"
                    component="h4"
                    align="center"
                >
                    {dateString}
                </Typography>
                <Typography
                    align="left"
                >
                    {(week == 0 || week == 6)?"Monday Lesson":"Today Lesson"}
                </Typography>
            </CardContent>
        </Card>                    

        {todaycourse.courses != null && todaycourse.courses.map((item) => (
                <Card sx={{ mb: '1.0em' }}  style={{ backgroundColor: theme.palette.primary.light,color: theme.palette.primary.contrastText}}>
                    <CardContent sx={{ paddingBottom: '0.5em' }}>
                    <Typography
                            variant="h5"
                            component="h2"
                            align="center"
                        >
                            {item.course}
                        </Typography>
                        <Typography
                            component="h5"
                            align="left"
                        >
                            {item.time}
                        </Typography>
                        <Typography
                            component="h5"
                            align="left"
                        >
                            {item.room}
                        </Typography>
                        <Typography
                            component="h5"
                            align="left"
                        >
                            {item.teacher}
                        </Typography>
                        <Typography
                            component="h6"
                            align="left"
                        >
                            {item.description}
                        </Typography>
                        
                    </CardContent>
                </Card>                    

        ))}
        </div>
        );
};

export default Today;