/**
 * 이미지 다중업로드 추가
 * 
 * 
 * 
 * */
var rowIndex = 0;

function addFile(form){
	
    /*if(rowIndex > 10) return false;*/
	
	
	rowIndex++;
	
	var getTable = document.getElementById("insertTable");

	var oCurrentRow = getTable.insertRow(getTable.rows.length);
	
	
    var oCurrentCell0 = oCurrentRow.insertCell(0);
    var oCurrentCell1 = oCurrentRow.insertCell(1);
    var oCurrentCell2 = oCurrentRow.insertCell(2);
    var oCurrentCell3 = oCurrentRow.insertCell(3);
    
    
    
    oCurrentCell0.innerHTML  = "<tr>";
    oCurrentCell0.innerHTML += "<td>"+getTable.rows.length+"</td>";
    oCurrentCell1.innerHTML += "<td>";
    oCurrentCell1.innerHTML += "<div class='fileBox'>";
    oCurrentCell1.innerHTML += "<input type=file id=filename"+getTable.rows.length+" name=filename"+getTable.rows.length+" title='배너 이미지 찾기"+getTable.rows.length+"' style='width:100%;' value='N'>";
    oCurrentCell1.innerHTML += "</div>";
    oCurrentCell1.innerHTML += "</td>";
    oCurrentCell2.innerHTML += "<td>";
    oCurrentCell2.innerHTML += "<textarea id=file_contents_rows"+getTable.rows.length+" name=file_contents_rows"+getTable.rows.length+" cols=30' rows='3' class='intextarea' title=이미지"+getTable.rows.length+" 대체텍스트 입력 style='width: 100%; height: 100px'></textarea>";
    oCurrentCell2.innerHTML += "</td>";
    oCurrentCell3.innerHTML += "<td><input type='button' class='btn-default btn-xs' value='삭제' onclick=deleteFile(this.form,"+getTable.rows.length+")></td>";
    oCurrentCell3.innerHTML += "</tr>";
   
}

var rowIndexTemp = 0;

function addFileTemp(form){
	
    if(rowIndexTemp > 5){
    	alert("파일 첨부는 5개이상 추가 하실수 없습니다.");
    	return false;
    }
	
	rowIndexTemp++;
	
	
	var getTable = document.getElementById("insertTable");

	var oCurrentRow = getTable.insertRow(getTable.rows.length);
	
    var oCurrentCell = oCurrentRow.insertCell(0);
    
    oCurrentCell.innerHTML  = "<li><input type='file' id='filename' name='filename' class='infile' style='' title=''></li>";
}





/* 이미지 업로드 삭제
 * 
 * 추가 된 이미지 삭제.
 * 
 * 
 * */

function deleteFile(form,rowIndex){

    if(rowIndex == 1){
    	alert("마지막 1개까지는 삭제 하실수 없습니다.");
        return false;

    }else{

    	rowIndex--;

		var getTable = document.getElementById("insertTable");

		getTable.deleteRow(rowIndex);

   }

}

var rowIndexText = 0;
function addRowFormText(form){

    if(rowIndexText > 11){
    	alert("10개 이상 추가 하실수 없습니다");
    	return false;
    }
	
	
	
	var getTable = document.getElementById("insertTable1");

	var oCurrentRow = getTable.insertRow(getTable.rows.length);
	
	
    var oCurrentCell0 = oCurrentRow.insertCell(0);
    var oCurrentCell1 = oCurrentRow.insertCell(1);
    var oCurrentCell2 = oCurrentRow.insertCell(2);
    var oCurrentCell3 = oCurrentRow.insertCell(3);
    var oCurrentCell4 = oCurrentRow.insertCell(4);
    
    
   
    
    oCurrentCell0.innerHTML  = "<tr>";
    oCurrentCell0.innerHTML += "<td><select id=\"cp_gubun_types\" name=\"cp_gubun_types\"><option value=\"179\">서브</option></select></td>";
    oCurrentCell1.innerHTML += "<td>";
    oCurrentCell1.innerHTML += "<input type=\"text\" id=\"cp_manager\" name=\"cp_manager\" style=\"width: 98%;\" title=\""+rowIndexText+"번째 담당자 성명\">";
    oCurrentCell1.innerHTML += "</td>";
    oCurrentCell2.innerHTML += "<td>";
    oCurrentCell2.innerHTML += "<input type=\"text\" id=\"cp_phone\" name=\"cp_phone\" style=\"width: 98%;\" title=\""+rowIndexText+"번째 담당자 성명\">";
    oCurrentCell2.innerHTML += "</td>";
    oCurrentCell3.innerHTML += "<td>";
    oCurrentCell3.innerHTML += "<input type=\"text\" id=\"cp_manager_email\" name=\"cp_manager_email\" style=\"width: 98%;\" title=\""+rowIndexText+"번째 담당자 성명\">";
    oCurrentCell3.innerHTML += "</td>";
    oCurrentCell4.innerHTML += "<td>";
    oCurrentCell4.innerHTML += "<button type=\"button\" class=\"btn-default btn-xs\" onclick=\"delRow(this.form)\">삭제</button>";
    oCurrentCell4.innerHTML += "</td>";
    oCurrentCell4.innerHTML += "</tr>";
    
    rowIndexText++;
    
}

