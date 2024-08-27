import * as React from 'react';
import { useCallback } from 'react';
import {
    ExportButton,
    FilterButton,
    List,
    EditGuesser,
    SelectColumnsButton,
    TopToolbar,
} from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';

import GradeListMobile from './GradeListMobile';
import GradeListDesktop from './GradeListDesktop';
import GradeFilters from './GradeFilters';

const GradeListActions = () => (
    <TopToolbar>
        <FilterButton />
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

const GradeList = () => {
    const isXSmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );
    const location = useLocation();
    const navigate = useNavigate();

    const handleClose = useCallback(() => {
        navigate('/grade');
    }, [navigate]);

    const match = matchPath('/grade/:id', location.pathname);

    return (
        <Box display="flex">
            <List
                sx={{
                    flexGrow: 1,
                    transition: (theme: any) =>
                        theme.transitions.create(['all'], {
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    marginRight: !!match ? '400px' : 0,
                }}
                filters={GradeFilters}
                perPage={25}
                sort={{ field: 'term', order: 'ASC' }}//DESC
                actions={<GradeListActions />}
            >
                {isXSmall ? (
                    <GradeListMobile />
                ) : (
                    <GradeListDesktop
                        selectedRow={
                            !!match
                                ? parseInt((match as any).params.id, 10)
                                : undefined
                        }
                    />
                )}
            </List>

            <Drawer
                variant="persistent"
                open={!!match}
                anchor="right"
                onClose={handleClose}
                sx={{ zIndex: 100 }}
            >
                {!!match && (
                    <EditGuesser
                        id={(match as any).params.id}
                    />
                )}
            </Drawer>
        </Box>
    );
};

export default GradeList;
