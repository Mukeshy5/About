function client_search() {
    const div = document.getElementById('sml-img-1');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 500); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 1 seconds
setInterval(client_search, 3000);

function client_search1() {
    const div = document.getElementById('sml-img-2');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 300); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 2 seconds
setInterval(client_search1, 1000);

function client_search2 () {
    const div = document.getElementById('sml-img-3');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 400); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 3 seconds
setInterval(client_search2, 2200);

function client_search3() {
    const div = document.getElementById('sml-img-4');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 280); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 4 seconds
setInterval(client_search3, 1800);

function client_search4() {
    const div = document.getElementById('sml-img-5');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 380); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 5 seconds
setInterval(client_search4, 2700);