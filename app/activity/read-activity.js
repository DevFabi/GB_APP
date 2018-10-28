$(document).ready(function(){
 
    // show list of activity on first load
    showActivity();
    // when a 'read activity' button was clicked
$(document).on('click', '.read-activity-button', function(){
    showActivity();
});
 
});
 
// function to show list of activity
function showActivity(){
 // get list of activity from the API
$.getJSON("http://localhost/GB_API/api/activity/read.php", function(data){
 
	 // html for listing activity
	var read_activity_html="";
	 
	// when clicked, it will load the create activity form
	read_activity_html+="<div id='create-activity' class='btn btn-primary pull-right m-b-15px create-activity-button'>";
	    read_activity_html+="<span class='glyphicon glyphicon-plus'></span> Create Activity";
	read_activity_html+="</div>";

	// start table
read_activity_html+="<table class='table table-bordered table-hover'>";
 
    // creating our table heading
    read_activity_html+="<tr>";
        read_activity_html+="<th class='w-25-pct'>Name</th>";
        read_activity_html+="<th class='w-10-pct'>Price</th>";
        read_activity_html+="<th class='w-15-pct'>Category</th>";
        read_activity_html+="<th class='w-15-pct'>Adresse</th>";
        read_activity_html+="<th class='w-15-pct'>Note</th>";
        read_activity_html+="<th class='w-15-pct'>Photo</th>";
        read_activity_html+="<th class='w-25-pct text-align-center'>Action</th>";
    read_activity_html+="</tr>";
     
    // loop through returned list of data
$.each(data.records, function(key, val) {
 
    // creating new table row per record
    read_activity_html+="<tr>";
 
        read_activity_html+="<td>" + val.name + "</td>";
        read_activity_html+="<td>$" + val.price + "</td>";
        read_activity_html+="<td>" + val.category_name + "</td>";
        read_activity_html+="<td>" + val.adress_ville + "</td>";
        read_activity_html+="<td>" + val.note_ambiance + "</td>";
        read_activity_html+="<td>" + val.photo_img + "</td>";
 
        // 'action' buttons
        read_activity_html+="<td>";
            // read one activity button
            read_activity_html+="<button class='btn btn-primary m-r-10px read-one-activity-button' data-id='" + val.id + "'>";
                read_activity_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
            read_activity_html+="</button>";
 
            // edit button
            read_activity_html+="<button class='btn btn-info m-r-10px update-activity-button' data-id='" + val.id + "'>";
                read_activity_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
            read_activity_html+="</button>";
 
            // delete button
            read_activity_html+="<button class='btn btn-danger delete-activity-button' data-id='" + val.id + "'>";
                read_activity_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
            read_activity_html+="</button>";
        read_activity_html+="</td>";
 
    read_activity_html+="</tr>";
 
});
 
// end table
read_activity_html+="</table>";
	
	// inject to 'page-content' of our app
	$("#page-content").html(read_activity_html);

	// chage page title
	changePageTitle("Read Activity");
});
}