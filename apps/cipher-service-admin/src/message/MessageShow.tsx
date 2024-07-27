import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="plaintext" source="plaintext" />
        <TextField label="ciphertext" source="ciphertext" />
        <TextField label="rounds" source="rounds" />
        <TextField label="key" source="key" />
      </SimpleShowLayout>
    </Show>
  );
};
