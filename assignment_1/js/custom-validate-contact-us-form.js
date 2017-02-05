 $(document).ready(function() {
                
   $('.form-contact-us').bootstrapValidator({
       feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

       fields: {
           input_contact_us_message: {
                validators: {
                        stringLength: {
                            min: 1,
                            message: 'Please do not leave your message empty'
                        }
                } // validators   
           },

           input_contact_us_email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address'
                    }
                } // validators
            }

       } // fields


   })

   .on('success.form.bv', function(e) {
        $('#form-submit-success-message').slideDown({ opacity: "show" }, "slow"); // Show feedback success for form submission

        $('.form-contact-us').data('bootstrapValidator').resetForm();

        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function(result) {
            console.log(result);
        }, 'json');
    });



}) // document ready