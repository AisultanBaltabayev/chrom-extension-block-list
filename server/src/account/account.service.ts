import { Injectable } from '@nestjs/common';
import { PatchAccountDto } from './dto/dto';
import { DbService } from '../db/db.service';

@Injectable()
export class AccountService {
  constructor(private db: DbService) {}

  async createAccount(userId: number) {
    return this.db.account.create({
      data: { ownerId: userId, isBlockingEnabled: false },
    });
  }

  async getAccount(userId: number) {
    const allAccounts = await this.db.account.findMany();
    console.log('allAccounts: ', allAccounts);
    const account = await this.db.account.findUniqueOrThrow({
      where: { ownerId: userId },
    });
    return account;
  }

  async pathAccount(userId: number, patch: PatchAccountDto) {
    return this.db.account.update({
      where: { ownerId: userId },
      data: { ...patch },
    });
  }
}
