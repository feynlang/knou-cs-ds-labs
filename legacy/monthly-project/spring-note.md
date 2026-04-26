<!-- PART 1. Foundational Spring -->
# Chapter 1. 스프링 시작
## 1.1 What is Spring?
> cloud-microservices & reactive programming ERA
### keyword flow
- spring => container 제공(=spring application context) => application component(=bean) 관리
- bean 연결 -> Dependency Injection -> container에 위임(모든 생성 및 유지, 연결 관리)
- application context <= {XML파일(bean태그, constructor-arg태그로 연결)} -> {annotation(@Configuration-의 메서드는 @Bean)} for {타입안전성,리팩토링향상}
- Automatic configuration = {autowiring(자동 의존성 주입)} + {component scanning(classpath기반 탐색->bean으로 만듦)} and + {스프링부트 with 합리적추론}
    - power: do same by lack of code
### weakpoint
### summary
- 

## 1.2 Initializing a Spring application
> 스프링 프로젝트 초기화, 스프링 프로젝트 구조
### keyword flow
- Spring Initializr 설치 (Spring Tool Suite사용) -> Spring Starter Project -> Maven build spec. field 입력 -> project's dependencies(tool 입력) -> calling Initializr(alt.->address입력)
- 패키지 구조 = 전형적 Maven/Gradle 프로젝트 구조 (`src/main/java`, `src/test/java`, `src/main/resource`)
    - + `mvnw, mvnw.cmd`(Maven Wrapper), `pom.xml`(Maven build spec.), `프로젝트이름Application.java`(main 클래스), `application.properties`(configuration spec.), `static`(폴더/static 소스), `template`(폴더/렌더링될 콘텐츠의 템플릿 파일), `프로젝트이름ApplicationTests.java`(테스트 클래스)
- 
### weakpoint
### summary

## 1.3  Writing a Spring application
> 웹 요청 핸들링, view 정의, controller 테스트, 빌드/run, 스프링부트 툴
### keyword flow
### weakpoint
### summary

### 1.4 Surveying the Spring landscape
> 스프링프레임워크 핵심, 스프링Boot, 스프링Data, 스프링Security, 스프링Integration & 스프링Batch, 스프링Cloud, 스프링Native
### keyword flow
### weakpoint
### summary
<!-- ------------------------------ -->
# Chapter 2. 웹 애플리케이션 개발
## 2.1 Displaying Information
## 2.2 Processing form submission
## 2.3 Validating form input
## 2.4 Working with view controller
## 2.5 Choosing a view template library

<!-- ------------------------------ -->
# Chapter 3. 데이터 연동
## 3.1 Reading and writing data with JDBC
## 3.2 Working with Spring Data JDBC
## 3.3 Persisting data with Spring Data JPA

<!-- ------------------------------ -->
# Chapter 4. nonrelational 데이터 연동
## 4.1 Working with Cassandra repositories
## 4.2 Writing MongoDB repositories

<!-- ------------------------------ -->
# Chapter 5. 스프링 보안
## 5.1 Enabling Spring Security
## 5.2 Configuring authentication
## 5.3 Securing web requests
## 5.4 Applying method-level security
## 5.5 Knowing your user

<!-- ------------------------------ -->
# Chapter 6. 설정(configuration) 관리
## 6.1 Fine-tuning autoconfiguration
## 6.2 Creating your own configuration properties
## 6.3 Configuring with profiles

<!-- PART 2. Integrated Spring -->
# Chapter 7. REST 서비스 만들기
# Chapter 8. REST 보안
# Chapter 9. 비동기 메세지 전송
# Chapter 10. 스프링의 통합

<!-- PART 3. Reactive Spring -->
# Chapter 11. Reactor 도입
# Chapter 12. 반응형 APIs 개발
# Chapter 13. 데이터 유지(reactively)
# Chapter 14. RSocket 기술

<!-- PART 4. Deployed Spring -->
# Chapter 15. Spring Boot Actuator 기술
# Chapter 16. 스프링 admin 기능
# Chapter 17. JMX를 이용한 스프링 모니터링
# Chapter 18. 스프링 배포