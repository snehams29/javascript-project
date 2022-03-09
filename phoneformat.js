function myFunc() {
var a= document.getElementById('mob').value;
a=a.replace(/^\+1|^1|[a-zA-Z]|[.*+(){}$#^?]|[\]\\/-]| /g, '');
document.getElementById('result').innerHTML=a;
}