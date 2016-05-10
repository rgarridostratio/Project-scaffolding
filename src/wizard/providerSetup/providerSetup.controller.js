(function() {
   'use strict';

   class ProviderSetupCtrl {
      constructor($state) {
         this._$state = $state;
      }

      onBack() {
         this._$state.go('wizard.deploymentSettings');
      }
   }

   ProviderSetupCtrl.$inject = ['$state'];

   angular
      .module('app.wizard')
      .controller('ProviderSetupCtrl', ProviderSetupCtrl);
})();
