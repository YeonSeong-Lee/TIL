# 이벤트 스케줄러

2022.05.23 작성한 이벤트 스케줄러

```SQL
CREATE EVENT update_reservation_status
ON SCHEDULE EVERY 1 DAY
STARTS '2022-05-24 00:00:00' ON COMPLETION PRESERVE ENABLE
DO UPDATE reservation set status = 3 where (status = 0 and endAt <= NOW());

SET GLOBAL event_scheduler = ON
```

`AT` 은 특정시간에 1회만 실행, `ON COMPLETION PRESERVE ENABLE` 이 있으면 여러번 실행

</br>

```SQL
SET GLOBAL event_scheduler = ON
```

이 있어야 스케쥴러가 실행됨

```SQL
SHOW EVENTS
```

명령어로 스케줄러 목록을 조회

</br>

# 참고자료

- [MySQL document](https://dev.mysql.com/doc/refman/8.0/en/create-event.html)
- [블로그 자료](https://pinokio0702.tistory.com/85)
