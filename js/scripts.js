$(function() {

$('input[name="check"]').on('change', function() {
  $(this).closest('tr').toggleClass('hoverOnCheck', $(this).is(':checked'));
});

});