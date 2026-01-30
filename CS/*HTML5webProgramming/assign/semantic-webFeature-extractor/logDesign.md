# MVP
## UI
- HTML 입력창 [링크입력창]
- 실행버튼
- 결과 JSON 출력영역 [.json 파일다운버튼]
- [가중치 사용자 설정 입력UI]

## 기능
- dom 트리 파싱
- dfs 순회
- 노이즈 태그 제거
- 태그 기반 가중치 계산
- 키워드 top-N 출력
- [링크입력->크롤링]
- [.json 파일로 출력, 다운로드 기능]

## 시각화
- 단순 리스트 or bar형태(css사용)

# 구현순서
1. parser/ 구현
- domParserAdapter.js: 외부 API
- tokenizer.js: HTML->token스트림
- treeBuilder.js: token->DOM Tree
- traverse.js: DOM Tree 순회 기능
2. cleaner/ 구현
3. feature/ 구현 + config/ 설정
4. output/ 구현
5. `main.js`, `intex.html`, `style.css` 구현

# learning

## 문제(현상)
## 원인(문제분석)
## 해결(방법)
## 회고(느낀점,개선점)