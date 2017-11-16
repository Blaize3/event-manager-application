const menuItems = document.querySelectorAll(".menuItem");
const headText = document.querySelector(".head-text");
const contentArea = document.querySelector(".content-table-body");

function handleClickEvent(e){
 let menu = e.target.innerText;

  if (menu === "My Events"){
    headText.innerHTML = "My Events";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<table><tr><th>Event Title</th><th>Event Location</th><th>Event Date</th><th>Event Time</th>
                                <th>Event Ending Date</th><th>Organizer's Name</th><th>Ticket Type</th><th>Privacy</th></tr>
                              <tr><td>CS2014Reunion</td><td>Rivers State, Nigeria</td><td>25/12/2017</td><td>10:00 pm</td>
                                <td>26/12/2017</td><td>Ode Akugbe</td><td>Free Ticket</td><td>Public</td>
                              </tr><tr><td>Birthday</td><td>Lagos State, Nigeria</td><td>3/12/2017</td>
                                <td>6:00 pm</td><td>3/12/2017</td><td>Mercy Oseni Halimat</td><td>Paid Ticket</td><td>Private</td>
                              </tr></table>`;
  }else if (menu === "Add Event"){
    headText.innerHTML = "Add Event";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<form class="object-margin"><div class="container objectAlign">
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
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Create Tickets</div>
    <div class="row"><div class="col"><div class="form-check">
              <label class="form-check-label shrink-text">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                  Free Ticket</label></div></div><div class="col"><div class="form-check"><label class="form-check-label shrink-text"><input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>Paid Ticket</label></div></div>
      <div class="col"><div class="form-check"> <label class="form-check-label shrink-text">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                  Donation</label></div> </div> </div>
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Privacy</div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Enter public or private"></div></div><div class="col"> <div class="form-group">
                  <button type="submit" class="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Event&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div></div></div></div></form>`;
  }else if (menu === "Modify Event"){
   
  }else if (menu === "Delete Event"){
    contentArea.innerHTML = "";
  }else if (menu === "My Profile"){
    contentArea.innerHTML = "";
  }else if (menu === "Sign Out"){
    contentArea.innerHTML = "";
  }
}

menuItems.forEach(menuItem => menuItem.addEventListener('click', handleClickEvent));