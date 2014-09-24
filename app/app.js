import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'roster', // TODO: loaded via config
  Resolver: Resolver
});

Ember.View.reopen({

  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },

  afterRenderEvent : function(){

    //debugger;

    if (Roster.__container__.lookup('controller:application').get('isTutorial')){

      this.$('.tut').css('display','inline').animate({
        width: "70%",
        opacity: 0.3,
        fontSize: "2em",
        borderWidth: "10px"
      }, 1000 );

    }else{
      this.$('.tut').css('display','none');
    }

  }

});

loadInitializers(App, 'roster');

export default App;
