describe('controller: WizardController', () => {

   beforeEach(module('app.wizard'));

   beforeEach(inject(function(_$controller_) {
      this.ctrl = _$controller_('WizardController', {});
   }));

   it('should to be initialized without errors', function() {
      expect(this.ctrl).toBeDefined();
   });
});
