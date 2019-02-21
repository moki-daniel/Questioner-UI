function delmeetup() {
        var meetupname = prompt("Enter meetupname to delete", "e.g python-Nairobi");
        if (meetupname != null) {
          document.getElementById("deletebutton").innerHTML =
          "Hello Tinah confirm delete of " + meetupname;
        }
      }

  

