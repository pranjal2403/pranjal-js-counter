let data = 0;

document.getElementById("count").innerHTML = data;
// incrementing
function increment() {
    data+= 1;
    document.getElementById("count").innerHTML = data;
}
// decrementing
function decrement() {
    if (data !== 0) {
        data-= 1;
        document.getElementById("count").innerHTML = data;
    }
}