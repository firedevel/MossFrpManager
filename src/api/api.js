

function getCookie(name) {
    let reg = RegExp(name + '=([^;]+)')
    let arr = document.cookie.match(reg)
    if (arr) {
      return arr[1]
    } else {
      return undefined
    }
}
function setCookie(name, value) {
    let date = new Date()
    date.setDate(date.getDate() + 365)
    document.cookie = name + '=' + value + ';expires=' + date
}
const token = getCookie('token') 
const api = "http://public.ghs.wiki:7001/API" //堆屎


