import { Module } from "@nestjs/common";
import { FeistelCipherModuleService } from "./feistelciphermodule.service";
import { FeistelCipherModuleController } from "./feistelciphermodule.controller";
import { FeistelCipherModuleResolver } from "./feistelciphermodule.resolver";

@Module({
  controllers: [FeistelCipherModuleController],
  providers: [FeistelCipherModuleService, FeistelCipherModuleResolver],
  exports: [FeistelCipherModuleService],
})
export class FeistelCipherModuleModule {}
