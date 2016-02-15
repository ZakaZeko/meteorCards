Cards = new Mongo.Collection("cards");


if (Meteor.isClient) {
  var myCurrentCard = {};

  Template.deck.helpers({
    Cards: function(){
      return Cards.find();
    }
  });
  Template.ui.helpers({
    gamestate: function() {
      return 'the gamestate....'
    }
  });

  Template.ui.events({
    'click #btnNewCard': function(event, template) {


     document.getElementById("LedforCard").innerHTML =  myCurrentCard.toString();
    },

    'click #btnFirstCard': function(){

      myCurrentCard = "First card";

    },


      'click #Get_Hand': function(){






      },



    'click #btnSecondCard': function(){

      myCurrentCard = "Second card";

    },



    'click #btnThridCard': function(){

      myCurrentCard = "Third card";

    },



    'click #btnFourthCard': function(){

      myCurrentCard = "Fourth card";

    },



    'click #btnFifthCard': function(){

      myCurrentCard = "Fifth card";

    },

    'click .attributeBtn': function(event, template){ //.examplebutton doesnt exist...
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
    Cards.insert({name:'Eiffel', attr1:3, attr2:3, attr3:0, attr4:0,attr5:3,attr6:0,attr7:0});
    Cards.insert({name:'Smalltalk', attr1:2, attr2:3, attr3:2, attr4:1,attr5:1,attr6:0,attr7:0});
    Cards.insert({name:'Ruby', attr1:1, attr2:2, attr3:2, attr4:2,attr5:3,attr6:1,attr7:0});
    Cards.insert({name:'Java', attr1:3, attr2:3, attr3:2, attr4:4,attr5:3,attr6:2,attr7:2});
    Cards.insert({name:'C#', attr1:3, attr2:3, attr3:3, attr4:4,attr5:4,attr6:3,attr7:2});
    Cards.insert({name:'C++', attr1:3, attr2:0, attr3:3, attr4:3,attr5:2,attr6:0,attr7:2});
    Cards.insert({name:'Python', attr1:2, attr2:1, attr3:3, attr4:3,attr5:3,attr6:0,attr7:0});




  }


  Meteor.methods({
    newGame: function () {
      // ...
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
