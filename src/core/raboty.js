export function loadList() {
  var mydata = [{
    id: 1,
    title: "Вызов электрика",
    price: "50"
  }, {
    id: 2,
    title: "Консультация",
    price: "50"
  }, {
    id: 3,
    title: "Замена лампочи",
    price: "50"
  }, {
    id: 9,
    title: "Замена провода",
    price: "100"
  }, {
    id: 4,
    title: "Замена розетки",
    price: "200"
  }, {
    id: 5,
    title: "Замена выключателья",
    price: "200"
  }, {
    id: 6,
    title: "Замена автомата",
    price: "200"
  }, {
    id: 7,
    title: "Подключение водонагревателя",
    price: "450"
  }, {
    id: 8,
    title: "Подключение счетчика",
    price: "450"
  }, {
    id: 10,
    title: "Подключение кондиционера",
    price: "450"
  }];
  //var data = JSON.parse(localStorage.getItem(STORAGE_KEY_G) || '[]');
  return mydata;
}