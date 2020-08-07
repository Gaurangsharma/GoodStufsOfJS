const setLocalStorage=function (obj) {
    localStorage.setItem(String(obj),JSON.stringify(obj));
}
const getLocalStorage=function (obj){
    return JSON.parse(localStorage.getItem(obj))
}

obj={
    name: "Gaurang",
    city: "Mathura"
}