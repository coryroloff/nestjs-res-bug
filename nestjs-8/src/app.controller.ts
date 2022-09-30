import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Controller()
export class AppController {
  @Get('test-res-bug-1')
  testResBug1(@Res() res: FastifyReply) {
    setTimeout(() => res.send('hello world 1'), 1000);
  }

  @Get('test-res-bug-2')
  @HttpCode(201)
  testResBug2(@Res() res: FastifyReply) {
    setTimeout(() => res.send('hello world 2'), 1000);
  }
}
