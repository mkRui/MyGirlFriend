import { Injectable, HttpService } from '@nestjs/common';
import * as write from 'write';
import * as Crawler from 'crawler';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  // 每日天气
  getWeather() {
    const data = this.httpService
      .get('http://wthrcdn.etouch.cn/weather_mini', {
        params: { citykey: '101280601' },
      })
      .toPromise()
      .then((v) => {
        return v.data;
      });
    return data;
  }

  // 每日情话
  getSayLove() {
    const data = this.httpService
      .get('http://api.tianapi.com/txapi/saylove/index', {
        params: { key: '13392e3afedb73bb56427645b0b1fc82' },
      })
      .toPromise()
      .then((v) => {
        return v.data;
      });
    return data;
  }

  // bing
  async getBing() {
    const C = await new Crawler({
      maxConnections: 10,
      callback: function (error, res, done) {
        if (error) {
          console.log(error);
        } else {
          const $ = res.$;
          const reg = $('.img_cont')[0]['attribs'].style;
          console.log(reg);
          reg.match(/\((.+)\)/g);
          const url = `https://cn.bing.com${RegExp.$1}`;
          write(res.options.filename, url);
        }
        done();
      },
    });
    await C.queue({
      url: 'https://cn.bing.com/',
      filename: './img.md',
    });
  }
  // 今日运势
  getDayLucky() {
    const data = this.httpService
      .get('http://api.tianapi.com/txapi/jixiong/index', {
        params: {
          key: '13392e3afedb73bb56427645b0b1fc82',
          number: 138001381235,
        },
      })
      .toPromise()
      .then((v) => {
        return v.data;
      });
    return data;
  }
}
