$(document).ready(() => {
  $('#myModal').on('shown.bs.modal', () => {
    $('#myInput').trigger('focus');
  });
});
