2/**
 * Created by Ibokan on 2016/5/19.
 */
/*.......................��������............................*/
/*..........................�ø�����Ŀ��ʾ��Ч��.....................................*/
var h1=document.getElementById('h1');
var h1s=h1.children;                             // childer��ȡ����ֱ�Ӻ��
var cs=document.getElementById('cs');           //Ϊʲôдh1����
function  daohang(x){
    h1s[x].onmouseover=function(){
        for(var i=0;i<h1s.length;i++){
            h1s[i].style.backgroundColor='';
        }
        h1s[x].style.backgroundColor='white';
        h1s[x+1].style.display='block';
        h1s[x+1].onmouseover=function(){
            h1s[x].style.backgroundColor='white';
           this.style.display='block';
            ulli1();
            h1s[x+1].onmouseout=function(){
                this.style.display='none';
                h1s[x].style.backgroundColor='';
            }
        }
    };

    h1s[x].onmouseout=function(){
        h1s[x].style.backgroundColor='';
        h1s[x+1].style.display='';
    }
}
function daohang2(x){
    h1s[x].style.backgroundColor='';
    h1s[x+1].style.display='';
}
daohang(0);
daohang(2);
daohang(5);
daohang(8);
daohang(11);
daohang(16);


/*.......................������е�Ч��.........................................*/
var lis=h1s[1].children;
function ulli1(){
   for(var j=0;j<lis.length;j++){
       lis[j].onmouseover=function(){
           for(var i=0;i<lis.length;i++){
               if(this==lis[i]){
                   lis[i].style.backgroundColor="#ccc";
                   lis[i].style.color='red';
               }
               else{
                   lis[i].style.backgroundColor="";
                   lis[i].style.color='';
               }
           }
       }
       lis[j].onclick=function(){
           for(var a=0;a<lis.length;a++){
               if(this==lis[a]){
                   lis[a].style.backgroundColor="red";
                   lis[a].style.color='#fff';
                   cs.innerHTML=lis[a].innerHTML;
                   daohang2(0);
               }
               else{
                   lis[a].style.backgroundColor="";
                   lis[a].style.color='';
               }
           }
       }
   }
}
//ulli1();

/*.........................�ҵĹ��ﳵ..................................*/
var che=document.getElementById('che');
var che1=document.getElementById('che1');
var che2=document.getElementById('che2');
var che3=document.getElementById('che3');
che.onmouseover=function(ev) {
    var e = ev || window.event;
    var target = e.target || e.srcElement;
    if (target.id = 'che1') {
        che2.style.display = 'block';
        che1.style.backgroundColor="#fff";
        che3.style.display='block';                  //����һ���ɰ������ס��
    }
}
che.onmouseout=function(ev){
    var e = ev || window.event;
    var target = e.target || e.srcElement;
    if (target.id = 'che1') {
        che2.style.display = '';
        che1.style.backgroundColor="";
        che3.style.display='';
    }
};

/*.............................ȫ����Ʒ����.................................*/
//var dh1=document.getElementById('dh1');
//var ul1=document.getElementById('ul1');
//var lis1=ul1.children;
////var a1=lis1.children;
//var item11=document.getElementById('item11');
//dh1.onmouseover=function(ev){
//    var e=ev||window.event;
//    var target= e.target|| e.srcElement;
//    if(target.nodeName=='LI'/*||target.nodeName=='SPAN'||target.nodeName=='A'*/){
//        for(var i=0;i<lis1.length;i++){
//            item11.style.display='';
//            lis1[i].style.backgroundColor="";
//            lis1[i].style.borderRight='';
////            lis1[i].className='show';
//        }
////
//         item11.style.display='block';
//        target.style.borderRight='none';
//        target.style.backgroundColor="#F7F7F7";  //ע��˴���target  ����this  thisָ�����dh1
//    }
////
//}
////
//ul1.onmouseout=function(ev) {
//    for(var i=0;i<lis1.length;i++){
//        item11.style.display='';
//        lis1[i].style.backgroundColor="";
//        lis1[i].style.borderRight='';
//    }
//}

