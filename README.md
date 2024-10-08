## Подключение к API EDAMAM

В этом проекте реализовано простое подключение к API EDAMAM, который предоставляет доступ к информации о рецептах и питательных веществах. API позволяет искать рецепты по ингредиентам, получать информацию о калориях и составе продуктов.

### Что было сделано:

1. **Регистрация и получение API ключа**: Зарегистрировался на платформе EDAMAM и получил уникальный API ключ.
2. **Настройка окружения**: Создана конфигурация для хранения API ключа и базового URL.
3. **Создание запросов**: Реализованы функции для отправки запросов к API для:
   - Поиска рецептов по ингредиентам.
   - Получения детальной информации о выбранных рецептах, включая калории и состав.
4. **Обработка ответов**: Реализована обработка JSON-ответов и извлечение необходимых полей, таких как название рецепта и питательные значения.
5. **Пример использования**: В js файле.

### Используемые технологии:

- Язык программирования: [JavaScript]
- Формат данных: JSON
