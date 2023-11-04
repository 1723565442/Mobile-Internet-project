import router from '@system.router';

export const daTa = {
    title: '',
    flag: true,
    content: '',
    imageurl: ''
};

export default {
    data: {
        newsData: [
            {
                id:0,
                title:'江苏青年好网民等你来点赞',
                abstract:'引领青年共建网上美好精神家园，争当有理想、敢担当、能吃苦、肯奋斗的新时代好青年',
                flag:true,
                imageurl:'https://img1.imgtp.com/2023/10/07/RhCTemmw.jpg',
                content:'为深入学习宣传贯彻习近平新时代中国特色社会主义思想和党的二十大精神，落实习近平总书记关于“培育中国好网民”的重要指示精神，提升青年网络素养，引领青年共建网上美好精神家园，争当有理想、敢担当、能吃苦、肯奋斗的新时代好青年，为新时代新征程凝聚团结奋斗的青春力量，共青团江苏省委自9月起开展2023年“江苏青年好网民”优秀故事征集活动。经过初审，有26个优秀故事进入网络投票环节。'
            },{
            id:1,
            title:'《杂食动物》开演',
            abstract:'首部特邀剧目《杂食动物》，剖析“中女”生活的身体独白',
            flag:true,
            imageurl:'https://img1.imgtp.com/2023/10/07/KqWOpL9U.jpg',
            content:'10月份，南京大学文学院戏剧影视艺术系特邀活跃在上海剧场界的独立编舞和剧场人江帆带来“重返自我”工作坊，让你通过身体和自我对话，建立内心和外界之间的联系。同时，10月14-15日将带来教学观摩演出《杂食动物》，正式开启南京大学黑匣子周末剧场秋季的常态演出模式！'
        }, {
            id:2,
            title:'刘德华也救不了的烂片',
            abstract:'93国际列车大劫案：莫斯科行动',
            flag:true,
            imageurl:'https://img1.imgtp.com/2023/10/07/3QfDXzJ5.jpg',
            content:'《莫斯科行动》是第四部，这一部电影从制作成本上来说是明显高于前三部的，我看幕后制作特辑，还是做了非常多的实拍场景来还原故事。\n可是这些东西在邱礼涛手上并没有发挥出它本该有的价值。浓烈的棚拍感，影视城色调，让这部电影并没有增添任何的真实感。其次，经费的增加，并没有体现在故事的打磨上，邱礼涛依旧用了最偷懒的方式来消耗经费。那就是增加“爆炸”和“大场面”，意图让故事更“爽”。'
        }, {
            id:3,
            title:'栖霞山',
            abstract:'长日欣喜，十月与你',
            flag:false,
            imageurl:'',
            content:'这个十月，\n大家在祖国的生日中开启全新的旅程。\n十月=拾月，拾起丢失的温柔与快乐，\n把喜欢秋天，写在十月的晚风里，\n一起卷进红薯和栗子味的拥抱。'
        }
        ],
    },
    toDetail(id) {
        daTa.title = this.newsData[id].title;
        daTa.flag = this.newsData[id].flag;
        daTa.imageurl = this.newsData[id].imageurl;
        daTa.content = this.newsData[id].content;
        console.log(daTa.title + "\n" + daTa.content)
        if (id == 0) {
            router.push({ uri: 'pages/detail0/detail0' });
        } else if (id == 1) {
            router.push({ uri: 'pages/detail1/detail1' });
        } else if (id == 2) {
            router.push({ uri: 'pages/detail2/detail2' });
        } else {
            router.push({ uri: 'pages/detail3/detail3' });
        }
    },
};




