import * as React from 'react';
import { Box } from '@mui/material';

import { FieldProps, useRecordContext } from 'react-admin';
interface OwnProps {
    shows: string[];
}


const ENumShowField = (props: FieldProps & OwnProps) => {
    const { shows, source } = props;
    const record = useRecordContext();
    if (!record) return null;
    var index = record[source];
    return (
        <Box
            component="span"
            display="flex"
            sx={{
                opacity: 0.87,
                whiteSpace: 'nowrap',
            }}
        >
            {shows.at(index)}
        </Box>
    );
};

ENumShowField.defaultProps = {
    label: 'enum',
    source: 'enum',
};

export default ENumShowField;
