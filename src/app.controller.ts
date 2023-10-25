import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `
    <iframe src="https://shimertest.retool.com/apps/IDMA/Orders" width="100%" height="100%">`;
  }
}
