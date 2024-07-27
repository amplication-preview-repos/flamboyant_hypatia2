import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FeistelCipherModuleService } from "./feistelciphermodule.service";
import { MessageDto } from "../feistelCipherModule/MessageDto";
import { CrackingResultDto } from "../feistelCipherModule/CrackingResultDto";

@swagger.ApiTags("feistelCipherModules")
@common.Controller("feistelCipherModules")
export class FeistelCipherModuleController {
  constructor(protected readonly service: FeistelCipherModuleService) {}

  @common.Post("/crack3round")
  @swagger.ApiOkResponse({
    type: CrackingResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Crack3Round(
    @common.Body()
    body: MessageDto
  ): Promise<CrackingResultDto> {
        return this.service.Crack3Round(body);
      }

  @common.Post("/crack4round")
  @swagger.ApiOkResponse({
    type: CrackingResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Crack4Round(
    @common.Body()
    body: MessageDto
  ): Promise<CrackingResultDto> {
        return this.service.Crack4Round(body);
      }

  @common.Post("/crackrround")
  @swagger.ApiOkResponse({
    type: CrackingResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CrackRRound(
    @common.Body()
    body: MessageDto
  ): Promise<CrackingResultDto> {
        return this.service.CrackRRound(body);
      }

  @common.Post("/decrypt")
  @swagger.ApiOkResponse({
    type: MessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Decrypt(
    @common.Body()
    body: MessageDto
  ): Promise<MessageDto> {
        return this.service.Decrypt(body);
      }

  @common.Post("/encrypt")
  @swagger.ApiOkResponse({
    type: MessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Encrypt(
    @common.Body()
    body: MessageDto
  ): Promise<MessageDto> {
        return this.service.Encrypt(body);
      }
}
