function hitungNilai() {
    let nilaiTugas = Number(document.getElementById("tugas").value);
    let nilaiUTS = Number(document.getElementById("uts").value);
    let nilaiUAS = Number(document.getElementById("uas").value);
    let nilaiAkhir = (nilaiTugas * 30 / 100) + (nilaiUTS * 30 / 100) + (nilaiUAS * 40 / 100);
    let grade;

    if (nilaiAkhir >= 90) {
        grade = "A";
    } else if (nilaiAkhir >= 80) {
        grade = "B";
    } else if (nilaiAkhir >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }
    
    let status;
    if (nilaiAkhir >= 75 && nilaiUAS >= 60) {
        status = "Lulus";
    } else {
        status = "Remedial";
    }

    document.getElementById("hasil").innerHTML = 
        "<strong>Nilai Akhir:</strong> " + nilaiAkhir.toFixed(2) + "<br>" +
        "<strong>Grade:</strong> " + grade + "<br>" +
        "<strong>Status:</strong> " + status;
}