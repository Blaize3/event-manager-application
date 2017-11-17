const menuItems = document.querySelectorAll(".menuItem");
const headText = document.querySelector(".head-text");
const contentArea = document.querySelector(".content-table-body");

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
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Event Center Details</div><div class="row">
    <div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Center ID">
      </div></div><div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Center Name">
      </div></div></div><div class="row"><div class="col">
      <div class="form-group"><input class="form-control" type="text" placeholder="Center Location">
      </div></div><div class="col">
      <div class="form-group"> <input class="form-control" type="text" placeholder="Center Type">
      </div></div></div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Capacity">
          </div></div><div class="col"><div class="form-group">
          
          <div class="input-group"><span class="input-group-addon" id="basic-addon1">Date</span></span>
          <input class="form-control" type="date" placeholder="Create Date">
          </div>

          </div></div></div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Creator"></div></div><div class="col"> <div class="form-group">
                  <button type="submit" id="addEvent" onClick="addEventHandler()" class="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Center&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div></div></div></div></form>`;
  }else if (menu === "Modify Centers Details"){
    headText.innerHTML = "Modify Centers Details";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<form class="object-margin"><div class="container objectAlign">
    <!--  -->
    <div class="row justify-content-center"><div class="col"><div class="form-group"><select class="custom-select d-block my-3" required>
    <option value="">Select center to be modified</option><option value="001">001</option><option value="002">002</option></select></div></div></div>
    <!--  -->
    <div class="row content-table-body">&nbsp;&nbsp;&nbsp;Event Center Details</div><div class="row">
    <div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Center ID">
      </div></div><div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Center Name">
      </div></div></div><div class="row"><div class="col">
      <div class="form-group"><input class="form-control" type="text" placeholder="Center Location">
      </div></div><div class="col">
      <div class="form-group"> <input class="form-control" type="text" placeholder="Center Type">
      </div></div></div><div class="row">
      <div class="col"><div class="form-group"><input class="form-control" type="text" placeholder="Capacity">
          </div></div><div class="col"><div class="form-group">
          <input class="form-control" type="text" placeholder="Creator">
          </div></div></div><div class="row">
      <div class="col"><div class="form-group">

      <div class="input-group"><span class="input-group-addon" id="basic-addon1">Date</span>
      <input class="form-control" type="date" placeholder="Create Date">
      </div>
      
      </div></div><div class="col"> <div class="form-group">
                  <button type="submit" class="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modify Center&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div></div></div></div></form>`;
  }else if (menu === "View a Center's Log"){
    headText.innerHTML = "View a Center's Log";
    contentArea.innerHTML = "";
    contentArea.innerHTML = `<form class="object-margin"><div class="container objectAlign">
    <!--  -->
    <div class="row justify-content-center"><div class="col"><div class="form-group"><select class="custom-select d-block my-3" required>
    <option value="">Select event center </option><option value="001">001</option><option value="002">002</option></select></div></div></div>
    <!--  -->
    </div></div></form>
    <br><br><br>
    <table><tr><th>Center ID</th><th>Center Name</th><th>Location</th><th>Type</th><th>Capacity</th>
    <th>Create Date</th><th>Creator</th></tr>
    <tr><td>001</td><td>Lekki Dome</td><td>Lekki Lagos</td><td>Conference Hall</td><td>2000</td>
    <td>26/12/2017</td><td>Ode Akugbe</td>
    </tr><tr><td>002</td><td>Millenium Park</td><td>CA Abuja</td><td>Park</td>
    <td>10000</td><td>3/12/2017</td><td>Ode Akugbe</td>
    </tr></table>`;
  }else if (menu === "My Profile"){
    contentArea.innerHTML = "";
  }else if (menu === "Sign Out"){
    contentArea.innerHTML = "";
  }
}

menuItems.forEach(menuItem => menuItem.addEventListener('click', handleClickEvent));