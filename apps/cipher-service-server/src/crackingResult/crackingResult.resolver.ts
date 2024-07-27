import * as graphql from "@nestjs/graphql";
import { CrackingResultResolverBase } from "./base/crackingResult.resolver.base";
import { CrackingResult } from "./base/CrackingResult";
import { CrackingResultService } from "./crackingResult.service";

@graphql.Resolver(() => CrackingResult)
export class CrackingResultResolver extends CrackingResultResolverBase {
  constructor(protected readonly service: CrackingResultService) {
    super(service);
  }
}
