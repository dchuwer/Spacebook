

var posts2View = JSON.parse(localStorage["posts2"]);
var arrComments2View = JSON.parse(localStorage["arrComments2"]);
var id_view = localStorage.getItem('idcheck')


for(let i=0 ; i < posts2View.length ; i++){
    if(id_view == posts2View[i].id){
      var postToShow = posts2View[i].description
      $('.postView').append('<p> Post :' + postToShow + '</p>') 
    }
}  
for(let j=0 ; j < arrComments2View.length ; j++){
    if(id_view == arrComments2View[j].id){
    var commentToShow = arrComments2View[j].comments
    var userToShow = arrComments2View[j].userid
    
    $('.postView').append('<p> Comments :' + commentToShow + ' by user: ' + userToShow + ' </p>') 
}
}
   