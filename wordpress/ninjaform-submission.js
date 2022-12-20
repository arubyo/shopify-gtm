<script>
jQuery(document).ready( function() {
  jQuery(document).on('nfFormSubmitResponse', function(event, response, id) {         
      dataLayer.push ({
        'event' : 'ninjaFormSubmission',
        'NFformID' : response.id           
            });
         });
    });
</script>
