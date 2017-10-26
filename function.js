var clicktimes = 0;

var Name =
    'Indian_Delights,Shogun_Japanese_Steakhouse,川味居_Szechuan_House,Pammel_Grocery&Grill,West_Street_Deil,玉园,Mcdonald,福满香,小台北,The Fighting Burrito, Arcadia Cafe,Mr Burrito Corp,Thai Kitchen,Jeffs Pizza Shop,Dublin Bay Irish Pub&Grill,Aunt Maudes, Culvers,The Cafe,Brick City Grill,Taco John,EI Azteca,TacoTime,Bar La Tosca,HuHot Mongolian Grill,Applebees,Red Lobster, Fuji,Texas Roadhouse,Perkings,old Chicago,Panera Bread,Pancheros Mexican Grill,Burger King,Chick-fil-A,B-Bops,The Great Plains Sauce&Dough Co.,The Grove Cafe, Hickory Park,House of Chen,Mandarin Chinese Restaurant,The spice Thai Cuisine,Flame and Skewer,Panda Express,梅厨,品味,India Palace,Chipotle,KFC,Arbys,Wallabys Bar and Grille,Subway,Grandpa noodles';
var NameArray = Name.split(',');
var num = NameArray.length - 1;
var timer;
var QR;

function $(o) {
    QR = document.getElementById("name");
    return document.getElementById("name");
}

function change() {
    $('Name').innerHTML = NameArray[getRun(0, num)];
}

function getRun(_min, _max) {
    return parseInt(Math.random() * (_max - _min + 1));
}

function Start() {
    if (clicktimes < 3) {
        clicktimes += 1;
        clearInterval(timer);
        timer = setInterval('change()', 30);
    } else if (clicktimes == 3) {
        window.alert("要不别吃了，怎么样？");
        clicktimes += 1;
    } else if (clicktimes == 4) {
        window.alert("答应我，别点了好吗？");
        clicktimes += 1;
    } else if (clicktimes == 5) {
        window.alert("再点我可就关了哈");
        clicktimes += 1;
    } else if (clicktimes == 6) {
        window.alert("自己做吧");
        clicktimes += 1;
    } else if (clicktimes == 7) {
        window.alert("真的不想自己做吗？那就最后再给你一次机会")
        clicktimes += 1;
        clearInterval(timer);
        timer = setInterval('change()', 30);
    } else {
        window.alert("你也太闲了吧，去学习吧")

    }
}

function Stop() {

    clearInterval(timer);
}

function changelanguage() {
    document.getElementById("title").innerHTML = "where do you gonna eat day?";
    document.getElementById("eattoday").innerHTML = "where to eat in Ames";
    document.getElementById("start").innerHTML = "start";
    document.getElementById("stop").innerHTML = "stop";
    document.getElementById("todaychoose").innerHTML = "eat at";
    document.getElementById("name").innerHTML = "Where";
    document.getElementById("h1").innerHTML = "If there are any restaurant you like is not in the random list, please send the restaurant name to jackie950212@gmail.com";

}