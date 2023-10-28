import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  AddBlockItemDto,
  BlockItemDto,
  BlockListDto,
  BlockListQueryDto,
} from './dto/dto';
import { SessionInfo } from '../auth/session-info.decorator';
import { SessionInfoDto } from '../auth/dto/dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private readonly blockListService: BlockListService) {}

  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList(
    @SessionInfo() session: SessionInfoDto,
    @Query() query: BlockListQueryDto,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUser(session.id, query);
  }

  @Post('item')
  @ApiCreatedResponse({
    type: BlockItemDto,
  })
  addBlockListItem(
    @SessionInfo() session: SessionInfoDto,
    @Body() dto: AddBlockItemDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, dto);
  }

  @Delete('item/:id')
  @ApiOkResponse({
    type: BlockItemDto,
  })
  async removeBlockItem(
    @SessionInfo() session: SessionInfoDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BlockItemDto> {
    return await this.blockListService.removeItem(session.id, id);
  }
}
