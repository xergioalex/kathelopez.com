$('#contact-form').submit(function(event) {
  event.preventDefault();
  setTimeout(function() {
    $('#feedback').html('');
    $('#feedback').removeClass('success');

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
    Object.keys(data).forEach(function(key, index) {
      console.log(key)
      console.log(data[key])
      if (!data[key] && key !== 'entry.585425995') {
        formSuccess = false;
        $('#feedback').addClass('success');
        $('#feedback').html('Por favor completa todos los campos requeridos');
      }
    });

    if (formSuccess) {
      // Send request
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSc09b6raxX9OkR-uOzGiN9xyWb8zFseVY8UK-BYef4oVJFSQg/formResponse',
        type: 'POST',
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function(jqXHR, textStatus, errorThrown) {
          $('#feedback').html('¡Mensaje enviado!<br/>Gracias por contactarme :)');
          $('#feedback').addClass('success');
          $('#form-name').val('')
          $('#form-email').val('')
          $('#form-phone').val('')
          $('#form-message').val('')
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $('#feedback').html('¡Mensaje enviado!<br/>Gracias por contactarme :)');
          $('#feedback').addClass('success');
          $('#form-name').val('')
          $('#form-email').val('')
          $('#form-phone').val('')
          $('#form-message').val('')
        }
      });
    }
  }, 300);
});