class CoffeeMakingAppliances {
    constructor(name, power) {
        this.name = name;
        this.technicalDevice = 'electric';
        this.power = power;
        this.switchOn = false;
    }
}
    CoffeeMakingAppliances.prototype.getOn = function(){
    return this.switchOn;
}

    CoffeeMakingAppliances.prototype.setOn = function(swh){
    if(this.switchOn != swh) {
        this.switchOn = swh;
        if(this.switchOn == true) totalPower = totalPower + this.power;
        else totalPower = totalPower - this.power;
        console.log(this.name + ' ' + (this.getOn() == true ? 'включили': 'выключили'));
    }
}

    CoffeeMakingAppliances.prototype.info = function(){
    console.log('Наименование прибора: ' + this.name);
    console.log('Тип прибора: ' + this.technicalDevice);
    console.log('Мощность: ' + this.power);
    console.log('Состояние : ' + (this.getOn() == true ? 'включен': 'выключен'));
    console.log("......");
}

    let totalPower = 0;

    const coffeeGrinder = new CoffeeMakingAppliances('кофемолка', 200);
    const coffeeMachine = new CoffeeMakingAppliances('кофемашина',1000);

    coffeeGrinder.info();
    coffeeMachine.info();

    coffeeGrinder.setOn(true);
    coffeeMachine.setOn(true);

    console.log("......");
    console.log('Общая мощность: ' + totalPower);

    console.log("......");
    coffeeMachine.setOn(false);

    console.log("......");
    console.log('Общая мощность: ' + totalPower);
    console.log("......");

    coffeeGrinder.info();
    coffeeMachine.info();
