var d = document;
var l=location.href;
var f=l.substring(l.lastIndexOf('/')+1);  //get the file name

Math.round(1.67); // returns `2`
Math.ceil(2.4);   // returns `3`
Math.floor(2.6);  // returns `2`
Math.abs(-2.6);  // returns `2.6`

var sMyString = "Tsinghua University";

sMyString.slice(1,3) + "<br>";      //si
sMyString.substring(1,3) + "<br>";  //si
sMyString.slice(4) + "<br>";        //ghua University
sMyString + "<br>";		            //Tsinghua University

String.substr(N1,N2) //这个就是我们常用的从指定的位置(N1)截取指定长度(N2)的字符串;
String.substring(N1,N2) //这个就是我们常用的从指定的位置(N1)到指定的位置(N2)的字符串;
alert("abcdefg".substr(2,5)) //它显示的是 "cdefg"
alert("abcdefg".substring(2,5)) //则显示的为 "cde"

sMyString.slice(2,-3) + "<br>";     //inghua Univers
sMyString.substring(2,-3) + "<br>"; //Ts
sMyString.substring(2,0) + "<br>";  //Ts

sMyString.indexOf("i")+"<br>";		//從前往後, 2
sMyString.indexOf("i",3)+"<br>";	//可選參數，從第幾個字符開始往後找, 11
sMyString.lastIndexOf("i")+"<br>";	//從後往前, 16
sMyString.lastIndexOf("i",3)+"<br>";//可選參數，從第幾個字符開始往前找, 2
sMyString.lastIndexOf("V")+"<br>";	//大寫「V」找不到，返回-1

var aMap = ["China","USA","Britain"];
aMap.join() + "<br>";		   //無參數，等同於toString(), China,USA,Britain
aMap.join("") + "<br>";		   //不用連接符, ChinaUSABritain
aMap.join("][") + "<br>";	   //用「][」來連接, China][USA][Britain
aMap.join("-isaac-") + "<br>"; //China-isaac-USA-isaac-Britain

var sFruit = "apple,pear,peach,orange";
var aFruit = sFruit.split(",");  //["apple","pear","peach","orange"], split-將每一個字符串轉為一個數組元素
alert(aFruit.join("--"));        //apple--pear--peach--orange

var aFruit = ["apple","pear","peach","orange"];
alert(aFruit.reverse().toString());  //orange,peach,pear,apple,	reverse-反序數組的每個元素

var aFruit = ["pear","apple","peach","orange"];
aFruit.sort();               //["apple","orange","peach","pear"];
alert(aFruit.toString());    //apple,orange,peach,pear

var stack = new Array();
stack.push("red");
stack.push("green");
stack.push("blue");
stack.toString() + "<br>";   //red,green,blue
var vItem = stack.pop();                     
vItem + "<br>";              //blue
stack.toString();            //red,green 


//The following table lists all results of typeof.
Operand	    Result
undefined	'undefined'
null	    'object'
Boolean value	'boolean'
Number value	'number'
String value	'string'
Function	'function'
All other values	'object'


//----------------------- filePath -----------------------
function filePath(url){	
	var filepath = '', last = url.lastIndexOf("\/"), last_str = url.lastIndexOf("\?");
	if (last_str!=-1){			
		filepath		= url.substring(last_str,last+1);
	}else{
		filepath		= url.substring(0,last+1);
	}
	return filepath
};
//----------------------- fileFullName -----------------------
function fileFullName(url){	
	return url.split('/').pop(); 
};
//----------------------- fileName -----------------------
function fileName(url){	
	return url.split('/').pop().split('.').shift();
};
//----------------------- fileType -----------------------
function fileType(url){	
	return url.split('/').pop().split('.').pop(); 	
};

// Get location.hash (or what you'd expect location.hash to be) sans any
// leading #. Thanks for making this necessary, Firefox!
function get_fragment( url ) {
	return url.replace( /^[^#]*#?(.*)$/, '$1' );
};

// Get location.search (or what you'd expect location.search to be) sans any
// leading #. Thanks for making this necessary, IE6!
function get_querystring( url ) {
	return url.replace( /(?:^[^?#]*\?([^#]*).*$)?.*/, '$1' );
};
  
	
var __urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
var __imgRegex = /\.(?:jpe?g|gif|png)$/i;	



Undefined,null的区别

undefined 表示一个变量没有被定义，或者定义了没有赋值。
null 是用来给变量赋值，表示”没有值”
JavaScript 会给一个没有初始化的变量赋予undefined
JavaScript 从不会将值赋为null,它是被程序员用来指定一个var 没有值。
undefined 在JSON中不合法，null合法
undefined 的 typeof 也是 undefined
null 的 typeof 是 object, 为什么
它们都是原语
都是 falsy (Boolean(undefined) // false, Boolean(null) // false)

判断变量是否为undefined
typeof variable === "undefined"

判断变量是否为null
variable === null

‘==’为true, ‘===’为false
null == undefined // true
null === undefined // false
	

/**** How to check a not defined variable in javascript *****/
if (null == yourvar) // with casting
if (null === yourvar) // without casting

//If you want to check if a variable exist
if (typeof yourvar != 'undefined') // Any scope
if (window['varname'] != undefined) // Global scope

//If you know the variable exists but don't know if there's any value stored in it:
if (undefined != yourvar)

//If you want to know if a member exists independent of whether it has been assigned a value or not:
if ('membername' in object) // With inheritance
if (object.hasOwnProperty('membername')) // Without inheritance

//If you want to to know whether a variable autocasts to true:
if(variablename)


/*If the Boolean object has no initial value, or if the passed value is one of the following:  
the object is set to false. For any other value it is set to true (even with the string "false")!*/
	0
	-0
	null
	""
	false
	undefined
	NaN

/*
http://www.php100.com/html/webkaifa/javascript/2013/0201/12023.html
首先，所有的全局变量都是window的属性，语句 var a = 1;等价于window.a = 1; 
第二，所有的变量声明和函数声明都在范围作用域的顶部,可以理解为：预编译。
函数声明会覆盖变量声明，但不会覆盖变量赋值， 函数声明的优先级高于变量声明的优先级，但如果该变量value赋值了，那结果就完全不一样了
function value(){
    return 1;
}
var value;
alert(typeof value);    //"function"

function value(){
    return 1;
}
var value = 1;
alert(typeof value);    //"number"


函数声明是如下这样的代码：
function functionName(arg1, arg2){
    //函数体
}
如下不是函数，而是函数表达式，相当于变量赋值：
var functionName = function(arg1, arg2){
    //函数体
};
*/


//detect an element if is exist
if (!$('#breadcrumb').length)	return;
if (!document.getElementById('breadcrumb')) return;

// make console.log safe to use
window.console||(console={log:function(){}});


/**** Array ****
/*
 * 判断数组中是否有相同的元素的代码
 */
 // 方案一
function isRepeat(arrs) {
    if (arrs.length > 0) {
        var s = arrs.join(",");
        for (var i = 0, ilen = arrs.length; i < ilen; i += 1) {
            if (s.replace(arrs[i], "").indexOf(arrs[i]) > -1) {
                return true;
            }
        }
    }
    return false;
}

var arrs2 = [1, 2, 3, 1];
console.log(isRepeat(arrs2)); // true


/*
 * 计算数组中每个元素在数组中出现的个数
 * @param {arrs} 数组
 * @method 定义一个新数组，循环当前的数组，使用一个临时的变量temp保存当前的值，外层for循环定义一次变量count=0，当做计数器，内部再一次循环数组判断当前的数组与外层的数组某一项是否相等，如是count++; 然后把当前的一项值置为-1，下一次就不会再继续循环了
 * @return {newArrs} 返回一个新数组
 */
function arrayElemCount(arrs){
    var newArrs = [];
     if(arrs.length > 0) {
        for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
            var temp = arrs[i];
            var count = 0;
            for(var j = 0,jlen = arrs.length; j < jlen; j+=1) {
                if(arrs[j] == temp) {
                    count++;
                    arrs[j] = -1;
                 }
            }
            newArrs.push(temp + ":" +count);
        }
     }
     return newArrs;
}
var arrs = [1,2,1,2,3,4,5,6,7,1,2,3];
console.log(arrayElemCount(arrs)); 
// 打印如下：["1:3", "2:3", "-1:6", "-1:6", "3:2", "4:1", "5:1", "6:1", "7:1", "-1:12", "-1:12", "-1:12"]
// 键值为-1的，都可以去掉


/*Javascript删除数组重复元素的操作3对象键值法
对象键值法(该方法性能最优)
@method 定义一个空对象和空新数组，遍历当前的数组，判断该对象是否存在数组的某一项，如果不存在
就当当前的某一项存入新数组去，且当前的项置为-1 目的过滤掉重复的项
*/
function arrayUnique(arrs) {
		var newArrays = [];
		var hash = {};
		
		if(arrs.length > 0) {
			for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
				if(!hash[arrs[i]]) {
					hash[arrs[i]] = 1;
					newArrays.push(arrs[i]);
				}
			}
		}
		
		return newArrays;
}

var arrs = [4,5,2,1,2,1,3,1];
console.log(arrayUnique(arrs)); // [4,5,2,1,3]


/*
  * 删除数组里面的某个元素
  * @param {elem,arrs} 要删除的元素 原数组
  * 思路：直接遍历数组 取其中某一项 如果某一项与该元素相同的话，直接截取，和第一种方案类似，比第一种方案简单
  * @return {elem,arrs} 返回一个对象，对象有2个元素，第一个是被删除的元素elem键，另一个是被删除元素
  后的数组，也就是新数组 [2,3]
  */
 function removeAttrsElem(elem,arrs){
    var newElem;
    if(arrs.length > 0) {
        for(var i =0,ilen = arrs.length; i < ilen; i+=1) {
            if(arrs[i] == elem) {
                newElem = arrs.splice(i,1);
            }
        }
    }
    return {
        elem: newElem,
        arrs: arrs
    }
 }
 var arrs = [1,2,3];
 var elem = 1;
 console.log(removeAttrsElem(elem,arrs)); 
 // 返回一个对象 {elem:1,arrs:[2,3]}
 
 
 /* 
  * 求出2个数组的相同的元素和不同的元素
  * 思路：先定义一个对象，把A数组转换成对象，然后遍历B数组，判断B数组中某一项是否在
  * A数组那个对象里面 如果在的话，说明有相同的元素，否则为不同的元素
  */
function getArrsSameAndDiffElem(arrs1,arrs2){
    var hash = {},
        sameElemArrs = [],
        diffElemArrs = [];
    if(arrs1.length > 0) {
        for(var i = 0,ilen = arrs1.length; i < ilen;i+=1) {
            hash[arrs1[i]] = 1;
        }
    }
    if(arrs2.length > 0) {
        for(var j = 0,jlen = arrs2.length; j < jlen; j+=1) {
            if(hash[arrs2[j]]) {
            // 说明有相同的元素，把相同的元素存入sameElemArrs数组里面去
                sameElemArrs.push(arrs2[j]);
            }else {
            // 说明是不同的元素，把不同的元素存入diffElemArrs数组里面去
                diffElemArrs.push(arrs2[j]);
            }
        }
    }
    return {
        sameElemArrs: sameElemArrs,
        diffElemArrs: diffElemArrs
    }
}
 var arrs1 = ["aac","aab","cfg",'longen','tugenhua','single'];
 var arrs2 = ["aac","mnc","nba","cba","anta",'tugenhua','single'];
 console.log(getArrsSameAndDiffElem(arrs1,arrs2));
 // 打印出 diffElemArrs = ["mnc","nba","cba","anta"]
 // 相同的元素 sameElemArrs = ["aac",'tugenhua','single']


// 查找数组中最小值
function arrayMin(arrs){
    var min = arrs[0];
    for(var i = 1, ilen = arrs.length; i < ilen; i+=1) {
        if(arrs[i] < min) {
            min = arrs[i];
        }
    }
    return min;
}
// 代码测试
var rets = [2,4,5,6,7,9,10,15];
console.log(arrayMin(rets));//2


// 在数组中查找最大值
function arrayMax(arrs) {
    var max = arrs[0];
    for(var i = 1,ilen = arrs.length; i < ilen; i++) {
        if(arrs[i] > max) {
            max = arrs[i];
        }
    }
    return max;
}
// 代码测试
var rets = [2,4,5,6,7,9,10,15];
console.log(arrayMax(rets));//15



// \s matches whitespace
// ' /img/01.jpg/ ' -> '/img/01.jpg/'
var unitImg = item.find('thumbnail').text().replace(/^\s\s*/, '').replace(/\s\s*$/, '');

var floorplanThumbnail = thisItem.find('floorPlanImage').text().replace(/^\s\s*/, '').replace(/\s\s*$/, '');


jQuery.noConflict();
	 
(function($) {
// your code here, using the $
})(jQuery);

//Finding the Dimensions of the Window and Document
alert('Window height: ' + $(window).height()); // returns the height of the viewport
alert('Window width: ' + $(window).width()); // returns the width of the viewport
alert('Document height: ' + $(document).height()); // returns the height of the document
alert('Document width: ' + $(document).width()); // returns the width of the document

$nav.find('li:not(:eq(0))');


/* animate stop()
$(selector).stop(stopAll,goToEnd)

参数 	    描述
stopAll 	可选。规定是否停止被选元素的所有加入队列的动画。
goToEnd 	可选。规定是否允许完成当前的动画。该参数只能在设置了 stopAll 参数时使用。*/

stop(true)       //是停止在当前状态，即立即停止
stop(true,true)  //是执行完当前的小动画后停止执行后面的动画->当移入一个菜单的时候，停止所有加入队列的动画，但是完成当前的动画（跳至当前动画的最终效果位置）
stop(true,false) //直接跳到动画结尾


//Finding the Offset of an Element
//determine the location of an element in the document.
/*
the offset method will always give you an element’s position relative to the 'document'. The return value of the position method may be the element’s position relative to the document, depending on whether the element has an offsetParent. If the element has an offsetParent—that is, a parent element that has positioning applied to it—then the position method will provide information about the position of the element relative to the offsetParent, not to the document.

use jQuery offset() to get the position relative to the document flow. Use position() for its x,y coordinates relative to the parent.
*/
var barPosition = $bar.position().left;
var fooOffset = $foo.offset().left;

//Scrolling the Whole Window
$('#bar').click(function() {
	var fooOffset = $('#foo').offset().top;
	$(document).scrollTop(fooOffset);
});

//Scrolling Inside an Element
// Note that the scrolling container must be positioned—using position: relative, position: absolute, or position:fixed—in order for this to work.
/*
<style>
#foo {
width:300px;
padding:10px;
height:20px;
border:1px solid black;
overflow:auto;
position:relative;
}
</style>
*/
var $foo = $('#foo');
$('#bar').click(function() {
	var lastParagraphPosition = $('#foo p:last').position();
	var scrollPosition = $foo.scrollTop() + lastParagraphPosition.top;
	jQuery('#foo').animate({scrollTop: scrollPosition}, 300);
});


if ( (!$el.hasClass("current")) && ($(":animated").length == 0 ) ) {		
	$allTabs.removeClass("current");
	$el.addClass("current");
}


//detect ie http://stackoverflow.com/questions/17907445/how-to-detect-ie11
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
var version = getInternetExplorerVersion(); 

//include ie11
function isIE() { return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); }


//Changes language -- ifc
	$('#en,#tc,#sc').click(function(e){
		e.preventDefault();
		var new_lang=this.id;
		window.location=window.location.href.replace(/\/(en|sc|tc)\//,'/'+new_lang+'/');
	});


//Tabs  http://ifc2010.dclook.com/en/mall/parking.html
	$('div.button a').each(function(i){
		$(this).click(function(e){
			e.preventDefault();
			$('div.button a').removeClass('active');
			$(this).addClass('active');
			$('div.left div.content').hide().eq(i).show();
		});
	});


//toolTip
	$(".menu a").hover(function() {
		$(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
	}, function() {
		$(this).next("em").animate({opacity: "hide", top: "-85"}, "fast");
	});

//toolTip
	$(".menu2 a").append("<em></em>");	
	$(".menu2 a").hover(function() {
		$(this).find("em").animate({opacity: "show", top: "-75"}, "slow");
		var hoverText = $(this).attr("title");
	    $(this).find("em").text(hoverText);
	}, function() {
		$(this).find("em").animate({opacity: "hide", top: "-85"}, "fast");
	});


//accordion
	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();
	//$(".accordion2 h3").eq(2).addClass("active");
	//$(".accordion2 p").eq(2).show();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});


//Search
$('#search').click(function(){
	if(this.value==this.defaultValue)
			this.value='';
}).blur(function(){
	if(this.value=='')
		this.value=this.defaultValue;
	});	


//Pulldown selectbox 
	$('#filter').click(function(e){
		$('#pulldown').slideToggle('fast');
	});

	$('#pulldown a').click(function(e){				
		e.preventDefault();
		$('#filter').html(this.innerHTML);
		$('#pulldown').hide();
		
		category=this.className;
		showCategory(this.className);
		
	});
	
	$('#pulldown').hover(function(){
		clearTimeout(timer);
	},function(){
		timer=setTimeout( function(){ $('#pulldown').slideUp() }, 500);
	});


//Window Center
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
}


//highlight menu
$('#header a').each(function(i){					
	if(window.location.href.indexOf(this.href)>-1){
	  $(this).addClass('current');
	}
})


//Area clickable				   
	$(".pane-list li").click(function(){
    	window.location=$(this).find("a").attr("href");
		  return false;
	});


//image mouseover change src
function setBtnOver() {
	var img = document.getElementsByTagName('img');
	
	for (var i=0; i<img.length; i++)
	{
		if (img[i].className.indexOf('btnOver') < 0)	continue;   //if this img need hover effect, add 'btnOver' class for it
		if (img[i].src.indexOf('_on') >= 0)			img[i].clicked = true;
		
		img[i].onmouseover = function()
		{
			if (this.clicked)	return;
			var ext = this.src.substring(this.src.length-4, this.src.length);
			this.src = this.src.replace(ext, '_on' + ext);
		}
		
		img[i].onmouseout = function()
		{
			if (this.clicked)	return;
			var ext = this.src.substring(this.src.length-4, this.src.length);
			this.src = this.src.replace('_on' + ext, ext);
		}
	}
}


//http://www.appelsiini.net/2007/6/sequentially-preloading-images
//use for preloading images for mouseovers
$(window).bind("load", function() {
    var preload = new Array();
    $(".hover").each(function() {
        s = $(this).attr("src").replace(/\.(.+)$/i, "_on.$1");
        preload.push(s)
    });
    var img = document.createElement('img');
    $(img).bind('load', function() {
        if(preload[0]) {
            this.src = preload.shift();
        }
    }).trigger('load');
});


    $(".hover").each(function() {
        if ($(this).attr("src").match(/_on\.(.+)$/i)) {
            $(this).removeClass("hover");
        }
    });
    $(".hover").hover(function() {
        s = $(this).attr("src").replace(/\.(.+)$/i, "_on.$1");
        $(this).attr("src", s);
    }, function() {
        s = $(this).attr("src").replace(/_on\.(.+)$/i, ".$1");
        $(this).attr("src", s);
    });


//Slide panel
	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); 
		return false;
	});		 


//FAQ
	$('#faq').find('dd').hide().end().find('dt').click(function() {
         var answer = $(this).next();
         if (answer.is(':visible')) {
             answer.slideUp();  
         } else {
             answer.slideDown(); 
         }
   });


//Get mouse position
$("#a1 li a").mouseover(function(e){
	 var c_width=$(this).offset().left;  //get the left position of the mouse	
	 var c_height=$(this).offset().top;
})


//Display Elements Sequentially with jQuery 
    // Wrapping, self invoking function prevents globals  
    (function() {  
       // Hide the elements initially  
       var lis = $('li').hide();  
      
       // When some anchor tag is clicked. (Being super generic here)  
       $('a').click(function() {  
          var i = 0;  
      
          // FadeIn each list item over 200 ms, and,  
          // when finished, recursively call displayImages.  
          // When eq(i) refers to an element that does not exist,  
          // jQuery will return an empty object, and not continue  
          // to fadeIn.  
          (function displayImages() {  
             lis.eq(i++).fadeIn(200, displayImages);  
          })();  
       });  
    })();  

//Display Elements randomly
$mapChild.each(function(){
	d = Math.random()*1000;
	$(this).delay(d).fadeIn(600);						
});	
					
					
//Use Cookie on First Load
	//if the cookie hasLaunch is not set, then show the modal window
	if (!readCookie('hasLaunch')) {
			//launch it
			launchWindow('#dialog1');        
			//then set the cookie, so next time the modal won't be displaying again.
			createCookie('hasLaunch', 1, 365);
	}
	
	
//Applying Sequential Effects- Automatic sequence
var $boxes = $('.box').hide(),
div = 0;
$('#animate').click(function () {
// //This code increments the index counter, and if the element doesn’t exist, it passes an empty array to jQuery. When the jQuery result set is empty, running an animation doesn’t do anything. Since the result is empty, jQuery doesn’t pass any DOM elements to the chained call, and therefore any callbacks given to the chained method won’t be called either.	
//arguments is a keyword in JavaScript referring to a local variable that all functions have access to. The arguments object is similar to any array but does not have any of the array methods (such as slice) or properties except length.
//arguments also contains a reference to the currently executing function in the arguments.callee property. This is useful for recursive(遞歸) function calls, which is exactly how we are using the property in this solution.
  $($boxes[div++] || []).fadeIn('slow', arguments.callee); 
});

var item = $('#nav li'),count =0;
(function() {
  $(item[count++]).animate({top: 40*count, opacity:0.8}, 500, arguments.callee);
})();


//sort()
/*返回一个元素已经进行了排序的 Array 对象。

arrayobj.sort(sortfunction)  ->
arrayObj 
必选项。任意 Array 对象。 
sortFunction 
可选项。是用来确定元素顺序的函数的名称。如果这个参数被省略，
那么元素将按照 ASCII 字符顺序进行升序排列。 

sort 方法将 Array 对象进行适当的排序；
在执行过程中并不会创建新的 Array 对象。

如果为 sortfunction 参数提供了一个函数，那么该函数必须返回下列值之一： 
负值，如果所传递的第一个参数比第二个参数小。 
零，如果两个参数相等。 
正值，如果第一个参数比第二个参数大。 
*/ 
tempList=[]; 
tempList.sort(sortByName);

function sortByName(a,b){
	var v1=a.name.toLowerCase(), v2=b.name.toLowerCase();
	if(v1 < v2)
		return -1;
	if(v1 > v2)
		return 1;
	return 0;
}
	
//How to order a <ul> element using jQuery
var items = $('.to_order li').get();
items.sort(function(a,b){
	var keyA = $(a).text();
	var keyB = $(b).text();
 
	if (keyA < keyB) return -1;
	if (keyA > keyB) return 1;
	return 0;
});
var ul = $('.to_order');
$.each(items, function(i, li){
	ul.append(li);
});


//Determining Whether Elements Are Currently Being Animated
$('#animate').click(function () {
  $('.box').filter(':not(:animated)').animate({ marginLeft: −10 }, speed, function () {
    $('#debug').append('<p>Starting animation.<p>');
  })
})

/*有时候点击很快时，会造成动画积累，这是就用到一个方法：*/
$(this).is(":animated")


//Disabling All Effects
$.fx.off = true;
$.fx.off = false;
	
	
if(location.href.indexOf('level1=hkia&level2=luggage')>-1){
	    window.location.href="../location/index.htm?level1=hkia"	
}


$(window).on('keydown', function(e){	
	if (e.keyCode==37)
		$('.flipbook').turn('previous');
	else if (e.keyCode==39)
		$('.flipbook').turn('next');		
});

//Check if and which key was pressed 
$(document).keypress(function(e){
	switch(e.which){
	// "ENTER"
	case 13:
	alert('enter pressed');
	break;

	// "s"
	case 115:
	alert('s pressed');
	break;

	(...)

	}
});
		

// gets image src, with cache buster
 var img = control.find('img:eq(' + start + ')').attr('src') + '?' + (new Date()).getTime();	
 
 
//ban right click
document.oncontextmenu   =  function(e){return false}


/* Changing the default easing effect - will affect the slideUp/slideDown methods: */
	$.easing.def = "easeInOutExpo";

	$('li.button a').click(function(e){ 
		var dropDown = $(this).parent().next();
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		e.preventDefault();
	})	

	
/*random to pick 5 items which do not repeat to show*/

	var $list 		= $('#rp_list ul');
	var lis 		= $list.children().length;
	load(200);
	
	function load(init){
		$list.find('li').hide().andSelf().find('div').css('margin-left',-init+'px');
		var loaded	= 0;
		//show 5 random posts from all the ones in the list. 
		//Make sure not to repeat
		while(loaded < 5){
			var r 		= Math.floor(Math.random()*elems_cnt);
			var $elem	= $list.find('li:nth-child('+ (r+1) +')'); 
			if($elem.is(':visible'))
				continue;
			else
				$elem.show();
			++loaded;
		}
		//animate them one by one
		var d = 200;
		$list.find('li:visible div').each(function(){
			$(this).stop().animate({
				'marginLeft':'-50px'
			},d += 100);
		});
	}	

	
/*Facebook share*/
//<a href="http://www.facebook.com/share.php?u=<url>" onclick="return fbs_click()" target="_blank" id="addFacebook">Add to Facebook</a>
function fbs_click() {u=location.href;t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}


/*Pop up window*/
function popup_login(theURL,winName) {  
	win_w = 980;
	win_h = 600;
	loc_x = (window.screen.width - win_w)/2;
	loc_y = (window.screen.height - win_h)/2;
	s = 1;
	r = 1;
	settings = 'height=' + win_h + ',width=' + win_w + ',top=' + loc_y + ',left=' + loc_x + ',scrollbars=' + s + ',resizable=' + r;
	window.open(theURL,winName,settings);
}


/*validate email format*/
function checkEmail(tbEmailID) {
    var email = document.getElementById(tbEmailID);
    var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        email.focus
        return false;
    }else
        return true;
}

function emailCheck(str) {
    var at = "@";
    var dot = ".";
    var lat = str.indexOf(at);
    var lstr = str.length;
    var ldot = str.indexOf(dot);

    // check if '@' is at the first position or  at last position or absent in given email 
    if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
        return false;
    }

    // check if '.' is at the first position or at last position or absent in given email
    if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr) {
        return false;
    }

    // check if '@' is used more than one times in given email
    if (str.indexOf(at, (lat + 1)) != -1) {
        return false;
    }

    // check for the position of '.'
    if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
        return false;
    }

    // check if '.' is present after two characters from location of '@'
    if (str.indexOf(dot, (lat + 2)) == -1) {
        return false;
    }

    // check for blank spaces in given email
    if (str.indexOf(" ") != -1) {
        return false;
    }

    return true;
}

function checkNumber(tbNumID) {
    var el = document.getElementById(tbNumID);
    var filter = /^\d+$/;
    if (!filter.test(el.value)) {
        el.focus
        return false;
    } else
        return true;
}

//validate phone number
function checkPhone(tbPhoneID) {
    var el = document.getElementById(tbPhoneID);
    var filter = /^[0-9\s\(\)\+\-]+$/;
    if (!filter.test(el.value)) {
        el.focus
        return false;
    } else
        return true;
}


function init(){
	if (isMobile)	addIpadCSS();
}


function addIpadCSS(){
	var cssLink = document.createElement('link');
	cssLink.setAttribute('rel', 'stylesheet');
	cssLink.setAttribute('type', 'text/css');
	cssLink.setAttribute('href', '/msc/' + lang + '/css/ipad.css');
	d.getElementsByTagName('head')[0].appendChild(cssLink);

	d.body.className += ' iPad';
}

function so_addcss(file_name){
	var head = document.getElementsByTagName('head')[0];
	var css = document.createElement('link');
	css.type = 'text/css';
	css.rel = 'stylesheet';
	css.href = file_name;
	head.appendChild (css);
}

function so_addjs(file_name){	
	var head = document.getElementsByTagName('head')[0];
	var js = document.createElement('script');
	js.type = 'text/javascript';
	js.src = file_name;
	head.appendChild (js);
}



//http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
//the best way to detect a 'touch screen' device using JavaScript?
function is_touch_device() {
  return !!('ontouchstart' in window) // works on most browsers 
      || !!('onmsgesturechange' in window); // works on ie10
};

// var is_touch_device = 'ontouchstart' in document.documentElement;


//Cal the total width
function setTotalWidth(child, parent) {  
	 var currentWidth, totalWidth = 0;  
	 $(child).each(function(){  
		  currentWidth = $(this).outerWidth(true);
          totalWidth += currentWidth;
	 });  
	 $(child).parent(parent).width(totalWidth);  
} 

$('#thumbnail-container .slide').children('li').each(function(){
	thumbwidth += $(this).outerWidth(true);
}).end().width(thumbwidth);


/*addZero*/
function addZero(num){
	if (num < 10)	num = '0' + num;
	return	num;
}


/*gen flash videos*/

//HTML code
/*						
<!--video 1-->
<div class="video" id="videoWrapper">
<div>
	<video width="280" height="240" poster="/en/images/videobox.jpg" controls="controls">
	<source src="/en/images/homeVideos/v1.mp4" type="video/mp4"></source>
	<!--
	<object width="280" height="240" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" data="/en/images/homeVideos/v1.mp4">
	<param name="src" value="/en/images/homeVideos/v1.mp4" />
	<param name="autoplay" value="true" />
	</object>
	-->
	</video>
</div>
</div>	
<!--end of video 1--> 	*/
						
