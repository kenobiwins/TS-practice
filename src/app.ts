// const button = document.querySelector("button")! as HTMLElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   console.log(num1 + num2);

//   return num1 + num2;
// }

// button.addEventListener("click", () => add(+input1.value, +input2.value));

// ///////////////////////////////////////////////////
// lesson 2
// t1
// let age: number;
// // let name: string;
// let toggle: boolean;
// let empty:null;
// let notInitialize: undefined;
// let callback: (a: number) => number;

// age = 50;
// // name = "Max";
// toggle = true;
// empty = null;
// notInitialize = undefined;
//  callback = (a) => {
//   return 100 + a;
// };

// // t2
// let anything: any
// anything = 'hello'
// anything = {}
// anything = -2

// // t3
// let some: unknown;
// some ='text'

// let str: string;

// if (typeof some === 'string') {
//     str = some
// }

// // t4
// let person: [string, number]

// person = ['we', 2]

// // t5
// enum Status { 'LOADING', 'READY' }

// const page = {
//     status:Status.READY
// }

// if (page.status === Status.LOADING) {
//     console.log('page is loading');
// }
// if (page.status === Status.READY) {
//     console.log('page is loaded');
// }

// // t6
// let NumOrString: number | string
// NumOrString = 'rew'
// NumOrString = 12

// // t7
// let enable: 'enable' | 'disable'

// enable = 'enable'
// enable = 'disable'
// // t8
// function showMessage(message:string):void {
//   console.log(message);
// }

// function calc(num1:number, num2:number):number {
//   return num1 + num2;
// }

// function customError():never {
//   throw new Error('Error');
// }
// // t9
// type PageScheme={
//   title:string;
//   likes:number;
//   accounts:string[];
//   status:'open'|'close';
//   details?:{
//     createAt:Date;
//     updateAt:Date;
//   }
// }

// const page1: PageScheme = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt:new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   }
// }

// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

// Lesson 4
// class Singleton {
//   private static instance: Singleton;

//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }

//     Singleton.instance = this;

//     return Singleton.instance;
//   }

//   public someBusinessLogic() {
//       // ...
//   }
// }

// const s1 = new Singleton();
// const s2 = new Singleton();

// if (s1 === s2) {
//     console.log('Тот же объект');
// } else {
//     console.log('Че-то не так, получили разные объекты');
// }

// Build house
// Давайте построим дом.

// Создайте абстрактный класс House в нем должны быть следующая логика

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key
// Создайте класс MyHouse который реализует класс House

// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, если да, открываем дверь.
// Создайте объект Key

// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature
// Создайте объект Person

// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.

// class Key {
//   private signature: number

//   constructor() {
//     this.signature = Math.random()
//   }

//   getSignature(): number {
//     return this.signature
//   }
// }

// class Person {
//   constructor(private key: Key) { }

//   getKey(): Key{
//     return this.key
//   }
// }

// abstract class House {
//   protected door = false
//   private tenants:Person[]=[]
//   constructor(protected key: Key) { }

//   comeIn(person: Person): void{
//     if (this.door) {
//       this.tenants.push(person)
//       console.log('Person inside');

//     } else {
//       throw new Error('Door is close');

//     }
//   }

//  abstract openDoor(key:Key): boolean
// }

// class MyHouse extends House {
//  openDoor(key: Key): boolean {
//    if (key.getSignature() === this.key.getSignature()) {
//     return this.door = true
//    } else {
//      return false
//    }
//  }
// }

// const key = new Key()

// const house = new MyHouse(key)
// const person = new Person(key)

// house.openDoor(person.getKey())
// house.comeIn(person)

// console.log(key);
// console.log(house);
// console.log(person);

// lesson 5
// type TArr = Array<string | number>

// function getPromise(): Promise <TArr>  {
//   return new Promise((resolve) => {
//     resolve(['Text', 43]);
//   });
// }

// getPromise ()
// .then((data) => {
//   console.log(data);
// });

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// function compare (top:Pick<AllType,'name'|'color'>, bottom:Pick<AllType,'position'|'weight'>) {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }

// compare({name:'red',color:'red'},{position:23,weight:23})

// function merge<T extends object,U extends object> (objA:T, objB:U) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'ret' },{age:4}));

//
// class Component<T> {
//   constructor (public props:T) {

//   }
// }

// interface IProps {
//     title:string
// }

// class Page extends Component<IProps> {
//   pageInfo ():void {
//     console.log(this.props.title);
//   }
// }

//

// const Logger = (logString: string) => (constructor: Function) => {
//   console.log(logString);
//   console.log(constructor);
// };

// const AddProperty = () => (constructor: Function) => {
//     console.log('Modify');
//     constructor.prototype.modify = true

// }

// @Logger("LOGGING - CONTROLLER")
// @AddProperty()
// class Controller {
//     public id = 1;
//     public modify?: boolean
// }

// const controller = new Controller()

// console.log(controller.modify );

//

// interface IDecoration {
//     parent: string;
//     template: string;
// }

// const ControllerDecoration = (config: IDecoration) => <T extends { new(...args: any[]): { content: string } }>(originalConstructor: T) => class extends originalConstructor {

//     private parent: HTMLElement;
//     private element: HTMLElement;

//     constructor(...args: any[]) {
//         super(...args)
//         this.parent = document.getElementById(config.parent)!;
//         this.element = document.createElement(config.template);

//         this.element.innerHTML = this.content;

//         this.parent.appendChild(this.element)
//     }

// }

// @ControllerDecoration({
//     parent: 'app',
//     template:'H1',
// })
// class Controller {
//     public content = 'Hello there!!!'
// }

// const controller = new Controller()

//
// function ShowMeParams (target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('target',target);
//   console.log('name', name);
//   console.log('descriptor', descriptor);
// }

// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value;

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return method.bind(this)
//         }
//     }
// }

// class Notifier {
//     @AutoBind
//     showMessage() {
//         console.log('hello');

//     }
// }

// const notifier = new Notifier()

// const showMessage = notifier.showMessage

// showMessage()

// const AddTax =
//   (taxPercent: number) =>
//   (_: any, _2: string, descriptor: PropertyDescriptor) => {
//     const method = descriptor.value as Function;

//     return {
//       configurable: true,
//       enumerable: false,
//       get() {
//         return (...args: any[]) => {
//           const result = method.apply(this, args);

//           return result + (result / 100) * taxPercent;
//         };
//       },
//     };
//   };

//   class Payment {
//     @AddTax(20)
//     pay(money: number): number {
//         return money
//     }
// }
  
// const payment = new Payment()

// console.log('Amount with tax: ',payment.pay(100));


//
// function CheckEmail (target: any, name: string, position: number) {
// if (!target[name].validation) {
//     target[name].validation = {}
//     }
//     Object.assign(target[name].validation, {
//         [position]: (value: string) => {
//             if (value.includes('@')) {
//                 return value
//             }
//             throw new Error('No valid field')
//     }
// })
// }

// function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value;

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return (...args: any[]) => {
//                 if (method.validation) {
//                     args.forEach((item, index) => {
//                         if (method.validation[index]) {
//                             args[index] = method.validation[index](item)
//                         }
//                     })
//                 }
//                 return method.apply(this,args)
//             }
//         }
//     }
// }

// class Person {
//     @Validation
//   setEmail (@CheckEmail email: string) {
//     console.log(email);
//   }
// }

// const person = new Person()

// person.setEmail('hello@ss.we')

//

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// const uniqCourses = allCourses.filter((elem, index, array) =>  array.indexOf(elem) === index)
// console.log(uniqCourses);
