console.log('Start');

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve( { userEmail: email });
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the video data");
      resolve(['video1', 'video2', 'video3']);
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video');
    }, 1000);
  });
}

// const user = loginUser('devedf@gmail.com', 123456, user => {
//   console.log(user);
//   getUserVideos(user.userEmail, videos => {
//     console.log(videos);
//     videoDetails(videos[0], title => {
//       console.log(title);
//     });
//   })
// });

// loginUser("ed", "bubmba")
//   .then(user => getUserVideos(user.email))
//   .then(videos => videoDetails(videos[0]))
//   .then(detail => console.log(detail));

// // SYNC
async function displayUser(){
  try {
    const loggedUser = await loginUser('ed', 123456);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  }
  catch (err){
    console.log("We could not get the videos");
  }
}

displayUser();

// console.log("Finish");


// const yt = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("getting stuff from youtube");
//     resolve({ videos: [1,2,3,4,5] });
//   }, 2000);
// })

// const fb = new Promise(resolve => {
//   setTimeout(() => {
//     console.log("getting stuff from facebook");
//     resolve({ user: "Name" });
//   }, 2000);
// })

// Promise.all([yt, fb])
// .then(result => console.log(result));
