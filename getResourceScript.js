// this script is downloaded and executed blocking parsing
messageJSON = 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/enna6m.json';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
}
xhr.open('GET', messageJSON, true);
xhr.send(null);



// (function a() {
//     alert('object');
// }());