function genSWFVideos()
{

	$('video').each(function(i){
							   
		var src=$('source').attr('src');
		//alert(src);
		$(this).parent().attr('id','videobox_'+i);

		var str = src.indexOf('/en/images/homeVideos/');
		var str1 = src.indexOf('.mp4');

		var videoPath = src.substring(str, str1) + '.mp4';
		var posterPath = '/en/images/homeVideos/' + levelArray[1] + '/video_' + (i + 1) + '.gif';

		var flashvars = {};
		flashvars.srcPath = videoPath;
		flashvars.imgPath = posterPath;
		flashvars.videoW = "290";
		flashvars.videoH = "240";
		flashvars.autoPlay = "true";
		flashvars.downloadPath = "";
		flashvars.controlBarAutoHide = "true";		


		var params = {};
		params.wmode = 'transparent';
		params.menu = "false";
		params.scale = "noScale";
		params.allowFullscreen = "false";
		params.allowScriptAccess = "always";
		params.bgcolor = "#FFFFFF";

		var attributes = {};
		attributes.id = "VideoPlayer";

		swfobject.embedSWF('/en/images/swf/flvplayer.swf', 'videobox_' + i, 290, 240, '10.0.0', '', flashvars, params, attributes);

	});
	
}

function genSWFVideos()
{
	
	if (checkIpad()) {
		
	} else {
	
	var videoWrapper = d.getElementById('videoWrapper');
	var container = setChildNodes(videoWrapper, 'DIV');
	var total = container.length;
	
	//Gen Flash Player
	for (var i=0; i<total; i++)
	{	
		var div = createDiv('videoSWF_' + i);
		var videoHTML = container[i].innerHTML;
		div.innerHTML = videoHTML;
		container[i].innerHTML = '';
		container[i].appendChild(div);
		
		
		if (!isIE)
		{
			var videoPath = container[i].getElementsByTagName('source')[0].src.replace('.mp4', '.flv');
			var posterPath = container[i].poster;
		}
		else
		{
			
			var str = videoHTML.indexOf('/azura/videos/');
			var str1 = videoHTML.indexOf('.mp4');
			var videoPath = videoHTML.substring(str, str1) + '.flv';
			//var posterPath = '/azura/images/' + levelArray[1] + '/video_' + (i + 1) + '.jpg';
			var posterPath = '/azura/images/video_1.jpg';
			//alert(videoPath);
		}
		
		//alert(videoPath);
		
		//var flashvars = {};
		//flashvars.swfPath = '/azura/swf/SkinOverAllNoCaption.swf';
		//flashvars.preview = posterPath;
		//flashvars.flv = videoPath;
		
		var flashvars = {
		downloadPath:"",
		autoLoop:"true",
		controlBarAutoHide:"true",		
		srcPath:videoPath,
		imgPath:posterPath,
		videoW:"970",
		videoH:"532",
		autoPlay:"true"	//default or no input:	true
		};
		
		var params = {};
		params.allowscriptaccess = 'always';
		params.allowfullscreen = 'true';
		params.wmode = 'transparent';
		params.allowScale = "true";
		//params.allowautoplay = 'true';
		
		var attributes = {};
		
		swfobject.embedSWF('/azura/swf/flvPlayer.swf', ('videoSWF_' + i), 970, 532, '10.0.0', '', flashvars, params, attributes);
	}
	}
	
}


/*shuffle function*/
$.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });
        
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        
        return $(shuffled);
    };
})(jQuery);

//use this shuffle function
$(".shuffleItem").shuffle();


//get current time
function setDate()
{
	var container = d.getElementById('date');
	var monthArray = {
		en:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],		
		tc:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		sc:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	};
	var dayArray = {
		en:['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		tc:['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		sc:['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	};
	
	var today = new Date();
	var year = today.getFullYear();
	var month = monthArray[lang][today.getMonth()].toUpperCase();
	var date = today.getDate();
	var day = dayArray[lang][today.getDay()].toUpperCase();
	
	if (lang == 'en'){
		container.innerHTML = date + ' ' + month + ' ' + year + ', ' + day;
	}
	else{
		container.innerHTML = year + '年' + month + date + '日' + ', ' + day;
	}
}


/*Change language*/
function changeLanguage(target)
{
	var array = new Array('en', 'tc', 'sc');
	var lang;
	var url = top.location.href;
	//if (top.location.hash)	url = top.location.href.replace(top.location.hash, '');
	
	for (var i=0; i<array.length; i++)
	{
		if (url.indexOf('/' + array[i] + '/') < 0)	continue;
		url = url.replace('/' + array[i] + '/', '/' + target + '/');
		break;
	}
	
	window.top.location.href = url;
}


function changeLanguage(target)
{
	var array = new Array("en", "tc", "sc");
	var nowL = checkURL(array);
	var va = [["/", "/"], ["=", ""]];
	var url = window.top.location.href;
	for (var item=0; item<va.length; item++)
	{
		if (url.indexOf((va[item][0] + nowL + va[item][1])) >= 0)
		{
			url = url.replace((va[item][0] + nowL + va[item][1]), (va[item][0] + target + va[item][1]));
			break;
		}
	}
	if (url.substring((url.length-1), url.length) == '#')	url = url.substring(0, (url.length-1))
	
	window.top.location.href = url;
}

/*check Language*/
var lang = checkLang();

function checkLang()
{
	var array = new Array('en', 'tc', 'sc');
	var lang;
	var url = top.location.href;
	if (top.location.hash)	url = top.location.href.replace(top.location.hash, '');
	
	for (var i=0; i<array.length; i++)
	{
		if (url.indexOf('/' + array[i] + '/') >= 0)
		{
			lang = array[i];
			break;
		}
	}
	
	return lang;
}


/*Preload the images*/
var cache = [];
for(var i = 1; i < photos.length + 1; i++) {
	 var cacheImage = $("<img />").attr("src", "images/" + photos[i-1]);
     cache.push(cacheImage);
}


// Create a new div and apply the background-image
$("<div />").css(
		{ 'left' : '-2000px', 'background-image' : "url(images/" + photo.image + ")" } ).addClass(photo.cssclass).prependTo("#pictureSlider");

	
//Highlight top Nav
	$('#top-nav #menu a').each(function(){

		var target = $(this).attr('href');
		var link = window.location.pathname;
		
		var currentFolder = link.substring(4,link.lastIndexOf('/'));
		
		if ((target.indexOf(currentFolder)>-1) && (currentFolder!='/') ){
			$(this).addClass('active');
		}
	});
	

//make an element move relatively with the animate method
var headclix = 0,
$("#head").click(function(){			  
   if (headclix < 5) {
	  $("#head").animate({left:"-=367px"},500);
	  headclix += 1;
   } else {
	  $("#head").animate({left:"0px"},500);
	  headclix = 0;
   }
});


//Scroll content
	$('ul.nav a').on('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		  //$container.stop().animate({"left": -($(id).position().left)}, animSpeed, easeType);
		}, 1000);
		event.preventDefault();
	});


/*Sample ajax*/
//Loads the #links element with the content from link.html matched in the seletor
$('#links').load('link.html #links li');


/*Twitter Example*/
// Run when the DOM has completed.
// i.e. don't hang on a script request
  var url = "http://www.twitter.com/statuses/user_timeline/rem.json?callback=?";
  $.ajax({
     dataType: "json",
     url: url,
     success: function (data) {
     $('#status').html(data[0].text); // update with my latest tweet
     }
  });
	

/* ajax form submit */
/* 
<form name="ajaxform" id="ajaxform" action="ajax-form-submit.php" method="POST">
    First Name: <input type="text" name="fname" value =""/> <br/>
    Last Name: <input type="text" name="lname" value ="" /> <br/>
    Email : <input type="text" name="email" value=""/> <br/>
</form>
*/
//1. 
//1) after through validation
$("#loginForm").submit(function(e){
	var username = $("#username").val();
			var password = $("#password").val();
	if (username == "") {
		$(".msgbox").text("please enter User ID.").show();
		$("#username").focus();
		return false;
	}
	if(password == "") {
		$(".msgbox").text("Please enter password.").show();
		$("#password").focus();
		return false;
	}

	$(".msgbox").text('Loading....').show();
	//check the username exists or not from ajax
	$.post("login_check.php",{ username:$('#username').val(),password:$('#password').val(),rand:Math.random() } ,function(data){
		if(data==1){ 
			 //window.location=self.location;
		 window.location='showroom_cate.php';
		}else{
			$(".msgbox").text('User ID or Password Incorrect.').show();	
		}
 });
	  e.preventDefault(); //Prevent Default action.  
});	

// 2) after validation plugin (http://jqueryvalidation.org/)
$("#loginForm").validate({
  submitHandler: function(form) {
    //ajax form plugin (http://www.malsup.com/jquery/form/#api)
		var options = { 
				target:        '#output1',   // target element(s) to be updated with server response 
				beforeSubmit:  showRequest,  // pre-submit callback 
				success:       showResponse  // post-submit callback 
	
				// other available options: 
				//url:       url         // override for form's 'action' attribute 
				//type:      type        // 'get' or 'post', override for form's 'method' attribute 
				//dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
				//clearForm: true        // clear all form fields after successful submit 
				//resetForm: true        // reset the form after successful submit 
	
				// $.ajax options can be used here too, for example: 
				//timeout:   3000 
		}; 
	
		// bind form using 'ajaxForm' 
		$('#myForm1').ajaxForm(options); 
  }
});

// pre-submit callback 
function showRequest(formData, jqForm, options) { 
    // formData is an array; here we use $.param to convert it to a string to display it 
    // but the form plugin does this for you automatically when it submits the data 
    var queryString = $.param(formData); 
 
    // jqForm is a jQuery object encapsulating the form element.  To access the 
    // DOM element for the form do this: 
    // var formElement = jqForm[0]; 
 
    alert('About to submit: \n\n' + queryString); 
 
    // here we could return false to prevent the form from being submitted; 
    // returning anything other than false will allow the form submit to continue 
    return true; 
} 
 
// post-submit callback 
function showResponse(responseText, statusText, xhr, $form)  { 
    // for normal html responses, the first argument to the success callback 
    // is the XMLHttpRequest object's responseText property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'xml' then the first argument to the success callback 
    // is the XMLHttpRequest object's responseXML property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'json' then the first argument to the success callback 
    // is the json data object returned by the server 
 
    alert('status: ' + statusText + '\n\nresponseText: \n' + responseText + 
        '\n\nThe output div should have already been updated with the responseText.'); 
} 



//2.http://hayageek.com/jquery-ajax-form-submit/

// 1).SUBMIT A SIMPLE HTML FORM
$("#ajaxform").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR) 
        {
            //data: return data from server
						$('#contact_form').html("<div id='message'></div>");
						$('#message').html("<h2>Contact Form Submitted!</h2>")
						.append("<p>We will be in touch soon.</p>")
						.hide()
						.fadeIn(1500, function() {
							$('#message').append("<img id='checkmark' src='images/check.png' />");
						});
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            //if fails      
        }
    });
    e.preventDefault(); //STOP default action
    e.unbind(); //unbind. to stop multiple form submit.     You need to unbind the event handler after each submit, e.unbind(), otherwise they stay in the queue and get resubmitted with each click, so your second click will have two event handlers which means two form submits, your third click will have three and so on.
});
 
$("#ajaxform").submit(); //Submit  the FORM

//2).SUBMIT MULTIPART/FORM-DATA FORM
/*HTML Form provides two types of encoding.
a).application/x-www-form-urlencoded
This is form Simple HTML forms.
b).multipart/form-data
This allows files to be send through POST method.*/


// 3. plugin: https://github.com/malsup/form/



var bTotal = parseFloat($(this).css('borderLeftWidth').replace("px", ""));

var s_top = parseInt($('#sidebar').offset().top);


this.numSlides = this.find('.slide').length;
this.current = Math.floor(Math.random() * this.numSlides) + 1;

switch(location.hash){
	case "#white":
	  $('#white').trigger('click');
	break;
	case "#romantic":
	case "#senjyuan":
	  $("#romantic").trigger('click');
	break;
	default:
	  return;
	break;
}
	
		
// Checks an href to see if it is a photo.
// There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
function isImage(url) {
	url = $.isFunction(url) ? url.call(element) : url;
	return settings.photo || url.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i);
}

if(isImage(nextSrc)){
	$('<img />').attr('src', nextSrc);
}

            
$('button').click(function(){
	
	var div = $('<div/>').css({
		position: 'absolute',
		top: 0,
		left: 0,
		background: 'red',
		width: 50,
		height: 50
	}).appendTo('body');
				  
});


/*toggleClass*/
//you can select the second-to-last div or, you can access the DOM element for the same:
$("div").eq(-2);
$("div").get(-2);
//For convenience, .first() and .last() are aliases of .eq(0) and .eq(-1).


//Add the "highlight" class to the clicked paragraph on every third click of that paragraph, remove it every first and second click.
var count = 0;
$("p").each(function() {
  var $thisParagraph = $(this);
  var count = 0;
  $thisParagraph.click(function() {
    count++;
    $thisParagraph.find("span").text('clicks: ' + count);
    $thisParagraph.toggleClass("highlight", count % 3 == 0);
  });
});

//Button clicks make p1 and p2 current (class red) in turn.
	$("button").click(function(){
			$("#p1,#p2").toggleClass("red green");
	});


/*1.4 Released: The 15 New Features you Must Know*/ 

//When you create a single element with the $ function, you can now pass in an object to add attributes and events at the same time:
//1.Passing Attributes to $(?
    $('<div/>', {  
      id: 'foo',  
      css: { fontWeight: 700, color: 'green' },  
      click: function(){  
         alert('Foo has been clicked!');  
      }  
    });  


//2. Everything "until"	
/*<ul>  
   <li>Apple</li>  
   <li>Banana</li>  
   <li>Grape</li>  
   <li>Strawberry</li>  
   <li>Pear</li>  
   <li>Peach</li>  
</ul> */ 
//You want to select all of items after "Apple", but you want to stop once you reach "Strawberry". It couldn be simpler:
$('ul li:contains(Apple)').nextUntil(':contains(Pear)');  
// Selects Banana, Grape, Strawberry  


//3. Binding Multiple Event Handlers
//Instead of chaining a bunch of event binding methods together, you can lump them all into the same call, like so:
$('#foo').on({  
   click: function() {  
            // do something  
       },  
   mouseover: function() {  
           // do something  
   },  
   mouseout: function() {  
           // do something  
   }  
})  

//4. Per-Property Easing
//$ includes two easing functions, swing (the default) and linear. For other ones youl need to download them separately!
//To specify an easing function for each property simply define the property as an array, with the first value being what you want to animate that property to, and the second being the easing function to use:
$('#foo').animate({  
     left: [500, 'swing'],  
     top: [200, 'easeOutBounce']  
}, 2000);  

  $('#bio h3').click(function() {
    $(this).next().animate( 
	    {'height':'toggle'}, 'slow', 'easeOutBounce'
    );
  });
  
//You can also define per-property easing functions in the optional options object as property name-value pairs in the "specialEasing" object:
$('#foo').animate({  
    left: 500,  
    top: 500  
}, {  
    duration: 2000,  
    specialEasing: {  
	top: 'easeOutBounce'  
    }  
});


//6. Controlling a Function Context

var app = {  
    config: {  
         clickMessage: 'Hi!'  
    },  
	clickHandler: function() {  
         alert(this.config.clickMessage);  
    }  
};  
// app.clickHandler(); // "Hi!" is alerted  

//Let try binding it as an event handler:
$('a').bind('click', app.clickHandler);  
//When we click an anchor it doesn appear to work (nothing is alerted). That because $ (and most sane event models) will, by default, set the context of the handler as the target element,- that is, the element that just been clicked will be accessible via "this". But we dont want that, we want "this" to be set to "app". Achieving this in $ 1.4 couldnt be simpler:
$('a').click(  
     $.proxy(app, 'clickHandler')  
);  
// This also works:
// $('a').click( $.proxy(app.clickHandler, app));

$( "button" ).on( "click", function () {
 
    setTimeout( $.proxy( function () {
        // "this" now refers to our element as we wanted
        $( this ).addClass( "active" );
    }, this), 500);
 
    // the last "this" we're passing tells $.proxy() that our DOM element
    // is the value we want "this" to refer to.
});



//7. Delay an Animation Queue

//delay() cannot be stopped by using .stop()
//The only way to cancel a running delay is using .clearQueue().
$('#foo')  
     .slideDown() // Slide down  
     .delay(500) // Do nothing for 500 ms  
     .fadeIn(); // Fade in 
	 
//How I can do smth like this?
//$('.foo').slideUp(300).delay(300).remove();	 
$('#foo').slideUp(300).delay(300).queue(function() {
        $(this).remove();
});

//I would love to see the ability to have a callback for delay. So we could do something like:
$.delay(1000, function(){
    //Do anything after 1 second
}); 

//for example this will not delay the no-arguments forms of .show() or .hide() which do not use the effects queue.
$('xxx').delay(2000).css('display','none');// not work
$('xxx').delay(2000).hide();//not work
$('xxx').delay(2000).hide(4000);//successful
$('xxx').delay(2000).fadeOut();//successful
$('xxx').delay(2000).fadeOut(4000); //successful

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

//8. Check if an Element Has Something
//$ 1.4 makes it easy to check if an element (or collection) ".has()" something. This is the programmatic equivalent to selector filter, ":has()".
$('li').has('ul').css('background-color', 'red');

//.hasClass(className), Returns true or false

//$.contains( container, contained ),  ":contains()"
$.contains(document.documentElement, document.body); // Returns true, <body> is within <html>  


//9. Unwrap Elements!
//We had the ".wrap()" method for a while now. $ 1.4 adds the ".unwrap()" method which does the complete opposite. 
//Essentially, this method simply removes the parent of any element.
/* 1. <div>  
   2.     <p>Foo</p>  
   3. </div>  */
//We can unwrap the paragraph element like so:
 $('p').unwrap();  
//The resulting DOM structure would be:
 <p>Foo</p>  


//10. Remove Elements Without Deleting Data
/*The new ".detach()" method allows you to remove elements from the DOM, much like the ".remove()" method. The key difference with this new method is that it doesn destroy the data held by $ on that element. This includes data added via ".data()" and any event handlers added via $ event system.

This can be useful when you need to remove an element from the DOM, but you know youl need to add it back at a later stage. Its event handlers and any other data will persist.*/
 var foo = $('#foo');  
 // Bind an important event handler  
 foo.click(function(){  
     alert('Foo!');  
 });  
 
 foo.detach(); // Remove it from the DOM  
  
 // ?do stuff    
 foo.appendTo('body'); // Add it back to the DOM   
 foo.click(); // alerts "Foo!"  


//12. DOM Manipulation Methods Accept Callbacks
//Most of the DOM manipulation methods now support passing a function as the sole argument (or second, in the case of ".css()" & ".attr()"). This function will be run on every element in the collection to determine what should be used as the real value for that method. 

//Within the callback function, youl have access to the current element in the collection via "this" and its index via the first argument.
 $('li').html(function(i){  
     return 'Index of this list item: ' + i;  
 });  

//Also, with some of the above methods youl also get a second argument. If youe calling a setter method (like ".html()" or ".attr('href)") youl have access to the current value. E.g.
 $('a').attr('href', function(i, currentHref){  
     return currentHref + '?foo=bar';  
 }); 
 
//As you can see, with the ".css()" and ".attr()" methods, you would pass the function as the second argument, since the first would be used to name the property you wish to change:
 $('li').css('color', function(i, currentCssColor){  
     return i % 2 ? 'red' : 'blue';  
 });  
   

//13. Determine the Type of Object
//First, there "isEmptyObject", this function returns a boolean indicating whether or not the the passed object is empty (devoid of properties ?direct and inherited). Second, there "isPlainObject", which will return a boolean indicating whether the passed object is a plain JavaScript object, that is, one created via "{}" or "new Object()".
 $.isEmptyObject({}); // true  
 $.isEmptyObject({foo:1}); // false  
   
 $.isPlainObject({}); // true  
 $.isPlainObject(window); // false  
 $.isPlainObject($()); // false  
 
 
 //14. Closest(? Enhancements
 $('li.item-a').closest('li').css('background-color', 'red');

//15. New Events! focusIn and focusOut
//As mentioned, to delegate the "focus" and "blur" events you must use these new events, called "focusin" and "focusout". These events allow you to take action when an element, or a descendant of an element, gains focus. 
 $('form')
    .focusin(function(){  
        $(this).addClass('focused');  
    }) 
    .focusout(function(){  
		$(this).removeClass('focused');  
    });  


function PopupCenter(pageURL, title,w,h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 

	
window.onsvgload = function(){ }


function randomMessage(id)
{
	var p = d.getElementById(id).getElementsByTagName('p');
	var num = Math.floor(p.length*Math.random());
	//alert(num + '  :  ' +  p.length);
	
	if (p[num])	p[num].style.display = 'block';
}

//选择一个随机元素
(function($){  
    var random = 0;  
 
    $.expr[':'].random = function(a, i, m, r) {  
        if (i == 0) {  
            random = Math.floor(Math.random() * r.length);  
        }  
        return i == random;  
    };  
 
})(jQuery);  
 
// This is how you use it:  
$('li:random').addClass('glow');
			 
					
					
keyCode: {
	ALT: 18,
	BACKSPACE: 8,
	CAPS_LOCK: 20,
	COMMA: 188,
	COMMAND: 91,
	COMMAND_LEFT: 91, // COMMAND
	COMMAND_RIGHT: 93,
	CONTROL: 17,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	INSERT: 45,
	LEFT: 37,
	MENU: 93, // COMMAND_RIGHT
	NUMPAD_ADD: 107,
	NUMPAD_DECIMAL: 110,
	NUMPAD_DIVIDE: 111,
	NUMPAD_ENTER: 108,
	NUMPAD_MULTIPLY: 106,
	NUMPAD_SUBTRACT: 109,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SHIFT: 16,
	SPACE: 32,
	TAB: 9,
	UP: 38,
	WINDOWS: 91 // COMMAND
}
	

//Here is an example of finding the position within the particular element rather than the page:
   $("#special").click(function(e){
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
      $('#status2').html(x +', '+ y);
   })
   

$('a[rel*=external]').attr('target','_blank');



function slideShow() {
  var current = $('#photos .show');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 3000);
}


// how to add a box when hover a object to show sth accordingly.
//.offset() uses the entire window, whereas .position() uses the parent 
//Also note that .position(), as with .offset(), does not work on hidden elements. 
1.
$(function(){
       $(".prolist ul li").each(function(i){
			  var position = $(this).position();
			  var li_left = position.left;
			  var li_top = position.top;
			  var img_width = $(this).find("img").width();
			  var img_height = $(this).find("img").height();
				var txt = $(this).find('span').text();
        var spanHtml = '<span style="position: absolute; top: '+li_top+'px; left: '+li_left+'px; width:'+img_width+'px; height: '+img_height+'px; cursor: pointer;" class="opacity0">'+txt+'</span>';
			  $(spanHtml).hover(function(){
						$(this).addClass("opacity1");
				    },function(){
						$(this).removeClass("opacity1");
				 }).appendTo( $(this).find("a") );
		 })
})

