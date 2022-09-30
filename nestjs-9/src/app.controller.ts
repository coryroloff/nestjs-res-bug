import { Controller, Get, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Controller()
export class AppController {
  @Get('test-res-bug')
  testResBug1(@Res() res: FastifyReply) {
    setTimeout(() => res.send('hello world'), 1000);
  }
}
