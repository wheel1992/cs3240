 $(document).ready(function() {
                
   $('#home-form-join-us-now').bootstrapValidator({
       feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

       fields: {
           input_name: {
                validators: {
                        stringLength: {
                            min: 2,
                            message: 'Minimum length of name is 2'
                        },
                        notEmpty: {
                            message: 'Please enter your name'
                        }
                } // validators   
           },

           input_email: {
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

        $('#home-form-join-us-now').data('bootstrapValidator').resetForm();

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