2.
 $(function(){
	  var x = 10;
	  var y = 20;
		
		$('.toolTip').bind({  
		
      mouseover: function(e) {  
         var title = this.title;
			   var url = this.href;
			   var toolTip = $('<div id="toolTip"><img src='+url+'/><br>'+title+'</div>');
				 toolTip.appendTo('body');
		     $('#toolTip').css({
					   'left': (e.pageX+x) + 'px',
						 'top':  (e.PageY+y) + 'px'
					 }).show();    
      },  
      mouseout: function() {  
           $('#toolTip').remove();      
      } ,
	  mousemove: function(e) {  
       $("#toolTip").css({
				"top": (e.pageY+y) + "px",
				"left":  (e.pageX+x) + "px"
			})
      }
})


//How to see if a set (example : 10 images) of images are loaded
var totalimages  = 10;
var loadedimages = 0;
$("<img/>").load(function() {
	++loadedimages;
	if(loadedimages == totalimages){
		//All 10 images are loaded
	}
});


/*创建一个 <input> 元素必须同时设定 type 属性。因为微软规定 <input> 元素的 type 只能写一次。*/
// 在 IE 中无效:
$("<input>").attr("type", "checkbox");
// 在 IE 中有效:
$("<input type='checkbox'>");


//directly to use 'this'
$('#content a').each(function () {
    $('<div class="fader" />').css('opacity', 0).prependTo(this);
  }).hover(function () {
    $('img', this).stop().animate({
      marginLeft : 5
    }, 250);
    
  }, function () {
    $('img', this).stop().animate({
      marginLeft : 10
    }, 250);
  }).find('img').css('marginLeft', 10);
  

/**
* user hovers one image:
* create a absolute div with the same image inside,
* and append it to the body
*/
var highlight_timeout;

$('img.ih_image').bind('mouseenter',function () {
		var $thumb = $(this);
		
		var $clone = $('<div />',{
			'id'		: 'ih_clone',
			'className': 'ih_image_clone_wrap',
			'html'     	: '<img src="'+$thumb.attr('src')+'" alt="'+$thumb.attr('alt')+'"/><span class="ih_zoom"></span>',
			'style'		: 'top:'+$thumb.offset().top+'px;left:'+$thumb.offset().left+'px;'
		});
		
		var highlight = function (){
			$('#ih_overlay').show();
			$('BODY').append($clone);
		}
		//show it after some time ... 
		highlight_timeout = setTimeout(highlight,700);
						

//Fading Background Color
  $(".boxes").hover(function() {
                $(this).stop().animate({ backgroundColor: "#a7bf51"}, 800);
                },function() {
                $(this).stop().animate({ backgroundColor: "#ffffff" }, 800);
                });

				
//use || and &&
if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {  }	


//random
function getRandom(num){
	var my_num = Math.floor(Math.random()*num);
	return my_num;
}
	


//The order and timing of when you make your jQuery calls is important.
$(document).ready(function() {
	$(".guess_box").click( function() {
		$(".guess_box p").remove(); // remove the lat discount message before generating a new one
		var discount = Math.floor((Math.random()*5) + 5);
		var discount_msg = "<p>Your Discount is "+discount+"%</p>";
		$(this).append(discount_msg);
	});
});		


// custom css expression for a case-insensitive contains()
  jQuery.expr[':'].Contains = function(a,i,m){
      return test = (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
  $matches = $(list).find('a:Contains(' + filter + ')').parent(); 	
  
  
$('.item').click(function(e){
	var $this = $(this);
	var index= $this.index();
})


var $actionsBox = $('#actionsBox');
/*
calculate the current distance from the window's top until the element
this value is going to be used further, to move the box after we scroll
*/
$actionsBox.data('distanceTop',parseFloat($actionsBox.css('top'),10) - $(document).scrollTop());
//use the data
$actionsBox.data('distanceTop')) + 'px',



function IsNumeric(n) {
    return !isNaN(n);
} 


//Preload imgs
(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)
//To use the preloading make a call like:
jQuery.preLoadImages("image1.gif", "/path/to/image2.png");


// create an image object
objImage = new Image();
// set what happens once the image has loaded 
objImage.onLoad=imagesLoaded();   
// preload the image file
objImage.src='images/image1n.gif';

// function invoked on image load
function imagesLoaded()
{    
   document.location.href='index2.html';
}


// preload first on window.load
$(window).bind('load', function() {
   var preload = new Array();
   $(".over").each(function() {
	   s = $(this).attr("src").replace(/\.(.+)$/i, "-over.$1");
	   preload.push(s)
   });
   var img = document.createElement('img');
   $(img).bind('load', function() {
	   if(preload[0]) {
		   this.src = preload.shift();
	   }
   }).trigger('load');
});

$(function() {
  $("img.over").hover(function() {
	$(this).attr("src", $(this).attr("src").split(".").join("-over."));
  }, function() {
	$(this).attr("src", $(this).attr("src").split("-over.").join("."));
  });
});
	
	
jQuery.fn.onImagesLoaded = function(_cb) {
	return this.each(function() {
	
	var $imgs = (this.tagName.toLowerCase()==='img')?$(this):$('img',this),
	_cont = this,
	i = 0,
	_done=function() {
	if( typeof _cb === 'function' ) _cb(_cont);
	};
	
	if( $imgs.length ) {
	$imgs.each(function() {
	var _img = this,
	_checki=function(e) {
	if((_img.complete) || (_img.readyState=='complete'&&e.type=='readystatechange') )
	{
	if( ++i===$imgs.length ) _done();
	}
	else if( _img.readyState === undefined ) // dont for IE
	{
	$(_img).attr('src',$(_img).attr('src')); // re-fire load event
	}
	}; // _checki \\
	
	$(_img).bind('load readystatechange', function(e){_checki(e);});
	_checki({type:'readystatechange'}); // bind to 'load' event...
	});
	} else _done();
	});
};


jQuery(function($){ // on page ready

	$('div#pix').onImagesLoaded(function(_this){
	$(_this).fadeIn(10000);
	});
	
	$('img#single').onImagesLoaded(function(_img){
	$(_img).fadeIn(3000);
	});

}); // end on ready
  
  			
//自动替换丢失的图片
// Safe Snippet
$("img").error(function () {
    $(this).unbind("error").attr("src", "missing_image.gif");
});
// Persistent Snipper
$("img").error(function () {
    $(this).attr("src", "missing_image.gif");
});


//Lets add the keyboard controls now
$(document).keydown(function(e){
	var key = e.which;
	//We will add another clause to prevent reverse gear
	if(key == "37" && d != "right") d = "left";
	else if(key == "38" && d != "down") d = "up";
	else if(key == "39" && d != "left") d = "right";
	else if(key == "40" && d != "up") d = "down";
	//The snake is now keyboard controllable
})		

	
/* Responsive jQuery Slideshow */	
/*HTML:

<div id="slideshow">
  <img src="1.jpg" />
  <img src="2.jpg" />
  <img src="3.jpg" />
</div>

CSS:

#slideshow {
    width: 100%;
    position: relative;
    }

img {
    top: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: auto;
    position: absolute;
    }*/

$(function () {
	// Simplest jQuery slideshow by Jonathan Snook
	$('#slideshow img:gt(0)').hide();
	setInterval(function () {
	$('#slideshow :first-child').fadeOut(1000)
	.next('img').fadeIn(1000).end().appendTo('#slideshow');
	}, 4000);
});
	
/*Create Equal Height Columns*/
function setEqualHeight(columns) {  
     var tallestcolumn = 0;  
     columns.each(function(){  
          currentHeight = $(this).height();  
          if(currentHeight > tallestcolumn){  
               tallestcolumn  = currentHeight;  
          }  
     });  
     columns.height(tallestcolumn);  
}  
// setEqualHeight($(".container  > div"));  

//Calculate width of all ul's
(function($) { 
	jQuery.fn.calcSubWidth = function() {
		rowWidth = 0;
		//Calculate row
		$(this).find("ul").each(function() {					
			rowWidth += $(this).width(); 
		});	
	};
})(jQuery); 
		
  

/*
$.ajax()函数依赖服务器提供的信息来处理返回的数据。如果服务器报告说返回的数据是XML，那么返回的结果就可以用普通的XML方法或者jQuery的选择器来遍历.如果见得到其他类型，比如HTML，则数据就以文本形式来对待。
***如果指定为json类型，则会把获取到的数据作为一个JavaScript对象来解析，并且把构建好的对象作为结果返回**。为了实现这个目的，他首先尝试使用JSON.parse()。如果浏览器不支持，则使用一个函数来构建。JSON数据是一种能很方便通过JavaScript解析的结构化数据。如果获取的数据文件存放在远程服务器上（域名不同，也就是跨域获取数据），则需要使用jsonp类型。使用这种类型的话，会创建一个查询字符串参数 callback=? ，这个参数会加在请求的URL后面。服务器端应当在JSON数据前加上回调函数名，以便完成一个有效的JSONP请求。如果要指定回调函数的参数名来取代默认的callback，可以通过设置$.ajax()的jsonp参数。
*/
/* From jquery
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters: {

	// Convert anything to text
	"* text": String,

	// Text to html (true = no transformation)
	"text html": true,

	// Evaluate text as a json expression
	"text json": jQuery.parseJSON,

	// Parse text as xml
	"text xml": jQuery.parseXML
},
*/
/* Reading XML with jQuery */
$.ajax({
	type: "GET",
	url: "sites.xml",
	dataType: "xml",
	success: function(xml) {
		$(xml).find('site').each(function(){
			var id = $(this).attr('id');
			var title = $(this).find('title').text();
			var url = $(this).find('url').text();
			$('<div class="items" id="link_'+id+'"></div>').html('<a href="'+url+'">'+title+'</a>').appendTo('#page-wrap');
			$(this).find('desc').each(function(){
				var brief = $(this).find('brief').text();
				var long = $(this).find('long').text();
				$('<div class="brief"></div>').html(brief).appendTo('#link_'+id);
				$('<div class="long"></div>').html(long).appendTo('#link_'+id);
			});
		});
	}
});


/* Reading json with jQuery from php/js */
$("#loaduserdata").click(function(){
	$("#userdata tbody").html("");
	$.getJSON(
		"jsondata.php",
		function(data){
			$.each(data.userdata, function(i,user){
				var tblRow =
					"<tr>"
					+"<td>"+user.first+"</td>"
					+"<td>"+user.last+"</td>"
					+"</tr>"
				$(tblRow).appendTo("#userdata tbody");
			});
		}
	);
});

$.getJSON("data.js", function(data){
		$.each(data.posts, function(i,data){
			var div_data ="<div class='box'><a href='"+data.url+"'>"+data.title+"</a></div>";				
			$(div_data).appendTo("#9lessonsLinks");
		});
	}
);
		
//jsondata.php
<?php
	$json = '{
		"userdata": [
			{
				"first":"Ciaran",
				"last":"Huber"
			},
			{
				"first":"Lester",
				"last":"Watkins"
			}		
		]
	}';
	echo $json;
?>

//here are several ways for passing data between a webserver and a browser with Ajax. You could pass data using XML data structures or using JSON java structures. XML is a way for representing data with a complex structure. At the time of this writing browser support for XML is still poor: there is no standard way for parsing/rendering XML data within javascript that is supported by the most used browsers. Therefore many websites use JSON to pass data between the browsers and the server. Fortunately JSON is well supported within javascript and server side scripting languages such as PHP. It has more or less the same capabilities for representing data with a complex structure.
/*xml convern to json
<data>
  <sales>
    <item>
      <firstname>John</firstname>
      <lastname>Brown</lastname>
    </item>
    <item>
      <firstname>Marc</firstname>
      <lastname>Johnson</lastname>
    </item>
  </sales>
</data>

var data = 
    { 
      "sales": [ 
         { "firstname" : "John", "lastname" : "Brown" },
         { "firstname" : "Marc", "lastname" : "Johnson" }
      ] 
    }*/


/*AJAX requests are subject to the same origin policy, which means you may only send requests to the same domain. Fortunately, $.ajax() has a property named JSONP (i.e. JSON with padding), which allows a page to request data from a server on a different domain. It works by wrapping the target data in a JavaScript callback function. Note that the response is not parsed as JSON and may be any JavaScript expression.*/
var demobox = $("#" + id);
demobox.html("<img id=\"loading\" src=\"/wp-content/uploads/2011/11/loading.gif\" />");
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
    tags: "jquery",
    tagmode: "any",
    format: "json"
}, function (data) {
    demobox.empty();
    $.each(data.items, function (i, item) {
        demobox.append("<a href=\"" + item.link + "\" target=\"_blank\"><img style=\"max-width:150px;\" src=\"" + item.media.m + "\" alt=\"" + item.title + "\" title=\"" + item.title + "\" />");
        if (i == 10) {
            return false;
        }
    });
    $("#" + id + " #loading").hide();
});


$.getJSON('http://twitter.com/status/user_timeline/chriscoyier.json?count=10&callback=?', function(data){
	$.each(data, function(index, item){
	   $('#twitter').append('<div class="tweet"><p>' + item.text.linkify() + '</p><p><strong>' + relative_time(item.created_at) + '</strong></p></div>');
});

//How to parse JSON in JavaScript 接受一个JSON字符串，返回解析后的对象。
var string = '{"result":true,"count":1}', //->String
    obj = $.parseJSON(string)   //jQuery.parseJSON(json) -> Takes a well-formed JSON string and returns the resulting JavaScript object.
alert(obj.count);

var j ='[{"id":"1","name":"test1"},{"id":"2","name":"test2"},{"id":"3","name":"test3"}]';
var json = $.parseJSON(j);
$(json).each(function(i,val){
    $.each(val,function(k,v){
          console.log(k+" : "+ v);     
});
});


//click load ajax
	$('.ajax-drop .year .option a').click(function(e){
		e.preventDefault();
		$('.ajax-drop .year .btn a').text($(this).text());
		$('.disable').removeClass('disable');
		$.ajax({
			url: site_path+'/'+site_lang+'/loving_homes/get_year_content',
			type: 'POST',
			data: {id: $(this).attr('href').substr(1)},
			dataType: 'json'
		}).done(function(result){
			var target = $('.dropdown-container.sub-list .option ul');
			target.empty();
			$.each(result, function(index, value) {
				var dummy = '<li><a href="'+value.url+'" target="'+value.target+'">'+value.title+'</a></li>'
				target.append(dummy);
			})
			$('.dropdown-container.year .option').hide();
			$('.dropdown-container.sub-list .option').show();
		})
	})
	
	
function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);
  
  var r = '';
  if (delta < 60) {
	r = 'a minute ago';
  } else if(delta < 120) {
	r = 'couple of minutes ago';
  } else if(delta < (45*60)) {
	r = (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (90*60)) {
	r = 'an hour ago';
  } else if(delta < (24*60*60)) {
	r = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
	r = '1 day ago';
  } else {
	r = (parseInt(delta / 86400)).toString() + ' days ago';
  }
  
  return r;
}

String.prototype.linkify = function() {
	return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(m) {
		return m.link(m);
	});
};

//把JS里面的Date规范输出为“YYYY-MM-DD HH:mm:SS”的字符串
//把下面的代码复制到你的JS里，Date对象就可以直接调用toCommonCase():
/*
日期函数列表:
dateObj.getTime()得到时间,
dateObj.getYear()得到年 份
,dateObj.getFullYear()得到四位的年
份,dateObj.getMonth()得到月份,
dateObj.getDate()得到日,
dateObj.getDay()得到日期几,
dateObj.getHours()得到小时,
dateObj.getMinutes()得到 分,
dateObj.getSeconds()得到秒,
dateObj.setTime(value)设置时 间,dateObj.setYear(val)设置年
*/
Date.prototype.toCommonCase=function(){
    var xYear=this.getYear();
    xYear=xYear+1900;
    
    var xMonth=this.getMonth()+1;
    if(xMonth<10){
        xMonth="0"+xMonth;
    }
    var xDay=this.getDate();
    if(xDay<10){
        xDay="0"+xDay;
    }
    var xHours=this.getHours();
    if(xHours<10){
        xHours="0"+xHours;
    }
    var xMinutes=this.getMinutes();
    if(xMinutes<10){
        xMinutes="0"+xMinutes;
    }
    var xSeconds=this.getSeconds();
    if(xSeconds<10){
        xSeconds="0"+xSeconds;
    }
    return xYear+"-"+xMonth+"-"+xDay+" "+xHours+":"+xMinutes+":"+xSeconds;
}

//always popup in the same window
<a href="javascript:var popup=window.open('privacy.html','popup','height=600, resizable=1, scrollbars=1, width=500','true'); popup.focus()" />		
		
/*JSONP isn't exactly AJAX — rather than using the browser's XHR functionality, it actually works by inserting a script tag into the page that contains the requested data, "padded" with a function wrapper. Nevertheless, jQuery lets you make a JSONP request with $.ajax() by specifying 'jsonp' as the dataType in the configuration object. */
$.ajax({
  url: '/data/search.jsonp',
  data: { q: 'a' },
  dataType: 'jsonp',
  success: function( resp ) {
    $( '#target' ).html( 'Results: ' + resp.results.length );
  }
});


/*You can also use the $.getJSON() convenience method to make a JSONP request; if the URL includes callback=? or similar, then jQuery will treat it as a JSONP request. */
$.getJSON( '/data/search.jsonp?q=a&callback=?',
  function( resp ) {
    $( '#target' ).html( 'Results: ' + resp.results.length );
  }
);


/*Sending data & working with forms

We can send data with our request by setting the data property on our configuration object, or by passing an object as the second argument to one of the convenience methods.

For a GET request, this data will be appended to the URL as a query string; for a POST request, it will be sent as form data. jQuery provides the helpful .serialize() method for taking form input and converting it to a query string format (field1name=field1value&field2name=field2value...)*/
$( 'form' ).submit(function( event ) {
  event.preventDefault();
  var form = $( this );

  $.ajax({
    type: 'POST',
    url: '/data/save',
    data: form.serialize(),
    dataType: 'json',
    success: function( resp ) {
      console.log( resp );
    }
  });
});


Some examples of XML and its equivalent JSON as given below:
XML: <xx yy='nn'><mm>zzz</mm></xx>
JSON: { "xx": {"yy":"nn","mm":"zzz"}}

XML: <xx yy='nn'><mm>zzz</mm><mm>aaa</mm></xx>
JSON: { "xx": {"yy":"nn", "mm":["zzz","aaa" ] } }

XML: <xx><mm>zzz</mm>some text</xx>
JSON: { "xx": {"mm":"zzz", "value":"some text"} }

XML: <xx value='yyy'>some text<mm>zzz</mm>more text</xx>
JSON: { "xx": {"mm":"zzz", "value":[ "yyy", "some text", "more text" ] } }



/*Now the problem with this, is any other code could also declare a function call “myFunction” and this would overwrite yours! Not good. So what’s the solution? You guessed it, namespacing!
Here is how you would create a basic namespace to protect your function:*/
;MYNAMESPACE = { 
    myFunction: function(){
        console.log('running MYNAMESPACE.myFunction...');
    }     
}
MYNAMESPACE.myFunction(); //function call
//Now, nothing can overwrite your function and everything is contained within a namespace called “MYNAMESPACE”. To call your function you simply include the namespace before the function.
	


/* preload the imgs */
(function($) {
  var cache = [];
  //参数是图片相对于当前页面的路径
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)

//call the caceh function
$.preLoadImages("gbin1logo.png", "/path/gbin1.png");




/* 如何判断ipad或者iphone是否为横屏或者竖屏 - portrait或者landscape */
function orient() {
    alert('gete');
    if (window.orientation == 0 || window.orientation == 180) {
        $("body").attr("class", "portrait");
        orientation = 'portrait';
        return false;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
        $("body").attr("class", "landscape");
        orientation = 'landscape';

        return false;
    }
}

/* 在页面加载的时候调用 */
$(function(){
    orient();
});

/* 在用户变化屏幕显示方向的时候调用*/
$(window).bind( 'orientationchange', function(e){
    orient();
});



Longhand:
"myString".charAt(0);
Shorthand:	
"myString"[0]; // Returns 'm'



// Grayscale image using HTML5 canvas method
function grayscale(src){
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgObj = new Image();
    imgObj.src = src;
    canvas.width = imgObj.width;
    canvas.height = imgObj.height;
    ctx.drawImage(imgObj, 0, 0);
    var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg;
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
        }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}
 
//Make all images on page Greyscale!
$('img').each(function(){
    var el = $(this);
    el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function()
    {
        var el = $(this);
        el.parent().css({"width":this.width,"height":this.height});
        el.dequeue();
    });
    this.src = grayscale(this.src);
});



//js ipad zoom control techniques
/*Just jotting down some techniques for zoom control on the ipad using JavaScript and viewport meta tags. Remember for iPad, device-width is always 768px irrespective of the orientation
<meta name="viewport" content="maximum-scale=1.6, minimum-scale=0.25" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="width=device-width" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
This one is optimised for iPad (worked best):
<meta name="viewport" content="maximum-scale=1.6, minimum-scale=0.25" />
Get the current viewport scale using this script:http://menacingcloud.com/source/js/FlameViewportScale.js*/
$.getScript('http://menacingcloud.com/source/js/FlameViewportScale.js', function()
{
    var viewScale = new FlameViewportScale();
    var currentScale = viewScale.getScale();
    viewScale.update(function() { alert('Scale measure complete...'+currentScale); });
});
//This code disables the user to rescale the viewport on page using pinch technique:
$('meta[name=viewport]').attr('content','width=1024, user-scalable=no');
//Or using plain JavaScript:
viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute('content', 'width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;');



//Use jQuery to Clear iPad Viewport Cookie
//Initial viewport meta tag setting
$('meta[name=viewport]').attr('content','width=device-width, user-scalable=yes, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0');
//Note that gesturestart is the name of the event which captures the iPad screen resize zoom.
$(document).live('gesturestart', function()
{
    $('meta[name=viewport]').attr('content','width=device-width, user-scalable=yes, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0');
});

//Other Methods that may work. You can also use CSS properties as such:
/*
 body{
  -webkit-text-size-adjust:none;
  -webkit-transform: scale(1.1);
}*/



//jQuery Add Drag/Touch Support for iPad
//iPAD Support
$.fn.addTouch = function(){
  this.each(function(i,el){
    $(el).bind('touchstart touchmove touchend touchcancel',function(){
      //we pass the original event object because the jQuery event
      //object is normalized to w3c specs and does not provide the TouchList
      handleTouch(event);
    });
  });
 
  var handleTouch = function(event)
  {
    var touches = event.changedTouches,
            first = touches[0],
            type = '';
 
    switch(event.type)
    {
      case 'touchstart':
        type = 'mousedown';
        break;
 
      case 'touchmove':
        type = 'mousemove';
        event.preventDefault();
        break;
 
      case 'touchend':
        type = 'mouseup';
        break;
 
      default:
        return;
    }
 
    var simulatedEvent = document.createEvent('MouseEvent');
    simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
    first.target.dispatchEvent(simulatedEvent);
  };
};



/* $.each */
var countryArray = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cote d'Ivoire", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faeroe Islands", "Falkland Islands", "Fiji", "Finland", "Former Yugoslav Republic of Macedonia", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Marianas", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Sao Tome and Principe", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Bahamas", "The Gambia", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis and Futuna", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
  var len = countryArray.length;
  $.each(countryArray, function (index, value) {
	  demobox.append(index + 1 + ". " + value);
	  if (!(index == len - 1)) {
		  demobox.append(", ");
	  } else {
		  demobox.append(".");
	  }
  });


//iterate or loop over each element in an array or attribute of an object.
var months = [ 'January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October',
'November', 'December'];
$.each(months, function(index, value) {
$('#months').append('<li>' + value + '</li>');
});

var days = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3,
Thursday: 4, Friday: 5, Saturday: 6 };
$.each(days, function(key, value) {
$('#days').append('<li>' + key + ' (' + value + ')</li>');
});

//When the callback function defined by the developer is executed, the this variable is set to the value of the element currently being iterated. Thus, the previous recipe could be rewritten as follows:
$.each(months, function() {
$('#months').append('<li>' + this + '</li>');
});

$.each(days, function(key) {
$('#days').append('<li>' + key + ' (' + this + ')</li>');
});

/*
You’re calling $.each(array,fn) or $(selector).each(fn) to iterate over thousands of
items in your code, and you suspect that all those function calls may be adding to your
load time:*/
$.each( array, function() {
// do stuff with this
});
//or:
$('.lotsOfElements').each( function() {
// do stuff with this or $(this)
});

/*For a more general-purpose loop that works with any array, there is always the classic
loop that you’ll see in many places:*/
for( var i = 0; i < array.length; i++ ) {
   var item = array[i];
   // do stuff with item
}

/*But you can improve that loop in three ways:
• Cache the array length.
• Use ++i, which is faster than i++ in some browsers.
• Combine the test and increment of the loop variable to remove one name lookup.
The result is as follows:*/
for( var i = −1, n = array.length; ++i < n; ) {
   var item = array[i];
   // do stuff with item
}


//filter and remove elements in an array.
months = $.grep(months, function(value, i) {
return ( value.indexOf('J') == 0 );
});
$('#months').html( '<li>' + months.join('</li><li>') + '</li>' );

//loop over each element in an array and modify its value.
months = $.map(months, function(value, i) {
return value.substr(0, 3);
});
$('#months').html( '<li>' + months.join('</li><li>') + '</li>' );

//have two arrays that you need to combine or concatenate.
var horseBreeds = ['Quarter Horse', 'Thoroughbred', 'Arabian'];
var draftBreeds = ['Belgian', 'Percheron'];
var breeds = $.merge( horseBreeds, draftBreeds );
$('#horses').html( '<li>' + breeds.join('</li><li>') + '</li>' );

//have two jQuery DOM collections that need to have duplicate elements removed:
var animals = $('li.animals').get();  //Without a parameter, .get() returns all of the elements:
var horses = $('li.horses').get();
var tmp = $.merge( animals, horses );
tmp = $.unique( tmp );
$('#animals').append( $(tmp).clone() );


//add class to the element to trigger different event
$('.words-container li').addClass('notClick').hide();
$('.words-desp div').hide();

$('ul.listed-words li').each(function(i){
	$(this).mouseenter(function(){
		//$(this).addClass("current").siblings().removeClass("current");  
		$('ul.words-container li.notClick').hide();
		$('ul.words-container li').eq(i).show();
	}).click(function(e){
		e.preventDefault();
		$('ul.words-container li').eq(i).removeClass('notClick').show();
		$('.words-desp div').hide().eq(i).show();			
	})
})


/*this*/
//setTimeout() works like a direct function call: this is the window object. So when the code calls $(this).removeClass(), it’s actually trying to remove the class from the window object!
$('.clicky').click( function() {
	$(this).addClass('clicked');
	setTimeout( function() {
	   $(this).removeClass('clicked'); //it doesn’t seem to do anything
	}, 1000 );
});

/*
Why does copying this or $(this) into a local variable fix this? (Pun intended.) JavaScript creates a closure for the parameters and local variables of a function.

Closures may seem mysterious at first, but they really boil down to three simple rules:
• You can nest JavaScript functions one inside another, with multiple levels of nesting.
• A function can read and write not only its own parameters and local variables but also those of any functions it’s nested in.
• The previous rule always works, even if the outer function has already returned and the inner function is called later (e.g., an event handler or setTimeout() callback).
*/
$('.clicky').click( function() {
	var $element = $(this);
	$element.addClass('clicked');
	setTimeout( function() {
	  $element.removeClass('clicked'); //works
	}, 1000 );
});



/* Hide menu onclick anywhere for iDevides */
$('#container').mouseleave(function(){
	$('.submenu-container').hide();
})	


/* creat an array */
var coord=[ [22.283780,114.153944], [22.273780,114.153944], [22.273780,114.153944] ];

var keywords=[];
keywords['en']='Keywords';
keywords['tc']='關鍵字';
keywords['sc']='关键字';


/* creat an array and object */
var eventArray = new Array();
eventArray = [
	{startDate:[23,2,2012], endDate:[26,29,2012], name:" Professional Image Management Workshop (for Ladies) ", link:"", target:"_self"},
	{startDate:[25,2,2012], endDate:[27,2,2012], name:" Interviewing Magic : Crucial Skills to achieve Success ", link:"", target:"_self"},
	{startDate:[25,2,2012], endDate:[29,2,2012], name:" Presentations Skills : Sell your presentation as well as yourself ", link:"", target:"_self"}
];


// no need to add class to li when hover in js, use css
//.menu li:hover a, .menu li a:hover { background-position: left bottom; }
$('.menu li').hover(function() {
   //$(this).children('a').addClass('active');
   $('.submenu', this).stop(true, true).fadeIn();
}, function() {
   //$(this).children('a').removeClass('active');
   $('.submenu', this).stop(true,true).hide();
});



/*get the hash of the url*/
if(window.location.hash) {
  // Fragment exists
} else {
  // Fragment doesn't exist
}

