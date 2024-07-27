import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrackingResultServiceBase } from "./base/crackingResult.service.base";

@Injectable()
export class CrackingResultService extends CrackingResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
