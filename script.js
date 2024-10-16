function form(){
    let fname=document.f1.username.value;
    let spassword=document.f1.password.value;
    let lpassword=document.f1.confirm_password.value;

    if(fname==''| fname==null){
        alert("name con/'t be blank")
        return false;
    }
    if(spassword==lpassword){
        return true;
    }
    else{
        alert('password must be same')
        return false;
    }
    
}
