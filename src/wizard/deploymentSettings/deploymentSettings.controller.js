(function() {
   'use strict';

   class DeploymentSettingsCtrl {
      constructor($state) {
         this._$state = $state;
         this.provider = 'amazon';
      }

      onNext() {
         if (this.provider === 'amazon') {
            this._$state.go('wizard.provider.amazon');
         } else if (this.provider === 'openstack') {
            this._$state.go('wizard.provider.openStack');
         } else if (this.provider === 'onpremise') {
            this._$state.go('wizard.provider.onPremise');
         }
      }
   }

   DeploymentSettingsCtrl.$inject = ['$state'];

   angular
      .module('app.wizard')
      .controller('DeploymentSettingsCtrl', DeploymentSettingsCtrl);
})();
