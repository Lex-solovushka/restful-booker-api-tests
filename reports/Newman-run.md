# Newman run — 2026-09-03 00:01 UTC

Все 57 тест-кейсов выполнены на публичном Restful Booker. Из-за задержки общего стенда коллекция была запущена восемью независимыми группами, сформированными без изменения исходных запросов и Tests-скриптов. Результаты сведены по уникальному Test ID.

## Итог

- Пройдено: **33**.
- Провалено по ожидаемому контракту: **24**.
- Проваленных assertions: **26**.
- Подтверждённых дефектов: **9**.
- Эквивалентная суммарная длительность групп: **12.1 мин**.
- Служебные SETUP/Cleanup-запросы в число 57 не входят.

Cleanup использовал только точные bookingid, полученные из успешных POST-запросов той же группы. Все эти ID были удалены либо уже отсутствовали после DELETE-кейсов.

## Кейсы с отклонениями

| Test ID | Actual HTTP | Не прошедшие проверки | Bug ID |
| --- | --- | --- | --- |
| AUTH-002 | 200 | HTTP 401 | BUG-001 |
| AUTH-003 | 200 | HTTP 400 | BUG-001 |
| BOOK-DELETE-006 | 405 | HTTP 404 | BUG-009 |
| BOOK-DELETE-007 | 405 | HTTP 404 | BUG-009 |
| BOOK-GET-002 | 200 | Content-Type is XML | BUG-007 |
| BOOK-GET-005 | 200 | HTTP 400; Booking data is not exposed | BUG-008 |
| BOOK-GET-006 | 418 | HTTP 406 | BUG-007 |
| BOOK-LIST-007 | 200 | Equal checkin boundary is included | BUG-006 |
| BOOK-LIST-009 | 200 | Documented checkout >= rule is applied | BUG-006 |
| BOOK-LIST-010 | 500 | HTTP 400 | BUG-006 |
| BOOK-PATCH-006 | 200 | HTTP 400 | BUG-004 |
| BOOK-PATCH-007 | 405 | HTTP 404 | BUG-009 |
| BOOK-POST-002 | 200 | XML false remains boolean false | BUG-005 |
| BOOK-POST-004 | 500 | HTTP 400 | BUG-002 |
| BOOK-POST-005 | 500 | HTTP 400 | BUG-002 |
| BOOK-POST-006 | 200 | HTTP 400; No booking ID is returned | BUG-003 |
| BOOK-POST-007 | 200 | HTTP 400 | BUG-003 |
| BOOK-POST-008 | 200 | HTTP 400 | BUG-004 |
| BOOK-POST-009 | 200 | HTTP 400 | BUG-004 |
| BOOK-POST-010 | 200 | HTTP 400 | BUG-004 |
| BOOK-POST-012 | 418 | HTTP 406 | BUG-007 |
| BOOK-POST-013 | 500 | HTTP 415 | BUG-002 |
| BOOK-PUT-007 | 200 | HTTP 400 | BUG-004 |
| BOOK-PUT-008 | 405 | HTTP 404 | BUG-009 |

Машиночитаемая сводка без токенов и тел ответов: `reports/newman-summary.json`. Полные runtime-отчёты не включены, поскольку содержат служебное состояние запуска.
