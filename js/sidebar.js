// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the request URL to the sidebar file path
xhr.open('GET', '../sidebar.html', true);

// Define the callback function for when the request is complete
xhr.onload = function() {
  // Check if the request was successful
  if (xhr.status === 200) {
    // Get the sidebar markup from the response text
    var sidebarMarkup = xhr.responseText;

    // Insert the sidebar markup into the page
    var sidebar = document.createElement('div');
    sidebar.innerHTML = sidebarMarkup;
    document.body.insertBefore(sidebar, document.body.firstChild);
  }
};

// Send the request
xhr.send();
