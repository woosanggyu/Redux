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

2. Provider 는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store 를 손쉽
   게 연동 할 수 있도록 도와주는 컴포넌트이다.

3. connect는 mapStateToProps로 불리며, compoenet들을 store에 연결시켜준다.

4. connect는 기본적으로 function 으로 2개의 argument를 가진다. -> 'state' or
   'dispatch' 둘 중 하나 선택가능.

5. connect의 첫번째 인자는 store의 state를 가지고, 두번째 인자는 component의
   Props를 가진다.

6. connect는 component로 보내는 props를 추가하도록 허용해줌(반환하는 데이터를)
   -> ex) return { sanggyu : true};

7. mapDispatchToProps는 store의 dispatch를 가져와 state를 변경할 수 있게 해준다.

8. 다음과 같이 작성하면 object 내에서 함수 선언 -> {functionName : (argument) =>
   todo}

> Redux Toolkit

1. Redux를 간단하고 효율적으로 코딩하게 해주는 ToolKit

2. createAction은 action으로 값을 넘겨줌에 있어 반복 사용되는 부분들을 줄여줄수
   있다.

3. createReducer는 switch, case를 사용하지 않게 도와준다. 또한 state를 mutate 할
   수 있게 해준다.

4. createSlice는 reducer와 action을 모두 가지고 있다. very very awesome...
