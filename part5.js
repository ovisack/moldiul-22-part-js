 function woodQuantity(chairQuantity, tabilQuantity, betQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 5;


    const chairTotalWood =chairQuantity *perChairWood;
    const tableTotalWood=tabilQuantity * perTableWood;
    const betTotalWood = betQuantity * perBedWood;

const totalWood= chairTotalWood + tableTotalWood + betTotalWood ;
return totalWood;

}


const wood = woodQuantity(0,0,1);
console.log('wood needed', wood)