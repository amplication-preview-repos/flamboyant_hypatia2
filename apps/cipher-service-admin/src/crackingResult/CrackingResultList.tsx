import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CrackingResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CrackingResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="plaintext" source="plaintext" />
        <TextField label="ciphertext" source="ciphertext" />
        <TextField label="key" source="key" />
        <TextField label="rounds" source="rounds" />
      </Datagrid>
    </List>
  );
};
