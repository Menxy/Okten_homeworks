// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user1 = new User(1,'Jeka', 'Sich', 'jekasich@gmail.com', '0667775554');
let user2 = new User(2,'Jane', 'Doe', 'janedoe@gmail.com', '0636675554');
let user3 = new User(3,'Any', 'Long', 'anylong@gmail.com', '0667788854');
let user4 = new User(4,'Vira', 'Tar', 'viratar@gmail.com', '0696545554');
let user5 = new User(5,'Fedja', 'Velos', 'fedjavelos@gmail.com', '0660093875');
let user6 = new User(6,'Mira', 'Karr', 'mirakarr@gmail.com', '0967275511');
let user7 = new User(7,'Peta', 'Star', 'petastar@gmail.com', '0507386554');
let user8 = new User(8,'Jenny', 'Bald', 'jennybald@gmail.com', '0668453624');
let user9 = new User(9,'Peter', 'Young', 'peteryoung@gmail.com', '0965347554');
let user10 = new User(10,'Walter', 'Benz', 'walterbenz@gmail.com', '0661997544');

let usersArray = [user1, user2, user3,user4,user5,user6,user7,user8,user9,user10,];
/*console.log(usersArray);*/
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
/*let evenArray = usersArray.filter(obj => obj.id % 2 === 0);
console.log(evenArray);*/
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
/*let highSort = usersArray.sort((id1, id2) => id2 - id1);
console.log(highSort);*/
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientsArray = []
for (const item of usersArray) {
    clientsArray[item.id - 1] = new Client(item.id, item.name, item.surname, item.email, item.phone,[])
}
clientsArray[0]['order'] = ['juice', 'pasta', 'sushi'];
clientsArray[1]['order'] = ['potato', 'beetroot', 'grocery'];
clientsArray[2]['order'] = ['vine', 'whiskey', 'cognac'];
clientsArray[3]['order'] = ['beer', 'vodka'];
clientsArray[4]['order'] = ['strawberry', 'cream', 'rope'];
clientsArray[5]['order'] = ['katana', 'sheet'];
clientsArray[6]['order'] = ['paper', 'pen', 'pencil', 'fork'];
clientsArray[7]['order'] = ['gin'];
clientsArray[8]['order'] = ['vinegar', 'cabages', 'cucumbers', 'onion'];
clientsArray[9]['order'] = ['water', 'vine', 'juice'];

/*console.log(clientsArray);*/
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientsArray.sort((f,s) => f['order'].length - s['order'].length)
console.log(clientsArray);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarCreator(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function() {console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);};
    this.info = function () {
        console.log(`model - ` + this.model);
        console.log(`manufacturer - ` + this.manufacturer);
        console.log(`year - ` + this.year);
        console.log(`maxSpeed - ` + this.maxSpeed);
        console.log(`engine - ` + this.engine)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }

}
let car1 = new CarCreator('Ford Taurus', 'Ford', 2022, 200, 2500)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку