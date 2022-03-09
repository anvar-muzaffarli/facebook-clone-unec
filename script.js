const myDiv = document.getElementById("news_feed_container");




async function getPosts() {
  const data = "status.json";

  try {
    const stringData = await fetch(data);
    const jsonData = await stringData.json();

    for (let i = 0; i < jsonData.length; i++) {
      myDiv.innerHTML += ` 
      <div class="news_feed">
            <div class="news_feed_title">
              <img src="assets/user.png" alt="user" />
              <div class="news_feed_title_content">
                <p>IT Brains Academy</p>
                <span>12h . <i class="fas fa-globe-americas"></i></span>
              </div>
            </div>
            <div class="news_feed_description">
              <p class="news_feed_subtitle">
                ${jsonData[i].p}
              </p>
              <img src="${jsonData[i].image}" alt="API" />
            
            </div>

            <div class="likes_area">
              <div class="emojis">
                <img src="assets/emoji_like.png" alt="like" />
                <img src="assets/emoji_surprised.png" alt="surprised" />
                <img src="assets/emoji_angry.png" alt="angry" />
                <span>1.7K</span>
              </div>
              <div class="comment_counts">
                <span>4 Comments</span>
                <span>13 Shares</span>
              </div>
            </div>

            <div class="divider"><hr /></div>
            <div class="likes_buttons">
              <div class="likes_buttons_links">
                <i class="far fa-thumbs-up"></i>
                <span>Like</span>
              </div>
              <div class="likes_buttons_links">
                <i class="far fa-comment-alt"></i>
                <span>Comment</span>
              </div>
              <div class="likes_buttons_links">
                <i class="fas fa-share"></i>
                <span>Share</span>
              </div>
            </div>
          </div>`;
    }
  } catch (err) {
    console.log(err);
  }
}

window.onload = getPosts()

// function getJSON() {

//     fetch("article.json").then(function (response) {

//         return response.json();
//     }).then(function (users) {

//          let data = "<ul>";

//          users.forEach(function (user) {

//              data += `<p>
//              <th><b>Dogum Yeri:</b>${user.region}</h><br>
//              <th><b>Fullname:</b> ${user.name} ${user.surname}</th> <br>
//              <th><b>Age:</b> ${user.age}</th><br>
//              <th><b>Job:</b> ${user.job}</th><br>
//              <th><b>Phone:</b> ${user.phone}</th><br>
//              <th><b>Project:</b> ${user.project}</th><br>

//              </p>`
//        })

//          data += "</ul>";

//          document.getElementById("bio-title").innerHTML += data;
//     });
//   }
