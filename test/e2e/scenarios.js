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

        it('should sort the results', function () {
            var phoneNames = element.all(by.repeater('phone in phones').column("phone.name"));

            function getNames() {
                return phoneNames.map(function(elm) {
                    return elm.getText();
                });
            }

            var query = element(by.model('query'));
            var orderBy = element(by.model('orderProp'));

            //query.clear();
            query.sendKeys('iPhone');
            element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

            expect(getNames()).toEqual(["iPhone 4","iPhone 5s", "iPhone 6s"]);
        });
    });
});