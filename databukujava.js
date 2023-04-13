function cekform(){
    Judul_Buku = document.getElementById("txtIdAnggota");
    Kode_Buku = document.getElementById("txtnama");
    Jenis_Buku = document.getElementById("Jenkel");
    Password = document.getElementById("txtpass"); 
    if(Judul_Buku.value==""){
        alert("Judul Buku tidak boleh kosong");
        Judul_Buku.focus();
        return false;
    }else if (Kode_Buku.value==""){
        alert("Kode Buku Tidak boleh kosong");
        Kode_Buku.focus();
        return false;
    }else if (Jenis_Buku.value==""){
        alert("Jenis Buku belum dipilih");
        fiksi.focus();
        return false;
    
    }else{
        alert("termakasih telah mengisi")
        return true;
    }
}