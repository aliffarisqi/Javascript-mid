// function init() {
//     var bayu = 'bayu';
//     function tampilNama() {  //closure( function dalam function yang menggunakan data di parrentnya)
//         console.log(bayu);
//     }
//     tampilNama();
// }
// init();


//penggunaan closur untuk membuat function factories

function init() {

    return function (nama) {
        console.log(nama);
    }
}
let panggillNama = init();
panggillNama('bayu');


//contoh lain penggunaan closur
function ucapanSelamat(waktu) {
    return function (nama) {
        console.log(`hallo ${nama}, selamat ${waktu} semoga harimu menyenangkan`);
    }
}
let selamatPagi = ucapanSelamat('pagi');
let selamatsiang = ucapanSelamat('siang');
let selamatmalam = ucapanSelamat('malam');

selamatPagi('bayu alif farisqi');