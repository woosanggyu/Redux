# Redux

### Learning Vanilla Redux and React Redux

> Store and Reducer

1. Redux는 Data를 잘 관리하게 도와주는 역할을 한다.(State)

2. Store는 Data를 저장하는 곳이다.

3. createStore는 Reducer(함수)를 필요로 한다.

4. Reducer는 Data를 Modify하는 함수이다.

5. 오직 Reducer에서만 Data를 modify할 수 있다.

6. Reducer가 리턴하는 것은 application에 있는 data가 된다.

7. action은 redux에서 function을 부를 때 쓰는 두번째 parameter or argument로
   reducer와 소통하기 위한 방법이다.

8. dispatch를 통해 reducer에게 메세지(Object)를 전달할 수 있다.
   ex)store.dispatch({ type : value }) ->key의 값은 항상 type으로 대체 불가.

9. Subscribe는 store의 변화를 감지하고 알려주는 역할
   ex)store.subscribe(function)은 변화 감지시 해당 function실행

10. Reducer에서 대체적으로 if else 보다는 switch문이 자주쓰임.

11. string 형태로 바로 사용하기 보다는 const variable 로 선언해서 사용하기 ->(에
    러 발견에 용이하다)

12. Redux의 장점은 모든 데이터를 한 곳에 모아놓기 때문에 관리하기가 매우 용이하
    다는 점이다.

> redux Todo List

1. 절대 mutate state 하지마라(변형시키지 마라) => 새로운 상태(오브젝트)를 생성하
   고 리턴한다. 기존의 상태를 변형해서 리턴한다는 생각x

2. reducer 안에서 date.now()를 사용하는 건 권장하지 않음. (action에서 넘겨주는방
   식이 더 좋음)

3. 각 함수를 최대한 작게 쪼개는 것이 좋음(기능별로 - 최적화);

> React Redux

1. e.preventDefault()는 a태그, submit태그의 고유 동작(input을 전송하는 등)을 중
   지시킨다.
