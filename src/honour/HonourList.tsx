import * as React from 'react';
import { useCallback } from 'react';
import {
    CreateButton,
    ExportButton,
    FilterButton,
    List,
    EditGuesser,
    SelectColumnsButton,
    TopToolbar,
} from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';

import HonourListMobile from './HonourListMobile';
import HonourListDesktop from './HonourListDesktop';
import HonourFilters from './HonourFilters';

const HonourListActions = () => (
    <TopToolbar>
        <FilterButton />
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

const HonourList = () => {
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
                filters={HonourFilters}
                perPage={25}
                sort={{ field: 'term', order: 'DESC' }}
                actions={<HonourListActions />}
            >
                {isXSmall ? (
                    <HonourListMobile />
                ) : (
                    <HonourListDesktop
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
                        onCancel={handleClose}
                    />
                )}
            </Drawer>
        </Box>
    );
};

export default HonourList;
