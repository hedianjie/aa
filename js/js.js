(function () {
    var topNav = document.getElementById("topNav");
    var top = topNav.getElementsByClassName("top")[0];
    var backG = topNav.getElementsByClassName("backG3")[0];
    var flag = true;
    function img() {
        var curT = 1160;
        var scrollT = (document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight);

        if (scrollT >= curT) {
            if (flag == true) {
                topOp()
            }
            backG.className = "backG2";
            top.style.position = "fixed";
        } else {
            backG.className = "backG3";
            top.style.position = "relative";
            flag = true
        }
    }
    window.onscroll = img;
    function topOp() {
        flag = false;
        var cur = 0;
        var timer = window.setInterval(function () {
            cur += 0.01;
            top.style.opacity = cur;
            if (cur >= 1) {
                top.style.opacity = 1;
                clearInterval(timer);
            }
        }, 15)
    }
})();
(function () {
    function b() {
        var hh = document.getElementsByClassName("onlegt")[0];
        var aa = hh.getElementsByTagName("span")[0];
        aa.onclick = function () {
            if (aa.className === "") {
                aa.className = "";
                aa.className = "slector"
            } else {
                aa.className = ""
            }

        }
    }
    b()
})();
(function () {
    var big = document.getElementById("big");
    var span1 = big.getElementsByClassName("span1")[0];
    var span2 = big.getElementsByClassName("span2")[0];
    var oDiv = big.getElementsByTagName("div")[0];

    //span1.onmouseover = function(){
    //    span1.style.color = "68bc0c"
    //}
    //span1.onmouseout = function(){
    //    span1.style.color = "#b5b5b5"
    //}
    big.onmouseover = function () {
        span1.style.color = "#68bc0c";
        if (span2.style.display !== "block") {
            oDiv.style.backgroundPosition = "-60px -40px"
        } else {
            oDiv.style.backgroundPosition = "-20px -40px"
        }
    };
    big.onmouseout = function () {
        span1.style.color = "#b5b5b5";
        if (span2.style.display !== "block") {
            oDiv.style.backgroundPosition = "-40px -40px"
        } else {
            oDiv.style.backgroundPosition = "0 -40px"
        }
    };
    big.onclick = function () {
        if (span2.style.display == "block") {
            span2.style.display = "none";
            span1.style.display = "block";
            oDiv.style.backgroundPosition = "-60px -40px"
        } else {
            span1.style.display = "none";
            span2.style.display = "block";
            oDiv.style.backgroundPosition = "-20px -40px"
        }
    };
})();
(function () {
    var top = document.getElementById("topNav");
    var top2 = top.getElementsByClassName("top")[0];
    var center = top2.getElementsByClassName("center")[0];
    var Navigation = center.getElementsByClassName("Navigation")[0];
    var sing = Navigation.getElementsByClassName("register")[0];
    var singt = document.getElementsByClassName("singt2")[0];
    var images = singt.getElementsByClassName("images")[0];
    var blacka = document.getElementById("blacka");
    sing.onclick = function () {
        singt.style.left = parseFloat((document.documentElement.clientWidth || document.body.clientWidth) / 2 - 230 + (document.documentElement.scrollLeft || document.body.scrollLeft)) + "px";
        singt.style.top = parseFloat(100 + (document.documentElement.scrollTop || document.body.scrollTop)) + "px";
        console.log(singt.style.left);
        console.log(document.documentElement.clientWidth || document.body.clientWidth);
        singt.style.display = "block";
        blacka.style.display = "block"
    };
    images.onclick = function () {
        blacka.style.display = "none";
        singt.style.display = "none";
    }
})();
(function () {
    var top = document.getElementById("topNav");
    var top2 = top.getElementsByClassName("top")[0];
    var center = top2.getElementsByClassName("center")[0];
    var Navigation = center.getElementsByClassName("Navigation")[0];
    var sing = Navigation.getElementsByClassName("sing")[0];
    var singt = document.getElementsByClassName("singt")[0];
    var images = document.getElementById("images");
    var blacka = document.getElementById("blacka");
    sing.onclick = function () {
        singt.style.left = parseFloat((document.documentElement.clientWidth || document.body.clientWidth) / 2 - 230 + (document.documentElement.scrollLeft || document.body.scrollLeft)) + "px";
        singt.style.top = parseFloat(100 + (document.documentElement.scrollTop || document.body.scrollTop)) + "px";
        singt.style.display = "block";
        blacka.style.display = "block"
    };
    images.onclick = function () {
        blacka.style.display = "none";
        singt.style.display = "none";
    }
})();
//animate
(function () {
    //->getCss:获取当前元素的某一个样式信息值
    function getCss(curEle, attr) {
        var val = reg = null;
        if ("getComputedStyle" in window) {
            val = window.getComputedStyle(curEle, null)[attr];
        } else {
            if (attr === "opacity") {
                val = curEle.currentStyle["filter"];
                reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
            } else {
                val = curEle.currentStyle[attr];
            }
        }
        reg = /^-?\d+(\.\d+)?(px|pt|em|rem)?$/;
        return reg.test(val) ? parseFloat(val) : val;
    }

    //->getCss:设置当前元素的某一个样式的属性值
    function setCss(curEle, attr, value) {
        if (attr === "float") {
            curEle["style"]["cssFloat"] = value;
            curEle["style"]["styleFloat"] = value;
            return;
        }

        if (attr === "opacity") {
            value < 0 ? value = 0 : null;
            value > 1 ? value = 1 : null;
            curEle["style"]["opacity"] = value;
            curEle["style"]["filter"] = "alpha(opacity=" + value * 100 + ")";
            return;
        }

        var reg = /^(width|height|left|top|bottom|right|(padding|margin(Top|Left|Right|Bottom)?))$/;
        if (reg.test(attr)) {
            reg = /^-?\d+(\.\d+)?$/;
            if (reg.test(value)) {
                curEle["style"][attr] = value + "px";
                return;
            }
        }
        curEle["style"][attr] = value;
    }


    //->zhufengEffect:设定运动的方式
    var zhufengEffect = {
        //->匀速
        //->t:已经走的时间 b:起始的位置 c:总距离(目标位置-起始位置) d:总时间
        Linear: function (t, b, c, d) {
            return c * t / d + b;
        }
    };

    //->tarObj:存储的是当前元素运动的目标位置的样式集合->{left:1000,width:200,opacity:1...}
    //->duration:当前运动的总时间
    //->effect:运动的效果(匀速、加速、减速...)
    //->callBack:回调函数,当动画运动完成后需要做的事情都写在这个函数中
    function animate(curEle, tarObj, duration, effect, callBack) {
        effect = zhufengEffect.Linear;

        //->计算多方向的起始位置值和每一个方向的总距离
        var times = 0, beginObj = {}, changeObj = {};
        for (var key in tarObj) {
            if (tarObj.hasOwnProperty(key)) {
                beginObj[key] = getCss(curEle, key);
                changeObj[key] = tarObj[key] - beginObj[key];
            }
        }

        //->实现动画操作
        window.clearInterval(curEle.timer);
        curEle.timer = window.setInterval(function () {
            times += 10;
            //->到达目标位置了,我们结束定时器,并且设置当前元素的位置是目标值,并且执行我们的回调函数
            if (times >= duration) {
                for (var key in tarObj) {
                    if (tarObj.hasOwnProperty(key)) {
                        setCss(curEle, key, tarObj[key]);
                    }
                }
                typeof callBack === "function" ? callBack.call(curEle) : null;
                window.clearInterval(curEle.timer);
                return;
            }

            //->没有到达指定的位置,我们循环所有的方向,然后通过公式获取每一个方向的当前位置的值,然后给元素设置样式
            for (key in changeObj) {
                if (changeObj.hasOwnProperty(key)) {
                    var cur = effect(times, beginObj[key], changeObj[key], duration);
                    setCss(curEle, key, cur);
                }
            }
        }, 10);
    }

    window.animate = animate;

//推广广告动画
    (function(){
        var oDivs=document.getElementsByClassName("textSeven")[0].getElementsByClassName("center")[0].getElementsByClassName("inner")[0].getElementsByTagName("div");
        var oBigs=document.getElementsByClassName("textSeven")[0].getElementsByClassName("center")[0].getElementsByClassName("inner")[0].getElementsByClassName("big");
        for(var a=0;a<oDivs.length;a++){

            (function(a){
                oDivs[a].onmouseover=function(e){
                    e=e||window.event;
                    e.target= e.target|| e.srcElement;
                    if(e.target==oDivs[a]||oBigs[a]){
                        for(var i=0;i<oDivs.length;i++){
                            oBigs[i].onmouseover=function(){
                                return false
                            };

                            if(i<=a){
                                if(i===5){
                                    animate(oDivs[4],{left:0},300);
                                    animate(oDivs[5],{left:190},300);
                                    for(var k=0;k<oBigs.length;k++){
                                        oBigs[k].style.display="none";
                                    }
                                    oBigs[5].style.display="block";
                                    oBigs[5].style.zIndex=0;

                                    animate(oBigs[5],{opacity:1},300);

                                    continue
                                }
                                animate(oDivs[i],{left:0},300);
                                for(k=0;k<oBigs.length;k++){
                                    oBigs[k].style.display="none";
                                }
                                oBigs[i].style.display="block";
                                oBigs[i].style.zIndex=0;

                                animate(oBigs[i],{opacity:1},300)
                            } else{
                                animate(oDivs[i],{left:950},300)
                            }
                        }
                    }
                }
            })(a);
        }
        for(var i=0;i<oDivs.length;i++){
            (function(i){
                oDivs[i].onmouseout=function(){
                    for(var i=0;i<oDivs.length;i++){
                        animate(oDivs[i],{left:i*190},300)
                        animate(oBigs[i],{opacity:0},300);
                    }
                    for(var k=0;k<oBigs.length;k++){
                        oBigs[k].style.zIndex=-1
                    }
                }
            })(i);
        }
    })();

    (function(){
        var oDivs=document.getElementsByClassName("textSeven")[1].getElementsByClassName("center")[0].getElementsByClassName("inner")[0].getElementsByTagName("div");
        var oBigs=document.getElementsByClassName("textSeven")[1].getElementsByClassName("center")[0].getElementsByClassName("inner")[0].getElementsByClassName("big");
        for(var a=0;a<oDivs.length;a++){

            (function(a){
                oDivs[a].onmouseover=function(e){
                    e=e||window.event;
                    e.target= e.target|| e.srcElement;
                    if(e.target==oDivs[a]||oBigs[a]){
                        for(var i=0;i<oDivs.length;i++){
                            oBigs[i].onmouseover=function(){
                                return false
                            };

                            if(i<=a){
                                if(i===5){
                                    animate(oDivs[4],{left:0},300);
                                    animate(oDivs[5],{left:190},300);
                                    for(var k=0;k<oBigs.length;k++){
                                        oBigs[k].style.display="none";
                                    }
                                    oBigs[5].style.display="block";
                                    oBigs[5].style.zIndex=0;

                                    animate(oBigs[5],{opacity:1},300);

                                    continue
                                }
                                animate(oDivs[i],{left:0},300);
                                for(k=0;k<oBigs.length;k++){
                                    oBigs[k].style.display="none";
                                }
                                oBigs[i].style.display="block";
                                oBigs[i].style.zIndex=0;

                                animate(oBigs[i],{opacity:1},300)
                            } else{
                                animate(oDivs[i],{left:950},300)
                            }
                        }
                    }
                }
            })(a);
        }
        for(var i=0;i<oDivs.length;i++){
            (function(i){
                oDivs[i].onmouseout=function(){
                    for(var i=0;i<oDivs.length;i++){
                        animate(oDivs[i],{left:i*190},300);
                        animate(oBigs[i],{opacity:0},300);
                    }
                    for(var k=0;k<oBigs.length;k++){
                        oBigs[k].style.zIndex=-1
                    }
                }
            })(i);
        }
    })()


})();
(function(){
    var step=0;
    var lunBo=document.getElementById("lunbo");
    var imgs=lunBo.getElementsByTagName("img");
    var oLis=document.getElementById("box").getElementsByTagName("li");
    var spyle=document.getElementById("spyle");
    lunBo.onmouseover=function(){
        window.clearInterval(timer)
    };
    lunBo.onmouseout=function(){
        timer= window.setInterval(bind,3000)
    };
    for(var i=0;i<oLis.length;i++){
        (function(i){
            oLis[i].onmouseover=function(){
                step=i;
                change();
                for(var k=0;k<imgs.length;k++){
                    animate(imgs[k],{opacity:0},200);
                    imgs[k].style.display="none"
                }
                imgs[step].style.display="block";
                animate(imgs[step],{opacity:1},200);
                change()
            }
        })(i)
    }
    function change(){
        animate(spyle,{top:34*step},200)
    }

    function bind(){
        step++;
        if(step>=imgs.length){
            step=0
        }
        for(var i=0;i<imgs.length;i++){
            animate(imgs[i],{opacity:0},200);
            imgs[i].style.display="none"
        }
        imgs[step].style.display="block";
        animate(imgs[step],{opacity:1},200);
        change()
    }
   var timer= window.setInterval(bind,3000)
})();

