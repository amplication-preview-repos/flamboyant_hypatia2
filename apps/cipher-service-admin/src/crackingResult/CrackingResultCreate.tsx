import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CrackingResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <div />
        <NumberInput step={1} label="rounds" source="rounds" />
      </SimpleForm>
    </Create>
  );
};