//for(var i=0;i<lis1.length;i++){
//    lis1[i].onmouseover=function(){
//        for(var i=0;i<lis1.length;i++){
//            if(this==lis1[i]){
//                item11.style.display='block';
//
//            }
//        }
//    }
//}
//
//item11.onmouseover=function(){
//    lis1[0].style.backgroundColor='#F7F7F7';
//}
//

/*... ....................�ֲ�ͼ.........................*/
var out=document.getElementById('out');
var inner=document.getElementById('inner');
var imgs1=inner.getElementsByTagName('img');
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var num=document.getElementById('num');
var llis=num.children;
var time1=null;
var time2=null;
var time3=null;
var x=0;
var opa=0;
function move(){
    clearInterval(time1);
  time1=setInterval(function(){
    x++;
      if(x>=imgs1.length){
          x=0;
      }
      autoMove();
  },1000)
}
move();
function autoMove(){
    var start=out.scrollLeft;
    var end=imgs1[0].clientWidth*x;
    var minstep=0;
    var maxstep=1;
    //var step=maxstep-minstep;
    var  change=end-start;
    var everystep=change/maxstep;
     time2=setInterval(function(){
         clearInterval(time2);
         minstep++;
         if(minstep>=maxstep){
             clearInterval(time2);
         }
         start+=everystep;
        out.scrollLeft=start;
     },100);
for(var i=0;i<llis.length;i++){
    llis[i].style.backgroundColor="";
}
    llis[x].style.backgroundColor='red';
}
btn2.onclick=function(){
    clearInterval(time1);
    clearInterval(time2);
    x++;
    if(x>=imgs1.length){
        x=0;
    }
    autoMove();
    move();
};
btn1.onclick=function(){
    clearInterval(time1);
    clearInterval(time2);
    x--;
    if(x<0){
        x=imgs1.length-1;
    }
    autoMove();
    move();
};
for(var n=0;n<llis.length;n++){
llis[n].onmouseover=function(){
    for(var j=0;j<llis.length;j++){
        if(this==llis[j]){
            x=j;
            autoMove();
            move();
        }
    }
}
}
/*............................�����챨tab-out......................................*/
var tab=document.getElementById('tab');
var tds=tab.children;
var tabOut=document.getElementById('tabout');
var tabUl=document.getElementById('tabul');
var tabLis=tabUl.children;
var tabC=tabOut.children;
for(var i=0;i<tds.length;i++){
    tds[i].onmouseover=function(){
        for(var j=0;j<tabC.length;j++){
            if(this==tabC[j]){
                tabUl.style.display='block';
                tabC[j].style.display='block';
                tabOut.style.display='block';
            }
        }

    }
}

/*............................�����Ƽ�..........................................*/
var tout=document.getElementById('tout');
var tjian=document.getElementById('tjian');
var btn5=document.getElementById('btn5');
var btn6=document.getElementById('btn6');
var ulimg=document.getElementById('ulimg');
var time1=null;
var time2=null;
var a=true;
tout.onmouseover=function(){
    btn5.style.display='block';
    btn6.style.display='block';
};
tout.onmouseout=function(){
    btn5.style.display='';
    btn6.style.display='';
};
clearInterval(time1);
function auto(a,x){       // ע���ڲ��ͼƬ��div�Ŀ�� Ҫ��������ͼƬ�Ŀ�ĺ� ������Ҳ���ܶ� ������� ͼƬû�й��� �������͵�ͷ��
    time1=setInterval(function(){
        tjian.scrollLeft=tjian.scrollLeft+x;
                if(a){
                    if(tjian.scrollLeft>=1012){
                        tjian.scrollLeft=0;
                        clearInterval(time1);
                    }
                }
               else{
                    if(tjian.scrollLeft==0){
                        tjian.scrollLeft=1035;
                        clearInterval(time1);
                    }
                }                                               //�����ȷ����� ���Թ�������//

    },10)
}
btn5.onclick=function(){
    clearInterval(time1);
    auto(true,10);
};
btn6.onclick=function(){
    clearInterval(time1);
    auto(false,-10);
};


