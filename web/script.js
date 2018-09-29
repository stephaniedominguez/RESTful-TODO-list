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
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/RestApplication"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});

app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
