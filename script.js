/**
    ========== SOAL NO 1 ==========
    Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
*/
let kata = "NEGIE1";

const reverseString = (inputKata) => {
    let angka = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // split "inputKata" menjadi array
    let splitKata = inputKata.split("");

    let tampungAlfabet = [];
    let tampungAngka = [];

    // looping semua value dari array "splitKata" untuk memisahkan antara alfabet dan angka
    for (let i = 0; i < splitKata.length; i++) {
        if (angka.includes(splitKata[i])) {
            tampungAngka.push(splitKata[i]);
        } else {
            tampungAlfabet.push(splitKata[i]);
        }
    }

    // reverse semua value dari array "tampungAlfabet"
    tampungAlfabet.reverse();

    // menggabungkan 2 buah array "tampungAlfabet" dan "tampungAngka" menggunakan ".concat"
    let gabungArray = tampungAlfabet.concat(tampungAngka);

    // menggabungkan array "gabungArray" menjadi string kembali menggunakan ".join"
    let hasilAkhir = gabungArray.join("");

    return `========== JAWABAN NOMOR 1 ==========\n${hasilAkhir}\n`;
};

console.log(reverseString(kata));

/**
    ========== SOAL NO 2 ==========
    Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu.

    Contoh:
    const sentence = "Saya sangat senang mengerjakan soal algoritma"

    longest(sentence) 
    // mengerjakan: 11 character
*/
let sentence = "Saya sangat senang mengerjakan soal algoritma";

const kataTerpanjang = (inputSentence) => {
    // split "inputSentence" menjadi beberapa kata
    let splitSentence = inputSentence.split(" ");

    // variable yang akan menampung karakter terpanjang beserta kata nya
    let jumlahKarakter = 0;
    let kataTerpanjang = "";

    // looping semua "splitSentence" untuk mencari karakter terpanjang
    for (let i = 0; i < splitSentence.length; i++) {
        if (splitSentence[i].length > kataTerpanjang.length) {
            kataTerpanjang = splitSentence[i];
            jumlahKarakter = splitSentence[i].length;
        }
    }

    let hasilAkhir = `Jadi kata terpanjang dari kalimat :\n"${sentence}"\nadalah kata "${kataTerpanjang}" dengan jumlah karakter "${jumlahKarakter}"`;

    return `========== JAWABAN NOMOR 2 ==========\n${hasilAkhir}\n`;
};

console.log(kataTerpanjang(sentence));

/**
    ========== SOAL NO 3 ==========
    Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

    Contoh:
    INPUT = ['xc', 'dz', 'bbb', 'dz']
    QUERY = ['bbb', 'ac', 'dz']

    OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
*/
let input = ["xc", "dz", "bbb", "dz"];
let query = ["bbb", "ac", "dz"];

const hitungKata = (input, query) => {
    // "jumlahKata" untuk menampung jumlah kata yang sama
    let jumlahKata = [];

    // "akumulasi" untuk menampung berapa kata yang sama
    let akumulasi = 0;

    // looping untuk menghitung menghitung jumlah kata yang sama
    for (let x = 0; x < query.length; x++) {
        for (let y = 0; y < input.length; y++) {
            if (input[y] === query[x]) {
                akumulasi = akumulasi + 1;
            }
        }
        jumlahKata.push(akumulasi);
        akumulasi = 0;
    }

    return `========== JAWABAN NOMOR 3 ==========\n[${jumlahKata}]\n`;
};

console.log(hitungKata(input, query));

/**
    ========== SOAL NO 4 ==========
    Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN :

    Contoh:
    Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

    diagonal pertama = 1 + 5 + 9 = 15 
    diagonal kedua = 0 + 5 + 7 = 12 

    maka hasilnya adalah 15 - 12 = 3
*/
let matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
];

const hitungMatrix = (matrix) => {
    // variable untuk menampung nilai diagonal
    let diagonalPertama = [];
    let diagonalKedua = [];

    // looping untuk mendapatkan nilai-nilai dari "diagonalPertama"
    for (let x = 0; x < matrix.length; x++) {
        diagonalPertama.push(matrix[x][x]);
    }

    // looping untuk mendapatkan nilai-nilai dari "diagonalKedua"
    for (let y = 0; y < matrix.length; y++) {
        diagonalKedua.push(matrix[y][matrix[y].length - 1 - y]);
    }

    // hitung jumlah dari diagonal pertama dan kedua
    let sumDiagonalPertama = diagonalPertama[0] + diagonalPertama[1] + diagonalPertama[2];
    let sumDiagonalKedua = diagonalKedua[0] + diagonalKedua[1] + diagonalKedua[2];

    // hasil akhir dari diagonal pertama dikurangi diagonal kedua
    let hasilAkhir = sumDiagonalPertama - sumDiagonalKedua;

    return `========== JAWABAN NOMOR 4 ==========\nMaka hasilnya adalah ${sumDiagonalPertama} - ${sumDiagonalKedua} = ${hasilAkhir}\n`;
};

console.log(hitungMatrix(matrix));