var hash = this.href;
hash = hash.replace(/^.*#/, '');
//or
var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character



/* hover change img src*/
$('#goBtn').hover(function(){
	this.src=this.src.replace('.png','_over.png');
},function(){
	this.src=this.src.replace('_over','');
});


/*scroll to*/
//go to top
$('.bottom-btn .btn-top').click(function(){ $('html, body').animate({scrollTop: 0},800); });


/*JW palyer load video*/
 if ($(".video").length > 0) {
  $(".video").each(function (index, value) {
	  //console.log($(this).attr('src'));
	  //console.log($(this).attr('image'));
	  if ($(this).attr('image') == '') {
		  jwplayer($(this).attr('id')).setup({
			  autostart: false,
			  controlbar: 'bottom',
			  file: $(this).attr('src'),
			  flashplayer: "/Content/Swfs/player.swf",
			  width: 300
		  });
	  } else {
		  jwplayer($(this).attr('id')).setup({
			  autostart: false,
			  controlbar: 'bottom',
			  image: $(this).attr('image'),
			  file: $(this).attr('src'),
			  flashplayer: "/Content/Swfs/player.swf",
			  width: 300
		  });
	  }
  });
} 


/**/
	var items = $('#stage li'),
		itemsByTags = {};
	
	// Looping though all the li items:	
	items.each(function(i){
		var elem = $(this),
			tags = elem.data('tags').split(',');
		
		// Adding a data-id attribute. Required by the Quicksand plugin:
		elem.attr('data-id',i);
		
		$.each(tags,function(key,value){
			
			// Removing extra whitespace:
			value = $.trim(value);
			
			if(!(value in itemsByTags)){
				// Create an empty array to hold this item:
				itemsByTags[value] = [];
			}
			
			// Each item is added to one array per tag:
			itemsByTags[value].push(elem);
		});
		
	});


/*creat an ajax loading effect*/
$('#loading')
    .hide()
    .ajaxStart(function() {
        $(this).show();
    })
    .ajaxStop(function() {
        $(this).hide();
    });


/*define maxLength*/
Query.fn.maxLength = function(max){
  this.each(function(){
    var type = this.tagName.toLowerCase();
    var inputType = this.type? this.type.toLowerCase() : null;
    if(type == "input" &amp;&amp; inputType == "text" || inputType == "password"){
      //Apply the standard maxLength
      this.maxLength = max;
    }
    else if(type == "textarea"){
      this.onkeypress = function(e){
        var ob = e || event;
        var keyCode = ob.keyCode;
        var hasSelection = document.selection? document.selection.createRange().text.length &gt; 0 : this.selectionStart != this.selectionEnd;
        return !(this.value.length &gt;= max &amp;&amp; (keyCode &gt; 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) &amp;&amp; !ob.ctrlKey &amp;&amp; !ob.altKey &amp;&amp; !hasSelection);
      };
      this.onkeyup = function(){
        if(this.value.length &gt; max){
          this.value = this.value.substring(0,max);
        }
      };
    }
  });
};
//Usage:
$('#gbin1textarea').maxLength(500);


/***/
$('#objs li').each(function(index){
   $(this).delay(800*index).fadeOut(1000,function(){});
});


/*change css style*/
$('link[media='screen']').attr('href', 'Alternative.css');  


/*filter selector*/
.filter(":not(:has(.selected))") ;
$("input").has(".email").addClass("email_icon");


/*detect ie*/
if ($.browser.msie && $.browser.version == 7) { // Internet Explorer is a sadist. } 


/*detect a blank element*/
if ($('#keks').html()) { //Nothing found ;}  

/*detect an element if exist*/
if ($('#someDiv').length) {//hooray!!! it exists...}


/*find the selected option*/
$('#someElement').find('option:selected');


/*replace*/
var el = $('#id');
el.html(el.html().replace(/fuck/ig, ''));


/*detect an element is visible*/
if($(element).is(':visible') == 'true') { //The element is Visible }


/*put the right elements into an array*/
var arrInputValues = [];
$("input[name='table[]']").each(function(){
     arrInputValues.push($(this).val());
});


/*check all or uncheck all*/
var tog = false; // or true if they are checked on load
$('a').click(function() {
    $("input[type=checkbox]").attr("checked",!tog);
    tog = !tog;
});


/*count the number of checked checkboxes*/
$('#table :input[type="checkbox"]:checked').length


/*Make it safe to use console.log always*/
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


/*checks if flash is installed/enabled on the browser*/
function isFlashEnabled()
{
    var hasFlash = false;
    try
    {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if(fo) hasFlash = true;
    }
    catch(e)
    {
        if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
    }
    return hasFlash;
}


/*add param to url function*/
/*This jQuery utility function checks if a paramter is present in the current page URL and if it doesn’t exist it adds it and returns the url in full. Could be useful if you needed to do an ajax request to update a database with new form data and simply want to redirect to the same url but with an updated flag to show an updated box.*/
(function($,W,D)
{
    var JQUERY4U = {};
 
    JQUERY4U.UTIL =
    {
        /**
          * Add a parameter to url if doesn't already exist
          * @param param - the parameter to add
          * @param value - the value of the parameter
          * @return url - the url with the appended parameter
          */
        addParamToUrl: function(param, value)
        {
            //check if param exists
            var result = new RegExp(param + "=([^&]*)", "i").exec(W.location.search);
            result = result && result[1] || "";
 
            //added seperately to append ? before params
            var loc = W.location;
            var url = loc.protocol + '//' + loc.host + loc.pathname + loc.search;
 
            //param doesn't exist in url, add it
            if (result == '')
            {
                //doesn't have any params
                if (loc.search == '')
                {
                    url += "?" + param + '=' + value;
                }
                else
                {
                    url += "&" + param + '=' + value;
                }
            }
 
            //return the finished url
            return url;
        }
    }
 
    //example usage
    var updatedUrl = JQUERY4U.UTIL.addParamToUrl('updated', 'true');
    console.log(updatedUrl);
    //input: http://jquery4u.com/index.php
    //output: http://jquery4u.com/index.php?updated=true
 
})(jQuery, window, document);



$.ajaxSetup( {
   complete:function() {
      $form.find('.loading').hide();
      $form.find('.submit').removeAttr('disabled');
   }
});


/*use JavaScript to sort arrays by index values*/

//Here you can see that we have sorted by “name” values. 
//objects
var array = [{id:'12', name:'Smith', value:1},{id:'13', name:'Jones', value:2}];
array.sort(function(a, b){
    var a1= a.name, b1= b.name;
    if(a1== b1) return 0;
    return a1> b1? 1: -1;
});
console.log(array);
//output:=> array = [{{id:'13', name:'Jones', value:2}, id:'12', name:'Smith', value:1}];

//arrays
var array =[ ['12', ,'Smith',1],['13', 'Jones',2], ['14', 'Jones',2]];
array.sort(function(a, b){
    var a1= a[1], b1= b[1];
    if(a1== b1) return 0;
    return a1> b1? 1: -1;
});


/*convert JSON string to an array of objects and then interate output of thier values.*/
var data = JQUERY4U.DASHBOARD.data['widgets'];
data = $.parseJSON(data);
$.each(data, function (i,v)
{
  console.log(i,v);
});

//Then to convert back simply use stringify:
$('#columns').html(data.stringify);



/*jquery-hashchange/examples*/  
  // Bind an event to window.onhashchange that, when the hash changes, gets the
  // hash and adds the class "selected" to any matching nav link.
  $(window).hashchange( function(){
    var hash = location.hash;
    
    // Set the page title based on the hash.
    document.title = 'The hash is ' + ( hash.replace( /^#/, '' ) || 'blank' ) + '.';
    
    // Iterate over all nav links, setting the "selected" class as-appropriate.
    $('#nav a').each(function(){
      var that = $(this);
      that[ that.attr( 'href' ) === hash ? 'addClass' : 'removeClass' ]( 'selected' );
    });
  })
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).hashchange();
  

//Sort Dropdown Menu
function sortList(id) {
    var obj = document.getElementById("id");
    var values = [];
    for(var i = 0; i < obj.options.length; i++) {
    values.push(obj.options[i].innerHTML + "--xx--" + obj.options[i].value);
    }
     
    values = values.sort();
     
    for(var i = 0; i < values.length; i++) {
    valueArray = values[i].split('--xx--');
    obj.options[i].innerHTML = valueArray[0];
    obj.options[i].value = valueArray[1];
    }
}

//Sort the OPTIONs in a SELECT menu
function compareOptionText(a,b) {
    /*
      * return >0 if a>b
      * 0 if a=b
      * <0 if a<b
      */
    // textual comparison
    return a.text!=b.text ? a.text<b.text ? -1 : 1 : 0;
    // numerical comparison
    // return a.text - b.text;
     
    }
     
    function sortOptions(list) {
    var items = list.options.length;
    // create array and make copies of options in list
    var tmpArray = new Array(items);
    for ( i=0; i<items; i++ )
    tmpArray[i] = new Option(list.options[i].text,list.options[i].value);
    // sort options using given function
    tmpArray.sort(compareOptionText);
    // make copies of sorted options back to list
    for ( i=0; i<items; i++ )
    list.options[i] = new Option(tmpArray[i].text,tmpArray[i].value);
}


//Iphone Style Change on Orientation Change
//Switches body class between .portrait and .landscape for, you guessed it, portrait and landscape mode on the iphone.
window.addEventListener('load', setOrientation, false);
window.addEventListener('orientationchange', setOrientation, false);
 
function setOrientation() {
  var orient = Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait';
  var cl = document.body.className;
  cl = cl.replace(/portrait|landscape/, orient);
  document.body.className = cl;
}


//
var settings = {
	// configuration for the mouseenter event
	animMouseenter		: {
		'mText' : {speed : 350, easing : 'easeOutExpo', delay : 140, dir : 1},
		'sText' : {speed : 350, easing : 'easeOutExpo', delay : 0, dir : 1},
		'icon'  : {speed : 350, easing : 'easeOutExpo', delay : 280, dir : 1}
	},
	// configuration for the mouseleave event
	animMouseleave		: {
		'mText' : {speed : 300, easing : 'easeInExpo', delay : 140, dir : 1},
		'sText' : {speed : 300, easing : 'easeInExpo', delay : 280, dir : 1},
		'icon'  : {speed : 300, easing : 'easeInExpo', delay : 0, dir : 1}
	},
	// speed for the item bg color animation
	boxAnimSpeed		: 300
};
//get the value
settings.animMouseenter['mText'].speed


//For hiding the iPhone title bar, you need a setTimeout() (apparently).
window.onload = function() {
    setTimeout(function() { window.scrollTo(0, 1) }, 100);
};


// hotkeys plugin: use arrows to control the gallery ->jquery.hotkeys-0.7.8-packed.js
        $(document).bind('keydown', 'right', function (evt){ $.galleria.next(); });
        $(document).bind('keydown', 'left', function (evt){ $.galleria.prev(); });
        $(document).bind('keydown', 'up', function (evt){ $('.jcarousel-next-horizontal').click(); return false; });
        $(document).bind('keydown', 'down', function (evt){ $('.jcarousel-prev-horizontal').click(); return false; });
    };
	
	
//Form elements change function
//<input id="show-caption" type="checkbox"/>
//<label for="show-caption">show caption</label>
    $('#show-caption').change(function(){
    	if (this.checked) {
    		$('#img .caption').stop().animate({height: 50}, 250)
    	} else {
            $('#img .caption').stop().animate({height: 0}, 250)   
        }
    })
	

//find element Position
function findPos(obj){
	var curleft=curtop=0;
	if (obj.offsetParent){
		curleft=obj.offsetLeft
		curtop=obj.offsetTop
		while(obj=obj.offsetParent){
			curleft+=obj.offsetLeft
			curtop+=obj.offsetTop
		}
	}
	return [curtop,curleft];
}

var pos;
var mouseCoords;
var mouseCoordsY;

$this.mousemove(function(e){
	pos=findPos(this);
	mouseCoords=(e.pageX-pos[1]);
	mouseCoordsY=(e.pageY-pos[0]);
	console.log(mouseCoords, mouseCoordsY);
})


/*********************************Object*********************************************************/
/*Keep in mind that there will be patterns in this table that reference the concept of "classes". JavaScript is a class-less language, however classes can be simulated using functions.

The most common approach to achieving this is by defining a JavaScript function where we then create an object using the new keyword. this can be used to help define new properties and methods for the object as follows:*/
//Basic Constructors
// A car "class"
function Car( model, color ) {

  this.model = model;
  this.color = color;
  this.year  = "2012";

  this.getInfo = function () {
    return this.model + " " + this.year;
  };

}

var myCar = new Car("ford");
myCar.year = "2010";
console.log( myCar.getInfo() );


//Object Creation
var newObject = {
      someKey: '';	
}; 

// 1. Dot syntax

// Set properties
newObject.someKey = "Hello World"; 
// Get properties
var key = newObject.someKey; 

// 2. Square bracket syntax

// Set properties
newObject["someKey"] = "Hello World"; 
// Get properties
var key = newObject["someKey"]; 


//Constructors With Prototypes
function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

}

// Note here that we are using Object.prototype.newMethod rather than 
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );


////////////////////////
var Person = {
  firstName : 'Boaz',
  lastName : 'Sender',
  greet : function() {
    log( 'Hi, ' + this.firstName );
  }
};
person.greet();  //Hi, Boaz

var stateManager = {

  fly: function () {

    var self = this;

    $( "#container" ).unbind().on( "click" , function ( e ) {
      var target = $( e.originalTarget || e.srcElement );
        if ( target.is( "div.toggle") ) {
          self.handleClick( target );
        }
    });
  },

  handleClick: function ( elem ) {
    elem.find( "span" ).toggle( "slow" );
  }
};


//$.proxy
$( "button" ).on( "click", function () {
  // Within this function, "this" refers to the element that was clicked
  $( this ).addClass( "active" );
});

$( "button" ).on( "click", function () {
  setTimeout(function () {
    // "this" doesn't refer to our element!
    // It refers to window
    $( this ).addClass( "active" );
  });
});

$( "button" ).on( "click", function () {

    setTimeout( $.proxy( function () {
        // "this" now refers to our element as we wanted
        $( this ).addClass( "active" );  
    }, this), 500);
    
    // the last "this" we're passing tells $.proxy() that our DOM element
    // is the value we want "this" to refer to.
});


//get parameter from the url
1.
function GetParam(name)
{
	var start=location.search.indexOf("?"+name+"=");
	if (start<0) start=location.search.indexOf("&"+name+"=");
 	if (start<0) return '';
 	start += name.length+2;
 	var end=location.search.indexOf("&",start)-1;
 	if (end<0) end=location.search.length;
 	var result=location.search.substring(start,end);
 	var result='';
 	for(var i=start;i<=end;i++)
 	{
 		var c=location.search.charAt(i);
 		result=result+(c=='+'?' ':c);
 	}
 	//alert(unescape(result));
 	return unescape(result);
}

var byName = GetParam('n');
var totalItems = GetParam('c');

2.
$.extend({ 
      getUrlVars: function(){
		   var vars = [], hash;    
		   var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');    
		   for(var i = 0; i < hashes.length; i++)    
		   {      
		   hash = hashes[i].split('=');      
		   vars.push(hash[0]);      
		   vars[hash[0]] = hash[1];    
		   }    
		   return vars;  
		   },  
		   getUrlVar: function(name)
		   {    
		   return $.getUrlVars()[name];  
	 }
});

var byName = $.getUrlVar('n');
var totalItems = $.getUrlVar('c');


//isChildOf - is element a child of / ancestor of element - plugin 
(function($) {
    $.fn.extend({
        isChildOf: function( filter_string ) {
          
          var parents = $(this).parents().get();
         
          for ( j = 0; j < parents.length; j++ ) {
           if ( $(parents[j]).is(filter_string) ) {
      return true;
           }
          }
          
          return false;
        }
    });
})(jQuery); 

example:


<div id="parent2">
  <div id="parent1">
    <div id="child">
    </div>
  </div>
</div>

Alerts "true":
alert( $('#child').isChildOf('#parent1') );

Alerts "true":
alert( $('#child').isChildOf('#parent2') );

Alerts "false"
alert( $('#child').isChildOf('#notaparent') );



//Finding an Element's X, Y Position
//http://www.kirupa.com/html5/finding_element_x_y_position.htm
function getPosition(element) {

var xPosition = 0;
var yPosition = 0;
 
while(element) {

xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
element = element.offsetParent;

}
return { x: xPosition, y: yPosition };

} 
/*Here is an example usage of this function:

var myElement = document.getElementById("ID of Element");
var position = getPosition(myElement);
alert("The image is located at: " + position.x + ", " + position.y); 
*/


/*element.offsetLeft and element.offsetTop are the pure javascript properties for finding an element's position with respect to its offsetParent; being the nearest parent element with a position of relative or absolute

Alternatively, you can always use Zepto to get the position of an element AND its parent, and simply subtract the two:*/

var childPos = obj.offset();
var parentPos = obj.parent().offset();
var childOffset = {
    top: childPos.top - parentPos.top;
    left: childPos.left - parentPos.left;
}



//json method
{"shoplist":[
    {'shopno':'204','pathname':'aigle'},
	{'shopno':'204','pathname':'aigle'}
]};

// js method
var shoplist={};
		
shoplist['1']={
			'shopno':'204',
			'shopname':{'en':'AIGLE','tc':'AIGLE','sc':'AIGLE'},
			'pathname':'aigle',
			'category':1,
			'coming_soon':false,
			'payment':[1,2,3,5,6,7,12,13]
		};

shoplist['2']={
			'shopno':'B205',
			'shopname':{'en':'AINHOA','tc':'AINHOA','sc':'AINHOA'},
			'pathname':'AINHOA',
			'category':2,
			'coming_soon':false,
			'payment':[2,5,7,12,13]
		};
		
var categories=[];
categories['en']=[
	'All',
	'Fashion &amp; Accessories',
	'Beauty &amp; Health Care'
];
categories['tc']=[
	'全部',
	'時裝及配飾',
	'美容及健康護理'
];
categories['sc']=[
	'全部',
	'时装及配饰',
	'美容及健康护理'
];


//scrollTo
$('.menu a, form .add-btn').click(function(e){
	e.preventDefault();
	var hash = $(this).attr('href');
	$(document).scrollTo($(hash), 500, {
		/*offset:{top:-67, left:0},*/ 
		onAfter:function(e){
			document.location.hash = hash;
		}
	});
});



//do something after all img loaded
function processVgrid(){

	$('#eventsThumb > div').hide();
	var $imgs=$('#eventsThumb img');
	var total=$imgs.length;
	var completed=0;

	$imgs.each(function(){
		if(this.complete)
			completed++;
	});
	
	if(total==completed){

		$('#eventsThumb').vgrid(
		{
			easeing: 'easeOutQuint',
			time: 400,
			delay: 20,
			addWidth: ((levelArray[1] == 'art-index')?315:200),
			fadeIn:
			{
				time: 400,
				delay: 200
			}
		});



	}else{

		setTimeout(processVgrid,500);

	}

}


//---------------------------hideMoreWords---------------------------
function hideMoreWords(){
	var w = $.browser.mozilla == true?screen.width*0.32+'px':'100%';
	$('div.hideMoreWords,span.hideMoreWords').width(w).each(function(){
		var obj = $(this), he = 40;
		if ($(this).attr('rel') != undefined) {
			he = $(this).attr('rel').split(',').pop();
		}
		if ($(this).height() > he) {
			$(this).height(he+'px').after($(document.createElement('div')).text('...more').css('cursor','pointer').click(function(){
				if ($(this).text()=='...more'){
					$(this).text('...less');
					obj.height('auto');
				}else{
					$(this).text('...more');
					obj.height(he+'px');
				}
			}));
		}
	}).show();
};


//submit form wuth ajax
$('#contact_us form').validate();
$('#contact_us form').submit(function(e) {
	if ($(this).valid()) {
		$('#contact_us button').text('Sending...').attr('disabled', 'disabled');
		$.ajax({
			type: "POST",
			url: "/contact",
			data: $(this).serialize(),
			success: function(data) {
				alert("Your message has been sent successfully.");
				$('#contact_us button').text('Thank You!');
				$.fancybox.close();
			}
		});
	}
	e.preventDefault();
});

//
picker_month = month;
picker_year = year;
var menuId = $("ul.nav").first().attr("id");

$.ajax({
	url: site_path + '/trainings/get_current_month_training',
	type: 'POST',	
	//Send month/year/region as data to the server, save some data to the server,向页面url发送数据
	data: {'currMonth':month, 'currYear':year, 'region':$('#training-shedule-location').text()},
	data: {currMonth:month, currYear:year, region:$('#training-shedule-location').text()},
	//Save some data to the server
    data: { name: "John", location: "Boston" },
	dataType: 'json',
	success: function(data){
		setDateEventList(data);	
	}
});

//PHP Code
//$backValue = $_POST['currMonth'];




//changeCss base on the current time
function changeCss()
{
	var current = new Date();
	var currentHour = current.getHours();
	if(currentHour >= 18 || currentHour < 5)
	{
		var newCSS = document.createElement('link');
		newCSS.setAttribute("rel", "stylesheet");
		newCSS.setAttribute("type", "text/css");
		newCSS.setAttribute("href", "/tc/css/nobanner_night.css");
		document.getElementsByTagName("head")[0].appendChild(newCSS);
	}
}

changeCss();


function emailAFriend()
{
	var emailMsg = new Array();
	emailMsg[0] = "Click the following to access the sent link:%0A%0A";
	emailMsg[1] = "You have received the following link to the Henderson Land Development Company Limited";
	var winEF = window.open("mailto:?body="+ emailMsg[0] + escape((window.top.location.href).replace("?","!")) + "&subject=" + emailMsg[1], '_self');
}


/*Popup a new window*/
function NewWindow(mypage, myname, w, h, scroll,resizable) {
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable='+resizable+','
	win = window.open(mypage, myname, winprops)
	win.self.focus()
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

/* Popup img  http://www.howtocreate.co.uk/perfectPopups.html */
//really not important (the first two should be small for Opera's sake)
PositionX = 10;
PositionY = 10;
defaultWidth  = 600;
defaultHeight = 400;

//kinda important
var AutoClose = true;

//don't touch
function popImage(imageURL,imageTitle){
  var imgWin = window.open('','_blank','scrollbars=no,resizable=1,width='+defaultWidth+',height='+defaultHeight+',left='+PositionX+',top='+PositionY);
  if( !imgWin ) { return true; } //popup blockers should not cause errors
  imgWin.document.write('<html><head><title>Map<\/title><script type="text\/javascript">\n'+
    'function resizeWinTo() {\n'+
    'if( !document.images.length ) { document.images[0] = document.layers[0].images[0]; }'+
    'var oH = document.images[0].height, oW = document.images[0].width;\n'+
    'if( !oH || window.doneAlready ) { return; }\n'+ //in case images are disabled
    'window.doneAlready = true;\n'+ //for Safari and Opera
    'var x = window; x.resizeTo( oW + 200, oH + 200 );\n'+
    'var myW = 0, myH = 0, d = x.document.documentElement, b = x.document.body;\n'+
    'if( x.innerWidth ) { myW = x.innerWidth; myH = x.innerHeight; }\n'+
    'else if( d && d.clientWidth ) { myW = d.clientWidth; myH = d.clientHeight; }\n'+
    'else if( b && b.clientWidth ) { myW = b.clientWidth; myH = b.clientHeight; }\n'+
    'if( window.opera && !document.childNodes ) { myW += 16; }\n'+
    'x.resizeTo( oW = oW + ( ( oW + 200 ) - myW ), oH = oH + ( (oH + 200 ) - myH ) );\n'+
    'var scW = screen.availWidth ? screen.availWidth : screen.width;\n'+
    'var scH = screen.availHeight ? screen.availHeight : screen.height;\n'+
    //'if( !window.opera ) { x.moveTo(Math.round((scW-oW)/2),Math.round((scH-oH)/2)); }\n'+
    '}\n'+
    '<\/script>'+
    '<\/head><body onload="resizeWinTo();"'+(AutoClose?' onblur="self.close();"':'')+'>'+
    (document.layers?('<layer left="0" top="0">'):('<div style="position:absolute;left:0px;top:0px;display:table;">'))+
    '<img src="'+imageURL+'" alt="Loading image ..." title="" onload="resizeWinTo();">'+
    (document.layers?'<\/layer>':'<\/div>')+'<\/body><\/html>');
  imgWin.document.close();
  if( imgWin.focus ) { imgWin.focus(); }
  return false;
}
//<a onclick="return popImage('/wlb_corporate/files/hk/img/EnMapCentral.gif');" href="javascript:;">popup img</a>


/*Change font size 01*/
//Specify spectrum of different font sizes:
var szs = new Array('1em', '1.2em', '1.4em');
var startSz = sz = szs.length;

function getFontSize()
{  
  if (getCookie('fontSize') == null)
  {    
	startSz = 0;
  }
  else
  { 
	startSz = getCookie('fontSize');
	if (startSz == "NaN")  startSz = 0;
	if (startSz!=0 && startSz!=1 && startSz!=2)
	{
	  startSz = 0;
	}
  }  
  changeFontSize(startSz, true);
}

function changeFontSize(inc, start)
{
  if (!d.getElementById) return;
  var cEl = null,sz = eval(startSz),i,j,cTags;
  
  sz = inc;
  
  //cEl = d.getElementsByTagName('body')[0];
  cEl = $('.inner-content').css('font-size', szs[ sz ]);
  
  //Highlight Btn
  var topTools = $('#fontSize a');
  
  for (var i=0; i<topTools.length; i++)
  {
	topTools[i].className = topTools[i].className.replace('active ', '');
	topTools[i].clicked = false;
  }
  topTools[sz].className = topTools[sz].className.replace('', 'active ');
  topTools[sz].clicked = true;
  
  //getBoxHeight();
  
  setCookie("fontSize", sz, 30, cpath, cdomain);
}

var nd= new Date();
nd.setTime(nd.getTime()+(60*24*60*60*1000));
var cdomain = (location.domain) ? location.domain : null;
var cpath = "/";

function setCookie(name, value, expiredays, path, domain, secure)
{
  var exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  var curCookie = name + "=" + escape(value) +
	((expiredays==null) ? "" : ";expires="+exdate.toUTCString()) +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");

  d.cookie = curCookie;
}

function getCookie(name)
{
  if (d.cookie.indexOf(name) < 0)
  {    
	return null;
  }
  else
  {  
	var startStr = d.cookie.indexOf(name) + name.length + 1;
	var endStr = d.cookie.indexOf(";", startStr);
	if (endStr == -1)  endStr = d.cookie.length;
	return unescape(d.cookie.substring(startStr, endStr));
  }
}  


if (isPrintPage == null)	var isPrintPage = false;
/*Change font size 02*/
function checkIsFrame()
{	
	if (isPrintPage)	return;

	if (!level1)	return;
	
	else
	{
		return false;
	}
}

var isFrame = checkIsFrame();

//Specify affected tags. Add or remove from list:
var tgs = new Array('p', 'h1', 'h2');
//var tgs = new Array('span', 'td', 'strong', 'a', 'li', 'div', 'p', 'h1', 'h2');
//Specify spectrum of different font sizes:
var szs = new Array('80%', '95%', '100%');
//var szs = new Array('x-small', 'small', 'medium');
//var szs = new Array('1em', '1.05em', '1.10em', '1.15em');
var startSz = sz = 0;

function getFontSize()
{	
	if (getCookie('fontSize') == null)
	{		
		startSz = 0;
	}
	else
	{ 
		startSz = getCookie('fontSize');
		if (startSz == "NaN")	startSz = 0;
	}	
	changeFontSize(startSz, true);
}

function changeFontSize(inc, start)
{
	if (!document.getElementById) return;
	var d = document,cEl = null,sz = eval(startSz),i,j,cTags;
	
	/*if (!start)
	{
		sz += inc;
		
		if ( sz < 0 ) sz = 0;
		if ( sz > (szs.length-1) ) sz = (szs.length-1);
		startSz = sz;
	}
	else
	{
		sz = inc;
	}*/
	
	sz = inc;
	
	cEl = d.getElementsByTagName('body')[0];
	cEl.style.fontSize = szs[ sz ];	
	setCookie("fontSize", sz, nd, cpath, cdomain);

}

//////////////
There are two different types of cookies:

Session cookies - these are temporary and are erased when you close your browser at the end of your surfing session. The next time you visit that particular site it will not recognise you and will treat you as a completely new visitor as there is nothing in your browser to let the site know that you have visited before (more on session cookies).

Persistent cookies - these remain on your hard drive until you erase them or they expire. How long a cookie remains on your browser depends on how long the visited website has programmed the cookie to last (more on persistent cookies).
////////////////

var nd= new Date();
nd.setTime(nd.getTime()+(365*24*60*60*1000));
//cdomain = (location.domain) ? location.domain : null;
var cdomain = (location.domain) ? location.domain : null;
var cpath = "/";

function setCookie(name, value, expires, path, domain, secure)
{
  var curCookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");

  document.cookie = curCookie;
}

function getCookie(name)
{
	if (document.cookie.indexOf(name) < 0)
	{		
		return null;
	}
	else
	{	
		var startStr = document.cookie.indexOf(name) + name.length + 1;
		var endStr = document.cookie.indexOf(";", startStr);
		if (endStr == -1)	endStr = document.cookie.length;
		return unescape(document.cookie.substring(startStr, endStr));
	}
}

var min=1;
var max=1.3;
var tgs = new Array('p', 'td', 'th', 'li', 'h1', 'h2', 'h3', 'h4');
function increaseFontSize() {
	for (var j=0; j<tgs.length; j++)
	{
		var p = document.getElementById('content').getElementsByTagName(tgs[j]);
		for(i=0;i<p.length;i++) {
		  if(p[i].style.fontSize) {
		     var s = parseFloat(p[i].style.fontSize.replace("em",""));
		  } else {
		     var s = 1;
		  }
		  if(s<max) {
		     s += 0.1;
			 
		  }
		  p[i].style.fontSize = s+"em"
		}
	}
}
function decreaseFontSize() {
	for (var j=0; j<tgs.length; j++)
	{
		var p = document.getElementById('content').getElementsByTagName(tgs[j]);
		for(i=0;i<p.length;i++) {
		  if(p[i].style.fontSize) {
		     var s = parseFloat(p[i].style.fontSize.replace("em",""));
		  } else {
		     var s = 1;
		  }
		  if(s>min) {
		     s -= 0.1;
		  }
		  p[i].style.fontSize = s+"em"
		}
	}
}



//fontContrast
fontContrast = {
	defaultContrast:false,
	currentContrast:null,
	init:function(){
		this.currentContrast = $.cookie('contrast');
		if(this.currentContrast == null){
			this.currentContrast = this.defaultContrast;
		}
		$('body').append('<style>.contrast *{color:#000 !important;}</style>');
		this.set(this.currentContrast);
	},
	set:function(contrast){
			$('body').removeClass('contrast');
			this.currentContrast = contrast;
			if(this.currentContrast.toString() == 'true'){
				$('body').addClass('contrast');
			}
			$.cookie('contrast', this.currentContrast, { expires: 30 });
	},
	get:function(){
		return this.currentContrast.toString() == 'true';
	}
};



//Print friendly
function popPrint()
{
  var w = 760 + 20;
  var h = 600;
  var l = (screen.width - w) / 2;
  var t = (screen.height - h) / 2;
  var page = window.open('', 'printPopup', 'width='+w+', height='+h+', left='+l+', top='+t+', screenX=0, screenY=0, scrollbars=1, resizable=0');
  var str = '';
  
  var container = d.createElement('div');
  
  container.innerHTML = d.getElementById('content').innerHTML;
    
  
  /*var a = container.getElementsByTagName('a');
  for (var i=0; i<a.length; i++)
  {
    a[i].href = 'javascript:;';
    if (a[i].target)  a[i].target = '_self';
  }*/
  
  str += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>';
  str += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Welcome to the HKMA</title>';
  str += '<script type="text/javascript" language="javascript" src="/script/eng/global.js"></script>';
  
  
  var link = d.getElementsByTagName('link');
  for (var i=0; i<link.length; i++)
  {
    if(link[i].rel.toString().toLowerCase() == 'stylesheet' && !link[i].disabled)
    {
      str += '<link type="text/css" rel="stylesheet" href="'+link[i].href+'">';
    }
  }
  str += '<link type="text/css" rel="stylesheet" href="/css/eng_print.css" rel="stylesheet" />';

  str += '</head>';
  str += '<body>';
  str += '<div id="header" class="clearfix">';
  str += '<div class="left"><a href="/eng/" id="logo">Hong Kong Monetary Authority ­»´äª÷¿ÄºÞ²z§½</a></div>';
  str += '<div class="right">';
  str += '<div class="printBtn"><a href="javascript:window.print();">Print</a></div>';
  str += '<div class="closebtn"><a href="javascript:window.close();">Close</a></div>';
  str += '</div>';
  //str += '<div class="printBtn"><a href="javascript:printFriendly();">¦C¦L</a></div>';
  str += '</div>';
  str += '<div id="main">';
  str += '<div id="content" class="home">';
  
  str += container.innerHTML;
  
  if (d.getElementById('scrollBanner'))
  {
    var scrollBanner = d.createElement('div');
    scrollBanner.innerHTML = d.getElementById('scrollBanner').innerHTML;
    str += scrollBanner.innerHTML;
    
    var latestNews = d.createElement('div');
    latestNews.innerHTML = d.getElementById('latestNews').innerHTML;
    str += latestNews.innerHTML;
  }
  
  str += '</div>';
  str += '</div>';
  str += '<div id="footer">&copy; 2012 Hong Kong Monetary Authority. All rights reserved.</div>';
  str += '</body></html>';

  page.document.open();
  page.document.write(str);
  page.document.close();
  page.focus();
  page.window.print();
}



/***************************************************
STRIP HTML TAGS
****************************************************/
function strip_tags(html) {

    //PROCESS STRING
    if (arguments.length < 3) {
        html = html.replace(/<\/?(?!\!)[^>]*>/gi, '');
    } else {
        var allowed = arguments[1];
        var specified = eval("[" + arguments[2] + "]");
        if (allowed) {
            var regex = '</?(?!(' + specified.join('|') + '))\b[^>]*>';
            html = html.replace(new RegExp(regex, 'gi'), '');
        } else {
            var regex = '</?(' + specified.join('|') + ')\b[^>]*>';
            html = html.replace(new RegExp(regex, 'gi'), '');
        }
    }

    //CHANGE NAME TO CLEAN JUST BECAUSE 
    var clean_string = html;

    //RETURN THE CLEAN STRING
    return clean_string;
}


//how to loop the dom faster
var data = ["Saab","Volvo","BMW"];
$.each(data, function(i, item){
  var newitem='<div>' + item + '</div>';
  $("#gbcontainer").append(newitem);  
});

var data = ["Saab","Volvo","BMW"];
    tmp = ''; 
$.each(data, function(i, item){
    tmp +='<div>' + item + '</div>';
});
$("#gbcontainer").append(tmp); 

var data = ["Saab","Volvo","BMW"];
var tmp = []; 
$.each(data, function(i, item){
	tmp.push('<div>' + item + '</div>');
});
$("#gbcontainer").append(tmp.join(''));  // join the elements of an array whit space: 



// hog cpu
$('.carousel').each(function(){
	carouselSetting.vertical = $(this).hasClass('vertical')
	$(this).jcarousel(carouselSetting);
	sleep(100);
})

function sleep(milliSeconds){
	var startTime = new Date().getTime(); // get the current time
	while (new Date().getTime() < startTime + milliSeconds){}; // hog cpu
}


/*form operation code*/
//disable enter
$("#form").keypress(function(e) {
  if (e.which == 13) {
    return false;
  }
});

//reset all form eleme
function clearForm(form) {
  // iterate over all of the inputs for the form
  // element that was passed in
  $(':input', form).each(function() {
    var type = this.type;
    var tag = this.tagName.toLowerCase(); // normalize case
    // it's ok to reset the value attr of text inputs,
    // password inputs, and textareas
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = "";
    // checkboxes and radios need to have their checked state cleared
    // but should *not* have their 'value' changed
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    // select elements need to have their 'selectedIndex' property set to -1
    // (this works for both single and multiple select elements)
    else if (tag == 'select')
      this.selectedIndex = -1;
  });
};

//disable the button
$("#somebutton").attr("disabled", true);
//active the button
$("#submit-button").removeAttr("disabled");

//after input active the button
$('#username').keyup(function() {
    $('#submit').attr('disabled', !$('#username').val()); 
});

//ban submit form several times
$(document).ready(function() {
  $('form').submit(function() {
    if(typeof jQuery.data(this, "disabledOnSubmit") == 'undefined') {
      jQuery.data(this, "disabledOnSubmit", { submited: true });
      $('input[type=submit], input[type=button]', this).each(function() {
        $(this).attr("disabled", "disabled");
      });
      return true;
    }
    else
    {
      return false;
    }
  });
});

//highlight the input
$("form :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {
  $("label").removeClass("labelfocus");
});

//change event on password1 field to prompt new input
$('#password1').change(function() {
        //dynamically create new input and insert after password1
        $("#password1").append("<input type='text' name='password2' id='password2' />");
});

//use ajax to auto gen the selectbox
$(function(){
  $("select#ctlJob").change(function(){
    $.getJSON("/select.php",{id: $(this).val(), ajax: 'true'}, function(data){
      var options = '';
      for (var i = 0; i < data.length; i++) {
        options += '<option value="' + data[i].optionValue + '">' + data[i].optionDisplay + '</option>';
      }
      $("select#ctlPerson").html(options);
    })
  })
})

//detect a checkbox is select
$('#checkBox').attr('checked');


//object and array
/*See how that syntax is so similar to the syntax used for setting object properties? In fact, the only difference is that objects use a string while arrays use a number. This is why arrays get confused with objects so often.*/


$('#next-btn').on('click', function(e) {
    e.preventDefault();
    if (!isTransitioning) {
        next();
    }
});
 
function next() {
    isTransitioning = true;
     
    // update video index
    if (screenIndex === numScreens) {
        screenIndex = 1;
    } else {
        screenIndex++;
    }
     
    $('.wrapper').transit(
        {'left':'-'+(100*(screenIndex-1))+'%'},
        transitionDur,
        onTransitionComplete);
}
 
function onTransitionComplete() {
    isTransitioning = false;
}


//Event binding
<div id="grid-container">
   <a href="someimage.jpg"><img src="someimage-thumb.jpg"></a>
   <a href="someimage.jpg"><img src="someimage-thumb.jpg"></a>
   ...
</div>
//not good 這樣書寫會導致綁定事件到每一個鏈接元素，最好綁定到指定的圖片容器
$('a').on('click', function() {
   callLightbox(this);
});
//recommend 
$("#grid-container").on("click", "a", function(event) {
   callLightbox(event.target);
});


/*http://www.php100.com/html/webkaifa/javascript/2012/1212/11756.html
函数模式：这个就更简单了，函数名加调用运算符（'()'）。不过要小心，这个this绑的可是全局对象，不管你写哪了。（可以理解成  你不给我指明了   我就自己给它加个全局对象）
当一个函数作为函数调用而不是方法调用时，这个this关键字引用全局对象。容易混淆的是，当一个嵌套的函数（作为函数）在一个包含的函数中调用，而这个包含的函数是作为方法调用的，这也是成立的：this关键字在包含的函数中有一个值，但是它却（不太直观地）引用嵌套的函数体的内部的全局对象。*/
var a = 'global';
var obj = {
    a : 'local',
    test : function(){
        function test1(){
            alert(this.a);//global
        }
        alert(this.a);//local
        test1();
    }
};
obj.test();
/*****************************解决这个问题的方法*****************************/
var a = 'global';
var obj = {
    a : 'local',
    test : function(){
        var self = this;
        function test1(){
            alert(self.a);//local
        }
        alert(this.a);//local
        test1();
    }
};
obj.test();


<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
	var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s)}(document,'script'));
