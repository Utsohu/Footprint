import { useTheme } from '@mui/material';
import { useGetList, Loading } from 'react-admin';
import {
    Card,
    CardContent,
    Typography,
} from '@mui/material';
const Thing = () => {
    const { data: things, isLoading:isLoading } = useGetList('thing');
    if(isLoading || things == null) return (<Loading></Loading>)
    const theme = useTheme();
    return (
        <div>
        <Card sx={{ mt: '1em',mb: '1.0em' }} style={{ backgroundColor: theme.palette.primary.dark,color: theme.palette.primary.contrastText }}>
            <CardContent sx={{ paddingBottom: '0.5em' }}>
            <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                >
                    {(things == null || things.length == 0)?
                     'No Affairs':'Next Week Affairs'}
                </Typography>
            </CardContent>
        </Card>                    

        {things.map((item) => (
                <Card sx={{ mb: '1.0em' }}  style={{ backgroundColor: theme.palette.primary.light,color: theme.palette.primary.contrastText }}>
                    <CardContent sx={{ paddingBottom: '0.5em' }}>
                    <Typography
                            variant="h5"
                            component="h2"
                            align="center"
                        >
                            {item.title}
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
                            {item.content}
                        </Typography>
                    </CardContent>
                </Card>                    

        ))}

        </div>
        );
};

export default Thing;