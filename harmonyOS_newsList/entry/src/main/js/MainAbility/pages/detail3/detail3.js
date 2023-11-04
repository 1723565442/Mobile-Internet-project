import router from '@system.router';

export default {
    data: {
        title: "",
        flag: true,
        content : "",
        imageurl: ""
    },
    onInit() {
        this.title = "栖霞山";
        this.flag = false;
        this.content = "这个十月，\n大家在祖国的生日中开启全新的旅程。\n十月=拾月，拾起丢失的温柔与快乐，\n把喜欢秋天，写在十月的晚风里，\n一起卷进红薯和栗子味的拥抱。";
        this.imageurl = ""

    },
    back(){
        router.replace({uri: 'pages/index/index'});
    }
}
