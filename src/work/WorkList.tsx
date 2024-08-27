import React, { useEffect, useState, useRef } from 'react';
import { Title, useGetList, Loading,RecordContextProvider } from 'react-admin';
import { useMediaQuery, Theme, Autocomplete,TextField,Button,useTheme,Select } from '@mui/material';
import inflection from 'inflection';
import { useTranslate } from 'react-admin';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';

const WorkList = () => {
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );

    const theme = useTheme();
    const { data, total, isLoading, error } = useGetList('work');
    if (isLoading) { return <Loading />; }
    if(data == undefined) return (<p>Load Error</p>); 

    return (
        <>
        <Title title="Works"></Title>
        <Grid container rowSpacing={5} columnSpacing={15} sx={{ mt: 1}}>
        {data.map(record => (
            <RecordContextProvider key={record.id} value={record}>
                <Grid
                    key={record.id}
                    xs={isSmall?12:5}
                    item
                >
                    <Card>
                        <CardContent sx={{ paddingBottom: '0.5em',
                            backgroundColor:theme.palette.primary.dark,
                            color:theme.palette.primary.contrastText }}>
                            <Typography
                                variant="h5"
                                component="h2"
                                align="center"
                                
                            >
                                {record.title}
                            </Typography>
                            <Typography
                                align="center"
                            >
                                {record.tech}
                            </Typography>

                        </CardContent>
                        <CardMedia
                            image={record.png}
                            sx={{ height: 320 }}
                        />
                        <CardContent sx={{ paddingBottom: '0.5em', 
                            backgroundColor:theme.palette.primary.light,
                             color:theme.palette.primary.contrastText }}>
                            <Typography
                                align="left"
                            >
                            {record.description.map((item) => (
                                <Typography
                                    component="h4"
                                    align="left"
                                >
                                    {item}
                                </Typography>
                            ))}                                
                            </Typography>
                        </CardContent>

                        <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    backgroundColor:theme.palette.secondary.light
                                }}>
                            <a href={record.demo}  target="_blank">Demo</a>
                            <a href={record.src}  target="_blank">Source</a>
                        </div>
                    </Card>
                </Grid>
            </RecordContextProvider>
        ))}
        </Grid>        
        </>
        );
};

export default WorkList;
