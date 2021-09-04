<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/view/cmm/include/declare.jspf" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>GICP</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <%@include file="/WEB-INF/view/cmm/include/header.jsp" %>
    <meta name="format-detection" content="telephone=no" />
    <%@include file="/WEB-INF/view/cmm/include/script.jspf" %>

</head>
<body>
    <form action="<c:url value='/mng/login/loginPro.do'/>" method="post">
    <div class="l-login">
        <div class="l-login__contents">
            <h1 class="l-login__logo">GICP Administrator</h1>
            <p class="l-login__description">This is the Admin page for GICP. Please log in with your own account only.</p>
            <div class="l-login__groups">

                <div class="l-login__group">
                    <label for="for--login-id" class="is-hidden">Id</label>
                    <input type="text" name="userId" id="userId" autocomplete="off" class="l-login__input" placeholder="Id" required/>
                </div>
                <div class="l-login__group">
                    <label for="for--login-pw" class="is-hidden">Password</label>
                    <input type="password" name="password" id="password" autocomplete="off" class="l-login__input" placeholder="Password" required/>
                </div>
                <div class="l-login__group">
                    <label for="for--login-otp" class="is-hidden">OTP</label>
                    <input type="text" name="otpCode" id="otpCode" autocomplete="off" class="l-login__input" placeholder="OTP" onkeydown="return inputNumber(event);" required/>
                </div>

            </div>
            <div class="l-login__buttons">
                <button type="submit" class="l-login__button">Login</button>
            </div>
            <div class="l-login__copyright">Copyright ＠HYUNDAI MOTOR COMPANY.<br/> ALL RIGHTS RESERVED.</div>
        </div>
    </div>
    </form>

</body>
</html>
