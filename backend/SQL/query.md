#SQL #DB
# SELECT

[What is the Difference Between COUNT(\*), COUNT(1), COUNT(column name), and COUNT(DISTINCT column name)?](https://learnsql.com/blog/difference-between-count-distinct/)

## CONCAT

문자열 결합

### GROUP BY 문자열 결합

GROUP_CONCAT()

```SQL
SELECT GROUP_CONCAT(col) FROM tablename;
```

```SQL
SELECT GROUP_CONCAT(col) FROM tablename;
```

```SQL
SELECT GROUP_CONCAT(col SEPARATOR '|') FROM tablename;
```

```SQL
SELECT GROUP_CONCAT(col order by condition) FROM tablename;
```

```SQL
SELECT GROUP_CONCAT(DISTINCT col) FROM tablename;
```

# WHERE

where는 쿼리 실행에 앞서 살펴봄. 쿼리가 **처리할** 행을 결정

## 조건

[정규표현식 조건](https://steemit.com/mysql/@seobangnim/mysql-regexp)도 가능함.

```SQL
SELECT *
FROM tablename
WHERE col REGEXP 'test|example|hello'
```

# HAVING

having은 쿼리 실행 후 살펴봄. 모든 행을 처리한 **다음에** 클라이언트에 반환활 행 결정

    이론적으로 where과 having을 섞어 사용할 수 있지만 권장사항 아님.

    HAVING을 사용할 경우 모든 행을 다 읽어 조건에 맞는 행을 반환하므로 불필요하게 느려짐.

    WHERE을 사용하는 경우 관심있는 행만 읽어서 최적화 가능

[참고자료](https://www.geeksforgeeks.org/difference-between-where-and-having-clause-in-sql/)
