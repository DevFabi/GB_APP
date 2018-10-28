$(document).ready(function(){
 
    // show html form when 'create activity' button was clicked
    $(document).on('click', '.create-activity-button', function(){
        // load list of categories
		$.getJSON("http://localhost/GB_API/api/category/read.php", function(data){
 		// build categories option html
		// loop through returned list of data
		var categories_options_html="";
		categories_options_html+="<select name='category_id' class='form-control'>";
		$.each(data.records, function(key, val){
		    categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>";
		});
		categories_options_html+="</select>";
		

		// we have our html form here where activity information will be entered
		// we used the 'required' html5 property to prevent empty fields
		var create_activity_html="";
		// 'read activity' button to show list of activity
		create_activity_html+="<div id='read-activity' class='btn btn-primary pull-right m-b-15px read-activity-button'>";
		    create_activity_html+="<span class='glyphicon glyphicon-list'></span> Read Activity";
		create_activity_html+="</div>";

		// 'create activity' html form
create_activity_html+="<form id='create-activity-form' action='#' method='post' border='0'>";
    create_activity_html+="<table class='table table-hover table-responsive table-bordered'>";
 
        // name field
        create_activity_html+="<tr>";
            create_activity_html+="<td>Name</td>";
            create_activity_html+="<td><input type='text' name='name' class='form-control' required /></td>";
        create_activity_html+="</tr>";
 
        // price field
        create_activity_html+="<tr>";
            create_activity_html+="<td>Prix</td>";
            create_activity_html+="<td><input type='number' min='1' name='price' class='form-control' required /></td>";
        create_activity_html+="</tr>";
 
        // adress field
		create_activity_html+="<tr>";
            create_activity_html+="<td>Adresse</td>";
            create_activity_html+="<td><input type='text' name='adress' class='form-control' required /></td>";
        create_activity_html+="</tr>";
        // cp field
		create_activity_html+="<tr>";
            create_activity_html+="<td>Code postal</td>";
            create_activity_html+="<td><input type='text' name='adress_cp' class='form-control' required /></td>";
        create_activity_html+="</tr>";
        // ville field
		create_activity_html+="<tr>";
            create_activity_html+="<td>Ville</td>";
            create_activity_html+="<td><input type='text' name='adress_ville' class='form-control' required /></td>";
        create_activity_html+="</tr>";

        // note_ambiance field
		create_activity_html+="<tr>";
            create_activity_html+="<td>Note_ambiance</td>";
            create_activity_html+="<td><input type='number' name='note_ambiance' class='form-control' required /></td>";
        create_activity_html+="</tr>";
        // note_food field
		create_activity_html+="<tr>";
            create_activity_html+="<td>Note_food</td>";
            create_activity_html+="<td><input type='number' name='note_food' class='form-control' required /></td>";
        create_activity_html+="</tr>";
        // photo_img field
		create_activity_html+="<tr>";
            create_activity_html+="<td>Photo_img</td>";
            create_activity_html+="<td><input type='text' name='photo_img' class='form-control' required /></td>";
        create_activity_html+="</tr>";
 
        // categories 'select' field
        create_activity_html+="<tr>";
            create_activity_html+="<td>Category</td>";
            create_activity_html+="<td>" + categories_options_html + "</td>";
        create_activity_html+="</tr>";
 
        // button to submit form
        create_activity_html+="<tr>";
            create_activity_html+="<td></td>";
            create_activity_html+="<td>";
                create_activity_html+="<button type='submit' class='btn btn-primary'>";
                    create_activity_html+="<span class='glyphicon glyphicon-plus'></span> Create Activity";
                create_activity_html+="</button>";
            create_activity_html+="</td>";
        create_activity_html+="</tr>";
 
    create_activity_html+="</table>";
create_activity_html+="</form>";
// inject html to 'page-content' of our app
$("#page-content").html(create_activity_html);
 
// chage page title
changePageTitle("Create Activity");

    });
		});
 
    // will run if create activity form was submitted
$(document).on('submit', '#create-activity-form', function(){
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost/GB_API/api/activity/create.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // activity was created, go back to activity list
        showActivity();
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
 
return false;
});
});