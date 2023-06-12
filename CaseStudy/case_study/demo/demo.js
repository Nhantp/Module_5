
$(".select2").select2({
    dropdownParent: $('#select2Modal'),
    width: 'resolve'
});
$('#btnSearch').on('click', function () {
    $('#submitbtn').click();
});
$('#btn_submit_popup').on('click', function () {
    $('#btnSearch').click();
});
$('#keysearch').on('change', function () {
    $('#keysearch2').val($('#keysearch').val());
});
$('#ddlWorkCity').on('change', function () {
    $('#ddlWorkCity2').val($('#ddlWorkCity').val());
});
$('#ddlFieldOfStudy').on('change', function () {
    $('#ddlFieldOfStudy2').val($('#ddlFieldOfStudy').val());
});
var loaihinhcvId = $('#hiddenLoaiHinhCV').val();
var mucluongtext = $('#hiddenMucLuong').val();
var hinhthuctraluong = $('#hiddenHinhThucTraluong').val();
if (loaihinhcvId + "" == "" && mucluongtext + "" == "" && hinhthuctraluong + "" == "") {
    $('.selectedFilter').hide();
}

if (loaihinhcvId + "" != "") {
    $('.selectedFilter').show();
    $('#filterLoaiHinh').show();
    var label = $("label[for='" + loaihinhcvId + "']")
    $('span.selectedLoaiHinhCongViec').text(label.text());
}

if (mucluongtext + "" != "") {
    $('.selectedFilter').show();
    $('#filterMucLuong').show();
    $('span.selectedMucLuong').text(mucluongtext);
}

if (hinhthuctraluong + "" != "") {
    $('.selectedFilter').show();
    $('#filterHinhThucTraLuong').show();
    $('span.selectedHinhThucTraLuong').text(hinhthuctraluong);
}
$('#btntimkiemNangCao').on('click', function () {
    $('#keysearch2').val($('#keysearch').val());
    $('#ddlFieldOfStudy2').val($('#ddlFieldOfStudy').val());
    $('#ddlWorkCity2').val($('#ddlWorkCity').val());
    $('#popupTimKiemNangCao').modal('show');
});

//clear filter
$('#clearLoaiHinh').on('click', function () {
    $('input[name="loaihinhCongViec"]').prop('checked', false);
    $('#btnSearch').click();
});
$('#clearMucLuong').on('click', function () {
    $('#MucLuong').val("");
    $('#btnSearch').click();
});
$('#clearHinhThucTraLuong').on('click', function () {
    $('#SALARY_OR_WAGE_PAY_TYPE_ID').val("");
    $('#btnSearch').click();
});

$('.followJob').on('click', function () {
    var availPosId = $(this).attr('data-availposid');
    var userId = $(this).attr('data-userid');
    var img = $(this).find('img.bookmarkJobIMG');

    $.ajax({
        url: "/student/luucongviecchouser",
        type: "POST",
        data: { availPosId: availPosId, userId: userId},
        success: function (data) {
            if (data == 1) {
                $(img).attr("src", "../Content/Home/images/icon/bookmark.png");
                window.location.reload();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
});
$('.unfollowJob').on('click', function () {
    var availPosId = $(this).attr('data-availposid');
    var userId = $(this).attr('data-userid');
    var img = $(this).find('img.bookmarkJobIMG');

    $.ajax({
        url: "/student/huyluucongviecchouser",
        type: "POST",
        data: { availPosId: availPosId, userId: userId},
        success: function (data) {
            if (data == 1) {
                $(img).attr("src","/Content/Home/images/icon/bookmark-normal.png");
                window.location.reload();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(thrownError);
        }
    });
});
$(function () {

    /* Sets the minimum height of the wrapper div to ensure the footer reaches the bottom */
    function setWrapperMinHeight() {
        $('.content_repo').css('minHeight', window.innerHeight - $('.header').height() - $('.footer').height() - 40);
    }
    /* Make sure the main div gets resized on ready */
    setWrapperMinHeight();

    /* Make sure the wrapper div gets resized whenever the screen gets resized */
    window.onresize = function () {
        setWrapperMinHeight();
    }
});

