(function() {
   'use strict';

   class DeploymentSettingsCtrl {
      constructor ($state) {
         this._$state = $state;
      }
   }

   angular
      .module('app.wizard')
      .controller('DeploymentSettingsCtrl', DeploymentSettingsCtrl);
})();
