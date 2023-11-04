import router from '@system.router';

export default {
    data: {
        title: "",
        flag: true,
        content : "",
        imageurl: ""
    },
    onInit() {
        this.title = "刘德华也救不了的烂片";
        this.flag = true;
        this.content = "《莫斯科行动》是第四部，这一部电影从制作成本上来说是明显高于前三部的，我看幕后制作特辑，还是做了非常多的实拍场景来还原故事。\n可是这些东西在邱礼涛手上并没有发挥出它本该有的价值。浓烈的棚拍感，影视城色调，让这部电影并没有增添任何的真实感。其次，经费的增加，并没有体现在故事的打磨上，邱礼涛依旧用了最偷懒的方式来消耗经费。那就是增加“爆炸”和“大场面”，意图让故事更“爽”。";
        this.imageurl = "https://img1.imgtp.com/2023/10/07/3QfDXzJ5.jpg"

    },
    back(){
        router.replace({uri: 'pages/index/index'});
    }
}
