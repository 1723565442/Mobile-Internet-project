import router from '@system.router';
import * as dataModule from '../index/index';

export default {
    data: {
        title: dataModule.daTa.title,
        flag: dataModule.daTa.flag,
        content : dataModule.daTa.content,
        imageurl: dataModule.daTa.imageurl
    },
    back(){
        console.log("logggggg" + dataModule.daTa.content)
        router.back();
    }
}
