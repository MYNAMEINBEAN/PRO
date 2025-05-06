// Preventing Right-Click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Right-click is disabled!");
});

// Preventing DevTools Shortcuts (F12, Ctrl+Shift+I, etc.)
document.addEventListener('keydown', function(e) {
    // Block F12, Ctrl+Shift+I (DevTools shortcut)
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert("DevTools are disabled!");
    }

    // Preventing opening DevTools with Ctrl+Shift+J or Ctrl+U (view source)
    if (e.ctrlKey && (e.key === 'J' || e.key === 'U')) {
        e.preventDefault();
        alert("DevTools are disabled!");
    }
});

// Detecting if DevTools are open using the `toString` trick (only alert once)
let devtoolsOpened = true;
let devtools = /./;
devtools.toString = function() {
    if (!devtoolsOpened) {
        devtoolsOpened = true;
        console.log('DevTools are open!');
        alert('DevTools are open!');
    }
    return '';
};

// Periodic check to detect if DevTools are open by checking window dimensions
let devtoolsCheckInterval = setInterval(function() {
    // Check if the window's outer width/height is significantly greater than the inner width/height
    if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        if (!devtoolsOpened) {
            devtoolsOpened = true;
            alert('DevTools are open!');
        }
    }
}, 1000);

// Optional: Clear the interval after a certain time to avoid unnecessary checks
setTimeout(function() {
    clearInterval(devtoolsCheckInterval);
}, 30);  // Stops checking after 30 seconds (or modify this value as needed)
