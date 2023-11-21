import {
  Datagrid,
  ImageField,
  List,
  // NumberField,
  ReferenceField,
  TextField,
  // DeleteButton,
  FunctionField,
  Edit,
  SimpleForm,
  // EditButton,
  NumberInput,
  DateField,
  SelectInput,
  TextInput,
  ReferenceInput,
  BulkExportButton,
  DateInput,
} from 'react-admin';
import { Link } from '@mui/material';

const postFilters = [
  <TextInput source="name@autolike" label="Search" alwaysOn />,
  <SelectInput source="stock" label="Stock" alwaysOn choices={[
    { id: 0, name: "In stock" },
    { id: 1, name: "Preorder" },
    { id: 2, name: "Out of Stock"}
  ]} />,
  <ReferenceInput reference="stores" label="Store" source="store_id" perPage={60} alwaysOn>
    <SelectInput label="Store" source="id" optionText="name" />
  </ReferenceInput>,
  <DateInput source="updated@gt" label="Updated" alwaysOn />,
  <SelectInput source="whole" label="Whole Word Search" alwaysOn choices={[
    { id: 0, name: "Off" },
    { id: 1, name: "On" },
  ]} />,
];

const renderStock = ({ stock }) => {
  switch(stock) {
    case 0:
      return "In stock"
    case 1:
      return "Preorder"
    case 2:
      return "Out of stock"
    default:
      return "Unknown"
  }
}

const renderUrl = ({ name, url }) => {
  return <Link href={url}>{name}</Link>
}

// const renderBoardgame = ({ boardgame_id }) => {
//   if (boardgame_id !== null) {
//     return (
//       <ReferenceField source="boardgame_id" reference="boardgames">
//         <TextField source="name" />
//       </ReferenceField>
//     )
//   }

//   return (
//     <TextField label="Boardgame" emptyText="Not mapped" />
//   )
// }

export const CachedpriceList = () => (
  <List filters={postFilters} debounce={1000}>
    <Datagrid bulkActionButtons={ <BulkExportButton /> }>
      <TextField source="id" />
      <ImageField source="store_thumb" />
      <ReferenceField source="store_id" reference="stores">
        <TextField source="name" />
      </ReferenceField>
      <FunctionField label="Name" render={renderUrl} />
      <TextField source="price" />
      <FunctionField label="Stock" render={renderStock} />
      <DateField source="created" />
      <DateField source="updated" />
      {/* <FunctionField label="Boardgame" render={renderBoardgame} /> */}
      {/* <EditButton /> */}
      {/* <DeleteButton /> */}
    </Datagrid>
  </List>
);

export const CachedpriceEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="boardgame_id" />
    </SimpleForm>
  </Edit>
);