(function() {
    var nn = document.getElementById("nn");
    var input = document.getElementById("input");
    var box = document.getElementById("boxs");
    var olis = box.getElementsByTagName("a");
    nn.onfocus = function () {
        input.style.backgroundColor = "white";
        input.style.border = "1px solid #63b504";
        box.style.display = "block";
    };
    nn.onblur = function () {
        input.style.backgroundColor = "#e4e4e4";
        input.style.border = "1px solid #e3e3e3";
    };
    nn.onkeydown = function () {
        var val = this.value.replace(/(^ +| +$)/g, "");

        if (val.length > 0) {
            $.ajax({
                url: "http://suggestion.baidu.com/su?wd=" + val + "&_=" + Math.random(),
                type: "get",
                dataType: "jsonp",
                jsonp: "cb",
                jsonpCallback: "fn",
                success: function (data) {
                    if (data) {
                        var ary = data["s"];
                        var str = "";
                        for (var i = 0; i < ary.length; i++) {
                            str += "<li><a href='#'>" + ary[i] + "</a></li>";
                        }
                        box.innerHTML = str;
                        for (var k = 0; k < olis.length; k++) {
                            (function (k) {
                                olis[k].onclick = function () {
                                    nn.value = olis[k].innerHTML;
                                }
                            })(k)
                        }
                    }
                }
            });
            box.style.display = "block";

        }

    };
    document.body.onclick = function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        if (e.target.tagName.toLowerCase() === "a" && e.target.parentNode.parentNode.id === "searchList") {
            box.style.display = "none";
            box.value = e.target.innerHTML;
            return;
        }
        box.style.display = "none";


}
    nn.onclick = function (e) {
        e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    };

})();