</script>


//google customer search
//1 ING
  google.load('search', '1', {language : 'en'});
  google.setOnLoadCallback(function() {
  $(function() {
    var customSearchOptions = {};  
	var customSearchControl = new google.search.CustomSearchControl(
      '014932920898297770877:kouhko4ujpc', customSearchOptions);
    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);

	  // Set drawing options to set the root element for the
	  // search form (where you have defined a div such as
	  // <div id="search-form">)
	  var drawOptions = new google.search.DrawOptions();
	  drawOptions.setSearchFormRoot('cse');
	  //drawOptions.enableSearchboxOnly("file:///D:/projects/ing/html/en-US/search/index.html");

	  // Draw the search results in the results div
	customSearchControl.draw('search_result', drawOptions);
	  
	  customSearchControl.setSearchCompleteCallback(null, function() {
		$("#search_result_header").show();
		$(".middle-container").hide();
		$("#search_result").show();
	  });
	//customSearchControl.draw('cse');
	});
}, true);

//2
google.load('search', '1', { language: 'zh-TW' });

google.setOnLoadCallback(function () {
	$(function () {
		var customSearchOptions = {};
		customSearchOptions[google.search.Search.RESTRICT_EXTENDED_ARGS] = {
			'sort': 'date'
		};

		var customSearchControl = new google.search.CustomSearchControl(
		'010469926688225341097:kdsglp8c3he', customSearchOptions);
		customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
		//customSearchControl.setResultSetSize(20);
		// Set drawing options to set the root element for the
		// search form (where you have defined a div such as
		// <div id="search-form">)
		var drawOptions = new google.search.DrawOptions();

		drawOptions.enableSearchResultsOnly();
		customSearchControl.draw('search-result', drawOptions);
		
		// execute the pass search value
		customSearchControl.execute('bank');
	});
}, true);  

//3 hkust-emba-ce
    google.load('search', '1', {language : '<?php echo $googleSearchLang;?>'});

    google.setOnLoadCallback(function() {
        $(function() {
            var customSearchOptions = {};
			//testing: 003357454118710842948:7uktyvsqmx4
			//current site:  003357454118710842948:aexwwo_ou1g
            var customSearchControl = new google.search.CustomSearchControl(
            '003357454118710842948:7uktyvsqmx4', customSearchOptions);
            customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
            // Set drawing options to set the root element for the
            // search form (where you have defined a div such as
            // <div id="search-form">)
            var drawOptions = new google.search.DrawOptions();
            drawOptions.setSearchFormRoot("search-form");
            customSearchControl.draw('search-result', drawOptions);
            $('.gsc-search-button').val('');
			$('#gsc-i-id1').val('Search');
			
			 $("#gsc-i-id1").focus(function(){
				// only select if the text has not changed
				if(this.value == 'Search')
					{
						//this.select();
						this.value = "";
					}
			}); 
				
			 $("#gsc-i-id1").blur(function(){        
				if(this.value == "")
				{
					this.value = 'Search';
				}
			}); 

			
            customSearchControl.setSearchCompleteCallback(null, function() {
                $("#container").hide();
                $("#search-container").show();
				
				$('#header .group .active, #menu>li.active') .removeClass('active');
				$('#header .group .tablet-portrait').next().add($('#menu *')).css({
					'width':'',
					'height':'',
					'display':''
				});				

            });
        });
    }, true);

//google jsapi callback
$.getScript( "http://www.google.com/jsapi", function( data, textStatus, jqxhr ) {	
	  google.load('search', '1', {language:'en', callback:function(){
			$(function() {
			  var customSearchOptions = {};  
			  var customSearchControl = new google.search.CustomSearchControl(
				'004840705860843263849:eyzu3s7guq8', customSearchOptions);
			  customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
			
				// Set drawing options to set the root element for the
				// search form (where you have defined a div such as
				// <div id="search-form">)
				var drawOptions = new google.search.DrawOptions();
				drawOptions.setSearchFormRoot('cse');
				//drawOptions.enableSearchboxOnly("file:///D:/projects/ing/html/en-US/search/index.html");
			
				// Draw the search results in the results div
			  customSearchControl.draw('search_result', drawOptions);
				
				customSearchControl.setSearchCompleteCallback(null, function() {
				  $('#breadcrumb, #left-menu, #inner-content, #right-menu, #home_cycle-container, #home_content').hide();
				  $('#search_result').show();
				  $('#search_result_header').show();
				  $('#home_content-container').css('background','none');
				});
			  //customSearchControl.draw('cse');
			  });			  
	  } });
	  
	  var s = document.createElement("script");
	  s.type = "text/javascript";
	  s.src = "/wlb_corporate/files/en/js/ga.js"; 
	  $("head").append(s);			  
});
							

/*jquery serialize
<form>
  <div><input type="text" name="a" value="1" id="a" /></div>
  <div><input type="text" name="b" value="2" id="b" /></div>
  <div><input type="hidden" name="c" value="3" id="c" /></div>
  <div>
    <textarea name="d" rows="8" cols="40">4</textarea>
  </div>
  <div><select name="e">
    <option value="5" selected="selected">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
  </select></div>
  <div>
    <input type="checkbox" name="f" value="8" id="f" />
  </div>
  <div>
    <input type="submit" name="g" value="Submit" id="g" />
  </div>
</form>
*/
$('form').submit(function() {
  alert($(this).serialize());
  return false;
});
//output:a=1&b=2&c=3&d=4&e=5


//https://github.com/brandonaaron/jquery-mousewheel
$(document).mousewheel(function(event, delta) {
  $(this).scrollLeft($(this).scrollLeft()-(delta * 30));
});


/*From http://jqfundamentals.com/*/
//is()
$("ul").click(function(event) {
  var $target = $(event.target);
  if ( $target.is("li") ) {
    $target.css("background-color", "red");
  }
});

var isFormParent = $("input[type='checkbox']").parent().is("form");


//Filtering selections
var listItems = $( 'li' );

// filter the selection to only items with a class of 'special'
var special = listItems.filter( '.special' );

// filter the selection to only items without a class of 'special'
var notSpecial = listItems.not( '.special' );

// filter the selection to only items that contain a span
var hasSpans = listItems.has( 'span' );


$( '#my-unordered-list li' ).click(function() {
  alert $( this ).text();
});


//detach()  is useful for temporarily removing elements from the document;  Elements removed with .detach() will retain their event handlers; you can re-add them to the document with .appendTo() or another DOM insertion method. 
var detachedListItem = $( '#my-unordered-list li' ).first().detach();

// do something complicated with the list item

detachedListItem.appendTo( '#my-unordered-list' );
detachedListItem.trigger( 'click' ); // alert!


//on() / off()
$( 'li' ).on( 'click', function( event ) {
  console.log( 'clicked', $( this ).text() );
});

//Once you have bound an event, you can unbind the event using jQuery's .off() method. This will remove(ALL) any event handlers that were bound to the specified event: 
$( 'li' ).off( 'click' );


//Namespaced events
//One advantage that .on() offers is the ability to use "namespaced" events. When would you want to use namespaces? Consider a situation where you bind some events, and then want to unbind some of the handlers. 
$( 'li' ).on( 'click.logging', function() {
  console.log( 'a list item was clicked' );
});

$( 'li' ).on( 'click.analytics', function() {
  registerClick();
  doSomethingElse();
});

$( 'li' ).trigger( 'click.logging' );
$( 'li' ).off( 'click.logging' );


//Binding multiple events at once
$( 'input[type="text"]' ).on('focus blur', function() {
  console.log( 'The user focused or blurred the input' );
});

$( window ).on( 'resize.foo scroll.bar', function() {
  console.log( 'The window has been resized or scrolled!' );
});


//Passing named functions as event handlers
var handleClick = function() {
  console.log( 'something was clicked' );
};

$( 'li' ).on( 'click', handleClick );


//The event object
$( document ).on( 'click', function( event ) {
  console.log( event.type );    // The event type, eg. "click"
  console.log( event.which );   // The button or key that was pressed.
  console.log( event.target );  // The originating element.
  console.log( event.pageX );   // The document mouse X coordinate.
  console.log( event.pageY );   // The document mouse Y coordinate.
});


/* Closures閉包 */
/* this won't behave as we want it to; */
/* every click will alert 5 */
for (var i=0; i<5; i++) {
    $('<p>click me</p>').appendTo('body').click(function() {
        alert(i);
    });
}

/* fix: “close” the value of i inside createFunction, so it won't change */
var createFunction = function(i) {
    return function() { alert(i); };
};

for (var i=0; i<5; i++) {
    $('<p>click me</p>').appendTo('body').click(createFunction(i));
}

//js Closures can also be used to resolve issues with the this keyword, which is unique to each scope:
var outerObj = {
    myName : 'outer',
    outerFunction : function () {

        // provide a reference to outerObj through innerFunction's closure
        var self = this;

        var innerObj = {
            myName : 'inner',
            innerFunction : function () {  //(function再包含function)
                console.log(self.myName, this.myName); // logs 'outer inner'
            }
        };

        innerObj.innerFunction();

        console.log(this.myName); // logs 'outer'
    }
};

outerObj.outerFunction();


//disable outline
$(".circles li a").each(function() {
   $j(this).attr("hideFocus", "true").css("outline", "none");
});


//show item one by one
var timer = [100, 300, 380, 460, 520, 640, 720, 800];		
$j("ul.circles li").each(function(i){
	 var $this = $j('ul.circles li').eq(i).children('a');
	 setTimeout(function(){
		 $this.stop().fadeIn(600);
	 }, timer[i]);
	 
})

/*show img one by one
<div class="banner">
        <div class="intro">
            <img src="/img/en-us/banner-img-01.jpg" >
            <img src="/img/en-us/banner-img-02.jpg">
            <img src="/img/en-us/banner-img-03.jpg" >
        </div>
        <ul class="content">
            <li><div><img src="/img/banner-bk.png" class="backdrop"></div></li>
            <li><div><img src="/img/banner-t-all.png" class="text"></div></li>
            <li><div><img src="/img/earth-banner.png" class="earth"></div></li>
        </ul>
</div>
*/
function animCompleteHandler(){
	nextElement = $(this).next()
	if(nextElement.length > 0){
		nextElement.fadeIn(1000, animCompleteHandler)
	}else{
		$('.banner .intro').fadeOut(1000, function(){
			$('.banner .content li').css('margin-left', 0)
			$('.banner .content').smart3d({
				vertical:false
			});
		});
		$('.banner .content').show()
	}
}

$('.banner .intro img:first').fadeIn(1000, animCompleteHandler)



//trigger the tab menu by location.hash
if(location.hash != ''){
	$('#con_tabs li a[href="'+location.hash+'"]').click();
}else{
	$('#con_tabs li a:eq(0)').click();
}


/*first time through*/
var first = true;

if(!first){
   //run the code after the first time	
}

//no longer the first time through
first = false;


//////////////google map panTo function
var chicago = new google.maps.LatLng(41.924832, -87.697456),
	pointToMoveTo, 
	first = true,
	curMarker = new google.maps.Marker({}),
	$el;

var myOptions = {
	zoom: 10,
	center: chicago,
	mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map($("#map_canvas")[0], myOptions);

$("#locations li").mouseenter(function() {

  $el = $(this);
		  
  if (!$el.hasClass("hover")) {
  
	$("#locations li").removeClass("hover");
	$el.addClass("hover");
  
	if (!first) { 
	  
	  // Clear current marker
	  curMarker.setMap(); 
	  
	  // Set zoom back to Chicago level
	  // map.setZoom(10);
	}
	
	// Move (pan) map to new location
	pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
	map.panTo(pointToMoveTo);
	
	// Add new marker
	curMarker = new google.maps.Marker({
		position: pointToMoveTo,
		map: map,
		icon: "images/marker.png"
	});
	
	// On click, zoom map
	google.maps.event.addListener(curMarker, 'click', function() {
	   map.setZoom(14);
	});
	
	// Fill more info area
	$("#more-info")
	  .find("h2")
		.html($el.find("h3").html())
		.end()
	  .find("p")
		.html($el.find(".longdesc").html());
	
	// No longer the first time through (re: marker clearing)        
	first = false; 
  }
  
});


/* http://www.fifteen.net/followus/ */
window.initialize = function initialize() {
		var mapOptions = {
				center: new google.maps.LatLng(51.527496,-0.088588),
				zoom: 16,
				mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		
		var styles = 
				[
					{
						"stylers": [
							{ "saturation": -100 },
							{ "gamma": 1 },
							{ "lightness": -15 }
						]
					},{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
							{ "lightness": -30 }
						]
					},{
						"featureType": "road.local",
						"elementType": "geometry.fill",
						"stylers": [
							{ "lightness": 60 }
						]
					}
				]
		;
		
		map.setOptions({styles: styles});
		
		var image = {
				url: 'http://www.fifteen.net/wp-content/themes/fifteen/images/map-marker.png',
				size: new google.maps.Size(58, 87),
				origin: new google.maps.Point(0,0),
				anchor: new google.maps.Point(29, 87)
		};
		
		var shadow = {
				url: 'http://www.fifteen.net/wp-content/themes/fifteen/images/map-marker-shadow.png',
				size: new google.maps.Size(59, 24),
				origin: new google.maps.Point(0,0),
				anchor: new google.maps.Point(29, 12)
		};
		
		var marker = new google.maps.Marker({
				position: new google.maps.LatLng(51.528597, -0.090348),
				map: map,
				shadow: shadow,
				icon: image
		});
}

if ($('#map').length > 0)
{
		window.initialize();
}
});
		


//eval (make the txt to run as js script)
$('.example-container > pre').each(function(i){
	eval($(this).text());
});



/* IE PNG fix multiple filters */
(function ($) {
    if (!$) return;
    $.fn.extend({
    	fixPNG: function(sizingMethod, forceBG) {
    		if (!($.browser.msie)) return this;
    		var emptyimg = "empty.gif"; //Path to empty 1x1px GIF goes here
    		sizingMethod = sizingMethod || "scale"; //sizingMethod, defaults to scale (matches image dimensions)
    		this.each(function() {
    			var isImg = (forceBG) ? false : jQuery.nodeName(this, "img"),
    				imgname = (isImg) ? this.src : this.currentStyle.backgroundImage,
    				src = (isImg) ? imgname : imgname.substring(5,imgname.length-2);
    			this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + sizingMethod + "')";
    			if (isImg) this.src = emptyimg;
    			else this.style.backgroundImage = "url(" + emptyimg + ")";
    		});
    		return this;
    	}
    });
})(jQuery);


//Fix png issue for jQuery fadeIn()/fadeOut() effect IE7/8
$('.big-banner img').each(function(i){
	var src = $(this).attr('src');
	if (src.substr(src.length-4) === '.png' || src.substr(src.length-4) === '.PNG') {
	   $(this).css("filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + src + "')");		  
	}
})



/**
 * Add random number to url to stop caching
 *
 * @example url("data/test.html")
 * @result "data/test.html?10538358428943"
 *
 * @example url("data/test.php?foo=bar")
 * @result "data/test.php?foo=bar&10538358345554"
 */
function url( value ) {
	return value + (/\?/.test(value) ? "&" : "?") + new Date().getTime() + "" + parseInt(Math.random()*100000);
}

/*random img*/
var randomBanner = 
{
	init:	function (container)
	{
		var container = d.getElementById(container);
		var num = Math.round(Math.random() * 5 ) + 1;
		container.style.backgroundImage = 'url(/chi/images/home/home_banner' + num + '.jpg)';
	}
}


var createWithFriesXML = function() {
	var string = '<?xml version="1.0" encoding="UTF-8"?> \
	<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" \
		xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> \
		<soap:Body> \
			<jsconf xmlns="http://www.example.com/ns1"> \
				<response xmlns:ab="http://www.example.com/ns2"> \
					<meta> \
						<component id="seite1" class="component"> \
							<properties xmlns:cd="http://www.example.com/ns3"> \
								<property name="prop1"> \
									<thing /> \
									<value>1</value> \
								</property> \
								<property name="prop2"> \
									<thing att="something" /> \
								</property> \
								<foo_bar>foo</foo_bar> \
							</properties> \
						</component> \
					</meta> \
				</response> \
			</jsconf> \
		</soap:Body> \
	</soap:Envelope>';

	return jQuery.parseXML(string);
};


//The images aren't loaded in document.ready, you need to use the window.load event to make sure they're present, like this:
$(window).load(function(){
	$('#imgContainer > img').each(function(){
		//get img dimensions
		var h = $(this).height();
		var w = $(this).width();
	
		//get div dimensions
		var contH =$('#imgContainer').height();
		var contW =$('#imgContainer').width();
	
		//set img position
		$(this).css( 'marginLeft', (contW - w) / 2 );
		$(this).css( 'marginTop', (contH - h) / 2 );
	
	});	
})
//OR
//the images also have a load() method, which allows finer granularity, especially if there are perhaps multiple images to load.
$('#imgContainer img').load (function (){
     //adjustSlide('#imgContainer > img', '#imgContainer');	
})


//remove extra tags
//remove br next the product title 
$('.productDetail div p:first').each(function () {
	if ($(this).next().is('br')) {
		$(this).next().remove();
	}
});

$(".productDetail p, .productDetail div").each(function(){
	if ($(this).html().trim()=="" || $(this).html().trim()=="&nbsp;")
		$(this).hide();
});	


//detect browser
if($.browser.msie  && parseInt($.browser.version, 10) === 7){

}	


/*******************http://www.onextrapixel.com/2012/10/04/10-useful-and-time-saving-javascript-snippets/****************************/
//change out my different stylesheets to that my site changes throughout any 24hour period
function getStylesheet() {
var currentTime = new Date().getHours();
if(0 <= currentTime&&currentTime <9){
document.write("<link rel='stylesheet' href='../style/header.css' type='text/css'");
}
if(9 <= currentTime&&currentTime <18){
document.write("<link rel='stylesheet' href='../style/header2.css' type='text/css'");
}
if(18 <= currentTime&&currentTime <24){
document.write("<link rel='stylesheet' href='../style/header3.css' type='text/css'");
}
}

getStylesheet(); 


/* Validating a date effectively */
function isValidDate(value, userFormat) {
 
  // Set default format if format is not provided
  userFormat = userFormat || 'mm/dd/yyyy';
 
  // Find custom delimiter by excluding
  // month, day and year characters
  var delimiter = /[^mdy]/.exec(userFormat)[0];
 
  // Create an array with month, day and year
  // so we know the format order by index
  var theFormat = userFormat.split(delimiter);
 
  // Create array from user date
  var theDate = value.split(delimiter);
 
  function isDate(date, format) {
    var m, d, y, i = 0, len = format.length, f;
    for (i; i < len; i++) {
      f = format[i];
      if (/m/.test(f)) m = date[i];
      if (/d/.test(f)) d = date[i];
      if (/y/.test(f)) y = date[i];
    }
    return (
      m > 0 && m < 13 &&
      y && y.length === 4 &&
      d > 0 &&
      // Check if it's a valid day of the month
      d <= (new Date(y, m, 0)).getDate()
    );
  }
 
  return isDate(theDate, theFormat);
}

/*Usage:
The following will return false because November doesn't have 31 days.
isValidDate('dd-mm-yyyy', '31/11/2012')*/


/* Setting breakpoints for responsive design */
/* This utility is a simple approach to set width breakpoints when working on responsive designs. It's a quick way to relate CSS media queries in your JavaScript code as you go.*/
function isBreakPoint(bp) {
  // The breakpoints that you set in your css
  var bps = [320, 480, 768, 1024];
  var w = $(window).width();
  var min, max;
  for (var i = 0, l = bps.length; i < l; i++) {
    if (bps[i] === bp) {
      min = bps[i-1] || 0;
      max = bps[i];
      break;
    }
  }
  return w > min && w <= max;
}

//Usage:
if ( isBreakPoint(320) ) {
  // breakpoint at 320 or less
}
if ( isBreakPoint(480) ) {
  // breakpoint between 320 and 480
}


//jQuery实现的滚动自动加载代码
var loading = false;
$(window).scroll(function(){
  if((($(window).scrollTop()+$(window).height())+250)>=$(document).height()){
	  if(loading == false){
		  loading = true;
		  $('#loadingbar').css("display","block");
		  $.get("load.php?start="+$('#loaded_max').val(), function(loaded){
		  $('body').append(loaded);
		  $('#loaded_max').val(parseInt($('#loaded_max').val())+50);
		  $('#loadingbar').css("display","none");
		  loading = false;
      });
   }
}
});

$(document).ready(function() {
$('#loaded_max').val(50);
});


/* Highlighting text */
function highlight(text, words, tag) {
 
  // Default tag if no tag is provided
  tag = tag || 'span';
 
  var i, len = words.length, re;
  for (i = 0; i < len; i++) {
    // Global regex to highlight all matches
    re = new RegExp(words[i], 'g');
    if (re.test(text)) {
      text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
    }
  }
 
  return text;
}

function unhighlight(text, tag) {
  // Default tag if no tag is provided
  tag = tag || 'span';
  var re = new RegExp('(<'+ tag +'.+?>|<\/'+ tag +'>)', 'g');
  return text.replace(re, '');
}

//Usage:	
$('p').html( highlight(
    $('p').html(), // the text
    ['foo', 'bar', 'baz', 'hello world'], // list of words or phrases to highlight
    'strong' // custom tag
));


/* Animated text effects */
/* Simple yet powerful script to animate text properties. It yields some intersting results when combined with CSS3 transitions. This snippet is provided as a jQuery plugin for ease of use: */
$.fn.animateText = function(delay, klass) {
  
  var text = this.text();
  var letters = text.split('');
  
  return this.each(function(){
    var $this = $(this);
    $this.html(text.replace(/./g, '<span class="letter">$&</span>'));
    $this.find('span.letter').each(function(i, el){
      setTimeout(function(){ $(el).addClass(klass); }, delay * i);
    });
  });
  
};

/*Usage:
Create a class in CSS with some styles and run the plugin on an element that contains some raw text, like a paragraph.*/
$('p').animateText(15, 'foo');


/*Fading elements one by one*/
$.fn.fadeAll = function (ops) {
  var o = $.extend({
    delay: 500, // delay between elements
    speed: 500, // animation speed
    ease: 'swing' // other require easing plugin
  }, ops);
  var $el = this;
  for (var i=0, d=0, l=$el.length; i<l; i++, d+=o.delay) {
    $el.eq(i).delay(d).fadeIn(o.speed, o.ease);
  }
  return $el;
}

//Usage
$(elements).fadeAll({ delay: 300, speed: 300 });


/*Counting clicks

Sometimes you need to know how many times the user clicks on an element. The most common solution is to create a counter as a global variable but with jQuery you can prevent polluting the global scope by using data() to store the counter.*/
$('button')
    .data('counter', 0)
    .click(function() {
        var counter = $(this).data('counter');  //get
        $(this).data('counter', counter + 1);   //set
        alert($(this).data('counter'));
    });


/*Embedding Youtube videos from links

Useful script to create embedded Youtube videos from links with custom parameters. It works with mostly every Youtube link format since it uses a pretty forgiving regex, but it may not work for every single case. This script also fixes the tedious "super z-index" issue that you may have experienced when embedding Youtube videos.*/	
//HTML
  <a href="http://www.youtube.com/watch?v=QK8mJJJvaes&sns=em"></a>
  <a href="http://www.youtube.com/watch?v=2KUxXPl5egs&feature=relmfu"></a>
  
function embedYoutube(link, ops) {
	
 
  var o = $.extend({
    width: 480,
    height: 320,
    params: ''
  }, ops);
 
  var id = /\?v\=(\w+)/.exec(link)[1];
 
  return '<iframe style="display: block;"'+
    ' class="youtube-video" type="text/html"'+
    ' width="' + o.width + '" height="' + o.height +
    ' "src="http://www.youtube.com/embed/' + id + '?' + o.params +
    '&amp;wmode=transparent" frameborder="0" />';
}

/*Usage:
Check out the Youtube API parameters for more info on params.*/
$('a').each(function(i) {
     var link = $(this).attr('href');
     (this).html( embedYoutube(link, { params: 'theme=light' }) );
});


/*Reducing text by word limit

This script is similar to the excerpt function in WordPress. It allows you to truncate a string to a particular number of words and it adds ellipsis if necessary. It works with text that may have other inline tags such as strong or em or links.*/
	
function excerpt(str, nwords) {
  var words = str.split(' ');
  words.splice(nwords, words.length-1);
  return words.join(' ') +
    (words.length !== str.split(' ').length ? '&hellip;' : '');
}

//usage
  $p.data('text', $p.html()); // store untouched text first
  $p.html( excerpt($p.html(), 50) );


/*Creating dynamic menus

Create any type of menu dynamically, like ordered lists, unordered lists, select dropdowns... It's a very simple script with lots of potential.*/
function makeMenu(items, tags) {
 
  tags = tags || ['ul', 'li']; // default tags
  var parent = tags[0];
  var child = tags[1];
 
  var item, value = '';
  for (var i = 0, l = items.length; i < l; i++) {
    item = items[i];
    // Separate item and value if value is present
    if (/:/.test(item)) {
      item = items[i].split(':')[0];
      value = items[i].split(':')[1];
    }
    // Wrap the item in tag
    items[i] = '<'+ child +' '+
      (value && 'value="'+value+'"') +'>'+ // add value if present
        item +'</'+ child +'>';
  }
 
  return '<'+ parent +'>'+ items.join('') +'</'+ parent +'>';
}

//Usage:
// Dropdown select month
makeMenu(
  ['January:JAN', 'February:FEB', 'March:MAR'], // item:value
  ['select', 'option']
);
 
// List of groceries
makeMenu(
  ['Carrots', 'Lettuce', 'Tomatos', 'Milk'],
  ['ol', 'li']
);


//setTotalWidth
function setTotalWidth(columns) {  
	 var currentWidth, totalWidth = 0;  
	 $(columns).each(function(){  
		  currentWidth = $(this).outerWidth(true);
          totalWidth += currentWidth;
	 });  
	 $(columns).parent('ul').width(totalWidth+1);  
} 

 

//Force DOM redraw/refresh on Chrome/Mac
$(el).css("border", "solid 1px transparent");
setTimeout(function()
{
	$(el).css("border", "solid 0px transparent");
}, 1000);


// in jquery
$('#parentOfElementToBeRedrawn').hide().show();

// in plain js
document.getElementById('parentOfElementToBeRedrawn').style.display = 'none';
document.getElementById('parentOfElementToBeRedrawn').style.display = 'block';	


var forceRedraw = function(element){

    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;  // don't worry about previous display style

    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        element.style.display = disp;
        n.parentNode.removeChild(n);
    },20); // you can play with this timeout to make it as short as possible
}



