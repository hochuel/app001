/**
 * 안드로이드 , 아이폰, 기타 로 나눠서 OS 정보를 돌려 준다.
 * 
 * @returns OS 정보(android, ios, etc) 를 반환
 */

function getMobileDeviceOS() {
    if (/Android/i.test(navigator.userAgent)) {
        return "android";
    } else if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        return "ios";
    } else {
        return "etc";
    }
}

/**
 * 윈도우 , 맥, 기타 로 나눠서 OS 정보를 돌려 준다.
 * 
 * @returns OS 정보(windows, osx, etc) 를 반환
 */

function getPcDeviceOS() {
    if (/Win/i.test(navigator.platform)) {
        return "windows";
    } else if (/Mac/i.test(navigator.platform)) {
        return "osx";
    } else {
        return "etc";
    }
}

/**
 * 디바이스 기기 타입을 반환 한다.
 * 
 * @returns 디바이스 타입(mobile, tablet, pc) 를 반환
 */

function getDeviceType() {
    if (/Android/i.test(navigator.userAgent)) {
        if (/mobile/i.test(navigator.userAgent)) {
            return "MO";
        } else {
            // TO_DO_REF TABLET인 경우 MOBILE을 태운다.
            // return "tablet";
            return "MO";
        }
    } else if (/playbook|silk|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i
            .test(navigator.userAgent)) {
        return "MO";
    } else if (/mac|macintel|iPad/i.test(navigator.userAgent)) {
        // TO_DO_REF TABLET인 경우 MOBILE을 태운다.
        // return "tablet";
        return "MO";
    } else {
        return "PC";
    }
}

/**
 * 
 * 숫자 체크
 * 
 * @param check
 *            체크할 숫자
 * @returns 정상적인 숫자 일 시 true, 비정상적인 숫자 일 시 false
 * 
 */
function isDigit(check) {
    var c;
    c = check.charAt(0);

    if (!(c >= '0' && c <= '9')) {
        return false;
    }

    for (i = 1; i < check.length; i++) {
        c = check.charAt(i);

        if (!(c >= '0' && c <= '9')) {
            return false;
        }
    }
    return true;
}

/**
 * 
 * 이메일 체크
 * 
 * @param email
 *            체크할 이메일
 * @returns 정상적인 이메일 일 시 true, 비정상적인 이메일 일 시 false
 * 
 */
function isEmail(email) {
    try {
        if (email.search("@") < 0)
            return false;

        var ary = email.split("@");

        if (!ary)
            return false;
        else if (ary.length != 2)
            return false;
        else if (ary[0].length == 0)
            return false;
        else if (ary[1].length == 0)
            return false;
        else if (ary[1].search(".") < 0)
            return false;
        else if (ary[1].split(".").length < 2)
            return false;

    } catch (exception) {
        return false;
    }

    return true;
}

/**
 * 
 * 금액에 , 추가
 * @param amt 가맹점에서 넘어온 금액
 * @returns ,가 추가된 금액
 * 
 */
function toMoney(amt){ 
    if(amt === "") return "0";
    
    var temp1 = "";
    var temp2 = "";

    temp1 = amt;
    
    while(temp1.length > 3){
        temp2 = "," + temp1.substring(temp1.length-3, temp1.length) +temp2;
        temp1 = temp1.substr(0, temp1.length -3);
    }
    
    return temp1 + temp2;
}

/**
 * Form Object Serialize
 */
$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


