$(window).on('load', function(){
	$(".pru").on('change', function(e){
        $el = e.target;
        tagImg = $el.getAttribute("tagImg");
        //console.log(el.attr("tagImg"));
        readURL(e.target, tagImg);
    })
})


function readURL(input, tagImg) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(".imgPru[tagInput="+tagImg+"]").attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}