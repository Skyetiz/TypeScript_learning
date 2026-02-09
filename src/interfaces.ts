(function(){
    interface Person{
        name:string;
        age:number;
    }
    interface Person{
        gender:string;

        sayHello():void;
    }

    const per: Person = {
        name: 'a',
        age: 32,
        gender: '男',
        sayHello: () => {}
    }
    console.log(per.name);
})()