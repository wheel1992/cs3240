 $(document).ready(function() {
                
   $('#home-form-join-us-now').bootstrapValidator({
       feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

       fields: {
           input_name: {
                trigger: 'blur',
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
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'Please enter a valid email address'
                    }
                } // validators
            }

       } // fields


   })

   .on('success.form.bv', function(e) {
    
        // reset form
        $('#home-form-join-us-now').bootstrapValidator('resetForm', true);

        // Show feedback success for form submission
        var overlay = $("#overlay")// document.getElementById('overlay');
        //overlay.style.display = "block";
        overlay.css("display", "block");
        overlay.find("#overlay-message-header p").html("Submission");
        overlay.find("#overlay-message-content").html("Thank you for joining with us. Hear the latest news from us from now on!.");
       
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