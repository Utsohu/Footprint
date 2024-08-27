import * as React from 'react';
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import { useTranslate } from 'react-admin';

import publishArticleImage from './welcome.jpg';
interface Props {
    main?: object;
}


const Welcome = (props: Props) => {
    const { main } = props;
    return (
        <Card
            sx={{
                background: theme =>
                    `linear-gradient(45deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.light} 50%, ${theme.palette.primary.dark} 100%)`,
                color: theme => theme.palette.primary.contrastText,
                padding: '20px',
                marginTop: 2,
                marginBottom: '1em',
            }}
        >
            <Box display="flex">
                <Box flex="1">
                    <Typography variant="h5" component="h2" gutterBottom>
                        {main.title}
                    </Typography>
                    <Box maxWidth="40em">
                    <Typography variant="body1" component="p" gutterBottom>
                            {main.subtitle}
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            {main.contact}
                        </Typography>
                    </Box>
                    <CardActions
                        sx={{
                            padding: { xs: 0, xl: null },
                            flexWrap: { xs: 'wrap', xl: null },
                            '& a': {
                                marginTop: { xs: '1em', xl: null },
                                marginLeft: { xs: '0!important', xl: null },
                                marginRight: { xs: '1em', xl: null },
                            },
                        }}
                    >
                        <Button
                            variant="contained"
                            href="https://www.linkedin.com/in/boyue-yang-56ab6b229"
                            startIcon={<HomeIcon />}
                        >
                            {"Linkedin"}
                        </Button>
                        <Button
                            variant="contained"
                            href="https://www.github.com/Utsohu"
                            startIcon={<CodeIcon />}
                        >
                            {'Github'}
                        </Button>
                    </CardActions>
                </Box>
                <Box 
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    sx={{
                        background: `url(${publishArticleImage}) top right / cover`,
                        marginLeft: 'auto',
                    }}
                    width="16em"
                    height="9em"
                    overflow="hidden"
                />
            </Box>
        </Card>
    );
};

export default Welcome;
