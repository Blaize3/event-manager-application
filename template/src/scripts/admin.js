const menuItems = document.querySelectorAll(".menuItem");
const headText = document.querySelector(".head-text");
const contentArea = document.querySelector(".content-table-body");
// Add Events
// const addEvent = document.querySelector("#addEvent");
// const eventTitle = document.querySelector("#title");
// const eventOrganizer = document.querySelector("#organizer");
// const eventStart = document.querySelector("#start");
// const eventTime = document.querySelector("#time");
// const eventEnd = document.querySelector("#end");
// const enetLocation = document.querySelector("#location");
// const eventVenue = document.querySelector("#venue");
// const privacy = document.querySelector("#privacy");


function handleClickEvent(e){
 let menu = e.target.innerText;

  if (menu === "View Event Centers"){
    headText.innerHTML = "View Event Centers";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<table><tr><th>Center ID</th><th>Center Name</th><th>Location</th><th>Type</th><th>Capacity</th>
                                <th>Create Date</th><th>Creator</th></tr>
                              <tr><td>001</td><td>Lekki Dome</td><td>Lekki Lagos</td><td>Conference Hall</td><td>2000</td>
                                <td>26/12/2017</td><td>Ode Akugbe</td>
                              </tr><tr><td>002</td><td>Millenium Park</td><td>CA Abuja</td><td>Park</td>
                                <td>10000</td><td>3/12/2017</td><td>Ode Akugbe</td>
                              </tr></table>`;
  }else if (menu === "Add Center"){
    headText.innerHTML = "Add Center";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<form id="myForm" class="object-margin"><div class="container objectAlign">
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Event Details</div><div class="row">
    <div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Event title">
      </div></div><div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Event organizer">
      </div></div></div><div class="row"><div class="col">
      <div class="form-group"><input class="form-control" type="date" placeholder="Event start date">
      </div></div><div class="col"><div class="form-group"><input class="form-control" type="time" placeholder="Event time">
      </div></div> <div class="col">
      <div class="form-group"> <input class="form-control" type="date" placeholder="Event ending date">
      </div></div></div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Event location">
          </div></div><div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Event venue">
          </div></div></div>
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Privacy</div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Enter public or private"></div></div><div class="col"> <div class="form-group">
                  <button type="submit" id="addEvent" onClick="addEventHandler()" class="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Event&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div></div></div></div></form>`;
  }else if (menu === "Modify Centers Details"){
    headText.innerHTML = "Modify Centers Details";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<form class="object-margin"><div class="container objectAlign">
    <!--  -->
    <div class="row justify-content-center"><div class="col"><div class="form-group"><select class="custom-select d-block my-3" required>
    <option value="">Select event to be modified</option><option value="CS2014Reunion">CS2014Reunion</option><option value="Birthday">Birthday</option></select></div></div></div>
    <!--  -->
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Event Details</div><div class="row">
    <div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Event title">
      </div></div><div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Event organizer">
      </div></div></div><div class="row"><div class="col">
      <div class="form-group"><input class="form-control" type="date" placeholder="Event start date">
      </div></div><div class="col"><div class="form-group"><input class="form-control" type="time" placeholder="Event time">
      </div></div> <div class="col">
      <div class="form-group"> <input class="form-control" type="date" placeholder="Event ending date">
      </div></div></div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Event location">
          </div></div><div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Event venue">
          </div></div></div>
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Privacy</div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Enter public or private"></div></div><div class="col"> <div class="form-group">
                  <button type="submit" class="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modify Event&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div></div></div></div></form>`;
  }else if (menu === "Delete Event"){
    headText.innerHTML = "Delete Event";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<form class="object-margin"><div class="container objectAlign">
    <!--  -->
    <div class="row justify-content-center"><div class="col"><div class="form-group"><select class="custom-select d-block my-3" required>
    <option value="">Select event to be deleted</option><option value="CS2014Reunion">CS2014Reunion</option><option value="Birthday">Birthday</option></select></div></div></div>
    <!--  -->
    <div class="col"> <div class="form-group">
    <button type="submit" class="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete Event&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div></div></div></div></form>`;
  }else if (menu === "My Profile"){
    contentArea.innerHTML = "";
  }else if (menu === "Sign Out"){
    contentArea.innerHTML = "";
  }
}

// function addEventHandler(){
//   console.log("click");
//   let addedEvent = `<tr><td>${eventTitle.value}</td><td>${enetLocation.value}</td><td>${eventStart.value}</td>
//   <td>${eventTime.value}</td><td>${eventEnd.value}</td><td>${eventOrganizer.value}</td><td>${eventVenue.value}</td><td>${privacy.value}</td>
// </tr>`; 
//   contentArea.innerHTML = `<table><tr><th>Event Title</th><th>Event Location</th><th>Event Date</th><th>Event Time</th>
//   <th>Event Ending Date</th><th>Organizer's Name</th><th>Ticket Type</th><th>Center</th></tr>
// <tr><td>CS2014Reunion</td><td>Rivers State, Nigeria</td><td>25/12/2017</td><td>10:00 pm</td>
//   <td>26/12/2017</td><td>Ode Akugbe</td><td>Free Ticket</td><td>Surulere center</td>
// </tr><tr><td>Birthday</td><td>Lagos State, Nigeria</td><td>3/12/2017</td>
//   <td>6:00 pm</td><td>3/12/2017</td><td>Mercy Oseni Halimat</td><td>Lekki center</td><td>Private</td>
// </tr>${addedEvent}</table>`;
//   alert("Event Added!")
//   document.getElementById("myForm").reset(); 
// }

menuItems.forEach(menuItem => menuItem.addEventListener('click', handleClickEvent));
//addEvent.addEventListener('click', addEventHandler);