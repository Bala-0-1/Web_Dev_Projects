function tables(tname=2,tlimit=16){
    if(typeof tlimit == "undefined"){
        for(let i = 1;i<=tlimit;i++){
            console.log(i+" * "+tname+" = "+(i*tname));
        }
    }
    else{
        for(let i = 1;i<=tlimit;i++){
             console.log(i+" * "+tname+" = "+(i*tname));
        }
    }
}


