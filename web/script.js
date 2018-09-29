var app = new function() {
  this.el = document.getElementById('tareas');
  this.tareas = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'tarea';
    if (data) {
      if (data > 1) {
        name = 'tarea';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.tareas.length > 0) {
      for (i = 0; i < this.tareas.length; i++) {
        data += '<tr>';
        data += '<td>' + this.tareas[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.tareas.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var tarea = el.value;
    if (tarea) {
      // Add the new value
      this.countries.push(tarea.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.tareas[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var tarea = el.value;
      if (tarea) {
        // Edit value
        self.countries.splice(item, 1, tarea.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.tareas.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}
function send()
{
    var urlvariable;

    urlvariable = "text";

    var ItemJSON;

    ItemJSON = '[  {    "Id": 1,    "ProductID": "1",    "Quantity": 1,  },  {    "Id": 1,    "ProductID": "2",    "Quantity": 2,  }]';

    URL = "https://testrestapi.com/additems?var=" + urlvariable;  //Your URL

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('apiusername:apiuserpassword')); //in prod, you should encrypt user name and password and provide encrypted keys here instead 
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    alert(xmlhttp.responseText);
    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