//HTML5 data-* Attributes
<div data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'></div>

$("div").data("role") === "page";
$("div").data("lastValue") === 43;
$("div").data("hidden") === true;
$("div").data("options").name === "John";


//Resolve the returned Promise when all animations have ended (including those initiated in the animation callback or added later on):
$("button").on( "click", function() {
	$("p").append( "Started...");
	$("div").each(function( i ) {
	   $( this ).fadeIn().fadeOut( 1000 * (i+1) );
	});
	$( "div" ).promise().done(function() {
	$( "p" ).append( " Finished! " );
	});
});

//Resolve the returned Promise using a $.when() statement (the .promise() method makes it possible to do this with jQuery collections):
var effect = function() {
   return $("div").fadeIn(800).delay(1200).fadeOut();
};
$("button").on( "click", function() {
	$("p").append( " Started... ");
	$.when( effect() ).done(function() {
	   $("p").append(" Finished! ");
	});
});


//How to Create Barcodes for a Website -- QR Code
//http://www.freshdesignweb.com/how-to-create-barcodes-for-websites.html
/*
    chs for define image size.
    cht for define code type
    chl for define URLs website
*/
<img src="https://chart.googleapis.com/chart?chs=230x230&amp;cht=qr&amp;chl=http://www.freshdesignweb.com" >


//get()
//jQuery provides a core method get(), which will convert all matched jQuery objects back into an array of DOM objects
/*
<ol>
<li>Jeter</li>
<li>Damon</li>
</ol>
*/
//$('li').get(0)
var lis = $("ol li").get().reverse();  // [<li id="foo">, <li id="bar">]
$("ol").empty();
$.each(lis, function(i){
$("ol").append("<li>" + lis[i].innerHTML + "</li>");
});
		

$("div").click(function() {
  alert("You clicked on div with an index of " + $("div").index(this));	
});


//horizontalAccordion
$.fn.horizontalAccordion = function (speed) {
	return this.each(function () {
		var $accordionHeaders = $(this).find('h3'),
		$open = $accordionHeaders.next().filter(':first'),
		width = $open.outerWidth();
		// initialize the display
		$accordionHeaders.next().filter(':not(:first)').css({ display : 'none', width : 0
		});
		$accordionHeaders.click(function () {
		  if ($open.prev().get(0) == this) {
		      return;
		  }
		$open.animate({ width: 0 }, { duration : speed });
		$open = $(this).next().animate({ width : width }, { duration : speed });
		});
	});
};
$(document).ready(function () {
$('#accordionWrapper').horizontalAccordion(200);
});

//toggle both the height and the opacity at the same time
$('#animate').click(function () {
  $('.box').animate({ opacity: 'toggle', height: 'toggle' });
  return false;
});


//tabs
function tabs(tabMenu,active,tabContent){
 $(tabContent).each(function(){
	$(this).children().eq(0).show().siblings().hide();
 });
 $(tabMenu).each(function(){
	 $(this).children().eq(0).addClass(active);
 });
 $(tabMenu).children().click(function(){
	 if (!$(this).hasClass(active)) {
	   $(this).addClass(active).siblings().removeClass(active);
	   var index = $(tabMenu).children().index(this);
	   $(tabContent).children().eq(index).show().siblings().hide();		 
     }
 });
}


//Fade out an image, and fade in another one (replacing the previous one)
$('imageelement').fadeOut(function() {
	$(this).load(function() {
		$(this).fadeIn();
	}).attr('src', AnotherSource);
});


//Run a function 5 times with intervals of 20 seconds
var count = 0;
function myFunction() {
	count++;
	if(count > 5) clearInterval(timeout);
	//do something
}
var timeout = setInterval(myFunction, 20000);


//Cancel an ajax request
var req = $.ajax({
	type:     "POST",
	url:     "someurl",
	data:     "id=1",
	success: function(){
	  //something
	}
});
//Cancel the Ajax Request
req.abort();


//Check if cookies are enabled
$(document).ready(function() {
	var dt = new Date();
	dt.setSeconds(dt.getSeconds() + 60);
	document.cookie = "cookietest=1; expires=" + dt.toGMTString();
	var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
	if(!cookiesEnabled){
		//cookies are not enabled
	}
});


// Toggle all checkboxes
var tog = false; // or true if they are checked on load
$('a').click(function() {
	$("input[type=checkbox]").attr("checked",!tog);
	tog = !tog;
});


//  Get the index of an element
$("ul > li").click(function () {
	var index = $(this).prevAll().length;
});


// Center an element on the screen
jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
	this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
	return this;
}
//$(element).center();


//Moving options from list A to list B
$('#add').click(function() {
	!$('#select1 option:selected').appendTo('#select2');
});
$('#remove').click(function() {
	!$('#select2 option:selected').appendTo('#select1');
});


//Detecting when a div’s height changes using jQuery
$('element').bind('resize', function(){
  alert( 'Height changed to' + $(this).height() );
}


//Selecting root element of a certain level in the document
//1 level:
$('*:not(* *)');
//2 level:
$('*:not(* *)').find('> *');
//3 level:
$('*:not(* *)').find('> * > *');


//Searching a string in jQuery
var foundin = $('*:contains("some string bla bla")');


// How to convert decimal to hexadecimal
num = num.toString(16);
// reverse process:
num = parseInt(num, 16);


//Filtering By More Than One Attribute in JQuery
var elements = $('#someid input[type=sometype][value=somevalue]').get(); 	   


//  How to expire a cookie in x minutes
var date = new Date();
date.setTime(date.getTime() + (x * 60 * 1000));
$.cookie('example', 'foo', { expires: date });


//  Selecting the first x items with jQuery
example: first 10 anchors
$('a').slice(0,10);
//or
$('a:lt(10)');

	
//  Working with a select element
//Get the value of a selected option
$('#selectElement').val();
 
//Get the text of a selected option
$('#selectElementId :selected').text();
 
//Remove an option (e.g. id=1)
$("#selectElementId option[value='1']").remove();


// How to get client ip address with jQuery
$.getJSON("http://jsonip.appspot.comcallback=",function(data){
	alert( "Your ip: " + data.ip);
});


// Count number of textarea lines
var text = $("#textareaId").val();
var lines = text.split(/\r|\r\n|\n/);
alert(lines.length);


//Find X/Y of an HTML element with Javascript
// Based on: http://www.quirksmode.org/js/findpos.html
var getCumulativeOffset = function (obj) {
	var left, top;
	left = top = 0;
	if (obj.offsetParent) {
		do {
			left += obj.offsetLeft;
			top  += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	return {
		x : left,
		y : top
	};
};


// Distinguish left and right mouse click
$("#element").live('click', function(e) {
	if( (!$.browser.msie && e.button == 0) || ($.browser.msie && e.button == 1) ) {
		alert("Left Button");
	}
	else if(e.button == 2)
		alert("Right Button");
});


//set alternative color/ background-image for table 
$('.inner-content_table-alt-color-style').each(function(){
	$(this).find('tr:even').addClass('even');
	//Using a background image on a table row for ie7
	if($.browser.version<8){
	  $(this).find('tr:even').css({ 'background':'none'});
	  $(this).find('tr:even').each(function(){
		 $(this).find('td').eq(0).addClass('table-td-left');
		 $(this).find('td').eq(1).addClass('table-td-right');			  
	  })
	}
})


//? :
var word = (site_lang=='en-US')?'Detail':(site_lang=='zh-HK')?'詳情':'详情';

//clear cache
var url = "http://gumball.wickedlysmart.com/?callback=updateSales" + "&random=" + (new Date()).getTime();


//null and undefined
/*
It helps to appreciate the difference between a value and a variable.

A variable is a storage location that contains a value.

null means that the storage location does not contain anything (but null itself is just a special kind of value). Read that last sentence carefully. There is a difference between what null is and what null means. 99% of the time you only care about what null means.

Undefined means that the variable (as opposed to the value) does not exist.

Undefined and null are two different values.
Undefined means a variable hasn’t been assigned a value; 
null means the variable has the no value.
*/

//null is an object you can use when creating variables when you don't have a value yet:
var myVal; // After this statement is executed, the variable winner will be assigned the value undefined
var myVal = null;  //there’s a value in JavaScript that means “no value”.

// null is a falsy value
if(!myVal) {
    myVal = 'some value';
}
if (myVal!==undefined){}



//Creating Objects
//When you create an object in javascript, I like to declare all my object properties at the top of my object function:
function myObject() {
    // declare public object properties
    this.myProp = null;
    this.myProp2 = null;

    this.init = function() {
        // ... instantiate all object properties
    };
    this.init();
}

/*
If a variable is not known or not initialized in the current scope it is undefined.

If you want to use a variable and indicate that it has an invalid value for instance you may want to assign it null because accessing an undefined variable will throw an error if you try to work with it (despite checking if it is undefined).

If something is undefined you also have the possibility to add it to an object. If a variable is defined but contains null you know that this variable may be used already by another part of your program.
*/

/*
For example, it can prepare a global variable to be used in more parts of the code.

If you start your code with var iNeedThisEverywhere = null; then you can use it inside more objects/actions in the code, but if you don't do that, then this variable will not be shared throughout the code.

Of course, you will actually put something inside that variable somewhere during the code, but since you defined this variable at the very beginning, it will be shared further anyway.
*/



/*It wouldn't make any difference setting a local variable to null at the end of the function because it would be removed from the stack when it returns anyway.

However, inside of a closure, the variable will not be deallocated.*/

var fn = function() {
   var local = 0;
   return function() {
      console.log(++local);
   }
}
var returned = fn();
returned(); // 1
returned(); // 2
//When the inner function is returned, the outer variable's scope will live on, accessible to the returned inner function.

/*


    I'm a bit confused about Javascript undefined & null.

Don't be confused about null. It generally makes sense and behaves similarly to other scripting languages' concepts of the out-of-band 'null', 'nil' or 'None' objects.

undefined, on the other hand, is a weird JavaScript quirk. It's a singleton object that represents out-of-band values, essentially a second similar-but-different null. It comes up:

    When you call a function with fewer arguments than the arguments list in the function statement lists, the unpassed arguments are set to undefined. You can test for that with eg.:

    function dosomething(arg1, arg2) {
        if (arg2===undefined)
        arg2= DEFAULT_VALUE_FOR_ARG2;
        ...
    }

    With this method you can't tell the difference between dosomething(1) and dosomething(1, undefined); arg2 will be the same value in both. If you need to tell the difference you can look at arguments.length, but doing optional arguments like that isn't generally very readable.

    When a function has no return value;, it returns undefined. There's generally no need to use such a return result.

    When you declare a variable by having a var a statement in a block, but haven't yet assigned a value to it, it is undefined. Again, you shouldn't really ever need to rely on that.

    The spooky typeof operator returns 'undefined' when its operand is a simple variable that does not exist, instead of throwing an error as would normally happen if you tried to refer to it. (You can also give it a simple variable wrapped in parentheses, but not a full expression involving a non-existant variable.) Not much use for that, either.

    This is the controversial one. When you access a property of an object which doesn't exist, you don't immediately get an error like in every other language. Instead you get an undefined object. (And then when you try to use that undefined object later on in the script it'll go wrong in a weird way that's much more difficult to track down than if JavaScript had just thrown an error straight away.)

    This is often used to check for the existance of properties:

    if (o.prop!==undefined) // or often as truthiness test, if (o.prop)
       ...do something...

    However, because you can assign undefined like any other value:

    o.prop= undefined;

    that doesn't actually detect whether the property is there reliably. Better to use the in operator, which wasn't in the original Netscape version of JavaScript, but is available everywhere now:

    if ('prop' in o)
        ...

In summary, undefined is a JavaScript-specific mess, which confuses everyone. Apart from optional function arguments, where JS has no other more elegant mechanism, undefined should be avoided. It should never have been part of the language; null would have worked just fine for (2) and (3), and (4) is a misfeature that only exists because in the beginning JavaScript had no exceptions.

    what does if (!testvar) actually do? Does it test for undefined and null or just undefined?

Such a 'truthiness' test checks against undefined, null, 0, NaN and empty strings. But in this case, yes, it is really undefined it is concerned with. IMO, it should be more explicit about that and say if (testvar!==undefined).

    once a variable is defined can I clear it back to undefined (therefore deleting the variable).

You can certainly assign undefined to it, but that won't delete the variable. Only the delete object.property operator really removes things.

delete is really meant for properties rather than variables as such. Browsers will let you get away with straight delete variable, but it's not a good idea and won't work in ECMAScript Fifth Edition's strict mode. If you want to free up a reference to something so it can be garbage-collected, it would be more usual to say variable= null.

    can I pass undefined as a parameter?

Yes.
*/

/*
You cannot (should not?) define anything as undefined, as the variable would no longer be undefined – you just defined it to something.

You cannot (should not?) pass undefined to a function. If you want to pass an empty value, use null instead.

The statement if(!testvar) checks for boolean true/false values, this particular one tests whether testvar evaluates to false. By definition, null and undefined shouldn't be evaluated neither as true or false, but JavaScript evaluates null as false, and gives an error if you try to evaluate an undefined variable.

To properly test for undefined or null, use these:
*/
if(typeof(testvar) === "undefined") { ... }
if(testvar === null) { ... }

//example
Hammer.detection = {
    // contains all registred Hammer.gestures in the correct order
    gestures: [],

    // data of the current Hammer.gesture detection session
    current: null,

    // when this becomes true, no gestures are fired
    stopped: false,

    startDetect: function startDetect(inst, eventData) {
        // already busy with a Hammer.gesture detection on an element
        if(this.current) {
            return;
        }

        this.stopped = false;

        this.current = {
            inst        : inst, // reference to HammerInstance we're working for
            startEvent  : Hammer.utils.extend({}, eventData), // start eventData for distances, timing etc
            lastEvent   : false, // last eventData
            name        : '' // current gesture we're in/detected, can be 'tap', 'hold' etc
        };
    }
}


//JS Constructor
function Movie(title, genre, rating, showtimes) {
	this.title = title;
	this.genre = genre;
	this.rating = rating;
	this.showtimes = showtimes;
	this.getNextShowing = function() {
		var now = new Date().getTime();
		for (var i = 0; i < this.showtimes.length; i++) {
			var showtime = getTimeFromString(this.showtimes[i]);
			if ((showtime - now) > 0) {
				return "Next showing of " + this.title + " is " + this.showtimes[i];
			}
		}
		return null;
	};
}
//
var banzaiMovie = new Movie("Buckaroo Banzai", "Cult Classic", 5, ["1:00pm", "5:00pm", "7:00pm", "11:00pm"]);

var movie = {
	title: "Plan 9 from Outer Space",
	genre: "Cult Classic",
	rating: 2,
	showtimes: ["3:00pm", "7:00pm", "11:00pm"],
	getNextShowing: function() {
		var now = new Date().getTime();
		for (var i = 0; i < this.showtimes.length; i++) {
			var showtime = getTimeFromString(this.showtimes[i]);
			if ((showtime - now) > 0) {
				return "Next showing of " + this.title + " is " + this.showtimes[i];
			}
		}
	}
};
//
var test = movie.getNextShowing();


//moveup and down
/*
.card {
    position: absolute;
    top: -30px;
}
*/
moveUp();
function moveDown(){
	$('.card').animate({top:-30},1500,'linear',moveUp);
	$('.card-shadow').animate({top:150},1500,'linear');
}

function moveUp(){
	$('.card').animate({top:-40},1500,'linear',moveDown);
	$('.card-shadow').animate({top:160},1500,'linear');
}



//在for..in循环中使用 hasOwnProperty 方法

//在javascript中数组是不关联的。而对象来说是hashtable类型的。你可以使用for 。.. in循环来迭代对象属性。如下：
for (var prop in someObject) {
    alert(someObject[prop]); // alert‘s value of property
}

//但是问题在于，以上代码会循环proptype chain中的所有的属性，有时候这样会出错，你可能只想使用实际存在的属性。使用hasOwnProperty方法可以帮助你解决这个问题。s
for (var prop in someObject) {
    if (someObject.hasOwnProperty(prop)) {
      alert(someObject{prop]); // alert‘s value of property
    }
}


//offset position scrollTop scrollLeft PageX pageY
/*#offset:Get the current coordinates of the first element in the set of matched elements, relative to the document(the hold window area include the scrollTop area)
#Position: Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
left: 5, top: 5-> Must to give the offset parent a css property: position:relative to get the child's position.
#ScrollTop and ScrollLeft: Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
#pageX, pageY: The mouse position relative to the left edge of the document. 
*/


/*瀏覽器當然是先下載主文件的html，完成後在這文件中，它會找到不同的外部文件，組成一個下載的列表。由於瀏覽器在同一server支持同時下載多個文件， 它會按下載列表文件發現的先後次序，同時下載好幾個文件。世事往往也沒那麼簡單。外部的*.js文件真的可以同時下載嗎？現在有a.js和b.js，可是a.js更改了文件的dom，用了document.write輸出了一些html，b.js則是基於a.js的輸出而執行，執行的次序搞亂了，便會出現問題。這情況就是我們常說的blocking。

舊版瀏覽器（IE8以前)，都是不同時下載*.js。Microsoft也意識到，不能同時執行，不等於不可以同時下載。在IE8及以後，*.js便可以同時下載。只要之後執行次序沒錯，便沒有問題。由於新版瀏覽器都比較先進，我們現在的目標已成了加快舊版瀏覽器網頁載入速度。
 
使用DEFER
DEFER是個IE支持的keyword，當加入外部js文件時，你可以使用DEFER，以告知IE這是不同立即執行（也不會影響dom）。因此，舊版IE便可以把這類*.js同時下載。請參考用法。
使用javascript去動態生成script tag
A script that will not run until after the page has loaded:*/
<script src="demo_defer.js" defer></script> 

/*使用javascript去動態生成script tag去載入其他*.js也是另一方法。同時，你也要確保它們不會影響dom，而且執行次序沒有衝突。這是個很常用的技巧。*/
  function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
  }
  
  window.onload = loadScript;



//jQuery: Unexpected call to method or property access 
/*I was extremely confused because it appeared to be a jQuery error, not an error in my javscript.  After some debugging, I narrowed it down to the line (in my code) $('#header p, title').html(TITLE);
It turns out that IE8 does not like when jQuery tries to set the title of the page.  Simple fix!  */
document.title=TITLE; 


/* Filter */
//.filter( selector )
$('li').filter(':even').css('background-color', 'red');

//.filter( function(index) )
$('li').filter(function(index) {
return index % 3 == 2;
}).css('background-color', 'red');

 $("div").css("background", "#c8ebcc")
.filter(".middle")
.css("border-color", "red");

$("div").css("background", "#b4b0da").filter(function (index) {
    return index == 1 || $(this).attr("id") == "fourth";
}).css("border", "3px double red");

//.filter( jQuery object )
$("div").filter( $("#unique") )


//Loop all the children in the parent 
function sitemapRecursive(nodes, count){
	if(count--==0){
		return null;
	}
	var result = $('<ul />');
	//console.log(nodes);
	nodes.each(function(){
		
		var	href = $(this).children('link').text(),
			target = ($(this).children('link').attr('type')=='page') ? '_self' : '_blank',
			title = $(this).children('label').text();			

		var tempNode = $('<li><a href="'+href+'" target="'+target+'">'+title+'</a></li>');	
		
		if($(this).children('description').text().replace('[lang]',lang) == location.pathname){
			tempNode.addClass('left-menu_current');
		}
		
		result.append(tempNode);
		
		if($(this).children('node').length > 0){			
			tempNode.append(sitemapRecursive($(this).children('node').not(index), count));
		}
	});
	return result;
} 

var menu = sitemapRecursive(node.children('node'), 2);
menu.appendTo(leftMenu);


//JQuery .each() backwards
/*
<div id="container">
	<div class="block-item">1</div>
	<div class="block-item">2</div>
	<div class="block-item">3</div>
</div>*/

 $($(".block-item").get().reverse()).each(function(i, element) {
     $(this).appendTo($(this).parent());
 });
 
jQuery.fn.reverse = [].reverse;
   $('h3').each( function() { console.info( this.innerHTML ); } );
   $('h3').reverse().each( function() { console.info( this.innerHTML ); } );

jQuery.fn.sort = [].sort;
   $('h3').sort( function( a, b ) {
      var a = a.innerHTML, b = b.innerHTML;
      return a > b ? 1 : a < b ? -1 : 0
   }).each( function() { console.info( this.innerHTML ); } );



/*get the cell from the table*/
function clientCoords(){ 
  /*alert(document.getElementById("TableId").rows[1].cells[1].value); */   //show a cell
  o=document.getElementById("TableId")  
  for(i=0;i<o.rows.length;i++){  
	for(j=0;j<o.rows[i].cells.length;j++)  
	  alert(o.rows[i].cells[j].innerHTML)  
  }
} 

/*set as homepage*/
<a href=# onclick="this.style.behavior='url(#default#homepage)';this.setHomePage('http://www.lanrentuku.com/');">设为首页</a>
<a href="javascript:window.external.AddFavorite('http://www.lanrentuku.com/','懒人图库')">收藏本站</a>


/*Loop an array*/
tableArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
var i= 0;
document.write("<table border=1>");		
while(i < tableArray.length){
	if (i % 5 == 0){document.write ("<tr>");}
	document.write ("<td width =150>"+tableArray[i]+"<br></td>");
	if (i % 5 == 4){	document.write ("</tr>");}    //分子小於分母的情況:餘數即為分子-like 1%5餘數為1， 4%5餘數為4
	i++;
}
document.write("</table>")


/*fullscreen when open page*/
top.window.moveTo(0,0);
if (document.all) {
top.window.resizeTo(screen.availWidth,screen.availHeight);
}
else if (document.layers||document.getElementById) {
if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth){
top.window.outerHeight = screen.availHeight;
top.window.outerWidth = screen.availWidth;
}
}


//HTML Entity Decode
var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();

var string = decodeEntities($('a.top-menu_tab-current').html()),
//var decoded = $("<div/>").html(encodedStr).text();


/*
图片高度BUG修正： 
由于网络传输的速度问题，当浏览器加载了dom，但是img图片还没有加载完毕，这个插件在计算图片高度和定位的时候，就会出错，在firefox和chrome中最为明显，尤其是google chrome。

原因：在chrome浏览器下测试，在图片加载过程中，img的宽度和高度均为0，而在IE下，则浏览器先给img设定了宽度和高度，所以这个插件在IE下使用正常，但在chrome会出错。而这个插件看了官方的image demo也是如此，box层并没有动态生成一个高度值把布局撑开。

解决办法就是先让所有的图片加载完毕，才执行一次masonry()方法。
*/


/* call and apply
http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
The main difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly.
Pseudo syntax:
theFunction.apply(valueForThis, arrayOfArgs)
theFunction.call(valueForThis, arg1, arg2, ...)
Sample code:*/
function theFunction(name, profession) {
    alert("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");

function juggle() {                                 //#1
  var result = 0;
  for (var n = 0; n < arguments.length; n++) {      //#2
	result += arguments[n];
  }
  this.result = result;                             //#3
}

var ninja1 = {};                                    //#4
var ninja2 = {};                                    //#4

juggle.apply(ninja1,[1,2,3,4]);                     //#5

juggle.call(ninja2,5,6,7,8);                        //#6

assert(ninja1.result === 10,"juggled via apply");   //#7
assert(ninja2.result === 26,"juggled via call");    //#7


//control mouse wheel --jquery.mousewheel.min.js
	$(document).mousewheel(function(event, delta) {
      $(this).scrollLeft($(this).scrollLeft()-(delta * 30));
   });


// Bootstrap's dropdown menus immediately close on document click.
// Don't let this event close the menu if a submenu is being clicked.
// This event propagation control doesn't belong in the menu-aim plugin
// itself because the plugin is agnostic to bootstrap.
$(".dropdown-menu li").click(function(e) {
	e.stopPropagation();
});

$(document).click(function() {
	// Simply hide the submenu on any click. Again, this is just a hacked
	// together menu/submenu structure to show the use of jQuery-menu-aim.
	$(".popover").css("display", "none");
	$("a.maintainHover").removeClass("maintainHover");
});
		
		

/* Class - js function */
//use function -- closure
function slider(container, obj, R, L, list, goDirectId){
	this.container = (typeof(container) == 'string')?	d.getElementById(container):container;
	this.obj = (typeof(obj) == 'string')?	d.getElementById(obj):obj;
	this.arrowR = (typeof(R) == 'string')?	d.getElementById(R):R;
	this.arrowL = (typeof(L) == 'string')?	d.getElementById(L):L;
	this.ratio = 3;
	this.timeOutSpeed = 10;
	this.curIndex = 0;
	this.containerW = this.container.offsetWidth;
	this.objW = this.obj.offsetWidth;
	this.total = Math.ceil(this.objW/this.containerW);
	this.isScroll = true;
	if (list){
		this.navList = d.getElementById(list);
		this.navArray = new Array();
	}
	
	var highlightA;
	var self = this;
	
	this.init = function()
	{
	}
}
	
function setPhotoSlide() {
	
	var content = d.getElementById('mainContent');
	//Set Photo
	if (getElementsByClassName(content, 'photoContainer').length){
		new setPhotos(getElementsByClassName(content, 'photoContainer')[0]);
	}
}
		
function setPhotos(container){
	var photos = getElementsByClassName(container, 'mainPhoto')[0];
	var thumbnails = getElementsByClassName(container, 'thumbnail')[0];
	var mask = getElementsByClassName(container, 'mask')[0];
	var leftArrow = getElementsByClassName(container, 'leftArrow')[0];
	var rightArrow = getElementsByClassName(container, 'rightArrow')[0];
	var imgList = photos.getElementsByTagName('img');
	var navList = thumbnails.getElementsByTagName('a');
	var total = navList.length;
	var section;
	var navLimit = 3;
	var self = this;
	
	this.init = function(){
		for (var i=0; i<total; i++){
			imgList[i].style.display = 'none';
			
			navList[i].num = i;
			navList[i].onclick = function()
			{
				if (section == this.num)	return;
				self.changeNav(this.num);
			};
			
			if (i == total - 1)	navList[i].className = 'last';
		}
		
		self.changeNav(0);
		
		//Set Width
		thumbnails.style.width = ((146 * total) + (6 * (total - 1))) + 'px';
		
		setTimeout(function(){new slider(mask, thumbnails, rightArrow, leftArrow);}, 10);
	};
	
	this.changeNav = function(i){
		if (!isNaN(section)){
			navList[i].className = navList[i].className.replace(/active/g, '');
			imgList[section].style.display = 'none';
		}
		navList[i].className += ' active';
		imgList[i].style.display = 'block';
		
		$('.mainPhoto').css({'opacity':0});
		$('.mainPhoto').animate({'opacity':1}, 500, '', function(){});
		
		section = i;
	};
	
	this.init();
}

//use prototype 1.
var Test = function(options) {
	this._name = options.name;
	this._testName = options.testName;
	this.expected = options.expected;
	this.testEnvironmentArg = options.testEnvironmentArg;
	this.callback = options.callback;
};
Test.prototype = {
	init: function() {
		var tests = id("qunit-tests");
		if (tests) {
			var b = document.createElement("strong");
				b.innerHTML = "Running " + this.name;
			var li = document.createElement("li");
				li.appendChild( b );
				li.className = "running";
				li.id = this.id = "test-output" + testId++;
			tests.appendChild( li );
		}
	},
	setup: function() {
		if (this.module != config.previousModule) {
			if ( config.previousModule ) {
				runLoggingCallbacks('moduleDone', QUnit, {
					name: config.previousModule,
					failed: config.moduleStats.bad,
					passed: config.moduleStats.all - config.moduleStats.bad,
					total: config.moduleStats.all
				} );
			}
			config.previousModule = this.module;
			config.moduleStats = { all: 0, bad: 0 };
			runLoggingCallbacks( 'moduleStart', QUnit, {
				name: this.module
			} );
		}
	}
}

//2.
function AnimOnScroll( element, options ) {	
	this.element = element;
	this.options = extend( this.defaults, options );
	this._init();
}

AnimOnScroll.prototype = {
	defaults : {
		// Minimum and a maximum duration of the animation (random value is chosen)
		minDuration : 0,
		maxDuration : 0,
		// The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
		// if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport. 
		// If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
		viewportFactor : 0
	},
	_init : function() {
		this.items = Array.prototype.slice.call( document.querySelectorAll( '#' + this.element.id + ' > li' ) );
		this.itemsCount = this.items.length;
		this.itemsRenderedCount = 0;
		this.didScroll = false;

		var self = this;

		imagesLoaded( this.element, function() {
			
			// initialize masonry
			new Masonry( self.element, {
				itemSelector: 'li',
				transitionDuration : 0
			} );
			
			if( Modernizr.cssanimations ) {
				// the items already shown...
				self.items.forEach( function( el, i ) {
					if( inViewport( el ) ) {
						self._checkTotalRendered();
						classie.add( el, 'shown' );
					}
				} );

				// animate on scroll the items inside the viewport
				window.addEventListener( 'scroll', function() {
					self._onScrollFn();
				}, false );
				window.addEventListener( 'resize', function() {
					self._resizeHandler();
				}, false );
			}

		});
	},
	_onScrollFn : function() {
		var self = this;
		if( !this.didScroll ) {
			this.didScroll = true;
			setTimeout( function() { self._scrollPage(); }, 60 );
		}
	}
}

new AnimOnScroll( $('#grid'), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
} );

//3
function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};
			
