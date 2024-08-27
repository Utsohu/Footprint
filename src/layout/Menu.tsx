import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import GradeIcon from '@mui/icons-material/Grade';
import ExperienceIcon from '@mui/icons-material/Work';
import WorkIcon from '@mui/icons-material/Theaters';
import CourseIcon from '@mui/icons-material/CalendarToday';
import HonourIcon from '@mui/icons-material/Pets';

import {
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

const Menu = ({ dense = false }: MenuProps) => {
    const [open] = useSidebarState();

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />

            <MenuItemLink
                to="/grade"
                state={{ _scrollToTop: true }}
                primaryText={'Grades'}
                leftIcon={<GradeIcon />}
                dense={dense}
            />
            <MenuItemLink
                to="/experience"
                state={{ _scrollToTop: true }}
                primaryText={'Experiences'}
                leftIcon={<ExperienceIcon />}
                dense={dense}
            />
            <MenuItemLink
                to="/work"
                state={{ _scrollToTop: true }}
                primaryText={'Works'}
                leftIcon={<WorkIcon />}
                dense={dense}
            />
            <MenuItemLink
                to="/course"
                state={{ _scrollToTop: true }}
                primaryText={'Courses'}
                leftIcon={<CourseIcon />}
                dense={dense}
            />
            <MenuItemLink
                to="/honour"
                state={{ _scrollToTop: true }}
                primaryText={'Honours'}
                leftIcon={<HonourIcon />}
                dense={dense}
            />
        </Box>
    );
};

export default Menu;
