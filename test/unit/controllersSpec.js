describe('phoneListApp Controllers', function () {


    describe('phoneListController', function () {

        var phoneListController;
        var scope;

        beforeEach(function(){
            module('phoneListApp');
        });
        beforeEach(inject(function ($controller) {
            scope = {};
            phoneListController = $controller('phoneListController', {$scope: scope});
        }));

        it('should have 3 phones', function () {
            expect(scope.phones.length).toBe(3);
        });

        it('should have default name sort order', function () {
            expect(scope.orderProp).toBe('name');
        });

    });
});