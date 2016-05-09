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
            controller: 'WizardController',
            controllerAs: 'vm',
            templateUrl: 'wizard/wizard.html'
         }).state('wizard.deploymentSettings', {
            url:          '/deployment_settings',
            controller:   'DeploymentSettingsCtrl',
            controllerAs: 'vm',
            templateUrl:  'wizard/deploymentSettings/deploymentSettings.html'
         }).state('wizard.amazonSetup', {
            url:          '/amazon_setup',
            controller:   'AmazonSetupCtrl',
            controllerAs: 'vm',
            templateUrl:  'wizard/amazonSetup/amazonSetup.html'
         }).state('wizard.openStackSetup', {
            url:          '/openstack_setup',
            controller:   'WizardOpenStackConfigCtrl',
            controllerAs: 'vm',
            templateUrl:  'wizard/openstack_setup/openstackSetup.html'
         }).state('wizard.onPremiseSetup', {
            url:          '/on_premise_setup',
            controller:   'OnPremiseSetupCtrl',
            controllerAs: 'vm',
            templateUrl:  'wizard/on_premise_setup/on_premiseSetup.html'
         }).state('wizard.servicesSetup', {
            url:          '/services_setup',
            controller:   'ServicesSetupCtrl',
            controllerAs: 'vm',
            templateUrl:  'wizard/services_setup/servicesSetup.html'
         });
   }
})();