/*..........................F1-tab.......................................*/
//var f1Ul=document.getElementById('F1-ul');   // F1-ul ??
//var f1Lis=f1Ul.children;                    // li
//var f1Tab=document.getElementById('F1-tab');   //F1-tab ??
//var f1Tabs=f1Tab.children;                  //tab
//for(var i=0;i<f1Lis.length;i++){
//    f1Lis[i].onmouseover=function(){
//        for(var j=0;j<f1Tabs.length;j++){
//            if(this==f1Lis[j]){
//                f1Tabs[j].style.display='block';
//                f1Lis[j].className='show';
//            }
//            else{
//                f1Tabs[j].style.display='none';
//                f1Lis[j].className='';
//            }
//        }
//    }
//}

function tabw(id1,id2){
var f1Ul=document.getElementById(id1);   // F1-ul ??
var f1Lis=f1Ul.children;                    // li
var f1Tab=document.getElementById(id2);   //F1-tab ??
var f1Tabs=f1Tab.children;    //tab
    for(var i=0;i<f1Lis.length;i++){
        f1Lis[i].onmouseover=function(){
            for(var j=0;j<f1Tabs.length;j++){
                if(this==f1Lis[j]){
                    f1Tabs[j].style.display='block';
                    f1Lis[j].className='show';
                }
                else{
                    f1Tabs[j].style.display='none';
                    f1Lis[j].className='';
                }
            }
        }
}
}
tabw("F1-ul","F1-tab");
tabw("F2-ul","F2-tab");
tabw("F3-ul","F3-tab");
tabw("F4-ul","F4-tab");
tabw("F5-ul","F5-tab");
tabw("F6-ul","F6-tab");
tabw("F7-ul","F7-tab");
tabw("F8-ul","F8-tab");
tabw("F9-ul","F9-tab");
tabw("F10-ul","F10-tab");
tabw("F11-ul","F11-tab");


/*......................F1-tab  �ֲ�...............................................*/
//var t1Out=document.getElementById('tab1-out');
//var t1Inner=document.getElementById('tab1-inner');
//var t1Img=t1Inner.children;
//var ulYuan=document.getElementById('ul-yuan');
//var t1Li=ulYuan.children;
//var btn8=document.getElementById('btn8');
//var btn9=document.getElementById('btn9');
//var time5=null;
//var time6=null;
//var a=0;
//var b=1;
//t1Inner.onmouseover=function(){
//    btn8.style.display='block';
//    btn9.style.display='block';
//}
//t1Inner.onmouseout=function(){
//    btn8.style.display='';
//    btn9.style.display='';
//}
//
//function autoMove2(){
//    time6=setInterval(function(){
//        a++;
//        if(a>=t1Img.length){
//            a=0;
//            t1Out.scrollLeft=0;
//        }
//        move2();
//    },2000)
//
//}
//autoMove2();                      //��������Ҫ��ͻ
//function move2(){
//    var start=t1Out.scrollLeft;
//    var end=t1Img[0].clientWidth*a;
//    var stepmin=0;
//    var stepmax=20;
//    var change=end-start;
//    var everystep=change/stepmax;
//    time5=setInterval(function(){
//        stepmin++;
//        if(stepmin>=stepmax){
//            clearInterval(time5);
//        }
//        start=start+everystep;
//        t1Out.scrollLeft=start;
//    },10)
//    for(var i=0;i>=t1Li.length;i++){
//        t1Li[i].style.backgroundColor='';
//        alert(t1Li[i]);
//    }
//    t1Li[a].style.backgroundColor='red';
//}

