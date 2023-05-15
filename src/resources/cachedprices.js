import {
  Datagrid,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  TextField,
  DeleteButton,
  FunctionField
} from 'react-admin';
import { Link } from '@mui/material';

const renderStock = ({ stock }) => {
  switch(stock) {
    case 0:
      return "In stock"
    case 1:
      return "Preorder"
    case 2:
      return "Out of stock"
    default:
      return ""
  }
}

const renderUrl = ({ name, url }) => {
  return <Link href={url}>{name}</Link>
}

const renderBoardgame = ({ boardgame_id }) => {
  if (boardgame_id !== null) {
    return (
      <ReferenceField source="boardgame_id" reference="boardgames">
        <TextField source="name" />
      </ReferenceField>
    )
  }

  return (
    <TextField label="Boardgame" emptyText="Not mapped" />
  )
}

export const CachedpriceList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="store_id" reference="stores">
        <TextField source="name" />
      </ReferenceField>
      <FunctionField label="Boardgame" render={renderBoardgame} />
      <ImageField source="store_thumb" />
      <FunctionField label="Name" render={renderUrl} />
      <NumberField source="price" />
      <FunctionField label="Stock" render={renderStock} />
      <DeleteButton />
    </Datagrid>
  </List>
);
