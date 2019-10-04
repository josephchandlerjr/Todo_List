// toggle strikethrough
$("ul").on("click", "li", function(){
	$(this).toggleClass("strikethrough");
}); // use .on so that future lis get same listener

//delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){$(this).remove();});
	e.stopPropagation();
});

//create new todos
$("input[type='text'").keypress(function(e){
	if (e.which === 13) {
		let li = $(`<li><span><i class='fas fa-trash'></i></span> ${$(this).val()}</li>`);
		$(this).val("");
		$("ul").append(li);
	}
});

// show/hide form
$("h1 i").click(function(){
	$("input").fadeToggle(200);
});