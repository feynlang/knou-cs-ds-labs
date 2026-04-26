# Chapter 15. 최적화와 목적코드 생성
## 1. 개요 요약(3~5)
## 2. Flow Diagram
```
            Code Optimization
                   │
                   ▼
              Time / Memory
                   │
     ┌─────────────┴─────────────┐
     │                           │          
   상수전파                      부프로그램화
   루프 융합/전개                 부분식 끌어올리기
   복사전파                      
   연산순서변경
   중복 로드/저장 제거
   레지스터할당
```
```
            Code Generating
                   │
                   ▼
              산술식 / 논리식
              (1)어떤 명령어?
              (2)계산과정 순서
              (3)
                   │
     ┌─────────────┴─────────────┐
     │                           │
                         Microprogrammed
 Control Logic                  Control Memory (ROM)
 (PLA, FSM, Combinational)      + Microsequencer
     │                           │
     ▼                           ▼
     Control Signal Generator (ALUop, RegWrite, MemRead, PCsrc, ...)
                   │
                   ▼
             Data Path 동작
```
## 3. 주요 개념
## 4. example(1~2)
## 5. check point(~3)--헷갈린 지점
## 6. Application
## 7. Reference