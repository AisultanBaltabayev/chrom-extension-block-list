import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './dto/dto';
import { AccountService } from './account.service';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info.decorator';
import { SessionInfoDto } from '../auth/dto/dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @ApiOkResponse({
    type: AccountDto,
  })
  getAccount(@SessionInfo() session: SessionInfoDto): Promise<AccountDto> {
    return this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOkResponse({
    type: PatchAccountDto,
  })
  pathAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: SessionInfoDto,
  ): Promise<AccountDto> {
    return this.accountService.pathAccount(session.id, body);
  }
}
