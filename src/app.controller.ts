import { Controller, Get } from '@nestjs/common';
// import { UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('get-coins')
  async getCoins(): Promise <any> {
    const result = await this.appService.getCoinsList()
    console.log(result)
    return "success!"
  }

}
