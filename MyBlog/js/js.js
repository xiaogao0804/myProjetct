/*...................nodes list......................*/
        //
$('.list').children().click(function () {
    var i = $(this).index();                    //index��Ҫ��������
    $(this).addClass('show').siblings().removeClass('show');
    $('.box').eq(i).show().siblings().hide();
});

/*....................mask......................................*/

window.onload=function(){
    var oBtn=document.getElementById('btn');
    oBtn.onclick=function(){
    var sHeight=document.documentElement.scrollHeight;
    var sWidth=document.documentElement.scrollWidth;
    var wHeight=document.documentElement.clientHeight;
    var wWidth=document.documentElement.clientWidth;
    var oMask=document.createElement('div');
    oMask.id='mask';
    oMask.style.height=sHeight+'px';
    oMask.style.width=sWidth+'px';
    document.body.appendChild(oMask);
    var oLogin=document.createElement('div');
        oLogin.id='login';
    oLogin.innerHTML="<div class='loginCon'><div id='close'></div><p class='p_introduce'>哈哈My name is GaoLili,is named after 90 and is a Front-end development engineer.Graduated from electronic information engineering major in Dezhou University lase year.I hope you like me.</p></div>";
    document.body.appendChild(oLogin);
    var dHeight=oLogin.offsetHeight;
    var dWidth=oLogin.offsetWidth;

    oLogin.style.left=(wWidth-dWidth)/2+'px';
    oLogin.style.top=(wHeight-dHeight)/2+'px';

        var oClose=document.getElementById('close');
        oMask.onclick=oClose.onclick=function(){
            document.body.removeChild(oMask);
            document.body.removeChild(oLogin);
        }
    }
}

/*..............................start...........................................*/
var oHeader=document.getElementById('header');
var oHet=header.offsetHeight;
oHeader.style.height=oHet+'px';
function starts(){
    var start=document.createElement('div');
    start.setAttribute('class','start');
    oHeader.appendChild(start);
    start.style.left=Math.floor(Math.random()*1)+1000+'px';
    start.style.top=Math.floor(Math.random()*(oHet-20))+'px';
    var l=start.offsetLeft;
    var t=start.offsetTop;
    var time=null;
    time=setInterval(function(){
        l--;
        if(l<=30){
            clearInterval(time);
            oHeader.removeChild(start);
        }
        start.style.left=l+'px';
    },10)

}
setInterval(starts,500);

/*.....................clock...............................*/
$(function(){
    setInterval(function(){
        var seconds=new Date().getSeconds();
        var sdeg=seconds*6;
        var srotate="rotate("+sdeg+"deg)";
        $('#sec').css({'transform':srotate});

    },1000);
    setInterval(function(){
        var hours=new Date().getHours();
        var mins=new Date().getMinutes();
        var hdeg=hours*30+(mins/2);
        var hrotate="rotate("+hdeg+"deg)";
        $('#hour').css({'transform':hrotate})
    },1000);
    setInterval(function(){
        var mins=new Date().getMinutes();
        var mdeg=mins*6;
        var mrotate="rotate("+mdeg+"deg)";
        $('#min').css({'transform':mrotate})
    },1000)
})

/*.............................language................................*/
$(function(){
    var arr=['能管理好自己的情绪，你就是优雅的；能控制好自己的心态，你就是成功的','有梦就去追吧，趁着自己还年轻','渐渐知道了，很多东西可遇不可求，不属于自己的何必拼了命去在乎','一无所有就是拼的理由','我们的未来凭什么靠一张试卷来决定','欲戴王冠，必成其重','眼泪不是答案，拼搏才是选择；只有回不了的过去，没有到不了的明天','我不能被现实打败，我还有很多牛逼的梦想'];
    var time=new Date();
    var lhour=time.getHours();
    var lmins=time.getMinutes();
    var i=-1;
   var time2=lhour+':'+lmins;
    if(time2=="24:00"){
        if(i>arr.length){
            i=-1;
        }
        i++;
     $('#lang').html(arr[i]);
    }
})