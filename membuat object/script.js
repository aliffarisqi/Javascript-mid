//1. object literal
// let mahasiswa = {
//     nama: "bayu alif",
//     energi: 10,

//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan`)
//     }
// }
// let mahasiswa2 = {
//     nama: "doddy",
//     energi: 10,

//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan`)
//     }
// }

//2. object functiona declaration
// function mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan energimu naik menjadi ${this.energi}`)
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain, energimu menjadi ${this.energi}, jangan lupa makan `)
//     }
//     return mahasiswa;
// }

//lebih efektif
// const methodeMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan energimu naik menjadi ${this.energi}`)
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain, energimu menjadi ${this.energi}, jangan lupa makan `)
//     }
// }
// function mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodeMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }
// let bayu = mahasiswa('bayu', 10);




//membuat object dengan versi
//menggunakan prototype
// function mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;
// }
// mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `halo bayu ${this.nama} selamat makan`;
// }

// let bayu = new mahasiswa('bayu', 12);


//membuat object dengn versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi
    }
    makan(porsi) {
        this.energi += porsi;
        return `selamat makan ${this.nama}, jangan lupa berdoa`
    }
    main(jam) {
        this.energi -= jam;
        return `selamat main ${this.nama}, jangan lupa berdoa`
    }
    tidur(jam) {
        this.energi += jam + 2;
        return `selamat tidur ${this.nama}, jangan lupa berdoa`
    }
}

let bayu = new Mahasiswa('bayu', 20);










//3. object costructor function
// function mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan energimu naik menjadi ${this.energi}`)
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain, energimu menjadi ${this.energi}, jangan lupa makan `)
//     }
// }

// let bayu = new mahasiswa('bayu', 10);



//4. object.created