//4
function Animal(name){
   this.name = name || 'sky';  //if no param, use default value
   this.type = 'animal';
   
   this.say();	
}

Animal.prototype = {
    say: function(){
	    alert( this.name +'fly');	
	}
}

new Animal(); //skyfly
new Animal('cc'); //ccfly

				
//use Object 
var PropertiesGallery ={
	init: function(options){
	   	this.handler = $(options.handler);
		this.suffleElem = $(options.suffleElem);
		this.jCarousel = $(options.jCarousel);
		this._thumbLayer = $('.thumb-layer');
		this._btnZoom = $('.btnZoom');
		
		this.jcarouselSetup(1);
		this.colorboxSetup();
		this.triggerShuffle();		
	},
	jcarouselSetup: function(scrollTo){
		var self = this;		
	          this.jCarousel.jcarousel();

		var jCarouselGet =this.jCarousel.data('jcarousel');
		if(jCarouselGet){ jCarouselGet.scroll( scrollTo);}
	},
	triggerShuffle: function(){
		var self = this;
	          this.handler.click(function(){
		    self._shuffle(self.suffleElem);
		self.jcarouselSetup(1);
		})	
	},
	_shuffle: function(elem){
		  var allElems = $(elem).get(),
		  getRandom = function(max) {
			 return Math.floor(Math.random() * max);
		  },
		  shuffled = $.map(allElems, function(){
			 var random = getRandom(allElems.length),
				 randEl = $(allElems[random]).clone(true)[0];
			 allElems.splice(random, 1);
			 return randEl;
		  });
  
		  $(elem).each(function(i){
			  $(this).replaceWith($(shuffled[i]));
		  });
  
		  return $(shuffled);	    	
	}	
}

PropertiesGallery.init({
	handler:    '.properties-tabMenu',
	suffleElem: '.properties-carousel>li',
	jCarousel:  '.properties-carousel',
	colorbox:   '.properties-imgGroup',
	colorboxGroup: 'properties-imgGroup'
});


//uss $.extend for options
var PropertiesGallery ={
	defaults : {
		handler: '.properties-tabMenu>li',
		suffleElem: '.properties-carousel>li',
		jCarousel: '.properties-carousel',
		colorbox: '.properties-imgGroup',
		colorboxGroup: 'properties-imgGroup'
	},		
	create: function(options){
		this.options = $.extend( this.defaults, options );
		this.init();	     	
	},
	init: function(){		
		this.jcarouselSetup(1);
		this.triggerShuffle();		
	},
	jcarouselSetup: function(scrollTo){
		var self = this,
		    thumbLayer = '.thumb-layer',
		    btnZoom = '.btnZoom';		
		var carouselSetting = {
			  easing: 'easeOutBack',
			  animation: 600,	
			  scroll: 6,
			  initCallback: function(carousel){
				  if (carousel.list.children().length<7){
					 carousel.buttonNext.addClass('hide');
					 carousel.buttonPrev.addClass('hide');
				  }
		}		
	    $(this.options.jCarousel).jcarousel(carouselSetting);

		var jCarouselGet = $(this.options.jCarousel).data('jcarousel');
		if(jCarouselGet){ jCarouselGet.scroll( scrollTo);}
	}
}

//exec directly
var PageTransitions = (function() {
	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$iterate = $( '#iterateEffects' ),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );

		$( '#dl-menu' ).dlmenu( {
			animationClasses : { in : 'dl-animate-in-2', out : 'dl-animate-out-2' },
			onLinkClick : function( el, ev ) {
				ev.preventDefault();
				nextPage( el.data( 'animation' ) );
			}
		} );

		$iterate.on( 'click', function() {
			if( isAnimating ) {
				return false;
			}
			if( animcursor > 67 ) {
				animcursor = 1;
			}
			nextPage( animcursor );
			++animcursor;
		} );

	}

	function nextPage( animation ) {

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		
		var $currPage = $pages.eq( current );

		if( current < pagesCount - 1 ) {
			++current;
		}
		else {
			current = 0;
		}

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = '', inClass = '';

		switch( animation ) {

			case 1:
				outClass = 'pt-page-moveToLeft';
				inClass = 'pt-page-moveFromRight';
				break;
			case 2:
				outClass = 'pt-page-moveToRight';
				inClass = 'pt-page-moveFromLeft';
				break;
		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}

	init();

	return { init : init };
	
})();

/*
Learn How to Read, Parse and Display XML Data in Random Order with jQuery
Author: Kevin Liew
Website: http://www.queness.com
*/

XMLLIST = {
	//general settings
	xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
	display: '3', //number of items to be displayed
	random: true, //display randomly {true|false}
	appendTo: '#list', //set the id/class to insert XML data
	
	init: function () {
	
		//jQuery ajax call to retrieve the XML file
		$.ajax({
			type: "GET",
	    	url: XMLLIST.xml,
	   		dataType: "xml",	   		
	   	 	success: XMLLIST.parseXML
	  	});	
	
	}, // end: init()
	
	parseXML: function (xml) {
	
		//Grab every single ITEM tags in the XML file
		var data = $('item', xml).get();
		//Allow user to toggle display randomly or vice versa
		var list = (XMLLIST.random) ? XMLLIST.randomize(data) : data;
		var i = 1;
		
		//Loop through all the ITEMs
		$(list).each(function () {
			
			//Parse data and embed it with HTML
			XMLLIST.insertHTML($(this));			

			//If it reached user predefined total of display item, stop the loop, job done.
			if (i == XMLLIST.display) return false;
			i++;
		});

	
	}, // end: parseXML()

	insertHTML: function (item) {

		//retrieve each of the data field from ITEM
		var url = item.find('url').text();
		var image = item.find('image').text();
		var title = item.find('title').text();
		var desc = item.find('desc').text();
		var html;
		
		//Embed them into HTML code
		html = '<div class="item">';
		html += '<a href="' + url + '"><img src="' + image + '" alt="' + title + '" />';
		html += '<span>' + title + '</span></a>';
		html += '<p>' + desc + '</p>';
		html += '</div>';
		
		//Append it to user predefined element
		$(html).appendTo(XMLLIST.appendTo);
		
	}, // end: insertHTML()

    
	randomize: function(arr) {  		
  		//randomize the data
  		//Credit to JSFromHell http://jsfromhell.com/array/shuffle
	    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		    return arr;
  
  	} // end: randomize()      	
}
//Run this script
XMLLIST.init();


/* voting */ 
var Vote = (function(){
	
	var numberOfVote = 1;

	return {
		addVote: function () {
				currentVote++;
				if (currentVote >= numberOfVote) {
						currentVote = numberOfVote;
	
						if ( !this.checkVoted () ) {
	
								// show captcha block;                    
						}
				}
		},
		removeVote: function () {
				currentVote--;
				if (currentVote < 0) {currentVote = 0;}
		
				// hide captcha block;
		},
		checkVoted: function () {
				return (docCookies.getItem ('_voted')) ? true : false;
		},
		submit: function (e) {
				var _self = Vote;
				
				if (currentVote < numberOfVote) {
						alert ("請選擇節目");
						return false;
				}
	
				if ($('#txtVoteCaptcha').val() == "") {
						alert ("驗證碼錯誤");
						return false;
				}
		
				$.ajax({
					url: '_vote.php',
					type: 'POST',
					data: $('#voteForm').serialize(),
					dataType: 'json',
				}).done(function(data) {
					if (data.err) {
						alert("投票錯誤。\n\n" + data.err);
						MyAPP.reloadCaptcha("#captcha");
						return;
					}
								
					$(".item.selected").each(function(index){
							var voted = parseInt($(this).find("span.val").text());
							voted++;
							$(this).find("span.val").text(voted);
					});
					
					// change vote block's color
					$('div.section#vote03').css("background-color", "#faa61a");
					$('div#voteFormWrapper').addClass("finish_voting");
					
					$("div#nomorevotes").css("display","block");
					$("div#voteFormContainer").css("display","none");
					$("a#btnVote").off().css("display","none");
					$("#vote03 .itemsContainer ul").off();
					
					// doubleclick's floodlight tag
						callFloodlightTag();
						
						// google remarketing tag
						callGoogleRemarketing();
								
				});
				return false;
		}
  };
})();

$(function(){
  if (Vote.checkVoted ()) {
		$("body").css("background", "yellow");
	} 
	
	$("#voteForm").submit (Vote.submit);	
})


//当需要遍历一个对象中的属性或方法时，可以使用for...in...循环，如下：
var andy={
	age:34,
	name:"Andy",
	isMale:true,
	sayhello:function(name){
		alert("Hello!"+name);
	}
};

for(var key in andy){
	alert(key);// 这里是属性或是方法名
	alert(andy[""+key+""]);// 这里是属性或是方法对应的值
}

//如下显示了等同于上面andy对象的关联数组：
var andy=[];
andy["age"]=34;
andy["name"]="Andy";
andy["isMale"]=true;
andy["sayHello"]=function(name){alert("Hello!"+name)};


for(var key in andy){
	alert(key);
	alert(andy[""+key+""]);
}



//product list
$('ul.product-list li .box').each(function(i, e) {
	switch (i % 3) {
		case 0:
			$(this).addClass('item-left');
			break;
		case 1:
			$(this).addClass('item-mid');
			break;
		case 2:
			$(this).addClass('item-right');
			break;
	}

})


//checks if element it is called on is visible (only checks horizontally
//Dropbox\web\html5+css3\jQuery-CSS3水平图片悬停效果
(function($) {
  var $window = $(window);
  
  $.fn.isVisible = function(){
    var $this = $(this),
      Left = $this.offset().left,
      visibleWidth = $window .width();

    return Left < visibleWidth;  
  }
})(jQuery);

var list = $('.portfolio-items'),
	showVisibleItems = function(){
	list.children('.item:not(.falldown)').each(function(el, i){
		var $this = $(this);
		if($this.isVisible()){
		  $this.addClass('falldown');
		}
	  });
	};

//initially show all visible items before any scroll starts
showVisibleItems();

//then on scroll check for visible items and show them
list.scroll(function(){
  showVisibleItems();
});


//$.extend 用一个或多个其他对象来扩展一个对象，返回被扩展的对象。
/*合并 settings 和 options，修改并返回 settings*/
var settings = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
$.extend(settings, options);

=> settings == { validate: true, limit: 5, name: "bar" }


//合并 defaults 和 options, 不修改 defaults
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
var settings = $.extend({}, defaults, options);

=>
settings == { validate: true, limit: 5, name: "bar" }
empty == { validate: true, limit: 5, name: "bar" }


//jQuery 判断元素上是否绑定了事件
var $events = $("#foo").data("events");
if( $events && $events["click"] ){　　//your code}     



// iOS viewport scaling bug fix, by @mathias, @cheeaun and @jdalton
(function(doc){var addEvent='addEventListener',type='gesturestart',qsa='querySelectorAll',scales=[1,1],meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];function fix(){meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];doc.removeEventListener(type,fix,true);}if((meta=meta[meta.length-1])&&addEvent in doc){fix();scales=[.25,1.6];doc[addEvent](type,fix,true);}}(document));


// Pagre reload after form submib in chrome
//http://stackoverflow.com/questions/10719505/force-a-reload-of-page-in-chrome-using-javascript-no-cache
// Great findings! I just encountered the same issue and this really helps a lot! However, in addition to your finding, it seems that Chrome always sends a GET request for location.reload()...IE/FF is repeating the last request instead.


//javascript下载过程仍然会组舍其他资源的下载，比如图片。所以要在適當的地方動態加載js
function loadScript(url){
  var script = document.createElement('script');
  script.type = 'text/javascript'; 
  script.async = true;
  script.src = url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script); 
}

window.onload = loadScript('js.js'); 

//神奇的setTimeout（）
/* 这里我不过多的将setTimeout()的原理，有兴趣的读者可以具体去看《高性能javascript》的第六章。我重点强调下，setTimeout的第二个参数并不是一个精确的时间，二是必须在javascript线程空闲时才能运行。利用这个特性，如下代码简单可以实现等待其他js代码执行完毕后再执行function里面的代码。*/
setTimeout(function(){
  // do some before other javascripe codes had processed
}, 25)
//但在function里面不要使用document.write()方法，因为执行setTimeout里面函数时往往已经到了页面onload之后，此时再执行 document.write 将导致当前页面的内容被清空，因为它会自动触发 document.open 方法。


// JavaScript提升性能之移除空事件处理程序
//如果带有事件处理程序的元素被innerHTML删除了，那么原来添加到元素中的事件处理程序极有可能被当作垃圾回收， 如果你想知道某个元即将被移除，那么最好手工移除事件处理程序。
<div id="myDiv">
	  <input type="button" value="Click Me" id="myBtn">
</div>
<script type="text/javascript">
	  var btn=document.getElementById("myBtn");
	  btn.onclick=function(){
			btn.onclick=null;
			document.getElementById("myDiv").innerHTML="Processing…";
	  }
</script>
//在此，我们设置<div>的innerHTML属性之前，先移除了按钮的事件处理程序。这样就确保了内存可以被再次利用，而从DOM中移除按钮也做到了干净利索。


//Cut string
function cutstr(str,len)
{
   var str_length = 0;
   var str_len = 0;
      str_cut = new String();
      str_len = str.length;
      for(var i = 0;i<=str_len; i++){
        a = str.charAt(i);
        str_length++;
        if(escape(a).length > 4)
        {
        //中文字符的長度經編碼之後大於4
         str_length++;
         }
         str_cut = str_cut.concat(a);
         if(str_length>=len)
         {
         str_cut = str_cut.concat("...");
         return str_cut;
         }
    }
    //如果給定字符串小於指定長度，則返回源字符串；
    if(str_length<10){
     return  str;
    }
}
 
  var text = cutstr("香港全稱香港特別行政區，簡稱香港特區",10);
  alert(text);
  text2 = cutstr("ass asd ada  asda ",10);
  alert(text2);

//ajax .done() and success function
//http://stackoverflow.com/questions/8840257/jquery-ajax-handling-continue-responses-success-vs-done
/*  .done(): Description: Add handlers to be called when the Deferred object is resolved.

    success: (.ajax() option): A function to be called if the request succeeds.
	
/*The nice thing about done is that the return value of $.ajax is now a deferred promise that can be bound to anywhere else in your application. So let's say you want to make this ajax call from a few different places. Rather than passing in your success function as an option to the function that makes this ajax call, you can just have the function return $.ajax itself and bind your callbacks with done, fail, then, or whatever. Note that always is a callback that will run whether the request succeeds or fails. done will only be triggered on success.	

Deprecation Notice:
 The jqXHR.success(), jqXHR.error(), and jqXHR.complete() callbacks will be deprecated in jQuery 1.8. To prepare your code for their eventual removal, use jqXHR.done(), jqXHR.fail(), and jqXHR.always() instead.

If you are using the callback-manipulation function (using method-chaining for example), use .done, .fail and .always instead of success, error and complete.*/

$.ajax({ cache: false,
    url: "/Admin/Contents/GetData",
    data: { accountID: AccountID }
}).done(function (data) {
    xxx;
}).fail(function (jqXHR, textStatus) {
    xxx;
});

$.ajax({ cache: false,
    url: "/Admin/Contents/GetData",
    data: { accountID: AccountID },
    success: function (data) {
        $('#CityID').html(data);
    },
    error: function (ajaxContext) {
        alert(ajaxContext.responseText)
    }
});

///
function xhr_get(url) {

  return $.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
    beforeSend: showLoadingImgFn
  })
  .always(function() {
    // remove loading image maybe
  })
  .fail(function() {
    // handle request failures
  });

}

xhr_get('/index').done(function(data) {
  // do stuff with index data
});

xhr_get('/id').done(function(data) {
  // do stuff with id data
});


//Subscribe
$(".submit").click(function() {
		var address = "mailForm.php?email=" + $(".input").val();

		$.get(address, function(data) {
				alert("Thank you for your support!");
		});
});


/*事件委托（又名：冒泡事件）

除 非特别说明，每一个JavaScript事件（如click, mouseover 等）在DOM结构树上都会冒泡到它的父元素上。如果我们想让很多elements(nodes)调用同一个function这是非常有用的。取而代之的是 你可以只对它们的父级绑定一次，而且可以计算出是哪一个节点触发了事件，而不是绑定一个事件监听器到很多节点上这种效率低下的方式。例如，假如我们要开发 一个包含很多input的大型form，当input被选择的时候我们想绑定一个class name。像这样的帮定是效率低下的：*/
$('#myList li).bind('click', function(){  
	$(this).addClass('clicked');  
	// do stuff  
}); 

反而，我们应该在父级侦听click事件。

$('#myList).bind('click', function(e){  
	var target = e.target, // e.target grabs the node that triggered the event.  
		$target = $(target);  // wraps the node in a jQuery object  
	if (target.nodeName === 'li') {  
		$target.addClass('clicked');  
		// do stuff  
	}  
}); 

//父节点担当着发报机的工作，可以在触发了事件的目标element上做一些工作。如果你发现自己把一个event listener帮定到很多个element上，那么你这种做法是不正确的。


//获取 URL 中传递的参数
$.urlParam = function(name){  
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);  
	if (!results) { return 0; }  
	return results[1] || 0;  
} 


//To check whether something is being hovered
    if ($('#hello').is(':hover')) {
        alert('hello');
    }
	
	
//how to unbind and bind again (http://stackoverflow.com/questions/5832541/how-to-unbind-and-bind-again)
//You need to provide a handler to the function so you can bind/unbind from it. (Also allows you to bind/unbind specific events handlers within the same event:
function handler() {
    // do something
}
$("#archive").click(handler); // bind the first time
$("#archive").unbind('click', handler); // unbind
$("#archive").click(handler); // bind again	

var handler = function() {
  alert('The quick brown fox jumps over the lazy dog.');
};
$('#foo').on('click', handler);   // bind the first time
$('#foo').off('click', handler);  // unbind
$('#foo').on('click', handler);   // bind again	

$('a.next').click(function() {
    $(this).unbind('click');
    ...
    // calls some functions, one of which fades out the a.next if needed
    ...
   $(this).bind('click');
}


//Get first and last date of current month
var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);


//
/*e.target = The thing under the mouse (as ben says... the thing that triggers the event).
e.currentTarget = The thing before the dot... (see below)

e.target will be one of the 10 buttons and e.currentTarget will always be the "btns" clip. 

e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to. */

//实际上用的最多的应该是e.currentTarget,而很少用e.target，两者的区别在于currentTarget总是指向执行侦听的对象，而target总是指向事件冒泡过程最深层的对象
//在outer上点击时，target跟currentTarget是一样的，都是div，而在inner上点击时，e.target是p、e.currentTarget是div


//on
New method (example 1):

$(document).on('click', '#someting', function(){

});

Deprecated method (example 2):

$('#something').live(function(){

});

As shown above, there is a difference. The twist is .on() can actually be called similar to .live(), by passing the selector to the jQuery function itself:

Example 3:

$('#something').on('click', function(){

});

However, without using $(document) as in example 1, example 3 will not work for dynamically created elements. The example 3 is absolutely fine if you don't need the dynamic delegation.



/* 
* Function to detect IE
*/
// ----------------------------------------------------------
// A short snippet for detecting versions of IE in JavaScript
// without resorting to user-agent sniffing
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
//     ie === undefined
// If you're in IE (>=5) then you can determine which version:
//     ie === 7; // IE7
// Thus, to detect IE:
//     if (ie) {}
// And to detect the version:
//     ie === 6 // IE6
//     ie > 7 // IE8, IE9 ...
//     ie < 9 // Anything less than IE9
// ----------------------------------------------------------
 
// UPDATE: Now using Live NodeList idea from @jdalton
 
var ie = (function(){
 
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
 
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
 
    return v > 4 ? v : undef;
 
}());


// detect css3 transtion support( need to include modernizr.custom.js )
if(Modernizr.csstransitions)  {
	
}

//click document hide element
if(touchDevice){
	document.addEventListener('touchstart', function(e){
		var target = $(e.target);
		if(!target.closest('.dropdown-container').length && !target.hasClass('.dropdown-container')){
			$('.dropdown-container .option').hide();
		}
	})
}else{
	$(document).click(function(e){
		var target = $(e.target);
		if(!target.closest('.dropdown-container').length && !target.hasClass('.dropdown-container')){
			$('.dropdown-container .option').hide();
		}
	})
}

$(document).click(function(e) {
		if (e.target.className != "menu-atag") {
				$("ul").removeClass("show");
				$("ul").addClass("hide");
		}
});
				


/* 
* Function to bring in portfolio gallery items one by one
*/
$.fn.animateGallery = function() { 	

	$(this).each(function(i){
		$(this).delay(i * 150).animate({'opacity':'1'}, 300, 'easeOutExpo');
	});
};

/* 
* Function to animate leaving a page
*/
$.fn.leavePage = function() { 	
  	
	this.click(function(event){

		event.preventDefault();
		linkLocation = this.href;

		$('#header').animate({'opacity':'0', 'top':'-92px'}, 500, 'easeOutExpo');
		$('body').fadeOut(500, function(){
			window.location = linkLocation;
		});      
	}); 
};

/* 
* Function to animate content details
*/
function animateContent() { 

	// show the rest of the content		
	$('#content-detail').css({'opacity':'0', 'top':'50px'}).stop().animate({'opacity':'1', 'top':'0px'}, 500, 'easeOutExpo');
	$('#footer').css({'opacity':'0', 'top':'50px'}).stop().animate({'opacity':'1', 'top':'0px'}, 500, 'easeOutExpo');
};


/*Leverage a jQuery plugin for Flash embedding
I have been a long time fan of the swfObject script for embedding Flash files in HTML pages.
However, the standalone swfObject script contains functionality that jQuery already handles. So, why
not leverage jQuery to its fullest if you are already using it? Jonathan Neal had this same thought,
and created a plugin called jQuery-SWFObject. Below I show this plugin in use on a simple HTML
page.*/
<!DOCTYPE html>
<html lang="en">
<body>
<div id="flash"></div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script src="http://jquery.thewikies.com/swfobject/jquery.swfobject.1-0-5.js"></script>
<script>
jQuery('#flash').flash({swf: 'flash.swf'}); // This should be a path to the *.swf
</script>
</body>

//Mobile Pinch Zoom Gesture Detection in Javascript & JQuery
function onPinch(e) {
    if (e.scale > 1)
    {
        // React to the pinch zoom in here.
    } else if (e.scale < 1) {
        //React to the pinch zoom out here.
    }
}
document.getElementById("myPinchElement").ongestureend = onPinch;


//detect select box is selected
if(document.getElementById( 'select' ).selectedIndex)


//first unbind click and then bind
//Set a function with the action you need to do after you click the train
function  trainClick() {
  alert('train is clicked');
  //do some stuff
}

//When you're unbinding, call unbind with the function name:

$('#locations').click(function(){
 $('#train').unbind('click',trainClick);
//do some stuff
}

//Then, to bind the click (when #close is clicked), you'd use :

$('.close').click(function(){
  $('#train').bind('click',trainClick);
  //do some stuff
}

//NOTE :
//A better way would be use on and off, if youre using a version greater than jQuery v1.7 because, well.. it wont work. In the code above, just replace bind with on and unbind with off.

$('#train').on('click',trainClick);
$('#train').off('click',trainClick);

//social share

http://stackoverflow.com/questions/9120539/facebook-share-link-no-javascript

var socialMediaSharer = {
	faceBookLink: function(prevImg,guid){
		var baseUrl = "https://www.facebook.com/dialog/feed?app_id=281620631849987&display=popup";
		var title = "tsuioiping";
		var description = " #portfoliobox";
		var pageLink = "http://tsuioiping.com/a/" + guid;
		var link = baseUrl + "&link=" + encodeURIComponent(pageLink) + "&caption=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(description) + "&picture=" + encodeURIComponent(prevImg) + "&redirect_uri=http://www.portfoliobox.net/web/redirect/close/";


		window.open(link, "Share on Facebook","menubar=1,resizable=1,width=650,height=300");

	},
	twitterLink: function(guid){
		var baseUrl = "http://twitter.com/home?status=";
		var message = encodeURIComponent("tsuioiping - http://tsuioiping.com/a/" + guid + " #portfoliobox");
		var link = baseUrl + message;
		window.open(link, "Share on Twitter","menubar=1,resizable=1,width=650,height=300");
		return false;
	},
	pinterestLink: function(prevImg,url,index){
		var baseUrl = "http://pinterest.com/pin/create/button/";
		var description = " @portfoliobox";
		var pageLink =(url != null) ? url : document.URL + "?image#" + index;
		var link = baseUrl + "?url=" + encodeURIComponent(pageLink) + "&media=" + encodeURIComponent(prevImg) + "&description=" + encodeURIComponent(description);
		window.open(link, "Share on Pinterest","menubar=1,resizable=1,width=650,height=300");
		return false;
	},
	faceBookPageShare: function(title,description,pageUri){
		var baseUrl = "https://www.facebook.com/sharer.php?s=100";
		var description = description + " #portfoliobox";
		var pageLink = "http://tsuioiping.com/" + pageUri;
		var link = baseUrl + "&p[url]=" + encodeURIComponent(pageLink) + "&p[title]=" + encodeURIComponent(title) + "&p[summary]=" + encodeURIComponent(description);
		window.open(link, "Share on Facebook","menubar=1,resizable=1,width=650,height=300");
		return false;
	},
	twitterSharePage: function(message){
		var baseUrl = "http://twitter.com/home?status=";
		var messages = encodeURIComponent(message + " #portfoliobox");
		var link = baseUrl + messages;
		window.open(link, "Share on Twitter","menubar=1,resizable=1,width=650,height=300");
		return false;
	}
}


//Using transitionend event to detect when a transition has finished
	var triggerBttn = $( '#trigger-overlay' ),
		overlay = $( 'div.overlay' ),
		closeBttn = overlay.find( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		supportTransition = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( overlay.hasClass('open') ) {
			overlay.removeClass('open');
			overlay.addClass('close');
			var onEndTransitionFn = function( ev ) {
				if( supportTransition.transitions ) {
					if( ev.originalEvent.propertyName !== 'visibility' ) return; // access original Event object versus jQuery's normalized version
					//if( ev.propertyName !== 'visibility' ) return;             // pure js     
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				overlay.removeClass('close');
			};
			if( supportTransition.transitions ) {
				overlay.on( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !overlay.hasClass('close') ) {
			overlay.addClass('open');
		}
	}
	
};

/*1. animate element with css3 ->use the step of jquery animate function*/
/*jQuery Animation的工作原理是通过将元素的CSS样式从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。只有数字值可创建动画（比如 "margin:30px"）。字符串值无法创建动画（比如 "background-color:red"）。详细用法请参考jQuery 效果 - animate()方法和官方教程。 

像CSS3好多效果因为不是数值的，所以是没有办法直接通过animate()方法实现的。如translate(), rotate(), scale(), skew(), matrix(), rotateX(), rotateY()等方法，这些方法的一个特点就是它们的值是字符和数字混合在一起的。因此我们是不可以直接用animate()方法来动态地修改它们的值来实现动画的效果。 

如果我们自己用JavaScript实现CSS3动画，那么我们只能自已通过setInterval()方法来实现，实现起来比较复杂。其实animate()方法就是基于setInterval()方法进行工作的，但是可以用方便的设置动画速度，还可以设置是匀速还是变速。animate()方法的第二种用法有个step参数规定动画的每一步要执行的函数。我们可以用使用一个不影响元素效果显著的CSS值来触发animate()方法，然后在step回调函数中修改我们想要修改的值，这样就可以间接地实现动画了。请看transform例子: */

<div id="box"></div>
#box { 
width:100px; 
height:100px; 
position:absolute; 
top:100px; 
left:100px; 
text-indent: 90px; 
background-color:red; 
} 

$('#box').animate({ textIndent: 0 }, { 
   step: function(now,fx) { 
       $(this).css('transform','rotate('+now+'deg)'); 
    }, 
   duration:'slow' 
}, 'linear'); 

/*这里使用text-indent属性来触发动画，是因为我们这里没有文字，所以使用text-indent而不会影响到元素的样式效果，这里也可以用font-size等。然后使用animate()方法产生的节奏来实现动画。以此类推，我们就可以实现很多效果了。*/


//jquery animate step function with attribute value initialization
var element = $('#elem');
$(element).delay(2000).css({"transform":"scale(0.5)",float:"left"}).animate({
    scale: 1,
}, {
    duration: 1000,
    step: function (now, fx) {
        scaleVal = now;        
        fx.start = 0.5;
        $(this).css("transform", "scale("+scaleVal+")");
    }
});

//jquery animate step function for multiple values
var scaleVal, x, y;
scaleVal = x = y = 0;

$('div').animate({
	scale: 1,
	centerX: 100,
	centerY: 200
}, {
	duration: 2000,
	step: function (now, fx) {
		if (fx.prop == "scale") {
			scaleVal = now;
		} else if (fx.prop == "centerX") {
			x = now;
		} else if (fx.prop == "centerY") {
			y = now;
		}
		$('div').css("transform", "translate(" + x * (scaleVal - 1) + "%," + (y * scaleVal - 1) + "%)scale(" + scaleVal + ")");

	}

});

/*2. animate element with css3 - use Transit plugin ( http://ricostacruz.com/jquery.transit/)*/
//Use $('...').transition instead of jQuery's $('...').animate. It has the same syntax as animate. 
$('.box').transition({ rotateX : '45deg' });


//animate.css ()
$('#animationSandbox').removeClass().addClass('bounceOutLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
});
//jQuery plugin(animateCSS.js) to dynamically apply animate.css animations
$('#animationSandbox').animateCSS('bounceOutLeft', function(){
    alert('Boom! Animation Complete');
});



//Clone then wrap then appendTo
//As of now, wrap only works on elements that are on the DOM.  To use wrap, attach the element to the DOM first.
$('.icons a').click(function() {
  $('img',this).clone().appendTo('#selection').wrap('<span />');
  return false;
});


window.onscroll = function (e)
{
	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		detectPageVerticalPosition();
		runTheseFunctionsAfterScrollOrSwipe();
	}
}

//use orientation change function below to handle so orientation screen bug in android
$(window).on('orientationchange', orientationChangeHandler);
function orientationChangeHandler(e)
{
	disableScrollOrSwipe();
    setTimeout(function() {$(window).trigger('resize');}, 500);
}

function enableScrollOrSwipe()
{
	canScrollOrSwipe = true;
}

function disableScrollOrSwipe()
{
	canScrollOrSwipe = false;
}


/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


// pseudo active
if($('#docs').length){
	var sidenav = $('ul.side-nav').find('a');
	var url = window.location.pathname.split( '/' );
	var url = url[url.length-1];
	
	sidenav.each(function(i,e){
		var active = $(e).attr('href');

		if(active === url){
			$(e).parent('li').addClass('active');
			return false;
		}
	});
}


//How to detect if browser window is scrolled to bottom?
vwindow.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
    }
};


