
// Get element by ID
var tb = document.getElementById("name");
console.log(tb);

// Since elements on HTML page throw events
tb.addEventListener("keypress",
    function(event) {
        console.log("Pressed!");
    });


// The event loop is just sitting there waiting
// for event to get thrown so that we can respond to it

