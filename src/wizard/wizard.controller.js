(function() {
   'use strict';

   class WizardController {
      constructor (NodeService) {
         this._NodeService = NodeService;
         this.title = 'WizardController';
         this.nodeList = [];

         this.activate();
      }

      activate() {
      }

      onNext() {
         // state.go('wizard.deploymentSettings');
         console.log('clicked');
      }

   }

   angular
      .module('app.wizard')
      .controller('WizardController', WizardController);
})();
