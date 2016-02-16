Cards = new Mongo.Collection("cards");




if (Meteor.isClient) {
    Hand = new Mongo.Collection(null);


    var StringForGameNumbers = new Array(10);

    var myCurrentCard = "";


    var First= "Hello";
    var Second= "Hello";
    var Third= "Hello";
    var Fourth= "Hello";
    var Fifth = "Hello";




  Template.deck.helpers({
    Cards: function(){
      return Cards.find();
    }
  });
  Template.ui.helpers({
      gamestate:function() {
          return Session.get('gamestate');
      }
    });






    Template.ui.events({
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


        'click #btnStratGame': function(){

            Session.set("gamestate",0)





        },

        'click #btnJoinGame': function(){

            Session.set("gamestate",1)



        },



        'click #btnHowToPlay': function(){

            Session.set("gamestate",2)



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

      'click #btnStartAnewGame': function () {




          StringForGameNumbers =  Meteor.call("newGame");


      },


        'click #attr11': function(){







        },


        'click #attr12': function(){


        },


        'click #attr13': function(){


        },

        'click #attr14': function(){


        },


        'click #attr15': function(){


        },


        'click #attr16': function(){


        },

        'click #attr17': function(){


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

    }
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
