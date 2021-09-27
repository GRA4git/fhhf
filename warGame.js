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
      this.heal--
  },
};


console.log(soldier.recharge())

