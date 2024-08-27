import {useTheme } from '@mui/material';
import {
    Card,
    CardContent,
    Typography
} from '@mui/material';
import { Course } from '../types';
interface Props {
    datas: Course[];
}
const CourseItem = (props: Props) => {
    const { datas } = props;
    const theme = useTheme();
    if (datas == undefined || !datas) return (<></>);
    return (
        <div>
        {datas.map((item) => (
                <Card sx={{ mb: '1.0em' }}  style={{ backgroundColor: theme.palette.info.main,color: theme.palette.info.contrastText }}>
                    <CardContent sx={{ paddingBottom: '0.5em' }}>
                    <Typography
                            variant="h5"
                            component="h2"
                            align="center"
                        >
                            {item.course}
                        </Typography>
                        <Typography
                            component="h6"
                            align="center"
                        >
                            {item.description}
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
                        
                    </CardContent>
                </Card>                    

        ))}
        </div>
        );
};

export default CourseItem;