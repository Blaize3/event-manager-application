
const signIn = document.querySelector('#sign-in');
// const adminLogout = document.querySelector('#admin');
// const userLogout = document.querySelector('#user');

function isChecked(e){
  if (document.querySelector("#sign-in-check").checked){
    e.preventDefault();
    window.location = 'admin.html';
  }else{
    e.preventDefault();
    window.location = 'authenticated.html';
  }
}

// function logoutAdmin(){
//   console.log("isChecked");
//   window.location = 'index.html';
// }

// function logoutUser(){
//   console.log("isChecked");
//   window.location = 'index.html';
// }

signIn.addEventListener('click', isChecked);
// adminLogout.addEventListener('click', logoutAdmin);
// userLogout.addEventListener('click', logoutUser);