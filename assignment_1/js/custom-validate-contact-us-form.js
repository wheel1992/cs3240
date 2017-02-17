 $(document).ready(function() {
                
   $('.form-contact-us').bootstrapValidator({
       feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
       excluded: [':disabled'],
       fields: {
           input_contact_us_message: {
                trigger: 'blur',
                validators: {
                        notEmpty: {
                            message: 'Please do not leave your message empty'
                        }
                    /*
                        stringLength: {
                            min: 1,
                            message: 'Please do not leave your message empty'
                        }
                        */
                } // validators   
           },

           input_contact_us_email: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    
                    regexp: {
                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                        message: 'Please enter a valid email address'
                    }
                    /*
                    emailAddress: {
                        message: 'Please enter a valid email address' 
                    }
                    */
                    
                    
                } // validators
            }

       } // fields


   })
   /*
   .on('err.validator.bv', function(e, data) {
            // data.bv        --> The FormValidation.Base instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            if (data.field === 'input_contact_us_email') {
                // The email field is not valid
                data.element
                    .data('bv.messages')
                    // Hide all the messages
                    .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                    // Show only message associated with current validator
                    .filter('[data-bv-validator="' + data.validator + '"]').show();
            }
        })
    */ 

   .on('success.form.bv', function(e) {
    
        // reset form
        $('#form-contact-us').bootstrapValidator('resetForm', true);
        
        // Show feedback success for form submission
        var overlay = $("#overlay")// document.getElementById('overlay');
        //overlay.style.display = "block";
        overlay.css("display", "block");
        overlay.find("#overlay-message-header p").html("Submission");
        overlay.find("#overlay-message-content").html("Thank you for contacting us. We will get back to you within 2 working days.");

       
       
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