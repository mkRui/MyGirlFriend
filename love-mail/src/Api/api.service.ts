import { Injectable, HttpService } from '@nestjs/common'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios'

const Xm2js = require('xml2js')
const parser = new Xm2js.Parser();

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) {}

    getWeather () {
        this.httpService.get('http://flash.weather.com.cn/wmaps/xml/shenzhen.xml').toPromise().then((v) => {
            parser.parseString(v.data,function(err,result){
                console.log(result.shenzhen['city']);
            })
        });
    }
}