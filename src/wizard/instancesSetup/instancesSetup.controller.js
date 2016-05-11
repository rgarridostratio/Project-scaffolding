(function() {
   'use strict';

   class InstancesSetupCtrl {
      constructor($state) {
         this._$state = $state;
      }

      onBack() {
         this._$state.go('wizard.deploymentSettings');
      }

      onNext() {
         this._$state.go('wizard.instancesSetup');
      }
   }

   InstancesSetupCtrl.$inject = ['$state'];

   angular
      .module('app.wizard')
      .controller('InstancesSetupCtrl', InstancesSetupCtrl);
})();
