/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CrackingResultWhereInput } from "./CrackingResultWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CrackingResultListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CrackingResultWhereInput,
  })
  @ValidateNested()
  @Type(() => CrackingResultWhereInput)
  @IsOptional()
  @Field(() => CrackingResultWhereInput, {
    nullable: true,
  })
  every?: CrackingResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => CrackingResultWhereInput,
  })
  @ValidateNested()
  @Type(() => CrackingResultWhereInput)
  @IsOptional()
  @Field(() => CrackingResultWhereInput, {
    nullable: true,
  })
  some?: CrackingResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => CrackingResultWhereInput,
  })
  @ValidateNested()
  @Type(() => CrackingResultWhereInput)
  @IsOptional()
  @Field(() => CrackingResultWhereInput, {
    nullable: true,
  })
  none?: CrackingResultWhereInput;
}
export { CrackingResultListRelationFilter as CrackingResultListRelationFilter };