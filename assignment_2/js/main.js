function validateForm(){
    var input = document.getElementsByTagName("input");
    //for (var i = 0; i <= 5; i++) {
      //  var d = input[i];
    if($(input) == false) {
        var alert = document.getElementById('form-alert');
        alert.textContent = 'Not all fields are filled in.';
        return false;
    }
}

function writeFormData(){

}

function displayLinks() {
    $('div#myTabContent').show();
    $('div#contact').hide();
}

function displayContact() {
    $('div#myTabContent').hide();
    $('div#contact').show();

}

$(function() {
    $('#submit').on('click', validateForm);
    $('#erase').on('click', writeFormData);
    $('#link-tab').on('click', displayLinks);
    $('#contact-tab').on('click', displayContact)
});