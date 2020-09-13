$('#contact-form').submit(function(event) {
  event.preventDefault();
  $('#feedback').html('');
  setTimeout(function() {
  	// Get data
    var data = {
      'entry.451969395': $('#form-name').val(),
      'entry.1609066041': $('#form-email').val(),
      'entry.585425995': $('#form-phone').val(),
      'entry.555184467': $('#form-message').val()
    };

    console.log('----- Llega aqui -----')
    console.log(data)

    // Validate form
    var formSuccess = true;
    // Object.keys(data).forEach(function(key, index) {
    //   if (!data[key]) {
    //     formSuccess = false;
    //     $('#feedback').html('<label class="text-danger">Please complete all fields</label>');
    //   }
    // });

    if (formSuccess) {
      // Send request
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSc09b6raxX9OkR-uOzGiN9xyWb8zFseVY8UK-BYef4oVJFSQg/formResponse',
        type: 'POST',
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on success');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on error');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        }
      });
    }
  }, 300);
});