/*...........................F2-lunbo............................................*/
//var F2_out=document.getElementById('F2-out');
//var F2_inner=document.getElementById('F2-inner');
//var F2_img=F2_inner.children;
//var btnF=document.getElementById('btnF');
//var btnF2=document.getElementById('btnF2');
//var F2_yuan=document.getElementById('F2_yuan');
//var F2_lis=F2_yuan.children;
//var time_1=null;
//var time_2=null;
//var a2=0;
//var b2=1;
//F2_out.scrollLeft=F2_img[0].clientWidth;
//F2_out.onmouseover=function(){
//    btnF.style.display='block';
//    btnF2.style.display='block';
//};
//F2_out.onmouseout=function(){
//    btnF.style.display='';
//    btnF2.style.display='';
//};
//btnF.onmouseover=function(){
//    btnF.style.display='block';
//    btnF2.style.display='block';
//};
//btnF2.onmouseout=function(){
//    btnF.style.display='';
//    btnF2.style.display='';
//};
//
////var F2_img_03=F2_img[3].cloneNode(true);
////var F2_img_01=F2_img[0].cloneNode(true);
////F2_inner.insertBefore(F2_img_03,null);
////F2_inner.appendChild(F2_img_01);
//
//function F2(){
//      clearInterval(time_1);
//    time_1=setInterval(function(){
//        a2++;
//        if(a2>=F2_lis.length){
//            a2=0;
//        }
//        b2++;
//        if(b2>=F2_img.length){
//            b2=2;
//            F2_out.scrollLeft=F2_img[0].clientWidth;
//        }
//        autoF2();
//    },1400)
//}
//F2();
//
//function autoF2(){
//    var start2=F2_out.scrollLeft;
//    var end2=F2_img[0].clientWidth*b2;
//    var change2=end2-start2;
//    var minstep2=0;
//    var maxstep2=7;
//    var everystep2=change2/maxstep2;
//    time_2=setInterval(function(){
//        minstep2++;
//        if(minstep2>=maxstep2){
//            clearInterval(time_2);
//        }
//            start2+=everystep2;
//        F2_out.scrollLeft=start2;
//    },20)
//}
/*.............................F-lunbo.......................................*/
//var F3_out=document.getElementById("F3-out");
//var F3_inner=document.getElementById("F3-inner");
//var F3_img=F3_inner.children;
//var btnF3=document.getElementById("btnF3");
//var btnF32=document.getElementById("btnF32");
//var F3_yuan=document.getElementById("F3-yuan");
//var F3_lis=F3_yuan.children;
//var timeF3=null;
//var timeF32=null;
//var a3=0;
//var b3=0;
//F3_out.scrollLeft=F3_img[0].clientWidth;
//
//F3_out.onmouseover=function(){
//    btnF3.style.display='block';
//    btnF32.style.display='block';
//};
//F3_out.onmouseout=function(){
//    btnF3.style.display='';
//    btnF32.style.display='';
//};
//btnF3.onmouseover=function(){
//    btnF3.style.display='block';
//    btnF32.style.display='block';
//};
//btnF32.onmouseout=function(){
//    btnF3.style.display='';
//    btnF32.style.display='';
//};
//function moveF3(){
//    clearInterval(timeF3);
//    timeF3=setInterval(function(){
//        a3++;
//        if(a3>=F3_lis.length){
//            a3=0;
//        }
//        b3++;
//        if(b3>=F3_img.length){
//            b3=2;
//            F3_out.scrollLeft=F3_img[0].clientWidth;
//        }
//        autoF3();
//    },2400)
//}
//moveF3();
//function autoF3(){
//    var startF3=F3_out.scrollLeft;
//    var endF3=F3_img[0].clientWidth*b3;
//    var minstepF3=0;
//    var maxstepF3=20;
//    var changeF3=endF3-startF3;
//    var everystepF3=changeF3/maxstepF3;
//    timeF32=setInterval(function(){
//        minstepF3++;
//        if(minstepF3>=maxstepF3){
//            clearInterval(timeF32);
//        }
//        startF3+=everystepF3;
//        F3_out.scrollLeft=startF3;
//    },20)
//    for(var m=0;m<F3_lis.length;m++){
//        F3_lis[m].style.backgroundColor="";
//    }
//        F3_lis[a3].style.backgroundColor="red";
//}
//btnF32.onclick=function(){
//    clearInterval(timeF3);
//    clearInterval(timeF32);
//    a3++;
//    if(a3>=F3_lis.length){
//        a3=0;
//    }
//    b3++;
//    if(b3>=F3_img.length){
//        b3=2;
//        F3_out.scrollLeft=F3_img[0].clientWidth;
//    }
//    autoF3();
//    moveF3();
//}
//btnF3.onclick=function(){
//    clearInterval(timeF3);
//    clearInterval(timeF32);
//    a3--;
//    if(a3<0){
//        a3=F3_lis.length-1;
//    }
//    b3--;
//    if(b3<0){
//        b3=F3_img.length-3;
//        F3_out.scrollLeft=F3_img[0].clientWidth*(b3+1);
//    }
//    autoF3();
//    moveF3();
//}
//for(var q=0;q<=F3_lis.length;q++){
//    F3_lis[q].onclick=function(){
//        for(var p=0;p<F3_lis.length;p++){
//            if(this==F3_lis[p]){
//                a3=p;
//                b3=p+1;
//                autoF3();
//                moveF3()
//            }
//        }
//    }
//}

