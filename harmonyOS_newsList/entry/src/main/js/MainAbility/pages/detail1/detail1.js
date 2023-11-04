import router from '@system.router';

export default {
    data: {
        title: "",
        flag: true,
        content : "",
        imageurl: ""
    },
    onInit() {
        this.title = "《杂食动物》开演";
        this.flag = true;
        this.content = "10月份，南京大学文学院戏剧影视艺术系特邀活跃在上海剧场界的独立编舞和剧场人江帆带来“重返自我”工作坊，让你通过身体和自我对话，建立内心和外界之间的联系。同时，10月14-15日将带来教学观摩演出《杂食动物》，正式开启南京大学黑匣子周末剧场秋季的常态演出模式！";
        this.imageurl = "https://img1.imgtp.com/2023/10/07/KqWOpL9U.jpg"

    },
    back(){
        router.replace({uri: 'pages/index/index'});
    }
}
