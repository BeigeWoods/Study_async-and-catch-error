stack taces는 call stack을 기반으로 이뤄진다.

1. promise_1  
   [MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/setTimeout#functionref)에 따르면 setTimeout은 function reference를 받도록 정의됐다.  
   때문에 function call을 인자로 전달하면 안 된다. 전달한 경우, [다음](https://ko.javascript.info/settimeout-setinterval#ref-324)과 같다.
2. promise_2와 async/await_2  
   stack traces의 일부가 누락됐는데, [다음](https://preamtree.tistory.com/168)에 따르면 에러가 발생했을 때는 이미 call stack이 비었기 때문이다.  
   setTimeout이 백그라운드에서 실행되고 콜백 함수가 callback queue에서 call stack으로 넘어올 동안 이미 call stack의 모든 함수가 차례대로 Promise를 반환했다.
3. return setTimeout  
   [MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/setTimeout#%EB%B0%98%ED%99%98_%EA%B0%92)에 따르면 setTimeout은 timeoutID를 반환한다.
   전달한 함수가 반환하는 값을 반환하지 않는다. 즉, setTimeout의 참조 함수는 실행만 할 뿐이다.  
   전달 함수가 promise를 반환해도 의존하는 함수에서 catch할 수 없기 때문에 전달 함수에서 발생한 에러를 다룰 수 없다.
   전달 함수 자체에서 catch해야 한다.
