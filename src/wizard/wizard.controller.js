(function() {
   'use strict';

   class WizardController {
      constructor($state) {
         this._$state = $state;
         this.currentState = $state.current.name;
      }
   }

   WizardController.$inject = ['$state'];

   angular
      .module('app.wizard')
      .controller('WizardController', WizardController);
})();
