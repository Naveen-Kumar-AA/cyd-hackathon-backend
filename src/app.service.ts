import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { DbService } from './shared';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService, private readonly httpService: HttpService) {}
  async getHello(): Promise<string> {
    const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return `Hello Wold! ${JSON.stringify(result)}`;
  }

  async getCoinsList(): Promise<any> {
    const result = await this.httpService.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
    console.log(result.subscribe(value => console.log(value)))
    return result
  }

  async createWatchListItem(name:string, data: Array<string> ) {
    const res = await this.db.create(name,data)
    return res
  }

  async updateTokens(key: string, data: Array<string>) {
    const res = await this.db.update(key,data)
    return res
  }

}
