// Автотесты для Postman для эндпойнта
// https://api.hh.ru/metro/66?text=станции метро

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

});
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});


1. Проверка статус-кода ответа сервера:

```
pm.test("Статус-код должен быть 200", function () {
    pm.response.to.have.status(200);
});
```

2. Проверка наличия заголовка в ответе:

```
pm.test("Заголовок Content-Type должен быть present", function () {
    pm.response.to.have.header("Content-Type");
});
```

3. Проверка наличия значения заголовка в ответе:

```
pm.test("Заголовок Content-Type должен быть равен application/json", function () {
    pm.response.to.have.header("Content-Type", "application/json");
});
```

4. Проверка наличия значения в теле ответа:

```
pm.test("Тело ответа должно содержать значение 'success'", function () {
    pm.expect(pm.response.text()).to.include("success");
});
```

5. Проверка количества элементов в массиве в теле ответа:

```
pm.test("Тело ответа должно содержать 5 элементов в массиве", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an("array").that.has.lengthOf(5);
});
```

6. Проверка значения свойства объекта в теле ответа:

```
pm.test("Тело ответа должно содержать объект с полем 'id' равным 1", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an("array").that.contains.property("id", 1);
});
```
