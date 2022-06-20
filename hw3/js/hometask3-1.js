"use strict";
// Реализовать регистронезависимый поиск по названию статьи.
// 1. В качестве данных используйте массив статей из ДЗ #2.2. В html выводить только названия
// 2. В html добавить поле для поиска статьи по названию 
// (пользователь может ввести название полностью или его часть).
// 4. Ниже поля выводятся статьи, подходящие под запрос пользователя.

let articles =  [ 
    {
       title: "Нейросеть может читать текст быстрее человека",
       image: "https://picsum.photos/id/22/1000/1000"
    },
    {
       title: "Пять сервисов, которые помогут написать статью за 5 минут",
       image: "https://picsum.photos/id/24/1000/1000"
    },
    {
       title: "Названы основные правила движения поездов",
       image: "https://picsum.photos/id/28/1000/1000"
    },
    {
       title: "Самая посещаемая достопримечательность мира",
       image: "https://picsum.photos/id/27/1000/1000"
    },
    {
       title: "Появился новый термин для обозначения радиоволн",
       image: "https://picsum.photos/id/29/1000/1000"
    },
    {
       title: "В России появится новый вид бумаги",
       image: "https://picsum.photos/id/30/1000/1000"
    }
 ];

 Vue.createApp({
      data() {
       return {
           articles,
           search: '',
            }
     },
      
      computed: {
         filterArticles: function(){
            let arrArticles = this.articles, 
            search = this.search;
            if(!search){
               return arrArticles;
            }
            search = search.trim().toLowerCase();

            arrArticles = arrArticles.filter(function(item){
               if(item.title.toLowerCase().indexOf(search) !== -1){
                  return item;
               }
            })
            return arrArticles;
            }
      }
   
   
}).mount("#app");

    


