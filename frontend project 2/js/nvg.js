function nvgRand(min, max) 
    {
      /* Возвращает случайное число между min (включительно) и max (не включая max)*/
      return Math.random() * (max - min) + min;
    }

class nvgm
{
  static sigm(x) 
    {
      return 1/(1+Math.pow(Math.E, -x));
    }
}

class nvgjs
{
  static getVersion()
  {
    return "7.2.0";
  }

/*//////////////////////*/
static scrollbot(nvgw)
{
  /*Резкая прокрутка вниз*/
   $(nvgw).scrollTop($(nvgw)[0].scrollHeight);
}

static scrolltop(nvgw)
{
  /*Резкая прокрутка вниз*/
   $(nvgw).scrollTop(0);
}
/*///////////////////////*/

static ScrollTopSoft()
{
$("html, body").animate({ scrollTop: 0 }, 'slow');
}

static ScrollBotSoft()
{
$("html, body").animate({ scrollTop: screen.height }, 'slow');
}

static ScrollSoft(ccoord)
{
$("html, body").animate({ scrollTop: ccoord }, 'slow');
}
/*///////////////////////*/

static ScrollTo(a0101x304329, speed = 800)
{
$('html, body').animate({ 
scrollTop: $("#"+a0101x304329).offset().top 
}, speed); 
}

/*///////////////////////*/

static go_ssl()
{
  if(location.protocol != 'https:')
  {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
}
/*///////////////////////*/

static isVisible(elem, ika = 0)
{
  var coords = $(elem)[ika].getBoundingClientRect();
  var windowHeight = document.documentElement.clientHeight;
  var topVisible = coords.top > 0 && coords.top < windowHeight;
  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

static Collision(elem1,elem2,pos1=0,pos2=0,offsety=0,offsetx=0)
{
/*default by absolute position => posN = 0 else 1*/
var el1 = $(elem1);
var el2 = $(elem2);

var T1 = el1.offset().top-offsety;
var T2 = el2.offset().top;
if(pos1==1) T1 = el1.position().top-offsety;
if(pos2==1) T2 = el2.position().top;

var L1 = el1.offset().left-offsetx;
var L2 = el2.offset().left;
if(pos1==1) L1 = el1.position().left-offsetx;
if(pos2==1) L2 = el2.position().left;

var B1 = el1.offset().top + el1.outerHeight() + offsety;
var B2 = el2.offset().top + el2.outerHeight();
if(pos1==1) B1 = el1.position().top + el1.outerHeight() + offsety;
if(pos2==1) B2 = el2.position().top + el2.outerHeight();

var R1 = el1.offset().left + el1.outerWidth() + offsetx;
var R2 = el2.offset().left + el2.outerWidth();
if(pos1==1) R1 = el1.position().left + el1.outerWidth() + offsetx;
if(pos2==1) R2 = el2.position().left + el2.outerWidth();

if(T1 <= B2 && B1 >= T2 && L1 <= R2 && R1 >= L2)
{
  return true;
}
else
  return false;

}

/*///////////////////////*/

static isMobile() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

static isMScreen() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

/*//////////////////////*/

static isnoSelfHideCollapse = false;
static btnCollapse = "noelementt"; 
static attrcollapse = "noelementt";

static noSelfHideCollapse(btnCollapse1)
{

nvgjs.isnoSelfHideCollapse = true;

if(btnCollapse1 !== undefined)
  nvgjs.btnCollapse = btnCollapse1;

$(nvgjs.btnCollapse).on('click', function() 
{ 
nvgjs.attrcollapse = $(this).attr("data-target"); 

}); 

}

}

/*class end*/
$('.collapse').on('hide.bs.collapse',function(e)
{
  if(nvgjs.isnoSelfHideCollapse)
  { 
    if($(this).attr("id")==nvgjs.attrcollapse.substr(1)) 
      e.preventDefault(); 
  }
});

/*///////////////*/
function nvg_sw()
{
  return screen.width;     
}

function nvg_sh()
{
  return screen.height; 
}

function nvg_swa()
{
  return window.innerWidth;     
}

function nvg_sha()
{
  return window.innerHeight; 
}

function nvg_scroll()
{
  return document.documentElement.scrollTop || document.body.scrollTop;     
}

function nvg_scroll_pr()
{
  var scrolnoe2q = Math.ceil(100*(nvg_scroll()/($(document).height()-nvg_sha())));
}
/*///////////////////////*/


function nvgcopy(btn, text)
{
  var copyTextareaBtn = $("#"+btn);

  copyTextareaBtn.click(function()
  {
    var copyTextarea = $("#"+text);
    var sel, range;
  var el = copyTextarea.focus()[0];
  if (window.getSelection && document.createRange) {
    sel = window.getSelection();
    if(sel.toString() == ''){
      range = document.createRange(); 
      range.selectNodeContents(el); 
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }else if (document.selection) { 
    sel = document.selection.createRange();
    if(sel.text == ''){
      range = document.body.createTextRange();
      range.moveToElementText(el);
      range.select(); 
    }
  }
    try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  });
}

/*///////////////////////*/

  window.nvgMob = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

window.nvgPC = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return !check;
};

class nvgtext
{
  static nl2br (str, is_xhtml) {
    if (typeof str === 'undefined' || str === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  }

  static nocopy(element)
  {
    $(element).css("-webkit-user-select","none");
    $(element).css("-khtml-user-select","none");
    $(element).css("-moz-user-select","none");
    $(element).css("-ms-user-select","none");
    $(element).css("-o-user-select","none");
    $(element).css("user-select","none");
  }
}

class nvg_snow
{
    constructor()
    {
        this.speed = 50;
        this.snowmax=30;
        this.snowcolor=new Array("#b9dff5","#7fc7ff","#7fb1ff","#7fc7ff","#b9dff5");
        this.snowtype=new Array("Times");
        this.snowletter="*";
        this.sinkspeed=0.6;
        this.snowmaxsize=50;
        this.snowminsize=25;
        /* 1 for all*/
        /* 2 for left*/
        /* 3 for center*/
        /* 4 for right */
        this.snowingzone=1;

        /* Do not edit below this line*/
        this.actions = true;
        this.snow=new Array();
        this.marginbottom;
        this.marginright;
        this.i_snow=0;
        this.x_mv=new Array();
        this.crds=new Array();
        this.lftrght=new Array();
        this.browserinfos=navigator.userAgent;
        this.ie5=document.all&&document.getElementById&&!this.browserinfos.match(/Opera/);
        this.ns6=document.getElementById&&!document.all;
        this.opera=this.browserinfos.match(/Opera/);
        this.browserok=this.ie5||this.ns6||this.opera;

        this.draw();
        this.init();
    }

    movesnow()
    {
        if(this.actions)
        {
            for (var i = 0; i <= this.snowmax; i++)
        {
                this.crds[i] += this.x_mv[i];
                this.snow[i].posy+= this.snow[i].sink;
                this.snow[i].style.left = this.snow[i].posx+this.lftrght[i]*Math.sin(this.crds[i])+'px';
                this.snow[i].style.top= this.snow[i].posy+'px';

                if (this.snow[i].posy>= this.marginbottom-2*this.snow[i].size || parseInt(this.snow[i].style.left)>(this.marginright-3*this.lftrght[i]))
                {
                        if (this.snowingzone==1) {this.snow[i].posx=this.randommaker(this.marginright-this.snow[i].size)};
                        if (this.snowingzone==2) {this.snow[i].posx=this.randommaker(this.marginright/2-this.snow[i].size)};
                        if (this.snowingzone==3) {this.snow[i].posx=this.randommaker(this.marginright/2-this.snow[i].size)+this.marginright/4};
                        if (this.snowingzone==4) {this.snow[i].posx=this.randommaker(this.marginright/2-this.snow[i].size)+this.marginright/2};
                        this.snow[i].posy=0;
                }
        }
        var this2 = this;
        setTimeout(function() {this2.movesnow();},this2.speed);
        }
    }

    draw()
    {        
        for (var i=0;i<=this.snowmax;i++)
        {
            document.body.innerHTML += ("<span id='snowflake"+i+"' style='position:absolute;top:-"+this.snowmaxsize+"'>"+this.snowletter+"</span>");
        }
    }

    redraw()
    {        
        this.hide();
        this.draw();
    }

    update()
    {
        this.redraw();
        this.init();
    }

    init()
    {
        if (this.browserok)
        {
        this.actions=true;
        window.onload=this.initsnow();
        }

    }

    stop()
    {
        this.actions=false;
    }

    hide()
    {
       for (var i=0;i<=this.snowmax;i++)
        {
            document.getElementById("snowflake"+i).remove();
        }
    }

    delete()
    {
       this.stop();
       this.hide();
    }

    randommaker(range)
    {
        this.rand=Math.floor(range*Math.random());
        return this.rand
    }

    initsnow()
    {
        if (this.ie5 || this.opera) 
        {
                this.marginbottom = document.body.scrollHeight;
                this.marginright = document.body.clientWidth-15;
        }
        else if (this.ns6) {
                this.marginbottom = document.body.scrollHeight;
                this.marginright = window.innerWidth-15;
        }

        this.snowsizerange=this.snowmaxsize-this.snowminsize;

        for (var i = 0; i <= this.snowmax; i++)
        {
            this.crds[i] = 0;
            this.lftrght[i] = Math.random()*25;
            this.x_mv[i] = 0.03 + Math.random()/10;
                this.snow[i]=document.getElementById("snowflake"+i);
                this.snow[i].style.fontFamily=this.snowtype[this.randommaker(this.snowtype.length)];
                this.snow[i].size=this.randommaker(this.snowsizerange)+this.snowminsize;
                this.snow[i].style.fontSize=this.snow[i].size+'px';
                this.snow[i].style.color=this.snowcolor[this.randommaker(this.snowcolor.length)];
                this.snow[i].style.zIndex=1000;
                this.snow[i].sink=this.sinkspeed*this.snow[i].size/5;
                if (this.snowingzone==1) {this.snow[i].posx=this.randommaker(this.marginright-this.snow[i].size)};
                if (this.snowingzone==2) {this.snow[i].posx=this.randommaker(this.marginright/2-this.snow[i].size)};
                if (this.snowingzone==3) {this.snow[i].posx=this.randommaker(this.marginright/2-this.snow[i].size)+this.marginright/4};
                if (this.snowingzone==4) {this.snow[i].posx=this.randommaker(this.marginright/2-this.snow[i].size)+this.marginright/2};
                this.snow[i].posy=this.randommaker(2*this.marginbottom-this.marginbottom-2*this.snow[i].size);
                this.snow[i].style.left=this.snow[i].posx+'px';
                this.snow[i].style.top=this.snow[i].posy+'px';
        }
        this.movesnow();
    }
}

class nvgs
{
  static countEls = [];
  static enabled = true;


  constructor(obj2, scroll_when2, direction2, scroll_when2_2 = undefined)
  {
    if(scroll_when2 !== "") 
      this.scroll_when = scroll_when2;
    else
      this.scroll_when = 90;

    if(scroll_when2_2 !== undefined) 
      this.scroll_when2 = scroll_when2_2;

    if(direction2 !== "") 
      this.direction = direction2;
    else 
      this.direction = 1;

    if(obj2 == "")
    {
      this.obj = "";
    }
    else 
      this.obj = obj2;

    nvgs.elsoft(this);

    $(this.obj).addClass("fade");

    this.needshf = false;

    nvgs.countEls.push(this);
  }

static elsoft(element)
{
  var scroll = $(window).scrollTop();

        if(element.direction===1)
    {
      if(scroll>=element.scroll_when)
    {
      this.needshf = false;
      nvgs.sh5df543(element.obj);
    }
   else
    {
     this.needshf = true;
     nvgs.hds5df543(element.obj, this.needshf);

    }
    }

        else if(element.direction===0)
    {

      if(scroll<=element.scroll_when)
    {
      this.needshf = false;
      nvgs.sh5df543(element.obj);
    }
   else
    {
      this.needshf = true;
      nvgs.hds5df543(element.obj, this.needshf);
    }
    }

        else
    {

      if(scroll >= element.scroll_when && scroll <= element.scroll_when2)
    {
      this.needshf = false;
      nvgs.sh5df543(element.obj);
    }
    else
    {
      this.needshf = true;
      nvgs.hds5df543(element.obj, this.needshf);
    }
    }
}

static sh5df543(objj)
{
  $(objj).addClass("show");
  $(objj).removeClass("hide");
  setTimeout(function(){$(objj).css("transform","translate(0px,0px)");},0);
}

static hds5df543(objj, needshf)
{
 $(objj).removeClass("show");
 $(objj).addClass("hide");
 setTimeout(function(){if(needshf) $(objj).css("transform","translate(1000px,-10000px)");},0);
}

static setFix(el,wh, ofx, ofy)
{
  if(wh=="tl")
  {
    $(el).css("position","fixed");
    $(el).css("top",ofy+"px");
    $(el).css("left",ofx+"px");
    $(el).css("z-index","1001");
  }
  if(wh=="tr")
  {
    $(el).css("position","fixed");
    $(el).css("top",ofy+"px");
    $(el).css("right",ofx+"px");
    $(el).css("z-index","1001");
  }
  if(wh=="bl")
  {
    $(el).css("position","fixed");
    $(el).css("bottom",ofy+"px");
    $(el).css("left",ofx+"px");
    $(el).css("z-index","1001");
  }
  if(wh=="br")
  {
    $(el).css("position","fixed");
    $(el).css("bottom",ofy+"px");
    $(el).css("right",ofx+"px");
    $(el).css("z-index","1001");
  }
  if(wh=="bc")
  {
    $(el).css("position","fixed");
    $(el).css("bottom",ofy+"px");
    $(el).css("left",(50+ofx)+"%");
    $(el).css("z-index","1001");
  }
  if(wh=="tc")
  {
    $(el).css("position","fixed");
    $(el).css("top",ofy+"px");
    $(el).css("left",(50+ofx)+"%");
    $(el).css("z-index","1001");
  }
}

}

$(window).scroll(function ()
{
if(nvgs.enabled)
{
    nvgs.countEls.forEach(function(element)
  {
  nvgs.elsoft(element);
});
}

});

class nvg_cook
{
  static getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

static setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

static deleteCookie(name) {
  nvg_cook.setCookie(name, "", {
    expires: -1
  })
}
}

class nvgi
{
  static block_f;
  static needToS = false;
  static paste = false;
  static ToS = "";

  static getImg(pastee, callback)
  {
    if(pastee.clipboardData == false)
    {
          if(typeof(callback) == "function")
          {
              callback(undefined);
          }
      };

      var files = pastee.clipboardData.items;

      if(files == undefined)
      {
          if(typeof(callback) == "function")
          {
              callback(undefined);
          }
      };

      for (var i = 0; i < files.length; i++)
      {
          if (files[i].type.indexOf("image") == -1) 
            continue;
          var blob = files[i].getAsFile();

          if(typeof(callback) == "function")
          {
            callback(blob);
          }
      }
  }

    static preLoad(elems, srcname = "data-src", isCss = 0)
{

  var allClassElements = document.getElementsByClassName(elems);
  var allImages = [];
  var allImagesOld = [];
  var xCounter = [];

for (var i = 0; i < allClassElements.length; i++)
{
  var img = new Image();
  var x = allClassElements[i];
  var imageSrc = $(x).attr(srcname);
  img.src = imageSrc;
  allImages.push(img);
  allImagesOld.push(x);
  xCounter.push(i);
}

xCounter.forEach(function(ee){

      allImages[ee].onload = function()
      {
        if(isCss==0)
          $(allImagesOld[ee]).attr("src",allImages[ee].src);
        else
          $(allImagesOld[ee]).css("background-image","url('"+allImages[ee].src+"')");
      };

});

}

static preLoadId(elem, srcname = "data-src", isCss = 0)
{

  var img = new Image();
  var x = document.getElementById(elem);
  var imageSrc = $(x).attr(srcname);
  img.src = imageSrc;

      img.onload = function()
      {
        if(isCss==0)
          $(x).attr("src",img.src);
        else
          $(x).css("background-image","url('"+img.src+"')");
      };
}

}

class nvg_modal
{
  constructor(mode, trigger, img, width_new = 500)
  {
    if(mode == "img" || mode == "" || mode == "img2")
    {
    this.tg = trigger;
    this.img = img;

    $(this.tg).css("cursor","pointer");
    $(this.tg).attr("onclick","$('"+this.tg+"_2').modal('show');");
    
    $("body").append(this.create_window(mode,width_new));
    }
  }

  create_window(mode, maxsizer)
  {
    if(mode=="img2")
        {
            var part1 = '<div class="modal fade" id="'+this.tg.substring(1)+'_2" tabindex="-1" role="dialog" aria-hidden="true">';
            var part2 = '<div class="modal-dialog" style="max-width: '+ maxsizer + 'px" role="document"><div style="background: none;" class="modal-content"><div style="border: none; background-color: snow; background-color: rgba(230,230,230,0.8);" class="modal-header">';
            var part3 = '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            var part4 = '<div class="modal-body"><img style="position: relative; width: 100%;" src="'+this.img+'"></div>';
            var part5 = '</div></div></div>';
            return part1+part2+part3+part4+part5;
        }
        else
        {
            var part1 = '<div class="modal fade" id="'+this.tg.substring(1)+'_2" tabindex="-1" role="dialog" aria-hidden="true">';
            var part2 = '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header">';
            var part3 = '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            var part4 = '<div class="modal-body"><img style="position: relative; width: 100%;" src="'+this.img+'"></div>';
            var part5 = '</div></div></div>';
            return part1+part2+part3+part4+part5;
        }
  }
}

window.addEventListener("paste", function(e){

    if(nvgi.paste)
    {
      nvgi.getImg(e, function(iblob){
        if(iblob)
          {           
            var img = new Image();
            img.onload = function(){
            if(nvgi.needToS && nvgi.Tos != "")
              $(nvgi.ToS).html(img);
            };

            nvgi.block_f = iblob;

            var URLObj = window.URL || window.webkitURL;
            img.src = URLObj.createObjectURL(iblob);
        }
    });
    }

}, false);