function lunbo(id1,id2,dian,b1,b2) {
    var F3_out = document.getElementById(id1);
    var F3_inner = document.getElementById(id2);
    var F3_img = F3_inner.children;
    var btnF3 = document.getElementById(b1);
    var btnF32 = document.getElementById(b2);
    var F3_yuan = document.getElementById(dian);
    var F3_lis = F3_yuan.children;
    var timeF3 = null;
    var timeF32 = null;
    var a3 = 0;
    var b3 = 0;
    F3_out.scrollLeft = F3_img[0].clientWidth;

    F3_out.onmouseover = function () {
        btnF3.style.display = 'block';
        btnF32.style.display = 'block';
    };
    F3_out.onmouseout = function () {
        btnF3.style.display = '';
        btnF32.style.display = '';
    };
    btnF3.onmouseover = function () {
        btnF3.style.display = 'block';
        btnF32.style.display = 'block';
    };
    btnF32.onmouseover = function () {
        btnF3.style.display = 'block';
        btnF32.style.display = 'block';
    };
    btnF3.onmouseout = function () {
        btnF3.style.display = '';
        btnF32.style.display = '';
    };
    btnF32.onmouseout = function () {
        btnF3.style.display = '';
        btnF32.style.display = '';
    };

    function moveF3() {
        clearInterval(timeF3);
        timeF3 = setInterval(function () {
            a3++;
            if (a3 >=F3_lis.length) {             //有=号
                a3 = 0;
            }
            b3++;
            if (b3 >=F3_img.length) {
                b3 =2;
                F3_out.scrollLeft = F3_img[0].clientWidth;
            }
            autoF3();
        }, 2400)
    }

    moveF3();
    function autoF3() {
        var startF3 = F3_out.scrollLeft;
        var endF3 = F3_img[0].clientWidth * b3;
        var minstepF3 = 0;
        var maxstepF3 = 20;
        var changeF3 = endF3 - startF3;
        var everystepF3 = changeF3 / maxstepF3;
        timeF32 = setInterval(function () {
            minstepF3++;
            if (minstepF3 >= maxstepF3) {
                clearInterval(timeF32);
            }
            startF3 += everystepF3;
            F3_out.scrollLeft = startF3;
        }, 20)
        for (var m = 0; m < F3_lis.length; m++) {
            F3_lis[m].style.backgroundColor = "";
        }
            F3_lis[a3].style.backgroundColor = "red";
    }

    btnF3.onclick = function () {
        clearInterval(timeF3);
        clearInterval(timeF32);
        a3--;
        if (a3 < 0) {
            a3 = F3_lis.length - 1;
        }
        b3--;
        if (b3 < 0) {
            b3 = F3_img.length - 3;
            F3_out.scrollLeft = F3_img[0].clientWidth * (b3+1);
        }
        autoF3();
        moveF3();
    }
    btnF32.onclick = function () {
        clearInterval(timeF3);
        clearInterval(timeF32);
        a3++;
        if (a3 >= F3_lis.length) {            //有=号
            a3 = 0;
        }
        b3++;
        if (b3 >=F3_img.length) {
            b3 = 2;
            F3_out.scrollLeft = F3_img[0].clientWidth;
        }
        autoF3();
        moveF3();
    }
    for (var q = 0; q <F3_lis.length; q++) {
        F3_lis[q].onclick = function () {
            for (var p = 0; p < F3_lis.length; p++) {
                if (this == F3_lis[p]) {
                    a3 = p;
                    b3 = p + 1;
                    autoF3();
                    moveF3()
                }
            }
        }
    }
}
lunbo("tab1-out","tab1-inner","ul-yuan","btn8","btn9");    //1F
lunbo("F2-out","F2-inner","F2_yuan","btnF","btnF2");
lunbo("F3-out","F3-inner","F3-yuan","btnF3","btnF32");
lunbo("F4-out","F4-inner","F4-yuan","btnF4","btnF42");
lunbo("F5-out","F5-inner","F5-yuan","btnF5","btnF52");
lunbo("F6-out","F6-inner","F6-yuan","btnF6","btnF62");
lunbo("F7-out","F7-inner","F7-yuan","btnF7","btnF72");
lunbo("F8-out","F8-inner","F8-yuan","btnF8","btnF82");
lunbo("F9-out","F9-inner","F9-yuan","btnF9","btnF92");
lunbo("F10-out","F10-inner","F10-yuan","btnF10","btnF102");
lunbo("F11-out","F11-inner","F11-yuan","btnF11","btnF112");  //kuai yuansu caikeyi gundong
lunbo("F12-out","F12-inner","F12-yuan","btnF12","btnF122");
lunbo("F12-out2","F12-inner2","F12-yuan2","btnF212","btnF2122");
/*......................tiantian.................................*/
//var tian_li1=document.getElementById("tian_li1");
//var tianImg=document.getElementById("tianImg");
//var timeT=null;
//var timeT2=null;
//tian_li1.onmouseover=function(){
//    clearInterval(timeT);
//    clearInterval(timeT2);
//    timeT=setInterval(function(){
//        tianImg.scrollLeft++;
//        if(tianImg.scrollLeft>=10){
//            clearInterval(timeT);
//        }
//    },50)
//}
//tian_li1.onmouseout=function(){
//    clearInterval(timeT2);
//    clearInterval(timeT);
//    timeT2=setInterval(function(){
//        tianImg.scrollLeft--;
//        if(tianImg.scrollLeft>=10){
//            clearInterval(timeT2);
//        }
//    },50)
//}


