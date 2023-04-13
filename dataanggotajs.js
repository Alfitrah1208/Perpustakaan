function cekformulir(){
    Id_Anggota = document.getElementById("txtIdAnggota");
    Nama = document.getElementById("txtnama");
    Jenis_kelamin = document.getElementById("Jenkel");
    Password = document.getElementById("txtpass");
    if(Id_Anggota.value==""){
        alert("Id Anggota tidak boleh kosong");
        Id_Anggota.focus();
        return false;
    }else if(Nama.value.length<=3){
        alert("nama minim 3 karakter");
        Nama.focus();
        return false;
    }else if (Nama.value==""){
        alert("Nama Tidak boleh kosong");
        Nama.focus();
        return false;
    }else if (Jenis_kelamin.value==""){
        alert("Jenis kelamin belum dipilih");
        olahraga.focus();
        return false;
    }else if (Password.value==""){
        alert("Password belum dipilih");
        Password.focus();
        return false;
    
    }else{
        alert("termakasih telah mengisi")
        return true;
    }
}