$.fn.extend({
   getDiffDate:function(diff, diffDate, type) {
       var toDate = new Date(diffDate);
       
       switch(type) {
           case 'day':
               toDate.setDate(toDate.getDate() - diff);
               break;
           case 'month':
               toDate.setMonth(toDate.getMonth() - diff);
               break;
           case 'year':
               toDate.setFullYear(toDate.getFullYear() - diff);
               break;
           default:
               return false;
           break;
       }
       $(this).val(toDate.getFullYear()+'-'+$.fn.setAddZero(toDate.getMonth()+1)+'-'+$.fn.setAddZero(toDate.getDate()));
   },
   setAddZero:function(val) {
       var tmp = val.toString();
       if (tmp.length == 1) {
           tmp = '0'+tmp;
       }
       return tmp;
   } 
}); 
 
 function fnSetSearchDate2(obj, type) {
     
     switch(type) {
         case 'day' :
             $("#sDate").getDiffDate(0, $("#eDate").val(), 'day');
             break;
         case 'week' :
             $("#sDate").getDiffDate(7, $("#eDate").val() ,'day');
             break;
         case 'half' :
             $("#sDate").getDiffDate(15, $("#eDate").val() ,'day');
             break;
     }
     
     //$(obj).parent('div').find("button").removeClass("is-active");
     //$(obj).addClass("is-active");
 }
 
function fnSetSearchDate(obj, type) {
    if($("#searchEDate").val() == ""){
        var today = new Date();
        var year = today.getFullYear();
        var month = $.fn.setAddZero(today.getMonth()+1);
        var day = $.fn.setAddZero(today.getDate());
        $("#searchEDate").val(year+"-"+month+"-"+day);
        $("#searchDateFlag").val("0");
    }
    
     switch(type) {
        
         case 'day' :
             $("#searchSDate").getDiffDate(0, $("#searchEDate").val(), 'day');
             break;
         case 'week' :
             $("#searchSDate").getDiffDate(7, $("#searchEDate").val() ,'day');
             break;
         case 'half' :
             $("#searchSDate").getDiffDate(15, $("#searchEDate").val() ,'day');
             break;
         case 'ndate' :
             $("#searchSDate").getDiffDate(100, $("#searchEDate").val() ,'year');
             break;             
     }
     
     //$(obj).parent('div').find("button").removeClass("is-active");
     //$(obj).addClass("is-active");
 }
 
 function inputNumber(e) {
     var inKeyCode = e || window.event;
     var keyID = (inKeyCode.which) ? inKeyCode.which : inKeyCode.keyCode;

     if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 37 || keyID == 39 || keyID == 46) {
         return true;
     } else {
         return false;
     }
 }
 /**
  * 
  * 글자수 체크 이벤트
  * @param 대상OBJ,최대글자수
  * @returns alert
  * 
  */
 function eventByteLength(obj,maxByte) {
     var strVal = obj.value; //
     var strByteLen = 0;
     var strByteMax = maxByte; //최대 바이트수
     var strByteBefore = 0
     var writeLimit="";
     var tempStr="";
     if (strVal == "")
         return;
     for (var i = 0; i < strVal.length; i++) {
         strByteLen += (strVal.charCodeAt(i) > 128) ? 2 : 1;
         tempStr=strVal.charAt(i);
         if (strByteLen > strByteMax) {
             alert("최대 " + strByteMax + "Byte까지만 가능합니다.");
             var strCutVal = strVal.substr(0, i);
             obj.value=writeLimit;
             break;
         }else{
             writeLimit+=tempStr;
         }
         strByteBefore = strByteLen;
     }
 }
 /**
  * 
  * 글자수 길이
  * @param 대상OBJ
  * @returns 글자수
  * 
  */
 function getByteLength(obj) {
     var str =  obj.value;
     var len = 0;
     
     if (str == "")
         return;
     
     for (var i = 0; i < str.length; i++) {
         len += (str.charCodeAt(i) > 128) ? 2 : 1;
     }
     return len;
 }
 
 /**
  * Loading 이미지 호출
  * @param 
  * @returns {Boolean}
  */
 function loadingOn() {
     $("#loadingImg").addClass("is-active")
 }

 /**
  * Loading 이미지 닫기
  * @param 
  * @returns {Boolean}
  */
 function loadingOff() {
     $("#loadingImg").removeClass("is-active")
 }
 