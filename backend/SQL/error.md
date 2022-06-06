### MySQL

- [MySQL Error 1093 - Can't specify target table for update in FROM clause](https://stackoverflow.com/questions/45494/mysql-error-1093-cant-specify-target-table-for-update-in-from-clause)
- [Error Code: 2014 Commands out of sync; you can't run this command now](https://dev.mysql.com/doc/refman/8.0/en/commands-out-of-sync.html)
- [Error Code: 1442. Can't update table 'reservation' in stored function/trigger because it is already used by statement which invoked this stored function/trigger.
  ](http://www.gurubee.net/article/47118) : 한 테이블 내에서는 서브쿼리를 통해 데이터를 업데이트 할 수 없음.(you cannot INSERT/UPDATE/DELETE a table in a trigger that is the same table that spawned the trigger itself. This has too high a risk that it will cause an infinite loop)
