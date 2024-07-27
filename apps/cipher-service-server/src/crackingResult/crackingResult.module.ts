import { Module } from "@nestjs/common";
import { CrackingResultModuleBase } from "./base/crackingResult.module.base";
import { CrackingResultService } from "./crackingResult.service";
import { CrackingResultController } from "./crackingResult.controller";
import { CrackingResultResolver } from "./crackingResult.resolver";

@Module({
  imports: [CrackingResultModuleBase],
  controllers: [CrackingResultController],
  providers: [CrackingResultService, CrackingResultResolver],
  exports: [CrackingResultService],
})
export class CrackingResultModule {}
