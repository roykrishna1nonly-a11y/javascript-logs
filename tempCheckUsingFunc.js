function chtemp(temp){

    if (temp >= 20){
        return "Normal"
    }

    else if (temp <=20){
        return "Cold"
    }

    else (temp >=30)
        return "Hot"
    
}
console.log(chtemp(15));