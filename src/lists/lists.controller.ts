import { Controller, Get, Param, Res } from '@nestjs/common';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private readonly listService: ListsService) {}

  @Get('pdf/:id')
  async getListPdf(@Param('id') id: number, @Res() res) {
    const pdf = await this.listService.getPdf(id);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=lista-${id}.pdf`);
    res.status(200);
    res.send(pdf);
    // Send the PDF to the browser
    return res;
  }
}
