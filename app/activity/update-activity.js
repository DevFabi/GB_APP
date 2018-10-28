$(document).ready(function(){
 
    // show html form when 'update activity' button was clicked
    $(document).on('click', '.update-activity-button', function(){
        // get activity id
		var id = $(this).attr('data-id');
		// read one record based on given activity id
		$.getJSON("http://localhost/GB_API/api/activity/read_one.php?id=" + id, function(data){
		 
		    // values will be used to fill out our form
		    var name = data.name;
		    var price = data.price;
		    var category_id = data.category_id;
		    var category_name = data.category_name;
		     
		    // load list of categories
$.getJSON("http://localhost/GB_API/api/category/read.php", function(data){
 
    // build 'categories option' html
    // loop through returned list of data
    var categories_options_html="";
    categories_options_html+="<select name='category_id' class='form-control'>";
 
    $.each(data.records, function(key, val){
         
        // pre-select option is category id is the same
        if(val.id==category_id){
            categories_options_html+="<option value='" + val.id + "' selected>" + val.name + "</option>";
        }
 
        else{
            categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>";
        }
    });
    categories_options_html+="</select>";
     
    // store 'update activity' html to this variable
var update_activity_html="";
 
// 'read activity' button to show list of activity
update_activity_html+="<div id='read-activity' class='btn btn-primary pull-right m-b-15px read-activity-button'>";
    update_activity_html+="<span class='glyphicon glyphicon-list'></span> Read Activity";
update_activity_html+="</div>";
// build 'update activity' html form
// we used the 'required' html5 property to prevent empty fields
update_activity_html+="<form id='update-activity-form' action='#' method='post' border='0'>";
    update_activity_html+="<table class='table table-hover table-responsive table-bordered'>";
 
        // name field
        update_activity_html+="<tr>";
            update_activity_html+="<td>Name</td>";
            update_activity_html+="<td><input value=\"" + name + "\" type='text' name='name' class='form-control' required /></td>";
        update_activity_html+="</tr>";
 
        // price field
        update_activity_html+="<tr>";
            update_activity_html+="<td>Price</td>";
            update_activity_html+="<td><input value=\"" + price + "\" type='number' min='1' name='price' class='form-control' required /></td>";
        update_activity_html+="</tr>";
 
        // categories 'select' field
        update_activity_html+="<tr>";
            update_activity_html+="<td>Category</td>";
            update_activity_html+="<td>" + categories_options_html + "</td>";
        update_activity_html+="</tr>";
 
        update_activity_html+="<tr>";
 
            // hidden 'activity id' to identify which record to delete
            update_activity_html+="<td><input value=\"" + id + "\" name='id' type='hidden' /></td>";
 
            // button to submit form
            update_activity_html+="<td>";
                update_activity_html+="<button type='submit' class='btn btn-info'>";
                    update_activity_html+="<span class='glyphicon glyphicon-edit'></span> Update Product";
                update_activity_html+="</button>";
            update_activity_html+="</td>";
 
        update_activity_html+="</tr>";
 
    update_activity_html+="</table>";
update_activity_html+="</form>";
// inject to 'page-content' of our app
$("#page-content").html(update_activity_html);
 
// chage page title
changePageTitle("Update Product");
});
		});
    });
     
    // will run if 'create activity' form was submitted
$(document).on('submit', '#update-activity-form', function(){
     
    // get form data
var form_data=JSON.stringify($(this).serializeObject());
// submit form data to api
$.ajax({
    url: "http://localhost/GB_API/api/activity/update.php",
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