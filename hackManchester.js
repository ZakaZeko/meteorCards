    Cards = new Mongo.Collection("cards");





    if (Meteor.isClient) {
        Hand = new Mongo.Collection(null);


        var attrValue = 0 ;
        Session.set("gamestate", 3);
        var StringForGameNumbers = new Array(10);

        var myCurrentCard = "";

        var myCurrentCard2 = "";

        var attrValue2 = 0;

        var First= "Hello";
        var Second= "Hello";
        var Third= "Hello";
        var Fourth= "Hello";
        var Fifth = "Hello";


        var currentAttr = 0;
        var currentAttr2 = 0 ;


      Template.deck.helpers({
        Cards: function(){
          return Cards.find();
        }
      });
      Template.ui.helpers({
          gamestate:function() {
              return Session.get('gamestate');
          },
          gamestate0:function(){
              if (Session.get('gamestate') === 0){
                  return true;
              }
              return false;
          },
          gamestate1:function(){
              if (Session.get('gamestate') === 1){
                  return true;
              }
              return false;
          },
          gamestate2:function(){
              if (Session.get('gamestate') === 2){
                  return true;
              }
              return false;
          },


          gamestate3:function(){
              if (Session.get('gamestate') === 3){
                  return true;
              }
              return false;
          }
        });






        Template.ui.events({
            'click #btnFirstCard2': function () {

                myCurrentCard2 = First;

                document.getElementById("LedforCard2").innerHTML = myCurrentCard;

                document.getElementById("imgattr2").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


                document.getElementById("attr112").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
                document.getElementById("attr122").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
                document.getElementById("attr132").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
                document.getElementById("attr142").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
                document.getElementById("attr152").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
                document.getElementById("attr162").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
                document.getElementById("attr172").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

            },

            'click #btnFirstCard': function () {

                myCurrentCard = First;

                document.getElementById("LedforCard").innerHTML = myCurrentCard;

                document.getElementById("imgattr").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


                document.getElementById("attr11").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
                document.getElementById("attr12").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
                document.getElementById("attr13").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
                document.getElementById("attr14").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
                document.getElementById("attr15").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
                document.getElementById("attr16").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
                document.getElementById("attr17").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

            },


            'click #btnStartAnewGame': function(){

                console.log("Test");


                Session.set("gamestate",0)





            },


            'click #btnJoinGame': function(){

                Session.set("gamestate",1)



            },



            'click #btnHowToPlay': function(){

                Session.set("gamestate",2)



            },

            'click #btnBack': function(){

                Session.set("gamestate",3)

            },











            'click #btnSecondCard': function () {

              myCurrentCard = Second;

              document.getElementById("LedforCard").innerHTML = myCurrentCard;

              document.getElementById("imgattr").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


              document.getElementById("attr11").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
              document.getElementById("attr12").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
              document.getElementById("attr13").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
              document.getElementById("attr14").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
              document.getElementById("attr15").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
              document.getElementById("attr16").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
              document.getElementById("attr17").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

          },

          'click #btnThirdCard': function () {

              myCurrentCard = Third;

              document.getElementById("LedforCard").innerHTML = myCurrentCard;

              document.getElementById("imgattr").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


              document.getElementById("attr11").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
              document.getElementById("attr12").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
              document.getElementById("attr13").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
              document.getElementById("attr14").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
              document.getElementById("attr15").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
              document.getElementById("attr16").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
              document.getElementById("attr17").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

          },

          'click #btnFourthCard': function () {

              myCurrentCard = Fourth;

              document.getElementById("LedforCard").innerHTML = myCurrentCard;

              document.getElementById("imgattr").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


              document.getElementById("attr11").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
              document.getElementById("attr12").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
              document.getElementById("attr13").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
              document.getElementById("attr14").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
              document.getElementById("attr15").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
              document.getElementById("attr16").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
              document.getElementById("attr17").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

          },

          'click #btnFifthCard': function () {

              myCurrentCard = Fifth;

              document.getElementById("LedforCard").innerHTML = myCurrentCard;

              document.getElementById("imgattr").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


              document.getElementById("attr11").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
              document.getElementById("attr12").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
              document.getElementById("attr13").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
              document.getElementById("attr14").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
              document.getElementById("attr15").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
              document.getElementById("attr16").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
              document.getElementById("attr17").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

          },

            'click #GetHand': function () {


                First = Cards._collection.findOne({attr8:1}).name;
                document.getElementById("btnFirstCard").innerHTML  = First;


                Second = Cards._collection.findOne({attr8:2}).name;
                document.getElementById("btnSecondCard").innerHTML  = Second;


                Third = Cards._collection.findOne({attr8:3}).name;
                document.getElementById("btnThirdCard").innerHTML  = Third;


                Fourth = Cards._collection.findOne({attr8:4}).name;
                document.getElementById("btnFourthCard").innerHTML  = Fourth;


                Fifth = Cards._collection.findOne({attr8:5}).name;
                document.getElementById("btnFifthCard").innerHTML  = Fifth;


            },






            'click #btnSecondCard2': function () {

                myCurrentCard2 = Second;

                document.getElementById("LedforCard2").innerHTML = myCurrentCard;

                document.getElementById("imgattr2").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


                document.getElementById("attr112").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
                document.getElementById("attr122").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
                document.getElementById("attr132").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
                document.getElementById("attr142").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
                document.getElementById("attr152").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
                document.getElementById("attr162").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
                document.getElementById("attr172").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

            },

            'click #btnThirdCard2': function () {

                myCurrentCard2 = Third;

                document.getElementById("LedforCard2").innerHTML = myCurrentCard;

                document.getElementById("imgattr2").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


                document.getElementById("attr112").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
                document.getElementById("attr122").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
                document.getElementById("attr132").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
                document.getElementById("attr142").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
                document.getElementById("attr152").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
                document.getElementById("attr162").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
                document.getElementById("attr172").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

            },

            'click #btnFourthCard2': function () {

                myCurrentCard2 = Fourth;

                document.getElementById("LedforCard2").innerHTML = myCurrentCard;

                document.getElementById("imgattr2").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


                document.getElementById("attr112").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
                document.getElementById("attr122").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
                document.getElementById("attr132").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
                document.getElementById("attr142").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
                document.getElementById("attr152").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
                document.getElementById("attr162").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
                document.getElementById("attr172").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

            },

            'click #btnFifthCard2': function () {

                myCurrentCard2 = Fifth;

                document.getElementById("LedforCard2").innerHTML = myCurrentCard;

                document.getElementById("imgattr2").src =  Cards._collection.findOne({name:myCurrentCard}).attr8 + ".png";


                document.getElementById("attr112").innerHTML =  "Error Handling: " + Cards._collection.findOne({name:myCurrentCard}).attr1;
                document.getElementById("attr122").innerHTML =  "Garbage Collection: " + Cards._collection.findOne({name:myCurrentCard}).attr2;
                document.getElementById("attr132").innerHTML =  "Variables & Classes: " + Cards._collection.findOne({name:myCurrentCard}).attr3;
                document.getElementById("attr142").innerHTML =  "Regular Expressions: " + Cards._collection.findOne({name:myCurrentCard}).attr4;
                document.getElementById("attr152").innerHTML =  "Language Integration: " + Cards._collection.findOne({name:myCurrentCard}).attr5;
                document.getElementById("attr162").innerHTML =  "Built-In Security: " + Cards._collection.findOne({name:myCurrentCard}).attr6;
                document.getElementById("attr172").innerHTML =  "Method Overloading: " + Cards._collection.findOne({name:myCurrentCard}).attr7;

            },

            'click #GetHand2': function () {


                First = Cards._collection.findOne({attr8:11}).name;
                document.getElementById("btnFirstCard2").innerHTML  = First;


                Second = Cards._collection.findOne({attr8:12}).name;
                document.getElementById("btnSecondCard2").innerHTML  = Second;


                Third = Cards._collection.findOne({attr8:13}).name;
                document.getElementById("btnThirdCard2").innerHTML  = Third;


                Fourth = Cards._collection.findOne({attr8:14}).name;
                document.getElementById("btnFourthCard2").innerHTML  = Fourth;


                Fifth = Cards._collection.findOne({attr8:15}).name;
                document.getElementById("btnFifthCard2").innerHTML  = Fifth;


            },





            'click .attributeBtn': function (event, template) { //.examplebutton doesnt exist...
              Meteor.call('nextMove', player, selection, card, function (error, result) {
                  if (error) {
                      // handle error
                  } else {
                      // examine result
                      //logic goes here!!!
                      selection = event.getTarget.attr('id');

                      //<button id="attr1" class="attributeBtn">Attr1</button>
                  }
              });

          },
            'click .btnExample':function(event){
                event.preventDefault();
                var choice = event.target.id;
                console.log(choice);



            },




            'click #attr11': function(){

                currentAttr = 1;

                attrValue = Cards.findOne({name:myCurrentCard}).attr1;

            },


            'click #attr12': function(){
                currentAttr = 2;
                attrValue = Cards.findOne({name:myCurrentCard}).attr2;
            },


            'click #attr13': function(){

                currentAttr = 3;
                attrValue = Cards.findOne({name:myCurrentCard}).attr3;
            },

            'click #attr14': function(){

                currentAttr = 4
                attrValue = Cards.findOne({name:myCurrentCard}).attr4;
            },


            'click #attr15': function(){
                currentAttr = 5;
                attrValue = Cards.findOne({name:myCurrentCard}).attr5;

            },


            'click #attr16': function(){

                currentAttr = 6;
                attrValue = Cards.findOne({name:myCurrentCard}).attr6;
            },

            'click #attr17': function(){

                currentAttr = 7;
                attrValue = Cards.findOne({name:myCurrentCard}).attr7;
            },

            'click #btnplay': function(){


                Meteor.call("nextMove",["Player1"],[currentAttr],[attrValue])

            },




            'click #attr112': function(){

                currentAttr2 = 1;

                attrValue2 = Cards.findOne({name:myCurrentCard}).attr1;

            },


            'click #attr122': function(){
                currentAttr2 = 2;
                attrValue2 = Cards.findOne({name:myCurrentCard}).attr2;
            },


            'click #attr132': function(){

                currentAttr2 = 3;
                attrValue2 = Cards.findOne({name:myCurrentCard}).attr3;
            },

            'click #attr142': function(){

                currentAttr2 = 4;
                attrValue2 = Cards.findOne({name:myCurrentCard}).attr4;
            },


            'click #attr152': function(){
                currentAttr2 = 5;
                attrValue2 = Cards.findOne({name:myCurrentCard}).attr5;

            },


            'click #attr162': function(){

                currentAttr2 = 6;
                attrValue2 = Cards.findOne({name:myCurrentCard}).attr6;
            },

            'click #attr172': function(){

                currentAttr2 = 7;
                attrValue2 = Cards.findOne({name:myCurrentCard}).attr7;
            },

            'click #btnplay2': function(){


                Meteor.call("nextMove",["Player2"],[currentAttr2],[attrValue2])

            }





      });
      Template.currentCard.helpers({
        Card: function() {
          return Session.get("enemy");
          //return Cards.findOne({name:'somenameOther222'});
        }
      });




      // Template.hello.helpers({
      //   counter: function () {
      //     return Session.get('counter');
      //   }
      // });

      // Template.hello.events({
      //   'click button': function () {
      //     // increment the counter when button is clicked
      //     Session.set('counter', Session.get('counter') + 1);
      //   }
      // });







    }

    if (Meteor.isServer) {

        var player1A =-1;
        var player2A =-1;

        var player1AV =0;
        var player2AV =0;







      if (Cards.find().count() === 0){
          Cards.insert({name:'Eiffel', attr1:3, attr2:3, attr3:0, attr4:0,attr5:3,attr6:0,attr7:0,attr8:1});
          Cards.insert({name:'Smalltalk', attr1:2, attr2:3, attr3:2, attr4:1,attr5:1,attr6:0,attr7:0,attr8:2});
          Cards.insert({name:'Ruby', attr1:1, attr2:2, attr3:2, attr4:2,attr5:3,attr6:1,attr7:0,attr8:3});
          Cards.insert({name:'Java', attr1:3, attr2:3, attr3:2, attr4:4,attr5:3,attr6:2,attr7:2,attr8:4});
          Cards.insert({name:'C#', attr1:3, attr2:3, attr3:3, attr4:4,attr5:4,attr6:3,attr7:2,attr8:5});
          Cards.insert({name:'C++', attr1:3, attr2:0, attr3:3, attr4:3,attr5:2,attr6:0,attr7:2,attr8:6});
          Cards.insert({name:'Python', attr1:2, attr2:1, attr3:3, attr4:3,attr5:3,attr6:0,attr7:0,attr8:7});
          Cards.insert({name:'Perl', attr1:2, attr2:2, attr3:0, attr4:2,attr5:2,attr6:1,attr7:0,attr8:8});
          Cards.insert({name:'Visual Basic', attr1:3, attr2:2, attr3:3, attr4:3,attr5:1,attr6:0,attr7:0,attr8:9});
          Cards.insert({name:'C', attr1:4, attr2:4, attr3:3, attr4:4,attr5:4,attr6:3,attr7:3,attr8:10});
          Cards.insert({name:'PHP', attr1:3, attr2:2, attr3:3, attr4:4,attr5:4,attr6:2,attr7:2,attr8:11});
          Cards.insert({name:'Java Script', attr1:2, attr2:2, attr3:2, attr4:2,attr5:2,attr6:2,attr7:2,attr8:12});
          Cards.insert({name:'Scheme', attr1:2, attr2:2, attr3:3, attr4:1,attr5:1,attr6:0,attr7:1,attr8:13});
          Cards.insert({name:'Haskell', attr1:3, attr2:1, attr3:2, attr4:3,attr5:2,attr6:1,attr7:2,attr8:14});
          Cards.insert({name:'Pascal', attr1:3, attr2:2, attr3:3, attr4:3,attr5:1,attr6:1,attr7:1,attr8:15});
          Cards.insert({name:'Scala', attr1:2, attr2:0, attr3:2, attr4:3,attr5:2,attr6:3,attr7:1,attr8:16});
          Cards.insert({name:'Go', attr1:0, attr2:1, attr3:2, attr4:3,attr5:3,attr6:0,attr7:0,attr8:17});
          Cards.insert({name:'Clojure', attr1:1, attr2:2, attr3:2, attr4:3,attr5:2,attr6:3,attr7:2,attr8:18});
          Cards.insert({name:'Objective C', attr1:2, attr2:2, attr3:2, attr4:1,attr5:2,attr6:2,attr7:2,attr8:19});
      }




      Meteor.methods({



        newGame: function () {


            var TheS = "";



            for (i = 0; i < 20; i++){






                i ++;

            };


            return TheS;


        },


        nextRound: function () {
          // ...
        },
        nextMove: function (player, selection, card){

            if (player === "Player1"){

                player1A = selection;

                player1AV = card;

            }else{

                player2A = selection;

                player2AV = card;
            }


            if(playe1A > 0){

                if(player2A>0){




                }

            }




        }
      });

      Meteor.startup(function () {
        // code to run on server at startup
      });
    }
