### keyword
- 미니 컴파일러 언어 만들기(end2end)
    - 언어 스펙 정의(BNF/EBNF, 연산자우선순위, 좌/우결합)
    - 어휘분석(Tokenizer,Lexer)--정규식 기반 토크나이저 구현, 공백/개행처리, 잘못된 문자 에러처리, 토큰위치기록
    - 구문분석(CFG->AST,Parser)--CFG함수단위매핑, expression/term/factor분리, 연산자우선순위반영, 구문오류메시지 설계
    - AST 생성
    - Evaluator
    - 에러 핸들링
    - 테스트 케이스
    - README: grammar + 예제

- 인터프리터는 뭐가 어떻게 다르지?