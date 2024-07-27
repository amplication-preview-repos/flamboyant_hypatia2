import * as graphql from "@nestjs/graphql";
import { CrackingResultDto } from "../feistelCipherModule/CrackingResultDto";
import { MessageDto } from "../feistelCipherModule/MessageDto";
import { FeistelCipherModuleService } from "./feistelciphermodule.service";

export class FeistelCipherModuleResolver {
  constructor(protected readonly service: FeistelCipherModuleService) {}

  @graphql.Mutation(() => CrackingResultDto)
  async Crack3Round(
    @graphql.Args()
    args: CrackingResultDto
  ): Promise<CrackingResultDto> {
    return this.service.Crack3Round(args);
  }

  @graphql.Mutation(() => CrackingResultDto)
  async Crack4Round(
    @graphql.Args()
    args: CrackingResultDto
  ): Promise<CrackingResultDto> {
    return this.service.Crack4Round(args);
  }

  @graphql.Mutation(() => CrackingResultDto)
  async CrackRRound(
    @graphql.Args()
    args: CrackingResultDto
  ): Promise<CrackingResultDto> {
    return this.service.CrackRRound(args);
  }

  @graphql.Mutation(() => MessageDto)
  async Decrypt(
    @graphql.Args()
    args: MessageDto
  ): Promise<MessageDto> {
    return this.service.Decrypt(args);
  }

  @graphql.Mutation(() => MessageDto)
  async Encrypt(
    @graphql.Args()
    args: MessageDto
  ): Promise<MessageDto> {
    return this.service.Encrypt(args);
  }
}
