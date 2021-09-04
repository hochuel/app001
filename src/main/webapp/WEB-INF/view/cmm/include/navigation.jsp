<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<script>
    function fn_MenuPro(upMenuId, menuId, menuNm, menuUrl) {

        document.menuProForm.currUpMenuId.value = upMenuId;
        document.menuProForm.currMenuId.value = menuId;
        document.menuProForm.currMenuNm.value = menuNm;
        document.menuProForm.action = menuUrl ;
        document.menuProForm.submit();
    }

    function fn_LogOut() {
        if (confirm('${lang:message("alert.logout.msg")}')) {
            document.menuProForm.action = "<c:url value='/cmm/logout.do'/>";
            document.menuProForm.submit();
        }
    }
    function fn_MyPage() {
        document.menuProForm.action = "/mem/myInfo.do";
        document.menuProForm.submit();
    }
</script>
<form id="menuProForm" name="menuProForm" method="post">
    <input type="hidden" name="currUpMenuId" id="currUpMenuId" />
    <input type="hidden" name="currMenuId" id="currMenuId" />
    <input type="hidden" name="currMenuNm" id="currMenuNm" />
</form>

        <div class="l-page__nav">
            <div class="l-nav">
                <!-- header Start -->
                <div class="l-nav__header">
                    <div class="l-header">
                        <div class="l-header__logo">
                            <div class="l-logo">
                                <c:choose>
                                <c:when test="${db_key == 'db01'}">
                                    <a href="/" class="l-logo__link">HYUNDAI GICP Administrator</a>
                                </c:when>
                                <c:otherwise><a href="/" class="l-logo__link">KIA GICP Administrator</a></c:otherwise>
                                </c:choose>
                            </div>
                        </div>

                        <div class="l-header__snb">
                            <div class="l-snb">
                                <ul class="l-snb__list">
                                    <li class="l-snb__item">
                                        <button type="button" class="l-snb__button" onClick="fn_LogOut()">${lang:message("guidance.logout")}</button>
                                    </li>
                                    <li class="l-snb__item">
                                        <button type="button" class="l-snb__button" onClick="fn_MyPage()">${lang:message("guidance.Change.my.information")}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- header End -->

                <!-- 메뉴 Start -->
                <div class="l-nav__gnb">
                    <div class="l-gnb">
                        <ul class="l-gnb__groups">
<c:forEach items="${menuList}" var="listA" varStatus="statusA">
    <c:if test="${listA.menuLevel eq '1'}">
        <c:set var="thisCounnt" value="0"/>
        <c:set var="thisCheck" value="no"/>
        <c:set var="thisUpMenuId" value=""/>
        <c:set var="thisMenuId" value=""/>
        <c:set var="thisMenuNm" value=""/>
        <c:set var="thisMenuUrl" value=""/>

        <c:forEach items="${menuList}" var="listC" varStatus="statusC">
            <c:if test="${(listC.menuLevel eq '2') and (listC.upMenuId eq listA.menuId)}">
                <c:set var="thisCounnt" value="${thisCounnt + 1}"/>
                <c:if test="${'no' eq thisCheck}">
                    <c:set var="thisCheck" value="yes"/>
                    <c:set var="thisUpMenuId" value="${listC.upMenuId}"/>
                    <c:set var="thisMenuId" value="${listC.menuId}"/>
                    <c:set var="thisMenuNm" value="${listC.menuNm}"/>
                    <c:set var="thisMenuUrl" value="${listC.path}"/>
                </c:if>
            </c:if>
        </c:forEach>
                            <li class="l-gnb__group <c:if test='${listA.menuId eq currUpMenuId}'> is-active</c:if>">
        <c:choose>
            <c:when test="${'1' eq thisCounnt}">

                                <a href="#" class="l-gnb__group-link" onClick="fn_MenuPro('${thisUpMenuId}','${thisMenuId}','${thisMenuNm}','<c:url value="${thisMenuUrl}"/>')">
            </c:when>
            <c:otherwise>
                                <a href="#" class="l-gnb__group-link">
            </c:otherwise>
        </c:choose>
                                    ${listA.menuNm}
                                </a>
                                <ul class="l-gnb__list">
        <c:forEach items="${menuList}" var="listB" varStatus="statusB">
            <c:if test="${(listB.menuLevel eq '2') and (listB.upMenuId eq listA.menuId)}">
                                    <li class="l-gnb__item <c:if test='${listB.menuId eq currMenuId}'> is-active</c:if>">
                                        <a href="#" class="l-gnb__link" onClick="fn_MenuPro('${listB.upMenuId}','${listB.menuId}','${listB.menuNm}','<c:url value='${listB.path}'/>')">
                                            ${listB.menuNm}
                                        </a>
                                    </li>
            </c:if>
        </c:forEach>
                                </ul>
                            </li>
    </c:if>
</c:forEach>
                        </ul>
                    </div>
                </div>
                <!-- 메뉴 End -->

                <!-- footer Start -->
                <div class="l-nav__footer">
                    <div class="l-footer">
                        <div class="l-footer__family-site" style="display: none">
                            <div class="l-family-site">
                                <input type="checkbox" id="for--family-site" class="l-family-site__checkbox" />
                                <label for="for--family-site" class="l-family-site__trigger">패밀리</label>
                                <ul class="l-family-site__list">
                                    <li class="l-family-site__item">
                                        <a href="#" target="_blank" class="l-family-site__link">패밀리1</a>
                                    </li>
                                    <li class="l-family-site__item">
                                        <a href="#" target="_blank" class="l-family-site__link">패밀리2</a>
                                    </li>
                                    <li class="l-family-site__item">
                                        <a href="#" target="_blank" class="l-family-site__link">패밀리3</a>
                                    </li>
                                    <li class="l-family-site__item">
                                        <a href="#" target="_blank" class="l-family-site__link">패밀리4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="l-footer__info">
                            <div class="l-info">
                                <ul class="l-info__list">
                                    <li class="l-info__item">현대자동차(주)  대표: 이원희</li>
                                    <li class="l-info__item">사업자 등록번호 101-81-09147</li>
                                    <li class="l-info__item">서울특별시 서초구 헌릉로 12&nbsp;,&nbsp; 1층 <br/>(양재동)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="l-footer__copyright">
                            <p class="l-copyright">
                               Copyright &copy; HYUNDAI MOTOR COMPANY.<br/>ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- footer End -->
            </div>
        </div>

        <div id="loadingImg" class="loading">
            <div class="loading__outer">
                <div class="loading__inner">Loading</div>
            </div>
        </div>
