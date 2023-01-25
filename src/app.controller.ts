import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
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
    
    return result
  }

  @Post('create-watchlist')
  async createWatchlist(@Body() body: any): Promise <any> {
    const res = await this.appService.createWatchListItem(body.name,[])
    return res
  }

  @Put('add-tokens/:name')
  async addTokens(@Body() body:any, @Param('name') name:string) {
    const res = await this.appService.updateTokens(name,body.data)
    return res
  }


  @Get('get-watchlist/:id')
  async getWatchlist(@Param('id') id:string) {
    const res = await this.appService.getWatchListById(id)
    return res
  }

  @Delete('delete-item/:id')
  async deleteItem(@Param('id') id:string) {
    const res = this.appService.deleteItemById(id)
    return res
  }

}
