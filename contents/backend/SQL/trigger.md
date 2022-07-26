#trigger #SQL

# Trigger

직접 호출할 수 없으며 **일정한 조건**이 되면 자동으로 호출

시스템이 호출하므로 인수를 전달 할 수 없고, 리턴값도 반환 할 수 없다.

## Oracle version

```SQL
 CREATE [OR REPLACE] TRIGGER trigger_name
 BEFORE | AFTER | INSTEAD OF
 INSERT OR UPDATE OR DELETE [OF column]
 ON TBALE
 [FOR EACH ROW]
 BEGIN
       query~~~
 END
```

[MySQL 공식문서](https://dev.mysql.com/doc/refman/8.0/en/create-trigger.html)

## SQL Server version

```SQL
CREATE TRIGGER trigger_name
ON { table | view }
[WITH ENCRYPTION]
{ FOR | AFTER | INSTEAD OF } { INSERT, UPDATE, DELETE }
AS
 nick_name
```

FOR는 AFTER와 동의어

## DELIMITER

```SQL
DELIMITER $$
```

[DELIMITER](https://doorbw.tistory.com/23)

이런식으로 하면 쿼리의 끝을 `$$`으로 표시하겠다는 뜻
