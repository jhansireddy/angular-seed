describe('phoneListApp Controllers', function () {


    describe('phoneListController', function () {

        beforeEach(function () {
            module('phoneListApp');
        });

        it('should have 2 phones', inject(function ($controller) {
            var scope = {};
            $controller('phoneListController', {$scope: scope});
            expect(scope.phones.length).toBe(3);
        }));

    });
});