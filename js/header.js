// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the request URL to the header file path
xhr.open('GET', '../header.html');

// Define the callback function for when the request is complete
xhr.onreadystatechange = function() {
  // Check if the request was successful
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Get the header markup from the response text
    var headerMarkup = xhr.responseText;

    // Insert the header markup into the page
    var header = document.createElement('div');
    header.innerHTML = headerMarkup;
    document.body.insertBefore(header, document.body.firstChild);
  }
};

// Send the request
xhr.send();
