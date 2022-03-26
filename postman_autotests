// Автотесты для Postman для эндпойнта
// https://api.hh.ru/metro/66?text=станции метро

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});