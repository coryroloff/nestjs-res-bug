import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('test-res-bug')
  testResBug1(@Res() res: Response) {
    setTimeout(() => res.send('hello world'), 1000);
  }
}
