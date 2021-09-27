const soldier = {
  name: zorrok,
  heal: 10,
  weapon: { name: "ak47", ammunition: 30 },
  supplies: 2,
  shooting: function () {
    if (this.weapon.ammunition === 0) {
      return "обойма пуста. Перезаредитесь";
    } else {
      this.weapon.ammunition--;
      return "бах-бах";
    }
  },
  recharge: function () {
    if(this.supplies >0){
        this.weapon.ammunition = 30;
        this.supplies--
        return "перезарядка"
    }else{
        return "не осталось припасов"
    }

  },
  wound: function () {
  },
};


console.log(soldier.recharge())

// 4. При вызове метода `перезарядка`, кол-во патронов в оружии должно  стать ровно 30, а число `припасов` уменьшиться на 1. Метод должен вернуть строку “перезарядка…”. Если кол-во `припасов` стало равно 0, метод должен вернуть “не осталось припасов”
// 5. При вызове метода `ранение` значение свойства `здоровье` должно уменьшаться на единицу. 