function delRow(form){
	
   
    	var getTable = document.getElementById("insertTable1");
    	
    	rowIndexText--;
    	
		getTable.deleteRow(rowIndexText);
		
   

}

/*영문 입력값 체크*/
function eng_check(input){
	var eng_pattern = /^[a-zA-Z]+$/;
	return eng_pattern.test(input);
}
/*한글만 입력 가능*/
function hangul_check(input){
	var hangul_pattern = /^[가-힣^@]+$/;
	return hangul_pattern.test(input);
}
/*영문+숫자만 입력 가능*/
function numEng_check(input){
	var pattern = /^[a-zA-Z0-9]+$/;
	return pattern.test(input);
}

function is_Number(value){
	var rex_string =/^[0-9]*$/;
	return rex_string.test(value);
}

function numEngSpecial(value){
	
	var rex_string = "";
	
	
	return rex_string.test(value);
}

function emailCheck(value){
	var pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return pattern.test(value);
}

function emailFullDoamin(str){
	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return (regex.test(str));
}
/* 첨부파일 다운로드
** 콘트롤러에서 로직구현 ModelAndView testController 에 샘플 있음
**
*/
function fileDownLoad(filePath,fileName){
	downloadForm.action = "/cmm/file/downLoad.do";
	downloadForm.filePath.value = filePath;
	downloadForm.fileName.value = fileName;
	downloadForm.submit();
}



function fnLocation(url){
	fnLocationForm.action = url;
	fnLocationForm.submit();
}


function logout(url){
	
	if(confirm("로그아웃 하시겠습니까?")){
		fnLocation(url);
	}
	
	
}

function enterKey(){
	if(window.event.keyCode == 13){
		login();
	}
}


//윈도우창 클릭한 브라우져의 가운데에 띄우기
function fnOpenCenterBrowserWindow(url, width, height, winName, feature,scbars) {
    var nTop = 0;
    var nLeft = 0;
    var nHeight = height;
    var nWidth = width;
    var strFeature = "";
    var oWindow = null;
    try {
        if (feature != null && feature.length > 0)
            strFeature = "," + feature;
        else
            strFeature = strFeature;

        if (window.document.body.offsetHeight > height && window.document.body.offsetWidth > width) {
            nTop = ((window.document.body.offsetHeight - height) / 2) + window.screenTop;
            nLeft = ((window.document.body.offsetWidth - width) / 2) + window.screenLeft;

            if (nTop < (window.screen.height - height) && nLeft < (window.screen.width - width)) {
                oWindow = window.open(url, winName, "width=" + nWidth + ",height=" + nHeight + ",top=" + nTop + ",left=" + nLeft + strFeature+",scrollbar="+scbars);
                oWindow.focus();
            }
            else {
                //새창이 모니터 화면을 벗어나면 가운데 열기
                fnOpenCenterWindow(url, width, height, winName, feature,scbars);
            }
        }
        else {
            //새창이 더 크면 모니터화면 가운데에 열기
            fnOpenCenterWindow(url, width, height, winName, feature,scbars);
        }
    }
    catch (e) {
        alert(e.description);
    }
    finally {
        oWindow = null;
    }
}

