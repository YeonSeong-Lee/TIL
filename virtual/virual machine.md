# 가상 머신과 도커 컨테이너
![](2022-05-19-16-31-00.png)

 가상화 기술은 [하이퍼바이저](https://www.redhat.com/ko/topics/virtualization/what-is-a-hypervisor)를 이용해 여러 개의 운영체제를 하나의 호스트에서 생성해 사용하는 방식

## 하이퍼바이즈(Hypervisor)
 하이퍼바이저는 공유 자원을 관리하고 VM을 컨트롤 하는 중간 관리자

 하이퍼바이저는 하드웨어를 직접 제어할 수 있음. -> VM에 대한 라이프 사이클 관리, 실시간 리소스 할당, VM 정책 정의등 기능 수행



## 가상화
 가상화란 물리적인 자원을 동시에 다수의 논리적 자원으로 사용하는 것

## 가상화를 사용하는 이유
 VMware의 책임연구원의 책 [Virtualizatino Essentials](https://iran-lms.com/images/images/Books/PDF/Virtualization-Essentials-Sybex-2016.pdf)에서는 원도우가 single-user Inferface 운영체제라 자원 낭비가 심해서 가상화 기술이 발전했다고 주장.

 빠른 시장 변화에 높은 적응력
 
 보안 수준을 높일 수 있음(접근을 원천 차단)

### 가상화의 종류
 1. 나눠서 쓰는 공유(sharing) : 다수의 가상 자원을 하나의 물리적 자우너과 연결시켜, 시간 분할 기법으로 물리적 자원을 공유
 2. 합쳐서 쓰는 집합(aggregation) : 여러개의 자우너을 하나로 묶어서 물리적인 용량과 성능을 향상시키고, 하나의 논리 장치로 관리
 3. 에뮬레이션(emulation) : 새로 만듦
 4. 자원 절연(resouce insulation) : 물리 장치가 비정상인 상태에서도 논리 장치의 고가용성 보장

### LVM(Logical Volume Manager)
 LVM : [논리적인(Logical) 공간(Volume)을 만들게(Manager) 해주는 프로그램](https://mamu2830.blogspot.com/2019/12/lvmpv-vg-lv-pe-lvm.html)

###  VM과 컨테이너의 가장 큰 차이점 :  자원 공유의 수준 
- VM :  하드웨어의 가상화로 자원을 공유
- 컨테이너 : 호스트 OS, 커널 공간, 라이브러리 바이러니 공유

### 컨테이너가 더 가볍다면 VM 대신 컨테이너만 쓰면 되는거 아닐까?
 => NO. 컨테이너는 OS를 공유하기 때문에 장애 발생시 영향을 받을 수도 있다. 즉, VM이 더 안정적.