function tiantian(id1,id2){
    var tian_li1=document.getElementById(id1);
    var tianImg=document.getElementById(id2);
    var timeT=null;
    var timeT2=null;
    tian_li1.onmouseover=function(){
        clearInterval(timeT);
        clearInterval(timeT2);
        timeT=setInterval(function(){
            tianImg.scrollLeft++;
            if(tianImg.scrollLeft>=10){
                clearInterval(timeT);
            }
        },50)
    }
    tian_li1.onmouseout=function(){
        clearInterval(timeT2);
        clearInterval(timeT);
        timeT2=setInterval(function(){
            tianImg.scrollLeft--;
            if(tianImg.scrollLeft>=10){
                clearInterval(timeT2);
            }
        },50)
    }
}
tiantian("tian_li1","tianImg");
tiantian("tianli2","li2_img");
tiantian("tianli3","li3_img");
tiantian("tianli4","li4_img");
tiantian("tianli5","li5_img");
tiantian("tianli6","li6_img");
tiantian("tianli7","li7_img");



var tian_out=document.getElementById("tian_out");
var tinner=document.getElementById("tinner");
//var tinner_lis=tinner.children;
var timer=null;
var timef=null;
tinner.innerHTML+=tinner.innerHTML;
function autoScroll() {
    tian_out.scrollTop++;
    if (tian_out.scrollTop == tinner.offsetHeight) {
        tian_out.scrollTop = 0;
    }
    if (tian_out.scrollTop % 125 == 0) {
        clearInterval(timer);
        timef = setTimeout(scroll,1000);
    }
}
function scroll(){
    timer=setInterval(autoScroll,10)
}
autoScroll();
scroll();


