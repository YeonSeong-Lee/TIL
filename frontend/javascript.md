## 정적 메서드와 정적 프로퍼티

### 정적 메서드
> static method

```javascript
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); //true

```

정적 메서드는 특정 객체가 아닌 클래스에 속한 함수를 구현하고자 할 때 주로 사용

### 정적 프로퍼티

```js
class Article {
  static publisher = "Ilya Kantor";
}

alert( Article.publisher ); //Ilya Kantor
```

```js
Article.publisher = "Ilya Kantor";
```

정적 프로퍼티로 만든것과 직접 할당한것은 동일

정적 프로퍼티와 정적 메소드는 상속된다.

## private, protected 프로퍼티와 메서드

### 프로퍼티 보호하기

**관습적으로** protected 프로퍼티 명 앞엔 밑줄 _을 붙임.
 -> 개발자끼리 `_변수명` 인 친구는 건들지 말자고 약속.


### private 프로퍼티

```js
class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
  }
}
```
이런식으로 `#`을 붙인 프로퍼티와 메서드는 클래스 내부에서만 접근 가능

## 내장 클래스 확장하기

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
```

## 'instanceof'로 클래스 확인하기
 `instanceof ` 연산자는 객체가 특정 클래스에 속하는지 확인, 상속관계까지 확인함.

 
