(function(){
    class Aminal{
        name: string;
        age:number;

        constructor(name:string,age:number){
            this.name = name;
            this.age = age;
        }

        Bark(){
            console.log("bark!1")
        }
    }
    // 类的继承
    class Dog extends Aminal{
        // 方法的重写
        Bark(){
            console.log("wang");
        }
    }

    const dog = new Dog('aaa',19);
    console.log(dog.name);
    dog.Bark();
})();