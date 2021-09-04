$(document).ready(function(){

    $.fn.serializeObject = function() {
        var obj = null;
        try {
            // this[0].tagName이 form tag일 경우
            if(this[0].tagName && this[0].tagName.toUpperCase() == "FORM" ) {
                var arr = this.serializeArray();
                if(arr){
                    obj = {};
                    jQuery.each(arr, function() {
                            // obj의 key값은 arr의 name, obj의 value는 value값
                        obj[this.name] = this.value;
                    });
                }
            }
        }catch(e) {
            alert(e.message);
        }finally{

        }
        return obj;
    };

    $.sendPost=function(url, objForm){
        var result = "";
        $.ajax({
            async: false,
            type: "post",
            url: url,
            data: $(objForm).serialize(),
            dataType: "json",
            success: function(data, status, xhr) {
                result = data;
                //alert("11 ::" + JSON.stringify(result));
            }
        });

        return result;
    };


    $.sendFilePost=function(url, objForm){
        var result = "";
        var form = objForm[0];
        var data = new FormData(form);
        $.ajax({
                async: false,
                type: "post",
                enctype: 'multipart/form-data',
                url: url,
                data: data,
                dataType : 'json',
                processData: false,
                contentType: false,
                success: function(data, status, xhr) {
                    result = data;
                    //alert("11 ::" + JSON.stringify(result));
                }
        });

        return result;
    };


    $.sendFormData=function(url, vForm){
        var result = "";

        $.ajax({
            async: false,
            contentType : "application/json",
            type: "post",
            url: url,
            data : JSON.stringify(vForm.serializeObject()),
            dataType: "json",
            success: function(data, status, xhr) {
                result = data;
            }
        });

        return result;
    }

    $.sendData=function(url, jsonData){
        var result = "";
        $.ajax({
            async: false,
            contentType : "application/json",
            type: "post",
            url: url,
            data : JSON.stringify(jsonData),
            dataType: "json",
            success: function(data, status, xhr) {
                result = data;
            }
        });

        return result;
    }


    $.loadObjectPost=function(url, obj, objForm){

        $(obj).empty();

        $.ajax({
            type: "post",
            url: url,
            data: $(objForm).serialize(),
            complete : function(jqXHR) {
                if(jqXHR.status == 200 || jqXHR.status == 201){
                    $(obj).html(jqXHR.responseText);
                }
            }
        });
    };

    $.getSessionCheck=function(){
        var result = $.sendData("/cmm/sessionCheck.do", null);
        return result;
    };

    $.ajaxSetup({
        cache : false,
        beforeSend: function(xhr){
            xhr.setRequestHeader("AJAX", true);
        },
        error: function(xhr, status, error){
            if (xhr.status == 400) {
                alert("Your login information has been expired.");
                location.href="/mng/login/login.do";
            }else{
                alert("ajaxSetup error ::" + JSON.stringify(xhr));
                console.log("status :" + status);
                console.log("xhr:" + xhr.status);
                console.log("error:" + error);
            }
        }

    });
});