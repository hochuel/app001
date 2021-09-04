(function($) {
    $(document).on('ready', function() {
    
        $('[placeholder]').placeholder();

        $('.js-datepicker').datepicker({
            buttonImage: '/images/c-date__period.png',
            showOn: 'both',
            buttonText: '날짜선택',
            closeText: '닫기',
            prevText: '이전 월',
            nextText: '다음 월;',
            showMonthAfterYear: true,
            yearSuffix: ' 년 ',
            weekHeader: '주',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
            dayNamesShort: ['일주일','월요일','화요일','수요일','목요일','금요일','토요일'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
            dateFormat: 'yy-mm-dd'
        });

        $('.js-monthpicker').MonthPicker({
            buttonImage: '/images/c-date__period.png',
            ShowOn: 'both',
            StartYear: (new Date()).getFullYear(),
            FinalYear: (new Date()).getFullYear() - 10,
            MonthFormat: 'yy-mm',
            Button: '<button type="button" class="ui-datepicker-trigger"><img src="/images/c-date__period.png" title="월 선택" /></button>'
        });

        $('.l-nav__gnb').mCustomScrollbar({
            theme:'minimal'
        });

        $('.l-gnb__group-link').on('click', function(event) {
            $(this).parent().toggleClass('is-active').siblings().removeClass('is-active');

            event.preventDefault();
        });
        $('.popup__close').on('click', function(event) {
            window.close();
        });        
    });
})(jQuery);
