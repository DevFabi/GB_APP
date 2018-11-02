$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-activity-button', function(){
      // get activity id
		var id = $(this).attr('data-id');
		// read activity record based on given ID
	$.getJSON("http://localhost/GB_API/api/activity/read_one.php?id=" + id, function(data){
    // start html
	var read_one_activity_html="";
	 
	// when clicked, it will show the activity's list
	read_one_activity_html+="<div id='read-activity' class='btn btn-primary pull-right m-b-15px read-activity-button'>";
	    read_one_activity_html+="<span class='glyphicon glyphicon-list'></span> Read Activity";
	read_one_activity_html+="</div>";

	// activity data will be shown in this table
read_one_activity_html+="<table class='table table-bordered table-hover'>";
 
    // activity name
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td class='w-30-pct'>Nom</td>";
        read_one_activity_html+="<td class='w-70-pct'>" + data.name + "</td>";
    read_one_activity_html+="</tr>";
 
    // activity price
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Prix</td>";
        read_one_activity_html+="<td>" + data.price + "</td>";
    read_one_activity_html+="</tr>";

     // activity adress
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Adresse</td>";
        read_one_activity_html+="<td>" + data.adress + "</td>";
    read_one_activity_html+="</tr>";

     // activity adress_cp
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Code postal</td>";
        read_one_activity_html+="<td>" + data.adress_cp + "</td>";
    read_one_activity_html+="</tr>";

     // activity Ville
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Ville</td>";
        read_one_activity_html+="<td>" + data.adress_ville + "</td>";
    read_one_activity_html+="</tr>";

    // activity note_ambiance
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Note ambiance</td>";
        read_one_activity_html+="<td>" + data.note_ambiance + "</td>";
    read_one_activity_html+="</tr>";

    // activity food note
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Note food</td>";
        read_one_activity_html+="<td>" + data.note_food + "</td>";
    read_one_activity_html+="</tr>";

     // activity photo
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Photo</td>";
        read_one_activity_html+="<td><img src="  + data.photo_img + "/></td>";
    read_one_activity_html+="</tr>";
 
    // activity category name
    read_one_activity_html+="<tr>";
        read_one_activity_html+="<td>Category</td>";
        read_one_activity_html+="<td>" + data.category_name + "</td>";
    read_one_activity_html+="</tr>";
 
read_one_activity_html+="</table>";

// inject html to 'page-content' of our app
$("#page-content").html(read_one_activity_html);
 
// chage page title
changePageTitle("Create Product");

});
    });
 
});