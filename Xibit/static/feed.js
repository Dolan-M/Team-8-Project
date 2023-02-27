let posts = document.getElementsByClassName("post");
let users = document.getElementsByClassName("user");
let likes = document.getElementsByClassName("likes");
let post;
let user; 

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    console.log(users);
    for (let i = 0; i < posts.length; i++) {
        post = posts[i].innerHTML;
        post = post.replaceAll(/\'/g, "\"");
        // post on main branch comes out different for unknown reason, have to slice
        post = post.slice(2);
        post = post.slice(0, -3)
        post = post.replaceAll("@", "/");

        const newImg = document.createElement('img');
        newImg.setAttribute("id", "post_image");
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "post_div");
        const username = document.createElement('p');
        username.setAttribute("id", "username_post");
        const like = document.createElement('button');
        like.setAttribute("id", "likes" + i.toString());

        newDiv.setAttribute("id", "post" + i.toString());
        newImg.src = post;
        username.innerHTML = users[i].innerHTML;
        like.innerHTML = "Likes: " + likes[i].innerHTML;

        document.getElementById('top_post').appendChild(newDiv);
        document.getElementById('post' + i.toString()).appendChild(username);
        document.getElementById('post' + i.toString()).appendChild(newImg);
        document.getElementById('post' + i.toString()).appendChild(like);
        
    }

    posts = document.querySelectorAll('.post');
    posts.forEach(option => {
        option.remove();
    });

    users = document.querySelectorAll('.user');
    users.forEach(option => {
        option.remove();
    });

    likes = document.querySelectorAll('.likes');
    likes.forEach(option => {
        option.remove();
    });
}
