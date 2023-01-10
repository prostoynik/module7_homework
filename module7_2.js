const str1 = 'surname';
const str2 = 'age';

const user = {

    name: 'Elena',
    surname: 'Skudarnova',
    adress: 'Sochi',
    position: 'student'
};


console.log(prop(str1, user));
console.log(prop(str2, user));

function prop(str, obj){
    let res = false;
    for (let key in obj) {
        if(key == str) {
            res = true;
            break;
        }
    }
    return res;
}
