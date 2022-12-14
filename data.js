const nama = "Firdaus Fitri";
let usia = 20;

let biodata = document.getElementById('biodata');


function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        generasi = "gen remaja";
    } else if (usia > 18) {
        generasi = 'dah tua';
    } else {
        generasi = 'tidak diketahui';
    }
    return biodata.innerHTML = generasi;

}


console.log(nama);
console.log(usia);

generateBiodata();

