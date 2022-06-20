### readme: [Главная](./../README.md) | [EN](./README-DEVELOP-EN.md)

# {NAME-PACKAGE}

> Скелет для создания node библиотек с поддержкой TS

## # Документация

Чтобы сделать свою библиотеку на базе данного скелета, необходимо:

1. Переменовать, **name-package** на нужное название, в файле **package.json**
2. Изменить ссылки на **github** или убрать, в файле **package.json**
3. Изменить или убрать **author**, в файле **package.json**
4. Изменить **LICENSE**
5. Изменить **README** и ./md/\*
6. Установить пакеты через команду **yarn**
7. Писать код в **src/** и собирать проект командой **build**

Маски по шаблону:

- {name-package}
- {NAME-PACKAGE}
- {git-repo}
- {author-repo}
- {description}

## # Команды

| Название    | Описание                                   |
| ----------- | ------------------------------------------ |
| build       | Сборка проекта                             |
| lint        | Проверка скриптов по правлиам линтера      |
| lint:format | Корректировка скриптов по правилам линтера |

## # TODO

- [x] Поддержка TypeScript
- [x] Linter/Prettier
- [x] Сборка библиотеки для CJS(CommonJS), UMD и ES
- [x] Сборка cli библиотеки
- [x] Сборка одного файла \*.d.ts
- [ ] Unit тестирование
- [ ] e2e тестирование
- [ ] Удалить сообщения плагинов rollup

## # Значек для README

Библиотека создана на данном скелете? Добавьте значок в README, чтобы показать это: [![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg?style=for-the-badge)](https://github.com/ManushovRodion/skeleton-lib-node)

```
[![skeleton-lib-node](https://img.shields.io/badge/created%20on%20the%20basis-%20skeleton--lib--node-blue.svg?style=for-the-badge)](https://github.com/ManushovRodion/skeleton-lib-node)
```
