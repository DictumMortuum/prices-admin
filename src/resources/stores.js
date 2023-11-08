import {
  Datagrid,
  List,
  TextField,
  BulkExportButton
} from 'react-admin';

export const StoresList = () => (
  <List perPage={60}>
    <Datagrid bulkActionButtons={
      <BulkExportButton />
    }>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="count" label="Total titles" />
      <TextField source="latest_count" label="Titles updated within the week" />
    </Datagrid>
  </List>
);
