$(document).ready(function () {
    $('.sidenav').sidenav({edge: "right"});
    $('.collapsible').collapsible();
    $(".tooltipped").tooltip();
    $('.datepicker').datepicker({
        from: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
          done: "Select"
        }
    });
});