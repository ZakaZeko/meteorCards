

  Template.card.helpers({
    Cards: function(){
      return Cards.find();
    }
  });
  Template.card.events({
    'click .btnClicker': function() {
      console.log('Clicked');
    }

  });



  Template.card.helpers({

      Card: function() {

          return Session.get("enemy");

      }
  });









