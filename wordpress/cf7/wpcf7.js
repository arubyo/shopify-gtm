// wordpress custom form 7 listener 
// tag type is cHTML and should fire on all pages

<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
 window.dataLayer.push({
 "event" : "cf7submission",
 "formId" : event.detail.contactFormId,
 "response" : event.detail.inputs
 })
}); 
</script>