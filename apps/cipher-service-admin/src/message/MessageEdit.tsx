import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput step={1} label="rounds" source="rounds" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
