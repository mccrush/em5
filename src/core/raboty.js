export function loadList() {
  var mydata = [{
    id: 2,
    title: "Закупка материала",
    price: "50",
    active: false,
  }, {
    id: 3,
    title: "Замена лампочки",
    price: "50",
    active: false,
  }, {
    id: 4,
    title: "Замена провода",
    price: "100",
    active: false,
  }, {
    id: 5,
    title: "Замена розетки",
    price: "200",
    active: false,
  }, {
    id: 6,
    title: "Замена выключателя",
    price: "200",
    active: false,
  }, {
    id: 7,
    title: "Замена автомата",
    price: "200",
    active: false,
  }, {
    id: 8,
    title: "Подключение водонагревателя",
    price: "450",
    active: false,
  }, {
    id: 9,
    title: "Подключение счетчика",
    price: "450",
    active: false,
  }, {
    id: 10,
    title: "Подключение кондиционера",
    price: "450",
    active: false,
  }];
  //var data = JSON.parse(localStorage.getItem(STORAGE_KEY_G) || '[]');
  return mydata;
}