let posts = [];




$('.add-post').click(function add() { 
    
    var postDesc = $("#post-name").val();
    var id= Date.now();
    
    addPost(postDesc,id);
    renderPosts();
    
})

function addPost(postDesc,id){
    var post = {};
    post.description = postDesc;
    post.id = id;
    posts.push(post);


};

function renderPosts(){

    $(".posts p").remove();
    $("li").remove();
    
    for(let i=0; i<posts.length ; i++){
                    
            $(".posts").append("<p class='post' data-id=" + posts[i].id  + ">" +
            "<button type='button' class='remove'>REMOVE</button>" +
            posts[i].description + 
            "<button type='button' class='comments'>Comment</button>" +
            "<button type='button' class='linkComments'>Link Comments</button>" +
            "</p>");
            $(".posts").append("<ul class='listComments'> </ul>")
            for(let j=0; j<arrComments.length; j++){
                $(".posts").append("<ul class='listComments'> </ul>")
                if (posts[i].id === arrComments[j].id)
                $(".posts").append("<li data-id=" + arrComments[j].id + ">" + 
                arrComments[j].userid + "  <p class='idP'>" + arrComments[j].comments + "</p>" +
                "<button type='button' class='delComments'>Del Comments</button>" +
                "<button type='button' class='editComments'>Edit Comments</button>" +
                " </li>")
            }

        
        }
}

$(".posts").on('click','.remove', function(){
    
    var idRemove = $(this).parent('p').data().id
    for (let j =0; j < posts.length; j++){
        if(idRemove === posts[j].id)
          posts.splice(j,1)
          renderPosts();
    }
    
})

$(".posts").on('click','.comments', function(){
    
    var idCheck = $(this).parent('p').data().id
    $(this).parent(this).append("<form name='formComments'  onsubmit='addComments("+idCheck+")'>" +
    "Username: <input type='text' id='userid'> <br>" +   
    "Comments: <input type='text' id='commentsText'> <br> " +
    "<input type='submit' value='Submit'> </form>")
})

$(".posts").on('click','.delComments', function(){
    
    var idCheck = $(this).parent('li').data().id
    for (let j =0; j < arrComments.length; j++){
        if(idCheck === arrComments[j].id)
          arrComments.splice(j,1)
          renderPosts();
    }
    
    
})


$(".posts").on('click','.editComments', function(){
    
    var idCheck = $(this).parent('li').data().id
    for (let j =0; j < arrComments.length; j++){
        if(idCheck === arrComments[j].id){

            $(this).parent(this).append("<textarea class='eComments'> </textarea>");
            $('.idP').css({"visibility": "hidden", "display": "none"})
            $(".eComments").val(arrComments[j].comments);
            $(this).text("Save Comments");
            $(this).attr( "class", "saveComments" )
                
            $(this).click(function () { 
            arrComments[j].comments = $('.eComments').val()
            renderPosts();
           }); 
        }
    }
    
    //$(this).parent('l').css({"visibility": "hidden", "display": "none"})
    
    
    

    
   

})

       


var arrComments =[]
function addComments(idCheck){

    

    var arrComment = {};
    arrComment.id = idCheck;
    arrComment.userid = $('#userid').val();
    arrComment.comments = $('#commentsText').val()
    arrComments.push(arrComment);
    renderPosts();
    
}

$(".posts").on('click','.linkComments', function(){
    
    //var idCheck = $(this).parent('li').data().id
    var idCheck = $(this).parent('p').data().id
    localStorage.clear()
    localStorage["posts2"] = JSON.stringify(posts);
    localStorage["arrComments2"] = JSON.stringify(arrComments);
    localStorage.setItem('idcheck',idCheck);
    
    window.open("./index1.html")
    

    //var postToSend =  $(this).parents.('posts p').val()
    //localStorage.setItem("Post", "arrComments");
    
    
    
    
})




