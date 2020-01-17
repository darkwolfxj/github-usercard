/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/
function createCard(obj){
    //create elements
    let card=document.createElement('div'),
        img=document.createElement('img'),
        cardInfo=document.createElement('div'),
        name=document.createElement('h3'),
        username=document.createElement('p'),
        location=document.createElement('p'),
        profile=document.createElement('p'),
        profileLink=document.createElement('a'),
        followers=document.createElement('p'),
        following=document.createElement('p'),
        bio=document.createElement('p');
    //append elements

    cardInfo.append(name, username, location, profile, followers, following, bio);
    profile.append(profileLink);
    card.append(img, cardInfo);

    //set attributes
    img.src=obj.avatar_url;
    name.textContent=obj.name;
    username.textContent=obj.login;
    location.textContent=`Location: ${obj.location}`;
    profileLink.href=obj.html_url;
    profileLink.textContent=`Profile: ${obj.html_url}`;
    profileLink.target='_blank';
    followers.textContent=`Followers: ${obj.followers}`;
    following.textContent=`Following: ${obj.following}`;
    bio.textContent=`Bio: ${obj.bio}`;
    //set classes
    card.classList.add('card');
    cardInfo.classList.add('card-info');
    name.classList.add('name');
    username.classList.add('username');

    return card;
    }
let cards=document.querySelector('.cards')

var followersArray=[]
axios.get('https://api.github.com/users/darkwolfxj/followers')
.then(
  (data => {
      data.data.forEach(obj=>followersArray.push(obj.login));
  
      followersArray.forEach(user=>axios.get(`https://api.github.com/users/${user}`)

  .then(data=>cards.append(createCard(data.data))
  )
)}));
