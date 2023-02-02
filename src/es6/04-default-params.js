
//antigua forma
const newUser = (name, age, country) => {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('DAVID' , 15, 'colombia');


//nuava forma
const newUser1 = (name1 = 'oscar', age1 = 25, country1 = 'argentina') => console.log(name1, age1, country1);
newUser1();
newUser1('Jairo', 96, 'peru');


