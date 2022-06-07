import data from './raritydata'


var number = "";
var point_array = new Array(5556).fill(0);

var index = 0;
var newpoint = 0;
var ID_Array = [];

for (var i = 0; i <= 5556; i++) {
   ID_Array.push(i);
}


for (let a = 1; a < 5556; a++) {
    var genex = require('./Data_'+ a.toString()+ '.json')
    index = 0;
    for (let b = 0; b < 10; b++) {
        number = "";

        while ((genex.NFT_DNA[index] != '-')) {
            if(index != genex.NFT_DNA.length) 
            {
                number = number.concat(genex.NFT_DNA[index])
                index++;
            }
            else
            break;
        }
        
        newpoint = (100/Number(data[b][Number(number)][0]));
        point_array[a]+= newpoint;
        index++;
        
        
    }
}



for (let i = 1; i < 5556; i++) {
    for (let j = 1; j < 5556; j++) {
        if (point_array[j] < point_array[j + 1]) {
            let temp = point_array[j];
            let temp2 = ID_Array[j];
            point_array[j] = point_array[j + 1];
            ID_Array[j] = ID_Array[j+1]
            point_array[j + 1] = temp;
            ID_Array[j+1] = temp2;
        }
    }
}


function rank(id) {
    for (let d = 1; d < 5556; d++) {
        if (ID_Array[d] == id) {
            return [d, point_array[d].toFixed(3)];
        }
        
    }
}

export default rank;

