(function() {
   'use strict';

   angular
      .module('app.wizard')
      .config(AppRoutes);

   AppRoutes.$inject = ['$stateProvider'];

   function AppRoutes($stateProvider) {
      $stateProvider
         .state('wizard', {
            url: '/wizard',
            abstract: true,
            controller: 'WizardController',
            controllerAs: 'ctrl',
            templateUrl: 'wizard/wizard.html'
         }).state('wizard.deploymentSettings', {
            url:          '/deployment_settings',
            controller:   'DeploymentSettingsCtrl',
            controllerAs: 'ctrl',
            templateUrl:  'wizard/deploymentSettings/deploymentSettings.html'
         }).state('wizard.provider', {
            url:          '/provider',
            abstract: true,
            controller:   'ProviderSetupCtrl',
            controllerAs: 'ctrl',
            templateUrl:  'wizard/providerSetup/providerSetup.html'
         }).state('wizard.provider.amazon', {
            url:          '/amazon_setup',
            controller:   'AmazonSetupCtrl',
            controllerAs: 'ctrl',
            templateUrl:  'wizard/amazonSetup/amazonSetup.html'
         }).state('wizard.provider.openStack', {
            url:          '/openstack_setup',
            controller:   'OpenStackSetupCtrl',
            controllerAs: 'ctrl',
            templateUrl:  'wizard/openStackSetup/openStackSetup.html'
         }).state('wizard.provider.onPremise', {
            url:          '/on_premise_setup',
            controller:   'OnPremiseSetupCtrl',
            controllerAs: 'ctrl',
            templateUrl:  'wizard/onPremiseSetup/onPremiseSetup.html'
         }).state('wizard.instancesSetup', {
            url:          '/instances_setup',
            controller:   'InstancesSetupCtrl',
            controllerAs: 'ctrl',
            templateUrl:  'wizard/instancesSetup/instancesSetup.html'
         });
   }
})();
