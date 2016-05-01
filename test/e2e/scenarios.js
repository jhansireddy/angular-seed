describe('PhoneListApp End to End test', function () {

    describe('phoneListController', function () {

        beforeEach(function () {
            browser.get('/app/index.html');
        });

        it('should filter the results', function () {

            var phoneList = element.all(by.repeater('phone in phones'));
            var query = element(by.model('query'));

            expect(phoneList.count()).toBe(3);

            query.clear();

            query.sendKeys('iPhone 4');
            expect(phoneList.count()).toBe(1);
        });
    });
});