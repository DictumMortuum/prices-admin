import React from 'react';
import Paper from '@mui/material/Paper';
import { Title } from 'react-admin';

const Component = props => {
  const { title, children } = props;

  return (
    <Paper p={2} style={{ marginTop: 20 }}>
      <Title title={title} />
      <>
        {children}
      </>
    </Paper>
  );
}

export default Component;
