$(document).ready(function(){

// use enter to add list items
	$('#item').keyup(function(e){
		if(e.keyCode == 13) {
			e.preventDefault();
			$('#butOne').click();
		};
	});	
	
	//$('#butTwo').click();


//add list items
	$('#butOne').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="items"></li>')
			.appendTo('#list')
			.html('<input type="radio" id="myRadio"><span>' + txtval + '</span><button class="erase">X</button>');

			document.getElementById('item').value = '';
		};
	});

//delete list items ** OKAY THIS IS WORKING! **
	$('#list').on('click', '.erase', function(e){
		e.preventDefault(); 
		$(this).parent().remove()
	});


	/*$('#list').click(function(e){
		if(document.getElementById('#myRadio') === true){
			$(this).children().toggleClass('strike');
			$('#myRadio').click();
		} else {
			$(this).children().toggleClass('strike');
			$('#myRadio').click();
		}
		});*/
		/*$('#myRadio').toggle(function(n){
			m = document.getElementById('#myRadio');
			if(m===true){
				document.getElementById('myRadio').innerHTML === false;
			} else {
				document.getElementById('myRadio').innerHTML === true;
			}
		});*/
//cross off list items
	/*$('input').on('click', '.myRadio', function(){
		//$('.myRadio').toggle();
		$('.items').toggleClass('strike'); 
		$(this).children('.myRadio').toggleClass('Checked');
	});*/

//sortable list items
	$('#list').sortable({ axis: "y" });
	
//show delete button on mouse hover
	$('#list').on('mouseenter', 'li', function(){
		$(this).children('.erase').toggleClass('show');
	});
	$('#list').on('mouseleave', 'li', function(){
		$(this).children('.erase').toggleClass('show');
	});

//make the clipboard draggable about the corkboard
	/*$('.input').draggable().resizable();
	$('#demo').draggable().resizable();
	$('#demoted').draggable().resizable();
	$('.float').draggable().resizable();
	$('#myList').draggable().resizable();
	$('#butThree').click(function(){
		$('#blue').toggle('explode', {pieces: 4}, 500);
	});*/


//Experimental with radio button function
	xFun = function(){
		//var kk = document.getElementById("myRadio");
		//var jj = kk.value;
		//console.log(jj);
		//document.getElementById("myRadio").innerHTML != jj;
		//var pp = !kk;
		//var qq = !pp;
		//$('none').toggleClass('.strike');
		//console.log(pp);
		//console.log(qq);
		
		var x = 2;
		if(x%2 == 0){
			$(this).toggleClass('strike');
			console.log(x);
			x = x + 2;
			console.log(x);
		} else {
			console.log("not working");
		}

		//$('span').toggleClass('strike');
		
}

/*	xFun = function(){
		var k = document.getElementById("myRadio");
		if (k.checked == true) {
			$("none").toggleClass("strike");
			console.log(k.checked);
		} else {
			$('none').toggleClass('strike');
			console.log("not Checked");
			}
		};*/
}); 

//this is just to check my sanity (still not there!)[x,y,z], [x,y,z], [x,y,z], 
	
	/*w = function() {
   		var x = document.getElementById("shit_list").innerHTML;
   		var y = document.getElementById("myList").innerHTML;
   		//var zz = document.getElementById("butThree").innerHTML;
   		var z = document.getElementById("list").innerHTML;
   		
   		var aa = x + y + z;
    	document.getElementById("demo").innerHTML = aa;
	}
	
	$('#butThree').click(function(){
		$('#demo').toggle('fold', 1000);
		$('#blue').toggle('explode', {pieces: 36}, 500);
		$('#myList').toggle('explode');
		$('.input').toggle('hide', function(){
			alert('animation complete');
		});
	});


	www = function() {
		$("butThree").click(function(){
			$("#blue").effect.explode();
		});
	}
*/