
// //function declaration
// const tampilNama = function (nama) {
//     return `hallo ${nama} `;
// }
// console.log(tampilNama('bayu'));

// //function arrow

// const tampilNamaArrow = (nama) => {//kalo cuma 1 parameter tidak perlu ()
//     return `hallo ${nama} `;
// }
// console.log(tampilNamaArrow('bayu'));

// const tampilNamaArrow2 = (nama, waktu) => { //kalau 2 wajib pakain()
//     return `selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNamaArrow2('alif', 'malam'));

// //arrow function implisit return

// const tampilNamaImplisit = nama => `hallo ${nama}`;
// console.log(tampilNamaImplisit('farisqi'));


// //contoh lain
// let mahasiswa = ['bayu alif farisqi', 'sifaul ihya', 'ayubi'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);
// //menggunakan arrow function
// let student = ['jaka tarub', 'roro jonggrang', 'manik angkerang'];
// let jHuruf = student.map(nama => {
//     return nama.length;
// })

// console.log(jHuruf);

// //mengembalikan dalam bentuk object

// let siswa = ['andi annas', 'fatahillah', 'salman husni'];
// let jh = siswa.map(nama => ({
//     nama: nama,
//     jumlahHuruf: nama.length

// }));
// console.log(jh);


//konsep this pada arrow function
// const mahasiswa = function () {
//     this.nama = 'bayu';
//     this.umur = 22;
//     this.hello = () =>  {
//         console.log(`hello saya ${this.nama} dan saya berunur ${this.umur} tahun`);
//     }

// }
// const bay = new mahasiswa();


//object literal
// const mhs1 = {
//     nama: 'bayu',
//     umur: '20',
//     sayhello: function () {
//         console.log(`hello saya ${this.nama} dan saya berunur ${this.umur} tahun`);
//     }
// }

