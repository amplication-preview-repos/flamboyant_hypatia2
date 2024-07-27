import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrackingResultService } from "./crackingResult.service";
import { CrackingResultControllerBase } from "./base/crackingResult.controller.base";

@swagger.ApiTags("crackingResults")
@common.Controller("crackingResults")
export class CrackingResultController extends CrackingResultControllerBase {
  constructor(protected readonly service: CrackingResultService) {
    super(service);
  }
}
