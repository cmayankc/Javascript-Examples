function findAndReplace(obj) {
    for(var key in obj) {
        var item = obj[key];
        if(item instanceof Array) {
            for(var i=0; i<item.length; i++) {
                if(item[i] === -1){
                    item.splice(i, 1);
                    i--;
                } else if(item[i] instanceof Array || typeof item[i] === 'object') {
                    findAndReplace(item);
                }
            }
        } else if(typeof item === 'object') {
            findAndReplace(item);
        }

        if(item === -1) {
            delete obj[key];
        }
    }

    for(var key in obj) {
        var item = obj[key];
        if(item instanceof Array && item.length == 0) {
            delete obj[key];
        } else if (typeof item === 'object' && size(item) == 0) {
            delete obj[key];
        } else if (typeof obj[key] === 'undefined') {
            delete obj[key];
        }
    }
}

function size(obj) {
    var count = 0;
    for(var key in obj) {
        count++;
    }

    return count;
}

var inputObj = {
    'i': 10,
    'j': {
        a: -1,
        b: 20
    },
    'k': [-1, -1],
    'l': {
        x: -1,
        y: -1
    },
    'm': [22, -1],
    'n': [{aa: -1, bb: 90, cc: -1, dd: 64}],
    'o': -1
};

findAndReplace(inputObj);
console.log('the reduced object is: ' + inputObj);