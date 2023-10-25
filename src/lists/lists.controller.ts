import { Controller, Get, Param, Res, Post} from '@nestjs/common';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private readonly listService: ListsService) {}

  @Get('pdf/:id')
  async getListPrintable(@Param('id') id: number, @Res() res) {
    const printable = await this.listService.getPrintable(id);
    res.status(200);
    res.send(printable);
    return res;
  }


  // @Post("")
  // async 
}
