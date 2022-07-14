let name = prompt("Lütfen adınızı Giriniz:")

let myName = document.querySelector("#myName")
myName.innerHTML = `
${myName.innerHTML} ${name}
`

function date() {
  let momentary = new Date()
  let saat = momentary.getHours()
  let dakika = momentary.getMinutes()
  let saniye = momentary.getSeconds()
  let d = new Date()
  let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
  let iceCekme = document.querySelector("#myClock")
  iceCekme.innerHTML = saat + ":" + dakika + ":" + saniye + " " + days[d.getDay()]
}
let actual = setInterval(date, 100)
