class Person{
    // 实例属性
    name:string = '张三';

    // static为静态属性
    static age:number = 18;

    // readonly只读属性，不能更改
    readonly address:string = 'sfgsg';

    // 方法
    helloWorld(){
        console.log('Hello World');
    }
    // static静态方法
    static sayHello(){
        console.log('Hello');
    }

}

const per = new Person();
console.log(per);
console.log(per.name)  // 创建实例来访问
console.log(Person.age) // 静态属性用类来访问

// 修改属性
per.name = 'tom'
console.log(per.name);

// 使用方法
per.helloWorld();
Person.sayHello();

