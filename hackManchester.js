Cards = new Mongo.Collection("cards");
player = "PlayerNum";

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
    'click #btnNewCard': function(event, template)  {
      myCurrentCard = Cards.findOne({name:'somenameOther222'});
      Session.set("enemy", "Eurasia");
    },
   // 'click .attributeBtn': function(event, template){ //.examplebutton doesnt exist...
   //   Meteor.call('nextMove', player, selection, card, function (error, result) {
   //   if (error) {
        // handle error
  //    } else {
        // examine result
        //logic goes here!!!
  //      selection = event.getTarget.attr('id');

        //<button id="attr1" class="attributeBtn">Attr1</button>
//      }
 //     });

 //     }
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
    //Cards.insert({name:'somename', attr1:5});

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