function fnOpenCenterWindow(url,width, height, winName, feature,scbars) {
	
    var nTop = 0;
    var nLeft = 0;
    var nHeight = height;
    var nWidth = width;
    var strFeature = "";
    var oWindow = null;
    try {
        if (feature != null && feature.length > 0)
            strFeature = "," + feature;
        else
            strFeature = strFeature;

        nTop = (window.screen.height / 2) - (nHeight / 2);
        nLeft = (window.screen.width / 2) - (nWidth / 2);
        
		oWindow = window.open(url,winName,"width=" + nWidth + ",height=" + nHeight + ",top=" + nTop + ",left=" + nLeft + strFeature+",scrollbars="+scbars);
		oWindow.focus();
		
    }
    catch (e) {
        alert(e.description);
    }
    finally {
        oWindow = null;
    }
}


function SHA256(s){
    
    var chrsz   = 8;
    var hexcase = 0;
  
    function safe_add (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
  
    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
  
    function core_sha256 (m, l) {
         
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1,
            0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
            0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786,
            0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
            0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147,
            0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
            0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B,
            0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
            0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A,
            0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
            0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);

        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);

        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
  
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
  
        for ( var i = 0; i<m.length; i+=16 ) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];
  
            for ( var j = 0; j<64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
  
                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));
  
                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }
  
            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }
  
    function str2binb (str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
        }
        return bin;
    }
  
    function Utf8Encode(string) {
        var utftext = "";
  
        for (var n = 0; n < string.length; n++) {
  
            var c = string.charCodeAt(n);
  
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
  
        }
  
        return utftext;
    }
  
    function binb2hex (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
        }
        return str;
    }
  
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
  
}


String.prototype.isValidPW = function(len) {

	var cnt = 0;
	var count = this.length;

	if (len > count) {
		return -9;
	}

	if (!/[\d]/g.test(this) || !/[\w]/g.test(this) || !/[\W]/g.test(this)) {
		return -7;
	}

	for (var i = 0; i < count; i++) {
		var tmp = this.charAt(i);
		if (tmp == this.charAt(i + 1) && tmp == this.charAt(i + 2) && tmp == this.charAt(i + 3)) {
			cnt++;
		}
	}

	if (0 < cnt) {
		return -1;
	} else {
		cnt = 0;
	}

	for (var i = 0, loop = count - 3; i < loop; i++) {
		var tmp1 = this.charAt(i);
		var tmp2 = this.charAt(i + 1);
		var tmp3 = this.charAt(i + 2);
		var tmp4 = this.charAt(i + 3);

		if ((1 == tmp1.charCodeAt(0) - tmp2.charCodeAt(0) && 1 == tmp2.charCodeAt(0) - tmp3.charCodeAt(0) && 1 == tmp3.charCodeAt(0) - tmp4.charCodeAt(0))
				|| (-1 == tmp1.charCodeAt(0) - tmp2.charCodeAt(0) && -1 == tmp2.charCodeAt(0) - tmp3.charCodeAt(0) && -1 == tmp3.charCodeAt(0) - tmp4.charCodeAt(0))) {
			cnt++;
		}
	}

	if (0 < cnt) {
		return -2;
	} else {
		cnt = 0;
	}

	var strValue = this.split("(").join("");
	strValue = strValue.split(")").join("");
	strValue = strValue.split("[").join("");
	strValue = strValue.split("]").join("");

	count = strValue.length;

	var dummy = "qwertyuiop asdfghjkl zxcvbnm";
	var rdummy = dummy.split("").reverse().join("");
	for (var i = 0, loop = count - 4 + 1; i < loop; i++) {
		var pattern = null;

		try {
			pattern = new RegExp(strValue.substring(i, i + 4), "gi");
			if (pattern.test(dummy) || pattern.test(rdummy)) {
				cnt++;
			}
		} catch (e) {
			cnt = 0;
			break;
		}
	}

	if (0 < cnt) {
		return -3;
	} else {
		cnt = 0;
	}

	return cnt;
};

Number.prototype.numberFormat = function(n, x) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
String.prototype.numberFormat = function(n, x) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return this.replace(new RegExp(re, 'g'), '$&,');
};

function checkall(form1){
	 
    var i=0;
    if(form1.checkItem.length){
       ;
    }else{
       if(form1.allCheck.checked){
    	   form1.checkItem.checked=true;
       }else{
    	   form1.checkItem.checked=false;
       }
    }
  
    if(form1.checkItem.length > 1){
       for(i=0; i<form1.checkItem.length; i++){
    	  
          if(form1.allCheck.checked){
        	  form1.checkItem[i].checked=true;
          }else{
        	  form1.checkItem[i].checked=false;
       }
     }
   }
    
}