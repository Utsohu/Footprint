import { Title, useGetList, Loading,RecordContextProvider } from 'react-admin';
import { useMediaQuery, Theme, useTheme } from '@mui/material';
import { useTranslate } from 'react-admin';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Divider,
} from '@mui/material';
const ExperienceList = () => {
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );

    const theme = useTheme();
    const { data, total, isLoading, error } = useGetList('experience');
    if (isLoading) { return <Loading />; }
    if(data == undefined) return (<p>Load Error</p>); 

    return (
        <>
        <Title title="Experience"></Title>
        <Grid container rowSpacing={5} columnSpacing={5} sx={{ m:(isSmall?0: 10),mt:1}}>

        {data.map((record,index) => (
            <RecordContextProvider key={record.id} value={record}>
                <Grid
                    key={record.id}
                    xs={10}
                    item
                >
                    <Card sx={{ mb: '1.0em' }}>
                        <CardContent sx={{ paddingBottom: '0.5em', backgroundColor: theme.palette.primary.dark,color: theme.palette.primary.contrastText }}>
                        <Typography
                                variant="h5"
                                component="h3"
                                align="center"
                            >
                                {record.title}
                            </Typography>
                        </CardContent>
                        <Divider></Divider>
                        <CardContent sx={{ paddingBottom: '0.5em' ,backgroundColor: theme.palette.primary.light,color: theme.palette.primary.contrastText}}>
                             <Typography
                                component="h4"
                                align="left"
                            >
                                {record.company}
                            </Typography>
                            <Typography
                                component="h4"
                                align="left"
                            >
                                {record.date}
                            </Typography>
                            <Typography
                                component="h4"
                                align="left"
                            >
                                {record.addr}
                            </Typography>
                        </CardContent>
                        <Divider></Divider>
                        <CardContent sx={{ paddingBottom: '0.5em', backgroundColor: theme.palette.secondary.light,color: theme.palette.secondary.contrastText }}>
                            {record.content.map((item) => (
                                <Typography
                                    component="h4"
                                    align="left"
                                >
                                    {item}
                                </Typography>
                            ))}
                        </CardContent>

                    </Card>                    
                </Grid>
            </RecordContextProvider>
        ))}
        </Grid>        
        </>

        );
};

export default ExperienceList;
