import { Injectable, HttpService } from '@nestjs/common'

import * as Crawler from 'crawler'

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) {}

    // 每日天气
    getWeather () {
        const data = this.httpService.get('http://wthrcdn.etouch.cn/weather_mini', { params: { citykey: '101280601' } }).toPromise().then((v) => {
            return v.data
        })
        return data
    }

    // 每日情话
    getSayLove () {
        const data = this.httpService.get('http://api.tianapi.com/txapi/saylove/index', { params: { key: '13392e3afedb73bb56427645b0b1fc82' } }).toPromise().then((v) => {
            return v.data
        })
        return data
    }

    // bing
    getBing () {
        const C = new Crawler({
            maxConnections : 10,
            callback : function (error, res, done) {
                if(error){
                    console.log(error);
                }else{
                    var $ = res.$;
                    // $ is Cheerio by default
                    //a lean implementation of core jQuery designed specifically for the server
                    // console.log($("title").text());
                    console.log(`https://cn.bing.com${$("#bgImgProgLoad")[0]['attribs']['data-ultra-definition-src']}`);
                }
                done();
            }
        })
        C.queue('https://cn.bing.com/')
    }

    // 今日运势
    getDayLucky () {
        const data = this.httpService.get('http://api.tianapi.com/txapi/jixiong/index', { params: { key: '13392e3afedb73bb56427645b0b1fc82', number: 138001381235 } }).toPromise().then((v) => {
            return v.data
        })
        return data
    }


    
}