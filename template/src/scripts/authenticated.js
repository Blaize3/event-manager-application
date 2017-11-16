const menuItems = document.querySelectorAll(".menuItem");
const headText = document.querySelector(".head-text");
const contentArea = document.querySelector(".content-table-body");

function handleClickEvent(e){
 let menu = e.target.innerText;

  if (menu === "My Events"){
    headText.innerHTML = "My Events";
    contentArea.innerHTML = `<table><tr><th>Event Title</th><th>Event Location</th><th>Event Date</th><th>Event Time</th>
                                <th>Event Ending Date</th><th>Organizer's Name</th><th>Ticket Type</th><th>Privacy</th></tr>
                              <tr><td>CS2014Reunion</td><td>Rivers State, Nigeria</td><td>25/12/2017</td><td>10:00 pm</td>
                                <td>26/12/2017</td><td>Ode Akugbe</td><td>Free Ticket</td><td>Public</td>
                              </tr><tr><td>Birthday</td><td>Lagos State, Nigeria</td><td>3/12/2017</td>
                                <td>6:00 pm</td><td>3/12/2017</td><td>Mercy Oseni Halimat</td><td>Paid Ticket</td><td>Private</td>
                              </tr></table>`;
  }else if (menu === "Add Event"){
    contentArea.innerHTML = "";
  }else if (menu === "Modify Event"){
    contentArea.innerHTML = "";
  }else if (menu === "Delete Event"){
    contentArea.innerHTML = "";
  }else if (menu === "My Profile"){
    contentArea.innerHTML = "";
  }else if (menu === "Sign Out"){
    contentArea.innerHTML = "";
  }
}

menuItems.forEach(menuItem => menuItem.addEventListener('click', handleClickEvent));