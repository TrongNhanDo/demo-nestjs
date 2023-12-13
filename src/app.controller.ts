import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return;
  }

  @Get('/api/chat')
  Chat(@Res() res) {
    res.json({
      message: 'New message',
    });
  }
}
