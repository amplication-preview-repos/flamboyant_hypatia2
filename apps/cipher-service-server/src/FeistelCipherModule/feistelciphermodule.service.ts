import { Injectable } from "@nestjs/common";
import { CrackingResultDto } from "../feistelCipherModule/CrackingResultDto";
import { MessageDto } from "../feistelCipherModule/MessageDto";

@Injectable()
export class FeistelCipherModuleService {
  constructor() {}
  async Crack3Round(args: CrackingResultDto): Promise<CrackingResultDto> {
    throw new Error("Not implemented");
  }
  async Crack4Round(args: CrackingResultDto): Promise<CrackingResultDto> {
    throw new Error("Not implemented");
  }
  async CrackRRound(args: CrackingResultDto): Promise<CrackingResultDto> {
    throw new Error("Not implemented");
  }
  async Decrypt(args: MessageDto): Promise<MessageDto> {
    throw new Error("Not implemented");
  }
  async Encrypt(args: MessageDto): Promise<MessageDto> {
    throw new Error("Not implemented");
  }
}
