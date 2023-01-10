const user = {

    name: 'Elena',
    surname: 'Skudarnova',
    adress: 'Sochi',
    position: 'student'
};

prop(user);

function prop(obj){
    for (let key in obj) {
        console.log(key + ':'  + obj[key]);
    }
}