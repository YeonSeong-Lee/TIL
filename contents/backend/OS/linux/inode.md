#inode #파일시스템 #linux

# inode
 index-node, 한 파일이 사용한느 모든 블록을 가리키는 포인터들을 포함하는 하나의 불록

# 심볼릭 링크
#심볼릭 링크
 #symbolic link
 심볼릭 링크 == 소프트 링크
심볼릭 링크는 하드 링크와 동일한 상태를 보유하지 않음
심볼릭 링크가 참조하는 파일이름이 지워지면, 더 이상 역참조 되지 않더라도 심볼릭 링크 자체는 계속 존제(dangling link)

심볼릭 링크 생성법
```
ls -s [원본 파일 명] [링크 파일명] 
```

![심볼릭 링크](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc1MOld%2Fbtq27oZFH8n%2FUkKBhyI7vfSEY8Rf8OMD5K%2Fimg.png)

# 하드 링크
#하드 링크 

![하드 링크](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fchc39W%2Fbtq3dw9wAuO%2F6DGSeBHLxeyk6KdyHYeedK%2Fimg.png)

하드 링크 생성법
```
ln [원본 파일명] [링크 파일명]
```

| | 심볼릭 링크 | 하드링크
| --- | --- | --- |
| 생성할 수 있는 것 | 파일 , 디렉토리 | 파일 |
| 기능 |  파일 또는 디렉토리 이름에 대한 링크를 가리킴 | 원본 파일에 대한 포인터 |
| 파일 삭제시 | 엑세스 불가 | 엑세스 가능 |
| e 번호 | 다른 inode 번호 | 동일한 inode 번호 | 
| 파티션 링크 여부 | 다른 파티션에 링크 가능 | 다른 파티션 링크 불가 |

# 참고자료
https://i5i5.tistory.com/341