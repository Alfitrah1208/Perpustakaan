function cekform(){
    Judul_Buku = document.getElementById("txtIdAnggota");
    Denda_Buku = document.getElementById("txtnama");
    Tanggal_pinjam = document.getElementById("Jenkel");
    Password = document.getElementById("txtpass");
    if(Judul_Buku.value==""){
        alert("Judul Buku tidak boleh kosong");
        Judul_Buku.focus();
        return false;
    }else if (Denda_Buku.value==""){
        alert("Denda Tidak boleh kosong");
        Kode_Buku.focus();
        return false;
    }else if (Tanggal_pinjam.value==""){
        alert("tgl Pinjam Buku belum diisi");
        fiksi.focus();
        return false;
    
    }else{
        alert("termakasih telah mengisi")
        return true;
    }
}