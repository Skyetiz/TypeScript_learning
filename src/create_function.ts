class Dog{
    // name:string = 'kikki';
    // age:number = 3;
    //
    name:string;
    age:number;


    // 构造函数constructor
    constructor(name:string,age:number){
        // 在实例方法中this表示当前实例
        this.name = name;
        this.age = age;
    }

    Bark(){
        alert('wang')
    }
}

const dog1 = new Dog('zaaa',18);
const dog2 = new Dog('aaa',90);


console.log(dog1);
console.log(dog2);
console.log(dog2.age)
