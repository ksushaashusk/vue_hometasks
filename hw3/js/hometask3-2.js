"use strict";
// 1) Вывести в html названия услуг и их стоимость
// 2) Реализовать возможность выбора услуг из списка
// 3) Ниже списка отображать итоговую стоимость выбранных пользователем услуг
// 4) Если пользователь отменяет выбор, стоимость должна пересчитываться 

let services =  [
   {
       title: "Женская стрижка на длинные волосы",
       price: 2000,
       active: true
   },
   {
       title: "Стрижка челки",
       price: 300,
       active: false
   },
   {
       title: "Детская стрижка (до 7 лет)",
       price: 700,
       active: false
   },
   {
       title: "Мужская стрижка",
       price: 1000,
       active: false
   },
   {
       title: "Коррекция бороды",
       price: 1200,
       active: false
   },
   {
       title: "Тонирование мужских волос",
       price: 1500,
       active: false
   },
   {
       title: "Окрашивание волос",
       price: 5000,
       active: false
   },
   {
       title: "Женский маникюр",
       price: 1500,
       active: false
   },
   {
       title: "Мужской маникюр",
       price: 1700,
       active: false
   },
   {
       title: "Педикюр",
       price: 2500,
       active: false
   },
   {
       title: "Покрытие гель-лаком",
       price: 1500,
       active: false
   }
];

 Vue.createApp({
      data() {
       return {
           services,
     
            }
     },
     methods: {
      active: function(s){
         s.active=!s.active;
      },
      total: function(){
         let total = 0;
         this.services.forEach(function(s){
            if(s.active){
               total+=s.price
            }
         });
         return total
      }
     }
   }).mount("#app");

    


