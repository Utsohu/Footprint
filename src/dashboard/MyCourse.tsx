import * as React from 'react';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Box,
    useTheme
} from '@mui/material';
import { createElement } from 'react';
import MajorIcon from '@mui/icons-material/CameraIndoor';
import UnMajorIcon from '@mui/icons-material/CameraOutdoor';
import { Grade } from '../types';

interface Props {
    grade: Grade;
}
const TermType = ['1A','1B','2A','2B','3A','3B','4A','4B'];
export const MyCourse = (props: Props) => {
    const { grade } = props;
    const theme = useTheme();
    return (
        <ListItem >
            <ListItemAvatar>
                <Box width="3em" className="icon">
                {grade.isMajor? <UnMajorIcon style={{fontSize:'30',color: theme.palette.primary.main}}></UnMajorIcon>:
                                <MajorIcon style={{fontSize:'30',color: theme.palette.primary.main}}></MajorIcon>}
                </Box>
            </ListItemAvatar>
            <ListItemText
                primary={grade.description}
                secondary={grade.name}
            />
            <ListItemSecondaryAction>
                <Box
                    component="span"
                    sx={{
                        marginRight: '1em',
                        color: 'text.primary',
                    }}
                >
                    {TermType[grade.term]}
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