//Modernizr detection
if (Modernizr.canvas) 
if (Modernizr.canvastext)
if (Modernizr.video) 
if (Modernizr.inputtypes.date) 
if (Modernizr.input.placeholder) 


//finds the data in the cache
//http://stackoverflow.com/questions/2764619/how-does-jquery-data-work
$(function() {
	$('.dummy').data('foo', 'bar');
	$.each($.cache, function (k, v) {
		if (v.foo) {
			$('body').append($('<div>found foo: ' + v.foo + ' at index ' + k + '</div>'));
		}
	});
});


/* Detecting both left and right mouse movement */
(function ($) {
    var options = {};
    var oldx = 0;
    var direction = "";
    var stop_timeout = false;
    $.mousedirection = function (opts) {
        var defaults = {};
        options = $.extend(defaults, opts);
        $(document).on("mousemove", function (e) {
            var activeElement = e.target || e.srcElement;
            if (e.pageX > oldx) {
                direction = "right";
            } else if (e.pageX < oldx) {
                direction = "left";
            }
            
            clearTimeout(stop_timeout);
            stop_timeout = setTimeout(function() {
                direction = "stop";
                $(activeElement).trigger(direction);
                $(activeElement).trigger({
                    type: "mousedirection",
                    direction: direction
                });
            }, 1500);
            
            $(activeElement).trigger(direction);
            $(activeElement).trigger({
                type: "mousedirection",
                direction: direction
            });
            oldx = e.pageX; 
        });
    }
})(jQuery);


var xTravelled = 0, yTravelled = 0, prevX, prevY, isSelect = false;
$(document).on({
	mousedown : function(e) {
		isSelect = true;
	},
	mousemove : function(e) {
		if (isSelect) {
			
			prevX && (xTravelled += Math.abs(e.pageX - prevX));
			
			prevX = e.pageX;
			prevY = e.pageY;
			
		}
	},
	mouseup : function() {
		isSelect = false;
		prevX = 0;
		prevY = 0;
		xTravelled = 0;
	}
});


/* Google analytics click event tracking
https://developers.google.com/analytics/devguides/collection/analyticsjs/
https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced
https://support.google.com/analytics/answer/1033068?hl=en-GB
 */
var currentSection =  $('.wrapper').attr('class').split(' ')[1];

switch (currentSection) {
	case 'event-calendar':
		currentSectionName = 'Event Calendar';
		break;
	case 'interest-class':
		currentSectionName = 'Interest Classes';
		break;
	case 'competition':
		currentSectionName = 'Competitions';
		break;
	case 'gov-job':
		currentSectionName = 'GOV Job';
		break;
	case 'career-and-study':
		currentSectionName = 'Career and Study';
		break;
	case 'information-centre':
		currentSectionName = 'Information Centre';
		break;						
	default:	
		break; 	  
}

/* Inner articles */	
$('article.item').each(function(i){
	var $this = $(this),
			category = currentSectionName,
			label = $this.find('.title>a').text();
	
	$this.on('click', function() {
		ga('send', 'event', category+' Board', 'click', label);
	});
})


/* use cordinate to gen google map link */
/*It's very straightforward. Just use the following link, changing the latitude and longitude for yours. The z is the zoom index, you can play with it to get where you want.

http://maps.google.com/?ie=UTF8&hq=&ll=35.028028,-106.536655&z=13

I got this information by clicking on the "Link" button in the right hand corner above a map. This will also allow you to get the latitude and longitude for a location.

I don't know of a good way to make a marker on Google Maps, through the UI anyway. Right click on a point and select "What's Here?" to create a marker, but it will be to the closest thing (business, intersection, address, etc). This essentially performs a search with the latitude and longitude and returns whatever is closest to your search. A URL to do that would be:

http://maps.google.com/maps?q=35.128061,-106.535561&ll=35.126517,-106.535131&z=17

With the q (for query I believe) being the coordinates where you want your marker.

A more effective method, if you are trying to send a link to a specific address would be to search for the address in Google Maps, which will give you a marker on the exact address and then use the "Link" button to get the URL for sharing.*/

/* parallax
http://valdelama.com/easiest-parallax-in-the-world*/
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	$(".parallax").css("transform","translateY(" +  (scroll/2)  + "px)");
});


/*Script-injected "async scripts" considered harmful
https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/
*/
<!-- Modern browsers will use 'async', older browsers will use 'defer' -->
<script src="//somehost.com/awesome-widget.js" async defer></script>


var functionOne = function() {
    // Defined at run-time
};

function functionTwo() {
    // Defind at prase-time
}


/* jquery :hidden 
jQuery至1.3.2之后的:hidden选择器仅匹配display:none或<input type="hidden" />的元素，而不匹配visibility: hidden或opacity:0的元素。这也意味着hidden只匹配那些“隐藏的”并且不占空间的元素，像visibility:hidden或 opactity:0的元素占据了空间，会被排除在外。
*/

/* Apple doesn't allow autoplay when opening video with HTML5 players. This is why it wasn't working with the player.( Apple prevents autostart from working.
*/

/*自动将数据导入selectbox中*/
  $("select#ctlJob").change(function(){
    $.getJSON("/select.php",{id: $(this).val(), ajax: 'true'}, function(j){
      var options = '';
      for (var i = 0; i &amp;lt; j.length; i++) {
        options += '&amp;lt;option value="' + j[i].optionValue + '"&amp;gt;' + j[i].optionDisplay + '&amp;lt;/option&amp;gt;';
      }
      $("select#ctlPerson").html(options);
    })
  })
	
	
/* http://www.qianduan.net/position-sticky-introduction.html */
var sticky = document.querySelector('.sticky');
var origOffsetY = sticky.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);	


/*Check if Event was Triggered or Native*/
$('button').click(function(event, wasTriggered) {
    if (wasTriggered) {
        alert('triggered in code');
    } else {
        alert('triggered by mouse');
    }
});
$('button').trigger('click', true);

//e.originalEvent: if it's defined the click is human:
$('button').on('click', function (event) {
    if (event.originalEvent === undefined) alert ('triggered by code');
    else alert ('triggered by mouse');
})

$('.checkbox').change(function(e, isTriggered){
  if (!isTriggered){
    alert ('human');
  }
});
$('.checkbox').trigger('change', true); //doesn't alert


/*slideFadeToggle*/
$.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({
        opacity: 'toggle',
        height: 'toggle'
    }, speed, easing, callback);
};


/**Fire Event When User is Idle*/
idleTimer = null;
idleState = false;
idleWait = 2000;

	$('*').bind('mousemove keydown scroll', function () {
	
			clearTimeout(idleTimer);
							
			if (idleState == true) { 
					
					// Reactivated event
					$("body").append("<p>Welcome Back.</p>");            
			}
			
			idleState = false;
			
			idleTimer = setTimeout(function () { 
					
					// Idle Event
					$("body").append("<p>You've been idle for "+idleWait+" seconds.</p>");

					idleState = true; }, idleWait);
	});
	
	$("body").trigger("mousemove");



/*Force iframe to reload*/
$('iframe').attr('src', $('iframe').attr('src'));


/*http://css-tricks.com/snippets/jquery/jquery-plugin-template/*/


/*Resize iFrame to Fit Content (Same Domain Only)*/
$(function(){

		var iFrames = $('iframe');
	
	function iResize() {
	
		for (var i = 0, j = iFrames.length; i < j; i++) {
			iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
			}
			
			if ($.browser.safari || $.browser.opera) { 
			
				 iFrames.load(function(){
						 setTimeout(iResize, 0);
					 });
				
				 for (var i = 0, j = iFrames.length; i < j; i++) {
					var iSource = iFrames[i].src;
					iFrames[i].src = '';
					iFrames[i].src = iSource;
					 }
					 
			} else {
				 iFrames.load(function() { 
						 this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
				 });
			}
		
		});
		
		
/*Scroll Page Horizontally With Mouse Wheel*/
<script type='text/javascript' src='/js/jquery.mousewheel.min.js'></script>
//The "30" represents speed. preventDefault ensures the page won't scroll down.
   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });		
	 
	 
/* Shopping cart  http://www.veritas-wine.com*/	
function addToCart(product_id) {
	$.ajax({
		url: 'index.php?route=checkout/cart/update',
		type: 'post',
		data: 'product_id=' + product_id,
		dataType: 'json',
		success: function(json) {
			$('.success, .warning, .attention, .information, .error').remove();
			
			if (json['redirect']) {
				location = json['redirect'];
			}
			
			if (json['error']) {
				if (json['error']['warning']) {
					$('#notification').html('<div class="warning" style="display: none;">' + json['error']['warning'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
					
					$('.warning').fadeIn('slow');
					
					$('html, body').animate({ scrollTop: 0 }, 'slow');
				}
			}	 
						
			if (json['success']) {
				$('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
				
				$('.success').fadeIn('slow');
				
				$('#cart_total').html(json['total']);
				
				$('html, body').animate({ scrollTop: 0 }, 'slow'); 
			}	
		}
	});
}

function removeCart(key) {
	$.ajax({
		url: 'index.php?route=checkout/cart/update',
		type: 'post',
		data: 'remove=' + key,
		dataType: 'json',
		success: function(json) {
			$('.success, .warning, .attention, .information').remove();
			
			if (json['output']) {
				$('#cart_total').html(json['total']);
				
				$('#cart .content').html(json['output']);
			}			
		}
	});
}

function removeVoucher(key) {
	$.ajax({
		url: 'index.php?route=checkout/cart/update',
		type: 'post',
		data: 'voucher=' + key,
		dataType: 'json',
		success: function(json) {
			$('.success, .warning, .attention, .information').remove();
			
			if (json['output']) {
				$('#cart_total').html(json['total']);
				
				$('#cart .content').html(json['output']);
			}			
		}
	});
}

function addToWishList(product_id) {
	$.ajax({
		url: 'index.php?route=account/wishlist/update',
		type: 'post',
		data: 'product_id=' + product_id,
		dataType: 'json',
		success: function(json) {
			$('.success, .warning, .attention, .information').remove();
						
			if (json['success']) {
				$('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
				
				$('.success').fadeIn('slow');
				
				$('#wishlist_total').html(json['total']);
				
				$('html, body').animate({ scrollTop: 0 }, 'slow'); 				
			}	
		}
	});
}

function addToCompare(product_id) { 
	$.ajax({
		url: 'index.php?route=product/compare/update',
		type: 'post',
		data: 'product_id=' + product_id,
		dataType: 'json',
		success: function(json) {
			$('.success, .warning, .attention, .information').remove();
						
			if (json['success']) {
				$('#notification').html('<div class="success" style="display: none;">' + json['success'] + '<img src="catalog/view/theme/default/image/close.png" alt="" class="close" /></div>');
				
				$('.success').fadeIn('slow');
				
				$('#compare_total').html(json['total']);
				
				$('html, body').animate({ scrollTop: 0 }, 'slow'); 
			}	
		}
	});
} 


/*http://stackoverflow.com/questions/251420/invoking-javascript-code-in-an-iframe-from-the-parent-page
Calling a parent JS function from iframe is possible, but only when both the parent and the page loaded in the iframe are from same domain i.e. abc.com, and both are using same protocol i.e. both are either on http:// or https://.

The call will fail in below mentioned cases:

    Parent page and the iframe page are from different domain.
    They are using different protocols, one is on http:// and other is on https://.
Any workaround to this restriction would be extremely insecure. 
*/	
//trigger an event from parent window within an iframe   https://gist.github.com/parkerproject/7915651
$('iframe').on('click', 'iframeElement', function(){
  parent.$("element").trigger("event");
})		

//http://www.sitepoint.com/jquery-change-css-iframe-content/

//http://ternarylabs.com/2011/03/27/secure-cross-domain-iframe-communication/
//https://github.com/ternarylabs/porthole/

//change the background color of the document contained in an iframe:  http://www.w3schools.com/jsref/prop_frame_contentwindow.asp
//Anything within the iframe can be access by accessing the iframe's contentWindow property, but only if the iframe's content is from the same origin as the parent window.
function myFunction() {
    var x = document.getElementById("myframe");
    var y = x.contentWindow.document;
    y.body.style.backgroundColor = "red";
}

//Change the background colour of links inside of an iframe.
//The .contents() method can also be used to get the content document of an iframe, if the iframe is on the same domain as the main page.
    waiting for the load event of the iframe
    using .contents() to jump into the iframe
//<iframe src="//api.jquery.com/" width="80%" height="600" id="frameDemo"></iframe>
$( "#frameDemo" ).contents().find( "a" ).css( "background-color", "#BADA55" ); 	


//http://my.oschina.net/justdo/blog/118391
"top.location.href"是最外层的页面跳转
"location.href"是本页面跳转
"parent.location.href"是上一层页面跳转. 

//Cross Domain Cookies with jQuery Cookie
//http://stackoverflow.com/questions/3342140/cross-domain-cookies
/*You can read cookies on a subdomain of the same domain, but never on completely different domains.
The way you would normally get around this is to pass a session id or other authentication token via URL to the other domain, but if you cannot use server-side code that will not be secure.

You cannot share cookies across domains. You can however allow all subdomains to have access. To allow all subdomains of example.com to have access, set the domain to .example.com.

It's not possible giving otherexample.com access to example.com's cookies though.

//  Cross-Domain LocalStorage  https://jcubic.wordpress.com/2014/06/20/cross-domain-localstorage/
As you may know, LocalStorage is domain based. You can't read or write from localstorage that's on different domain, even if that's subdomain. But there is iframe trick that you can use to store data from domain to it's subdomain.
*/


/* Recaptcha */
// from hktv.com.hk
/*
<div id="voteFormContainer">
  <label for="txtVoteCaptcha">驗證碼:</label>
  <div class="formContent">
    <input id="txtVoteCaptcha" type="text" name="vote_captcha" value="">
    <img id="captcha" src="inc/securimage/securimage_show.php?sid=0.6808519163168967" alt="CAPTCHA Image"> 
    <a href="#" class="btn reload-captcha"><img src="http://d2o9qxyn05o57q.cloudfront.net/assets/images/03vote/reload.gif" alt="Reload Captcha"></a> 
  </div>
</div>
*/
var MyAPP = {
		reloadCaptcha: function (selector) {
				$(selector).prop('src', 'inc/securimage/securimage_show.php?sid=' + Math.random());
		}      
};
	
$(".reload-captcha").click (function (e) {
	 MyAPP.reloadCaptcha ("#captcha");
});	


//jquery.hasClass
(function(hasClass) {

	jQuery.fn.hasClass = function hasClassRegExp( selector ) {
		if ( selector && typeof selector.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var classNames = this[i].className.split( /\s+/ );
				for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
					if (selector.test( classNames[c]) ) {
						return true;
					}
				}
			}
            return false;
		} else {
			return hasClass.call(this, selector);
		}
	}

})(jQuery.fn.hasClass);

// if($bodyParents.hasClass(/^choice_/)) {}


//jquery.removeClass
(function(removeClass) {

	jQuery.fn.removeClass = function( value ) {
		if ( value && typeof value.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];
				if ( elem.nodeType === 1 && elem.className ) {
					var classNames = elem.className.split( /\s+/ );

					for ( var n = classNames.length; n--; ) {
						if ( value.test(classNames[n]) ) {
							classNames.splice(n, 1);
						}
					}
					elem.className = jQuery.trim( classNames.join(" ") );
				}
			}
		} else {
			removeClass.call(this, value);
		}
		return this;
	}

})(jQuery.fn.removeClass);

//$bodyParents.removeClass(/^choice_/);	 

//contains
function contains(a, obj) {
		for (var i = 0; i < a.length; i++) {
				if (a[i] === obj) {
						return true;
				}
		}
		return false;
}
if(contains(choiceArr, choiceOrder)) {}


//replace class to another class style
var elementClass = $element.attr('class');
if(typeof elementClass === 'string' && '' !== elementClass && 'sidr-inner' !== elementClass) {
	$element.attr('class', elementClass.replace(/([A-Za-z0-9_.\-]+)/g, 'sidr-class-$1'));
}

//<div class="test"> -> <div class="sidr-class-test"> 


// Check for valids urls
// From : http://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-an-url
isUrl: function (str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	if(!pattern.test(str)) {
		return false;
	} else {
		return true;
	}
}


// ios

// * iOS zooms on form element focus. This script prevents that behavior.
// * <meta name="viewport" content="width=device-width,initial-scale=1">
//      If you dynamically add a maximum-scale where no default exists,
//      the value persists on the page even after removed from viewport.content.
//      So if no maximum-scale is set, adds maximum-scale=10 on blur.
//      If maximum-scale is set, reuses that original value.
// * <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=2.0,maximum-scale=1.0">
//      second maximum-scale declaration will take precedence.
// * Will respect original maximum-scale, if set.
// * Works with int or float scale values.
function cancelZoom()
{
    var d = document,
        viewport,
        content,
        maxScale = ',maximum-scale=',
        maxScaleRegex = /,*maximum\-scale\=\d*\.*\d*/;
 
    // this should be a focusable DOM Element
    if(!this.addEventListener || !d.querySelector) {
        return;
    }
 
    viewport = d.querySelector('meta[name="viewport"]');
    content = viewport.content;
 
    function changeViewport(event)
    {
        // http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/
        viewport.content = content + (event.type == 'blur' ? (content.match(maxScaleRegex, '') ? '' : maxScale + 10) : maxScale + 1);
    }
 
    // We could use DOMFocusIn here, but it's deprecated.
    this.addEventListener('focus', changeViewport, true);
    this.addEventListener('blur', changeViewport, false);
}

//prevent zoom mobile ios in focus
$.fn.cancelZoom = function()
{
		return this.each(cancelZoom);
};

	// Usage:
	$('input:text,select,textarea').cancelZoom();
	
	
//https://github.com/kvz/phpjs/blob/master/functions/strings/htmlspecialchars_decode.js	
function htmlspecialchars_decode(string, quote_style) {
  //       discuss at: http://phpjs.org/functions/htmlspecialchars_decode/
  //      original by: Mirek Slugen
  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      bugfixed by: Mateusz "loonquawl" Zalega
  //      bugfixed by: Onno Marsman
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //         input by: ReverseSyntax
  //         input by: Slawomir Kaniecki
  //         input by: Scott Cariss
  //         input by: Francois
  //         input by: Ratheous
  //         input by: Mailfaker (http://www.weedem.fr/)
  //       revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //        example 1: htmlspecialchars_decode("<p>this -&gt; &quot;</p>", 'ENT_NOQUOTES');
  //        returns 1: '<p>this -> &quot;</p>'
  //        example 2: htmlspecialchars_decode("&amp;quot;");
  //        returns 2: '&quot;'

  var optTemp = 0,
    i = 0,
    noquotes = false;
  if (typeof quote_style === 'undefined') {
    quote_style = 2;
  }
  string = string.toString()
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  var OPTS = {
    'ENT_NOQUOTES'          : 0,
    'ENT_HTML_QUOTE_SINGLE' : 1,
    'ENT_HTML_QUOTE_DOUBLE' : 2,
    'ENT_COMPAT'            : 2,
    'ENT_QUOTES'            : 3,
    'ENT_IGNORE'            : 4
  };
  if (quote_style === 0) {
    noquotes = true;
  }
  if (typeof quote_style !== 'number') {
    // Allow for a single string or an array of string flags
    quote_style = [].concat(quote_style);
    for (i = 0; i < quote_style.length; i++) {
      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
      if (OPTS[quote_style[i]] === 0) {
        noquotes = true;
      } else if (OPTS[quote_style[i]]) {
        optTemp = optTemp | OPTS[quote_style[i]];
      }
    }
    quote_style = optTemp;
  }
  if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
    string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
    // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
  }
  if (!noquotes) {
    string = string.replace(/&quot;/g, '"');
  }
  // Put this in last place to avoid escape being double-decoded
  string = string.replace(/&amp;/g, '&');

  return string;
}	



//htmlbrowser.dev.theorigo.com/jupas/assets/js/theorigo/polyfill-ie.js
// some polyfill js function for ie8

// trim()
if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
      return this.replace(rtrim, '');
    };
  })();
}

// hasOwnProperty
window.hasOwnProperty = window.hasOwnProperty || Object.prototype.hasOwnProperty;



//rem unit use in phone
http://121.40.99.17/global/rem-phone.html
(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


/*JavaScript日期相减得到天数*/
function getDays(stratDateStr,endDateStr){
	var stratDateArr,endDateArr,days;
	stratDateArr = stratDateStr.split('-');
	endDateArr = endDateStr.split('-');
	var newDateS = new Date(Date.UTC(stratDateArr[0],stratDateArr[1]-1,stratDateArr[2]));
	var newDateE = new Date(Date.UTC(endDateArr[0],endDateArr[1]-1,endDateArr[2]));
	days = parseInt(Math.abs(newDateE - newDateS ) / 1000 / 60 / 60 /24);
	return days;
}
	
	
/* 让多个ajax按顺序执行的方法 */
for(int i = 0;i<4;i++){
 $.ajax({
		 type: "POST",
		 url: "/Home/showSubMenuInfo",
		 async: false, // 设置ajax参数async为false，即与js同步，默认是true(异步).
		 data: { "cmenuid": i },
		 success: function (value) {
				console.log(value);
		 }
 });
}


/* 子元素scroll父元素容器不跟随滚动JS实现 
http://www.zhangxinxu.com/wordpress/2015/12/element-scroll-prevent-parent-element-scroll-js/
*/
$.fn.scrollUnique = function() {
    return $(this).each(function() {
        var eventType = 'mousewheel';
        // 火狐是DOMMouseScroll事件
        if (document.mozHidden !== undefined) {
            eventType = 'DOMMouseScroll';
        }
        $(this).on(eventType, function(event) {
            // 一些数据
            var scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = this.clientHeight;

            var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        

            if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                this.scrollTop = delta > 0? 0: scrollHeight;
                // 向上滚 || 向下滚
                event.preventDefault();
            }        
        });
    });	
};


/* JAVASCRIPT EVENT THROTTLING & DEBOUNCING 
A number of built-in JavaScript events fire frequently. This behavior provides benefits to general applications, but can hinder the performance or aesthetic of a page. The default sampling behavior can be easily modified by event throttling or event debouncing.

https://sberry.me/articles/javascript-event-throttling-amp-debouncing
*/
function throttle(fn, delay) {
    var allowSample = true;

    return function(e) {
        if (allowSample) {
            allowSample = false;
            setTimeout(function() { allowSample = true; }, delay);
            fn(e);
        }
    };
}

window.addEventListener('mousemove', throttle(function(e) {
    document.body.innerHTML = '(' + e.pageX + ', ' + e.pageY + ')';
}, 500));


function debounce(fn, delay) {
    var delayed;

    return function(e) {
        clearTimeout(delayed);
        delayed = setTimeout(function() {
            fn(e);
        }, delay);
    };
}

window.addEventListener('resize', debounce(function(e) {
    document.body.innerHTML = window.innerWidth + 'x' + window.innerHeight;
}, 500));


/*
requestAnimationFrame polyfill
https://gist.github.com/desandro/1866474
*/
(function( window ) {

  'use strict';

  var lastTime = 0;
  var prefixes = 'webkit moz ms o'.split(' ');
  // get unprefixed rAF and cAF, if present
  var requestAnimationFrame = window.requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame;
  // loop through vendor prefixes and get prefixed rAF and cAF
  var prefix;
  for( var i = 0; i < prefixes.length; i++ ) {
    if ( requestAnimationFrame && cancelAnimationFrame ) {
      break;
    }
    prefix = prefixes[i];
    requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
    cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
                              window[ prefix + 'CancelRequestAnimationFrame' ];
  }

  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if ( !requestAnimationFrame || !cancelAnimationFrame ) {
    requestAnimationFrame = function( callback, element ) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
      var id = window.setTimeout( function() {
        callback( currTime + timeToCall );
      }, timeToCall );
      lastTime = currTime + timeToCall;
      return id;
    };

    cancelAnimationFrame = function( id ) {
      window.clearTimeout( id );
    };
  }

  // put in global namespace
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;

})( window );


	// from http://www.quirksmode.org/js/events_properties.html#position
	function getMousePos(e) {
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}
		return {
			x : posx,
			y : posy
		}
	}
  
  
//ID - a unique ID/name generator for JavaScript https://gist.github.com/gordonbrander/2230317  
// Use:
//
//     var privateName = ID();
//     var o = { 'public': 'foo' };
//     o[privateName] = 'bar';
var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};


//http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery/34890835#34890835  HTML-encoding in JavaScript/jQuery
function htmlEncode(value){
  //create a in-memory div, set it's inner text(which jQuery automatically encodes)
  //then grab the encoded contents back out.  The div never exists on the page.
  return $('<div/>').text(value).html();
}

function htmlDecode(value){
  return $('<div/>').html(value).text();
}


myVal = myVal.replace(/\\/g, '\\\\'); // escape backslashes
myVal = myVal.replace(/"/g, '\\"');   // escape quotes


// check-if-an-image-is-loaded-no-errors-in-javascript
var i = 0;
$('img').each(function () {
    var img = new Image();
    img.onload = function () {
        i++;
        console.log($(this).attr('src') + ' - done!');
        if(i == $('img').length) 
            domIsReady();
    }
    img.src = $(this).attr('src');
});


// Adding the clearfix
var cols1 = $('#column-right, #column-left').length;

if (cols1 == 2) {
	$('#content .product-layout:nth-child(2n+2)').after('<div class="clearfix visible-md visible-sm"></div>');
} else if (cols1 == 1) {
	$('#content .product-layout:nth-child(3n+3)').after('<div class="clearfix visible-lg"></div>');
} else {
	$('#content .product-layout:nth-child(4n+4)').after('<div class="clearfix"></div>');
}





