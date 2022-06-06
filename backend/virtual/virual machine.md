# 가상 머신과 도커 컨테이너

![](2022-05-19-16-31-00.png)

가상화 기술은 [하이퍼바이저](https://www.redhat.com/ko/topics/virtualization/what-is-a-hypervisor)를 이용해 여러 개의 운영체제를 하나의 호스트에서 생성해 사용하는 방식

## 하이퍼바이즈(Hypervisor)

하이퍼바이저는 공유 자원을 관리하고 VM을 컨트롤 하는 중간 관리자

하이퍼바이저는 하드웨어를 직접 제어할 수 있음. -> VM에 대한 라이프 사이클 관리, 실시간 리소스 할당, VM 정책 정의등 기능 수행

### 전가상화와 반가상화 하이퍼바이즈

#### 전가상화(full virtualzation)

하이퍼바이저가 호스트 운영체제에서 모든 일을 처리

하이퍼바이저를 통해 하드웨어에 직접 접근하기 때문에 게스트 운영체제를 베어메탈 서버에 설치하는 운영체제와 같은 버전으로 사용 가능.

이런 장점을 유지하기 위해 모든 장치에 대한 드라이버를 에뮬레이션 가상화 기법으로 제공하고 바이너리 변환 기법을 통해 커널 수준 접근이 가능하게 함.

    #바이너리_변환_기법
    모든 프로그램은 하드웨어가 이해할 수 있는 바이너리값으로 변환되어 전달외야 하는데, VM이 하이퍼콜을 통해 하이퍼바이저에게 명열을 내리면 간단한 바이너리 연산을 통해 하드웨어가 이해할 수 있는 명령어로 변환하여 전달하는 기법,

    속도가 빠름, 개발은 어려움.

    #커널수준_접근
    리눅스 운영체제에서는 커널만이 몯느 하드웨어에 직접 제어 가능하기 때문에 커널과 같은 권한으로 하드웨어에 접근 하는 것.

#### 반가상화(para-virtualization)

일부 역할을 VM의도움을 받아 처리

운영체제를 그대로 사용할 수 없음

게스트 운영체제가 완전하게 독립적인 수행환경이 보장받지 않기 때문에 반가상화 하이퍼바이저를 사용하면 게스트 운영체제가 반가상화 환경에 맞아야함.

## 가상화

가상화란 물리적인 자원을 동시에 다수의 논리적 자원으로 사용하는 것

## 가상화를 사용하는 이유

VMware의 책임연구원의 책 [Virtualizatino Essentials](https://iran-lms.com/images/images/Books/PDF/Virtualization-Essentials-Sybex-2016.pdf)에서는 원도우가 single-user Inferface 운영체제라 자원 낭비가 심해서 가상화 기술이 발전했다고 주장.

빠른 시장 변화에 높은 적응력

보안 수준을 높일 수 있음(접근을 원천 차단)

### 가상화의 종류

1.  나눠서 쓰는 공유(sharing) : 다수의 가상 자원을 하나의 물리적 자우너과 연결시켜, 시간 분할 기법으로 물리적 자원을 공유
2.  합쳐서 쓰는 집합(aggregation) : 여러개의 자우너을 하나로 묶어서 물리적인 용량과 성능을 향상시키고, 하나의 논리 장치로 관리

    #network

    MLAG( Multi-Chassis Link Aggregation)(https://www.arista.com/en/products/multi-chassis-link-aggregation-mlag)

    LACP(Link Agregation Control Protocol) : 동시에 여러 디스크에서 데이터를 찾을 수 있어서 성능도 매우 좋아짐, wide provisioning, wide striping

    #storage

    LUN(Logical Unit Number)

3.  에뮬레이션(emulation) : 새로 만듦
4.  자원 절연(resouce insulation) : 물리 장치가 비정상인 상태에서도 논리 장치의 고가용성 보장

    RAID, Multipath

### LVM(Logical Volume Manager)

LVM : [논리적인(Logical) 공간(Volume)을 만들게(Manager) 해주는 프로그램](https://mamu2830.blogspot.com/2019/12/lvmpv-vg-lv-pe-lvm.html)

### VM과 컨테이너의 가장 큰 차이점 : 자원 공유의 수준

- VM : 하드웨어의 가상화로 자원을 공유
- 컨테이너 : 호스트 OS, 커널 공간, 라이브러리 바이러니 공유

### 컨테이너가 더 가볍다면 VM 대신 컨테이너만 쓰면 되는거 아닐까?

=> NO. 컨테이너는 OS를 공유하기 때문에 장애 발생시 영향을 받을 수도 있다. 즉, VM이 더 안정적.

---

### 보안 모듈

#### SELinux

- Security-Enhanced Linux

  강제 접근 제어를 포함한 접근 제어 보안 정책 지원

  리눅스 커널 보안 모듈, 다양한 리눅스 배포판에 추가 가능

  RedHat 계열(RHEL, Fedora, CentOS)

  시스템 전체에 보안 설정

  파일 라벨에 적용

  경로 대신 아이노드 번호로 파일 시스템 객체들을 구별

  CentOS에서 사용

#### APPArmor

- Application Armor

  시스템 관리자가 프로그램 프로필 별로 프로그램 역량을 제한할 수 있게 해주는 리눅스 커널 보안 모듈

  SUSE계열 (SUSE Linux), 데비안 계열(Debian, Ubuntu)

  개별 응용 프로그램을 보호하는 일에 집중

  응용 프로그램 단위의 보안 모델 구현

  AppArmor는 SELinus를 부분 대체

  파일 경로에 적용

  Debian에서 사용

  `enforce모드` : 허가되지 않는 파일에 접근하는 것을 거부

  `complain모드` : 실질적 보안 X, 의도된 행동이 아닌경우 로그만 남겨줌

  `sudo aa-staus` 명령어를 통해 현재 상태 확인 가능

#### Access Contorl, 접근 통제

- MAC

  Mandatory Access Control, 강제접근제어

- DAC
  Discretionary Access Control, 임의접근제어
  [참고자료](https://www.lesstif.com/ws/access-control-dac-mac-43843837.html)

---g

### 우분투 패키지 관리 툴

- APT : advanced packaging tool

  <kbd>apt</kbd> 온라인 리포지포리에서 패키지 다운받고 설치, <kbd>dpkg, apt-get, apt-cache, apt</kbd>같은 구체적인 이름들이 존재

  ![differece_APT_APT-GET](https://media.geeksforgeeks.org/wp-content/uploads/20200707200921/apt1.png)

- dpkg

  <kbd>dpkg</kbd> cd room 이나 다른 디스크 장치에 있는 .deb파일 제어하는 경우 사용

  시스템 소프트웨어에 대한 설정이나 설치 및 정보를 얻는 명령어 옵션 제공

  <kbd>apt</kbd>보다 낮은 수준에서 작업 수행

- aptitude

  주요 패키지 작업을 자동화하여 가능한 쉡게 작업할 수 있게 해줌

---

![Debian vs CentOS](https://cdn.educba.com/academy/wp-content/uploads/2018/09/CentOS-vs-Debian-1.jpg)

## 참고

https://parkseunghan.notion.site/Born2beroot-Subject-6d594d567ed843ba82d7369b0149efe5
