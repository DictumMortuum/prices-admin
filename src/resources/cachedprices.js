import {
  Datagrid,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  DeleteButton,
  FunctionField,
  Edit,
  SimpleForm,
  // EditButton,
  NumberInput,
  DateField,
  SelectInput,
  TextInput,
} from 'react-admin';
import { Link } from '@mui/material';

const postFilters = [
  <TextInput source="name@autolike" label="Search" />,
  <SelectInput source="stock" label="Stock" choices={[
    { id: 0, name: "In stock" },
    { id: 1, name: "Preorder" },
    { id: 2, name: "Out of Stock"}
  ]} />
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
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="store_id" reference="stores">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="created" />
      <DateField source="updated" />
      {/* <FunctionField label="Boardgame" render={renderBoardgame} /> */}
      <ImageField source="store_thumb" />
      <FunctionField label="Name" render={renderUrl} />
      <NumberField source="price" />
      <FunctionField label="Stock" render={renderStock} />
      {/* <EditButton /> */}
      <DeleteButton />
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