/*.......................celan...........................................*/
//var cleft=document.getElementById("cleft");
//var cleft_lis=cleft.children;
//var f=['服饰','美妆','手机','家电','数码','运动','居家','母婴','食品','图书','车品','服务'];
//var d=['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'];
//var z= d.index;
//for(var c=0;c<=cleft_lis.length;c++){
//    cleft_lis[c].onclick=function(){
//        for(var d=0;d<=cleft_lis.length;d++){
//            if(this==cleft_lis[d]){
//               this.innerHTML=f[d];
//                this.innerHTML.color="red"
//            }
//        }
//    }
//}

var cleft=document.getElementById("cleft");
var winH=document.documentElement.clientHeight;
var docH=document.documentElement.offsetHeight;
var scrTop=document.documentElement.scrollTop||document.body.scrollTop;

function topww(){
    if(docH-winH-scrTop<=4000){
        cleft.style.display="block";
    }
}
topww();

var celan2=document.getElementById('celan2');
var rlis=celan2.getElementsByTagName('li');
var divs=celan2.getElementsByTagName('div');
var timed=null;
var timed2=null;
var s=-70;
function chu(i){
    rlis[i].onmouseover=function(){
        clearInterval(timed);
        clearInterval(timed2);
        timed=setInterval(function(){
            s+=10;
            if(s>=30){
                clearInterval(timed);
                divs[i].style.right=s+'px';
            }
            else{
                divs[i].style.right=s+'px';
            }

        },10)
        rlis[i].onmouseout=function() {
            clearInterval(timed);
            clearInterval(timed2);
            timed2=setInterval(function(){
                s-=100;
                if (s <= -70) {
                    clearInterval(timed2);
                    divs[i].style.right = s + 'px';
                }
                else {
                    divs[i].style.right = s + 'px';
                }
            },1)
        }
    }

}
chu(0);
chu(1);
chu(2);
chu(3);
chu(4);
chu(5);
var celanx=document.getElementById('celanx');
var rli2s=celanx.getElementsByTagName('li');
var div2s=celanx.getElementsByTagName('div');
var timed21=null;
var timed22=null;
var s2=-70;
function chu2(i){
    rli2s[i].onmouseover=function(){
        clearInterval(timed21);
        clearInterval(timed22);
        timed21=setInterval(function(){
            s2+=10;
            if(s2>=30){
                clearInterval(timed21);
                div2s[i].style.right=s2+'px';
            }
            else{
                div2s[i].style.right=s2+'px';
            }
        },1)
        rli2s[i].onmouseout=function() {
            clearInterval(timed21);
            clearInterval(timed22);
            timed22=setInterval(function(){
                s2-=100;
                if (s2 <= -70) {
                    clearInterval(timed22);
                    div2s[i].style.right = s2 + 'px';
                }
                else {
                    div2s[i].style.right = s2 + 'px';
                }
            },1)
        }
    }
}

chu2(0);
chu2(1);