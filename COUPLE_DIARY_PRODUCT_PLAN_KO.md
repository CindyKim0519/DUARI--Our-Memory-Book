# 커플 다이어리 앱 기획서

## 0. 브랜드 정보

- **서비스명:** DUARI
- **앱 내부 표시명:** Our Memory Book
- **브랜드 방향:** 귀엽고 힐링, 조용한 종이 다이어리 감성
- **출시 타겟 시장:** 글로벌 (영어권 우선, 한국어 버전은 추후 추가)
- **언어 정책:** 앱 UI와 사주 궁합 리포트는 모두 영어로 제공한다.

---

## 0-1. 경쟁사 분석

### Between
- **단점:** UI 직관성 부족, 기념일 설정 헷갈림, 광고 있음, 2020년 이후 UI 업데이트 없음
- **장점:** 사진 앨범 깔끔, 기록마다 댓글/공유/찜, 테마 미리보기
- **DUARI 차별점:** 광고 없음, 직관적 UX, 템플릿으로 앱 전체 디자인 변경, 메시지 기능 없이 기록에 집중

### Paired
- **단점:** 월 $14.99로 비쌈, 퀴즈/게임/질문 중심이라 DUARI와 방향 다름
- **장점:** 매일 다른 퀴즈/질문/게임, 만난 날 개월/주/일로 번갈아 표시, 24시간 Story 기능
- **DUARI 차별점:** 게임보다 감성적 기록 중심, 무료 기본 기능

### 기억나무
- **특징:** 사주 기능 (외부 앱 이동), 밸런스 게임
- **DUARI 차별점:** 사주 궁합을 앱 안에서 AI로 제공, 외부 이동 없음

---

## 1. 프로젝트 개요

### 프로젝트명
DUARI

### 한 줄 소개
커플이 둘만의 추억, 기념일, 사진, 감정, 하루 목표와 계획을 날짜별로 함께 기록하고, 앱 전체 디자인을 바꾸는 다이어리 템플릿과 AI 사주 궁합 리포트를 제공하는 영어 기반 프라이빗 커플 다이어리 앱.

### 앱 표시 기준
- 스토어와 브랜드 이름은 `DUARI`를 사용한다.
- 앱 내부 메인 타이틀은 `Our Memory Book`을 사용한다.

### 목표
- 두 사람이 같은 공간에서 추억을 남기고 볼 수 있는 개인적인 기록장 만들기
- 날짜별 추억과 기념일을 캘린더에서 쉽게 확인하기
- 사진과 감정 태그를 함께 저장해 추억을 더 생생하게 보관하기
- Daily Together와 Daily Plan으로 운동, 독서, 하루 목표와 계획을 가볍게 공유하기
- 영어 UI로 자연스럽고 따뜻한 커플 다이어리 경험 제공하기
- 다이어리 템플릿을 통해 앱 전체 분위기를 쉽게 바꾸고, 향후 템플릿 판매로 확장하기
- Match 탭에서 인연, 재미, 애정, 재물, 자녀, 결혼 궁합을 AI로 분석한 사주 궁합 리포트 제공하기

### 핵심 제품 구성
- Memories: Calendar와 Collection을 통해 추억, 기념일, Daily Together, Daily Plan을 기록하고 확인한다.
- Templates: Theme Design 화면에서 무료/유료 테마를 미리보고 적용한다. 유료 테마는 crown icon을 표시하지만 현재 버전에서는 결제 없이 적용할 수 있다.
- Match: Saju Compatibility 입력값을 바탕으로 실제 AI 사주 궁합 리포트를 생성한다. 결제는 아직 붙이지 않는다.
- Settings: 커플 공간, PIN, 데이터, 약관, 문의, 앱 정보를 관리한다.

### 첫 구현 기준
- 첫 구현은 실제 서비스와 같은 화면 구조를 갖춘 localStorage 프로토타입으로 만든다.
- Google/Apple 버튼은 표시만 하고 현재 버전에서는 눌러도 이동하지 않는다.
- `Use Test Account` 버튼으로 테스트 커플 공간에 바로 진입할 수 있게 한다.
- 실제 출시 앱은 Firebase 기반으로 전환한다.
- 실제 결제 시스템은 아직 붙이지 않는다.

### 핵심 분위기
부드럽고 조용한 종이 다이어리 느낌. 과하게 화려한 연애 앱이 아니라, 크림색 종이, 세이지 그린, 작은 꽃 포인트, 손글씨 감성을 사용한 따뜻한 모바일 기록장.

## 2. 주요 사용자

### 대상 사용자
- 함께 추억을 기록하고 싶은 커플
- 기념일과 사진을 날짜별로 정리하고 싶은 사용자
- 과한 SNS형 기능보다 사적인 기록 공간을 원하는 사용자

### 사용 상황
- 데이트 후 그날의 기억을 적을 때
- 여행, 기념일, 선물, 맛집 등 특별한 순간을 남길 때
- 지나간 날짜를 캘린더에서 다시 찾아볼 때
- 둘 중 누가 쓴 기록인지 구분해서 보고 싶을 때

### 타겟 페르소나

**페르소나 1 — 핵심 타겟: 감성 기록러 커플**
- 25-32세, 사귄 지 1-3년
- GoodNotes, Notion 같은 디지털 도구 즐겨 씀
- Instagram에서 aesthetic 다이어리 콘텐츠 팔로우
- 데이트 후 그날을 기록하고 싶은 욕구 있음
- Between 써봤지만 UI가 별로였거나 광고가 싫었음
- 예쁜 템플릿이면 기꺼이 $2.99 씀

**페르소나 2 — 확장 타겟: K-culture 관심 해외 커플**
- 20-28세, 글로벌 (미국, 동남아, 유럽)
- K-드라마, K-pop 좋아함
- MBTI처럼 사주에 가볍게 관심 있음
- 특별하고 독특한 앱 찾는 타입
- 사주 궁합 $0.99에 호기심으로 결제할 가능성 높음

## 3. 핵심 기능

### 3.1 최초 설정
처음 앱을 열면 이메일/비밀번호로 가입 또는 로그인한 뒤, 커플 공간을 만들거나 초대 링크를 통해 참여한다. Google/Apple 소셜 로그인 버튼은 화면에 표시하지만 현재 버전에서는 동작하지 않는다.

진입 흐름:
- 이메일/비밀번호 계정 생성 또는 로그인
- Google 또는 Apple 소셜 로그인 버튼 표시 (현재 버전에서는 비활성)
- 이메일/비밀번호 계정은 이메일 인증 완료
- 커플 공간 생성 또는 초대 링크 수락
- Shared 4-digit PIN 설정
- 닉네임, 생일, 사귄 날짜 설정
- 상대방 초대 링크 생성 및 공유
- 상대방 참여 여부와 관계없이 Memories > Calendar 진입
- 상대방 미참여 상태에서는 partner pending 배너 표시
- 상대방이 참여하면 기존 기록이 같은 커플 공간에서 자동 공유됨

로그인부터 메인까지 화면 구조:
```txt
Welcome
  - Create Account
  - Log In
  - Continue with Google
  - Continue with Apple
  - Use Test Account

Create Account
  -> Verify Email
  -> Create Our Book
  -> PIN
  -> Memories, even if partner has not joined

Log In
  -> Verify Email, if needed
  -> Create Our Book, if no couple space
  -> PIN, if couple space exists
  -> Memories

Use Test Account
  -> loads a ready test couple space
  -> Memories
```

Welcome 화면:
- 앱 이름: `DUARI`
- 앱 내부 표시명: `Our Memory Book`
- 메인 문구: `Open a private little place for the two of you`
- 보조 문구: `Save your memories, anniversaries, photos, feelings, and diary themes together.`
- 버튼: `Create Account`
- 버튼: `Log In`
- 버튼: `Continue with Google`
- 버튼: `Continue with Apple`
- 테스트 버튼: `Use Test Account`
- 하단 링크: `Terms of Service`, `Privacy Policy`

Welcome 화면 동작:
- `Create Account`를 누르면 Create Account 페이지로 이동한다.
- `Log In`을 누르면 Log In 페이지로 이동한다.
- `Continue with Google` 버튼은 현재 버전에서는 비활성 상태로 표시하고, 눌러도 이동하지 않는다.
- `Continue with Apple` 버튼은 현재 버전에서는 비활성 상태로 표시하고, 눌러도 이동하지 않는다.
- `Use Test Account`를 누르면 테스트용 커플 공간 데이터를 생성하거나 불러온 뒤 Memories로 바로 이동한다.
- 테스트 버튼은 개발/테스트용이며 실제 출시 빌드에서는 숨긴다.

소셜 로그인 제공 기준:
- 1차 출시 후보 소셜 로그인은 Google과 Apple이다.
- Google 로그인은 웹/Android/iOS에서 제공한다.
- Apple 로그인은 iOS 출시를 고려해 제공 후보에 포함한다.
- 현재 구현에서는 Google/Apple 버튼을 표시만 하고 실제 로그인 동작은 연결하지 않는다.
- Google/Apple 버튼을 눌러도 페이지 이동, 계정 생성, 테스트 계정 진입을 실행하지 않는다.
- 소셜 로그인으로 처음 들어온 사용자도 Create Our Book 또는 초대 참여 흐름으로 이동한다.
- 소셜 로그인 계정도 이메일/비밀번호 계정과 동일하게 사용자 ID, 구매 복원, PIN 재설정에 사용한다.
- 소셜 로그인 사용자는 별도의 비밀번호 재설정 기능을 사용하지 않는다.

테스트 계정 동작:
- 이메일 인증, 초대 링크, PIN 입력을 건너뛴다.
- 테스트 커플 이름, 사귄 날짜, 샘플 추억, 샘플 기념일, 샘플 템플릿 상태를 자동으로 준비한다.
- 테스트 데이터는 localStorage 프로토타입에서만 사용한다.
- 테스트 커플 예시 이름은 `Mina`와 `Jay`를 사용한다.
- 테스트 진입 후 메인 화면의 기본 탭은 Memories > Calendar이다.

Create Account 입력 항목:
- Email
- Password
- Confirm Password
- Terms of Service and Privacy Policy 동의 체크박스

Create Account 화면 구조:
```txt
[Back]          Create Account

Email
Password
Confirm Password
[ ] I agree to the Terms of Service and Privacy Policy.

[Create Account]
Already have an account? Log In
```

Create Account 동작:
- 이메일 형식이 유효해야 한다.
- 비밀번호는 최소 8자 이상이어야 한다.
- 비밀번호는 영문과 숫자를 포함해야 한다.
- Confirm Password는 Password와 일치해야 한다.
- 약관과 개인정보 처리방침에 동의해야 가입할 수 있다.
- 가입 성공 후 이메일 인증 화면으로 이동한다.

Create Account 오류 문구:
- `Please enter a valid email.`
- `Password must be at least 8 characters.`
- `Password must include letters and numbers.`
- `Passwords don't match.`
- `Please agree to continue.`

Log In 입력 항목:
- Email
- Password

Log In 화면 구조:
```txt
[Back]          Log In

Email
Password

[Log In]
[Continue with Google]
[Continue with Apple]
Forgot password?

[Use Test Account]
```

Log In 동작:
- 이메일과 비밀번호가 일치해야 한다.
- 이메일 인증이 완료되지 않은 계정은 이메일 인증 화면으로 이동한다.
- 로그인 성공 후 커플 공간 상태에 따라 PIN 화면, 커플 공간 생성, 초대 참여 흐름으로 이동한다.
- 상대방이 아직 참여하지 않은 커플 공간도 PIN 통과 후 Memories로 이동할 수 있다.
- 현재 버전에서는 `Continue with Google` 또는 `Continue with Apple`을 눌러도 이동하지 않는다.
- `Use Test Account`를 누르면 테스트용 커플 공간을 불러오고 Memories로 바로 이동한다.

Log In 오류 문구:
- `Email or password doesn't match.`
- `Please verify your email to continue.`

Forgot Password 동작:
- 이메일 계정 비밀번호를 재설정하는 기능이다.
- 이메일/비밀번호로 가입한 계정에만 제공한다.
- Google 또는 Apple로 로그인한 사용자는 각 제공자의 계정 관리에서 비밀번호를 관리한다.
- PIN 재설정과 구분한다.
- 사용자가 이메일을 입력하면 비밀번호 재설정 링크를 보낸다.

Forgot Password 문구:
- `Forgot password?`
- `We'll send a password reset link to your email.`
- `Send Reset Email`
- `Check your email to reset your password.`

커플 공간 생성 입력 항목:
- Your nickname
- Your birthday
- The day you started
- Shared 4-digit PIN
- Confirm PIN

동작:
- 두 사람은 각각 자기 계정으로 로그인한다. 계정 방식은 이메일/비밀번호, Google, Apple 중 하나를 사용할 수 있다.
- 이메일 인증이 완료되기 전에는 커플 공간 생성 또는 참여를 진행할 수 없다.
- PIN은 숫자 4자리만 허용한다.
- 커플 공간을 만든 사용자는 초대 링크를 생성해 상대에게 공유한다.
- 초대받은 사용자는 링크를 열고 이메일/비밀번호, Google, Apple 중 하나로 로그인한 뒤, Shared PIN과 본인 정보를 입력해 참여한다.
- 커플 공간을 만든 사용자는 상대방이 아직 참여하지 않아도 PIN을 설정한 뒤 메인 화면으로 이동할 수 있다.
- 상대방이 참여하기 전에는 메인 화면에서 partner pending 상태를 표시한다.
- partner pending 상태에서도 추억, 기념일, Daily Together, Daily Plan을 작성할 수 있다.
- partner pending 상태에서 작성한 추억, 기념일, Daily Together, Daily Plan은 커플 공간에 저장된다.
- 상대방이 참여하면 기존에 작성된 기록도 자동으로 공유되어 함께 볼 수 있다.
- 메인 화면은 PIN을 입력한 뒤에만 진입할 수 있다.

커플 공간 생성 화면 문구:
- `Create Our Book`
- `Set up a private memory book for the two of you.`
- `Your nickname`
- `Your birthday`
- `The day you started`
- `Shared 4-digit PIN`
- `Confirm PIN`
- `Create Our Book`

커플 공간 생성 오류 문구:
- `Nickname can't be empty.`
- `Please enter a valid birthday.`
- `Please enter a valid start date.`
- `PIN must be 4 digits.`
- `PINs don't match.`

초대하는 사용자 화면 문구:
- `Invite your partner`
- `Share this private invite link with your partner.`
- `Share Invite Link`
- `Copy Link`
- `Your partner hasn't joined yet.`
- `You can keep writing memories while you wait.`
- `Invite Partner`

초대받은 사용자 화면 문구:
- `You've been invited to Our Memory Book`
- `You were invited to a private memory book for two.`
- `Join this couple space`
- `Your nickname`
- `Your birthday`
- `Enter the shared PIN`
- `Join Our Book`

초대받은 사용자 입력 조건:
- 닉네임은 비어 있으면 안 된다.
- 초대한 사람의 닉네임과 달라야 한다.
- 생일은 유효한 날짜여야 한다.
- Shared PIN이 커플 공간의 PIN과 일치해야 한다.

초대받은 사용자 오류 문구:
- `Nickname can't be empty.`
- `Nicknames must be different.`
- `Please enter a valid birthday.`
- `That PIN doesn't match.`

이메일 인증 화면 문구:
- `Verify your email`
- `We sent a verification link to your email.`
- `Check your inbox to continue.`
- `Resend verification email`
- `Email verified. Continue`

초대 링크 보안 정책:
- 초대 링크는 한 명만 사용할 수 있다.
- 초대 링크는 일정 시간 후 만료된다.
- 기본 만료 시간은 7일로 설정한다.
- 이미 두 명이 참여한 커플 공간에는 추가 참여할 수 없다.
- 초대 링크를 열어도 인증된 계정 로그인은 반드시 필요하다.
- 커플 공간 참여 시 Shared PIN도 입력해야 한다.
- 초대 링크는 생성자가 필요할 때 취소할 수 있다.

초대 링크 오류 문구:
- `This invite link has expired.`
- `This invite link has already been used.`
- `This couple space is already full.`
- `Please log in to join this couple space.`
- `That PIN doesn't match.`

### 3.2 PIN 로그인
이미 계정으로 로그인된 기기에서는 앱을 다시 열 때 PIN 입력 화면을 보여준다.

PIN 화면 구조:
```txt
Our Memory Book

Enter your PIN
[ _ ][ _ ][ _ ][ _ ]

Forgot PIN?
Log Out
```

동작:
- 한 번 로그인한 기기는 로그아웃하기 전까지 계정 로그인을 다시 요구하지 않는다.
- 로그인된 기기에서는 PIN만 입력하면 메인 화면으로 이동한다.
- 로그아웃한 경우 계정 로그인 후 PIN을 입력해야 메인 화면으로 이동할 수 있다.
- 저장된 PIN과 입력값이 일치하면 메인 화면으로 이동한다.
- PIN이 틀리면 `That PIN doesn't match.` 오류를 보여준다.
- PIN을 잊은 경우 `Forgot PIN?`을 통해 이메일 인증 후 새 PIN을 설정할 수 있다.

### 3.3 작성자 인식
PIN 통과 후 현재 로그인된 계정을 기준으로 작성자를 자동 인식한다.

화면 문구:
- `Welcome back, Nickname`

동작:
- 사용자가 직접 작성자를 선택하지 않는다.
- 현재 로그인된 `userId`가 새 추억의 `authorUserId`로 저장된다.
- 메인 화면 우측 상단에는 현재 계정 또는 닉네임을 표시한다.
- 다른 사용자가 사용하려면 기존 계정에서 로그아웃한 뒤 자기 계정으로 로그인한다.

### 3.4 메인 화면
메인 화면은 네 개의 하단 탭으로 구성한다.

하단 탭:
- Memories
- Templates
- Match
- Settings

Memories 탭 안에는 두 개의 하위 탭이 있다.

Memories 하위 탭:
- Calendar
- Collection

상단 정보:
- 앱 제목: `Our Memory Book`
- 커플 이름 표시: `My Nickname ♥ Partner Nickname`
- 함께한 날짜 수: `N days together`

메인 진입 기본 상태:
- PIN 성공 또는 테스트 계정 진입 후 Memories 탭으로 이동한다.
- Memories 안에서는 Calendar 하위 탭을 기본으로 보여준다.
- 선택 날짜는 오늘 날짜로 설정한다.
- 테스트 계정으로 진입한 경우 샘플 커플 이름, 샘플 추억, 샘플 기념일이 표시된다.
- 상대방이 아직 초대를 수락하지 않은 경우에도 Memories로 진입할 수 있다.
- 상대방 미참여 상태에서는 Memories 상단에 partner pending 배너를 표시한다.
- partner pending 배너에는 `Your partner hasn't joined yet.`와 `Invite Partner` 액션을 표시한다.
- 상대방 미참여 상태에서는 커플 이름을 `My Nickname ♥ Partner` 또는 `My Nickname ♥ Waiting`으로 표시한다.

각 메뉴의 역할:
- Memories: 날짜별 또는 전체 목록으로 커플의 추억과 기념일을 확인하고 기록하는 공간
- Calendar: 날짜를 중심으로 추억과 기념일을 보는 하위 탭
- Collection: 저장된 전체 추억을 검색하고 필터링하는 하위 탭
- Templates: 앱 전체 다이어리 디자인 테마를 선택하고 적용하는 공간
- Match: 사주 궁합 리포트를 확인하는 공간
- Settings: 앱 사용, 보안, 데이터, 약관, 상용화 관련 정보를 관리하는 공간

### 3.5 캘린더
날짜별 추억과 기념일을 확인하는 기본 화면.

표시 정보:
- 월 제목: `May 2026` 같은 영어 날짜 형식
- 요일: Sun, Mon, Tue, Wed, Thu, Fri, Sat
- 오늘 날짜 표시
- 선택한 날짜 표시
- 추억이 있는 날짜에는 추억 개수를 숫자 마크로 표시
- 기념일이 있는 날짜에는 하트 마크 표시
- Add/Edit Memory 화면의 Daily Together에서 `Workout day`를 체크한 날짜에는 workout icon을 표시
- Add/Edit Memory 화면의 Daily Together에서 `Reading day`를 체크한 날짜에는 book icon을 표시

선택한 날짜 영역:
- 날짜 제목
- 요약 줄: `2 memories · 1 anniversary`
- Anniversaries 목록
- Memories 목록
- Add Memory 버튼
- Add Anniversary 버튼
- 전체 추억 개수
- 별도의 Add Daily Tag 버튼은 제공하지 않는다.
- Workout day와 Reading day 체크는 Add/Edit Memory 화면 안의 Daily Together 섹션에서 처리한다.

Calendar 추억 카드 구성:
- 왼쪽: 커버 사진 또는 기본 종이 썸네일
- 오른쪽 첫 줄: 추억 제목
- 오른쪽 둘째 줄: 날짜와 작성자 닉네임
- 오른쪽 셋째 줄: 메모리 유형, 감정, 장소

Calendar 추억 카드 예시:
```txt
[photo] A Little Date
        May 30, 2026 · Mina
        Date · Happy · Seoul Cafe
```

Calendar 카드 정책:
- Calendar와 Collection은 같은 추억 카드 구조를 사용한다.
- 작성자는 `Written by` 문장 대신 닉네임으로 표시한다.
- 장소가 없으면 장소 영역은 생략한다.
- 추억이 여러 개인 날짜는 캘린더 날짜 셀에 해당 개수를 숫자로 표시한다.
- 기념일이 있는 날짜는 숫자와 별도로 하트 마크를 함께 표시한다.
- 반복 기념일이 해당 연도의 같은 월/일에 해당하면 그 날짜에도 하트 마크를 표시한다.
- Daily Together에서 `Workout day`가 체크된 날짜는 workout icon을 함께 표시한다.
- Daily Together에서 `Reading day`가 체크된 날짜는 book icon을 함께 표시한다.
- Daily Together custom tag가 체크된 날짜는 해당 custom tag의 아이콘을 함께 표시한다.
- Daily Together 아이콘은 한 명만 체크해도 표시하고, 두 명 모두 체크해도 아이콘은 하나만 표시한다.
- 날짜 셀에는 Daily Together 아이콘을 최대 2개까지 표시하고, 더 많으면 `+` 표시로 축약한다.

빈 상태 문구:
- 기념일 없음: `No anniversaries on this date`
- 추억 없음: `No memories on this date yet. Try another day you shared.`

### 3.6 자동 기념일
앱이 자동으로 계산해서 보여주는 기념일.

자동 생성 항목:
- 100일 단위 기념일 전체: `100 Days Together`, `200 Days Together`, `300 Days Together`
- 매년 사귄 날짜 기념일 전체: `1st Anniversary`, `2nd Anniversary`
- 각 사용자 생일: `Nickname's Birthday`

자동 기념일 정책:
- 100일 단위 기념일은 제한 없이 계속 계산해 캘린더에 표시한다.
- 1년 단위 기념일은 매년 자동 계산해 캘린더에 표시한다.
- 두 사용자의 생일은 매년 자동 계산해 캘린더에 표시한다.
- 자동 기념일은 사용자가 수정하거나 삭제할 수 없다.
- 사귄 날짜 또는 생일이 변경되면 자동 기념일도 다시 계산된다.
- 자동 기념일에는 메뉴 버튼을 표시하지 않는다.

### 3.7 수동 기념일 관리
사용자가 직접 기념일을 추가, 수정, 삭제할 수 있다.

입력 항목:
- Anniversary name
- Date
- Repeat yearly
- Memo

동작:
- 기념일 추가 후 해당 날짜로 캘린더 선택을 이동한다.
- `Repeat yearly`를 체크하면 해당 기념일은 매년 같은 월/일에 표시한다.
- 반복 기념일은 원본 날짜를 유지하고, 캘린더에는 선택한 연도에 맞춰 계산된 날짜로 표시한다.
- 반복 기념일도 수동 기념일이므로 사용자가 수정/삭제할 수 있다.
- 수동 기념일에는 메뉴 버튼을 표시한다.
- 메뉴에서 Edit, Delete, Cancel을 선택할 수 있다.
- 삭제 전 확인 다이얼로그를 보여준다.
- 수동 기념일만 수정/삭제할 수 있다.

### 3.8 추억 작성
추억을 추가하거나 수정하는 화면.

입력 항목:
- Photos
- Title
- Date
- Place
- Memory type
- Feeling
- Daily Together
- Daily Plan
- Note

Memory type 옵션:
- Date
- Travel
- Anniversary
- Food
- Gift
- Daily Review
- Letter
- Promise
- Conflict & Repair
- Special Day

Feeling 옵션:
- Happy
- Loved
- Grateful
- Touched
- Comforted
- Excited
- Missing You
- Funny
- Sorry
- A Little Hurt
- Made Up
- Hopeful

Daily Together 입력:
- 체크박스 형태로 표시한다.
- `Workout day`
- `Reading day`
- 커플이 직접 추가한 Custom Daily Together 태그
- `+ Add custom` 버튼은 Edit Memory 화면의 Daily Together 섹션 안에만 표시한다.
- `+ Add custom`으로 커스텀 태그를 추가할 수 있다.
- 커스텀 태그는 이름과 아이콘을 가진다.
- 커스텀 태그는 커플 공간당 최대 10개까지 만들 수 있다.
- 커스텀 태그 예시: `Walk day`, `Study day`, `No-spend day`, `Cook together`, `Meditation`, `Cleaning day`
- 별도의 Add Daily Tag 화면은 제공하지 않는다.
- Add Memory 화면에서는 기존 Daily Together 태그를 체크만 할 수 있다.
- Edit Memory 화면에서는 기존 Daily Together 태그를 체크할 수 있고, `+ Add custom`으로 새 태그를 추가할 수 있다.
- Daily Together는 선택 입력이다.
- 현재 로그인된 사용자가 체크한 항목만 해당 사용자의 기록으로 저장된다.
- Daily Together는 날짜+사용자 기준으로 한 번만 체크 처리한다.
- 같은 날짜에 여러 Memory에서 같은 항목을 체크해도 해당 날짜의 체크 상태는 하나로 유지한다.
- 상대방이 같은 날짜에 같은 항목을 체크하면 같은 날짜 상세에서 두 사람 모두 체크된 상태로 표시한다.
- 캘린더 날짜 셀에는 항목별 아이콘만 표시하고, 몇 명이 체크했는지는 표시하지 않는다.
- 캘린더 날짜 셀에는 Daily Together 아이콘을 최대 2개까지 표시하고, 그보다 많으면 `+` 표시를 사용한다.

Daily Plan 입력:
- `My goal today`
- `My plan today`
- 두 입력 항목 모두 textarea로 제공한다.
- 현재 로그인된 사용자의 하루 목표와 계획으로 저장된다.
- 같은 날짜에 각 사용자는 하나의 Daily Plan만 가진다.
- 같은 날짜에 여러 Memory에서 Daily Plan을 입력하면 해당 날짜의 내 Daily Plan을 업데이트한다.
- 상대방의 Daily Plan은 읽기 전용으로 표시한다.
- Daily Plan은 선택 입력이다.

입력 조건:
- Title은 필수이다.
- Date는 필수이다.
- Memory type은 필수이며 기본값은 `Daily Review`이다.
- Feeling은 필수이다.
- Note는 선택 입력이다.
- Place는 선택 입력이다.
- Daily Together는 선택 입력이다.
- Daily Plan은 선택 입력이다.
- Photos는 선택 입력이며, 사진 없이도 저장할 수 있다.
- 사용자가 작성하는 제목, 장소, 본문, Daily Plan 내용은 자유 언어로 입력할 수 있다. UI 라벨만 영어로 제공한다.

오류 문구:
- `Title can't be empty.`
- `Please enter a valid date.`
- `Please choose a feeling.`

사진 기능:
- 최대 10장 업로드
- 첫 번째 사진을 Cover로 표시
- Add/Edit Memory 화면에서 각 사진 위에 X 삭제 버튼을 표시한다.
- 사진의 X를 누르면 해당 사진이 목록에서 제거된다.
- 첫 번째 사진을 삭제하면 다음에 남아 있는 사진이 Cover가 된다.
- 사진을 모두 삭제하면 사진 없는 추억으로 저장할 수 있다.
- 작성 중 사진을 추가해도 기존 입력값이 유지되어야 한다.
- 1차에서는 사진 순서 변경 기능을 제공하지 않는다.

저장 동작:
- 현재 로그인된 사용자의 `userId`를 `authorUserId`로 저장한다.
- Daily Together 체크값은 날짜와 사용자 기준으로 저장한다.
- Daily Plan은 날짜와 사용자 기준으로 저장한다.
- 신규 추억은 최신순으로 목록 상단에 추가한다.
- 수정 시 기존 추억 데이터를 업데이트한다.
- 저장 후 추억 상세 화면으로 이동한다.

삭제 권한:
- Memory는 작성자 본인만 삭제할 수 있다.
- 상대방은 Memory를 볼 수 있지만 삭제할 수 없다.
- 삭제 전에는 삭제 확인 모달을 보여준다.

### 3.9 추억 상세
저장된 추억을 자세히 보는 화면.

표시 정보:
- 상단: Back 버튼, 화면 제목 `Memory Detail`
- 둥근 큰 카드 컨테이너
- 사진이 있을 경우 카드 상단에 큰 커버 사진
- 제목
- 날짜와 작성자 표시: `May 30, 2026 · Mina's memory`
- 장소, 메모리 유형, 감정 메타 정보
- Daily Together 체크 정보
- Daily Plan
- 본문 내용
- 작성자 본인일 경우 Edit 버튼

동작:
- 사진이 없으면 사진 영역을 표시하지 않는다.
- 사진이 있으면 첫 번째 사진을 커버로 먼저 보여준다.
- 사진 영역은 왼쪽/오른쪽 드래그로 다음 사진을 볼 수 있다.
- 커버 이미지를 누르면 Photo Gallery 화면으로 이동한다.
- Photo Gallery에서는 해당 추억에 저장된 모든 이미지를 볼 수 있다.
- 작성자 본인만 수정할 수 있다.
- 작성자 본인만 삭제할 수 있다.
- Edit 버튼은 화면 하단에 표시한다.
- Delete 버튼은 상세 화면에 표시하지 않고 Edit Memory 화면 안에서만 제공한다.
- Daily Plan은 Memories 선택 날짜 상세에 표시하지 않고 Memory Detail 안에서만 표시한다.
- Daily Plan은 작성자별로 표시하며, 상대방의 Daily Plan은 읽기 전용이다.
- Daily Together와 Daily Plan은 본문보다 위에 표시한다.
- Daily Together 또는 Daily Plan이 비어 있으면 해당 섹션은 표시하지 않는다.
- 본문이 비어 있으면 기본 문구를 보여준다.

기본 문구:
- `A small moment from today was saved here.`

상세 화면 예시:
```txt
[Back]          Memory Detail

[card]

<[Cover Photo]>

A Little Date

May 30, 2026 · Mina's memory
Seoul Cafe · Date · Happy

Daily Together
Workout day    Mina ✓   Jay -
Reading day    Mina -   Jay -
Walk day       Mina ✓   Jay ✓

Daily Plan
My goal today
Take a slow walk after work.

My plan today
Work, dinner, and call before sleep.

We had a quiet coffee date today.
I want to remember this small, warm moment.

[Edit]
[/card]
```

### 3.10 사진 갤러리
추억에 저장된 사진을 크게 보는 화면.

표시 정보:
- X 닫기 버튼
- 추억 제목
- 저장된 전체 사진 목록
- 각 사진은 세로로 크게 표시한다.

동작:
- X를 누르면 추억 상세 화면으로 돌아간다.
- 텍스트 `Close` 버튼은 사용하지 않고 X 아이콘 버튼만 제공한다.
- 모든 사진을 한 페이지에 넣고, 사용자는 위아래로 스크롤해서 본다.
- 좌우 드래그, 캐러셀, 확대/축소, 다운로드, 삭제 기능은 1차에서 제공하지 않는다.
- 사진이 없는 추억에서는 갤러리 진입 경로를 제공하지 않는다.

사진 갤러리 예시:
```txt
[X]       A Little Date

[Large Photo]

[Large Photo]

[Large Photo]
```

### 3.11 모아보기
전체 추억이 모여 있는 보관함 화면.

역할:
- Calendar가 날짜 중심 화면이라면, Collection은 모든 기록을 최신순으로 훑어보는 화면이다.
- 사용자는 제목, 장소, 본문, 감정으로 기록을 찾고, 기록 유형과 작성자로 필터링할 수 있다.
- Memories 안의 `Collection` 탭을 누르면 이 화면을 보여준다.

기능:
- 섹션 제목: `Collection`
- 전체 추억 수: `24 memories`
- 검색 입력창
- Memory type 필터
- Author 필터
- Add Memory 버튼
- 기록 카드 리스트
- Load More 페이지네이션

화면 구조:
```txt
[Search by title, place, note, or feeling]

Memory type              Author
[All v]                  [All v]

Total memories 22        [Add Memory]

[thumbnail] Title
            May 30, 2026 · [Author]
            Type of memory · Feeling · Location

[thumbnail] Title
            May 29, 2026 · [Author]
            Type of memory · Feeling · Location

[Load More]
```

검색 대상:
- 제목
- 장소
- 본문
- 유형
- 감정

정렬:
- 최신 생성순
- 정렬 변경 기능은 1차에서는 제공하지 않는다.

Collection 추억 카드 구성:
- 왼쪽: 커버 사진 또는 기본 종이 썸네일
- 오른쪽 첫 줄: 추억 제목
- 오른쪽 둘째 줄: 날짜와 작성자 닉네임 pill
- 오른쪽 셋째 줄: 메모리 유형, 감정, 장소
- 장소가 없으면 셋째 줄에서 장소만 생략한다.

Collection 추억 카드 예시:
```txt
[photo] A Little Date
        May 30, 2026 · Mina
        Date · Happy · Seoul Cafe
```

Collection 카드 정책:
- 작성자는 `Written by` 문장 대신 닉네임 pill로 표시한다.
- 작성자 pill은 두 사람을 구분할 수 있도록 서로 다른 부드러운 색을 사용한다.
- 검색 결과를 빠르게 훑을 수 있도록 날짜를 작성자보다 먼저 표시한다.
- 제목이 길면 한 줄로 줄이고 말줄임표를 표시한다.
- 카드 전체를 누르면 Memory Detail 화면으로 이동한다.
- Collection에서 Add Memory를 누르면 날짜 기본값은 오늘로 설정한다.

초기 노출 개수:
- 5개

빈 상태 문구:
- 추억이 아예 없음: `No memories yet. Start with a day you want to keep.`
- `No matching memories. Try a different word.`

### 3.12 다이어리 템플릿
템플릿은 추억 작성 양식이 아니라, 앱 전체 디자인을 바꾸는 다이어리 테마 상품이다.

기본 원칙:
- Add Memory 흐름에는 영향을 주지 않는다.
- 1차 MVP에서는 앱 전체에 하나의 템플릿만 적용한다.
- 선택된 템플릿은 커플 공간의 `activeTemplateId`로 저장한다.
- 기본 템플릿은 `Soft Paper`이다.
- 템플릿은 데이터로 관리해, 나중에 디자인 값만 추가해도 쉽게 등록할 수 있게 한다.

템플릿 적용 범위:
- 최초 설정 화면
- PIN 로그인 화면
- 작성자 인식 화면
- Memories 메뉴
- Calendar 하위 탭
- Collection 하위 탭
- Templates 메뉴
- Add/Edit Memory 화면
- Memory Detail 화면
- Photo Gallery 화면
- Add/Edit Anniversary 화면
- 삭제 확인 다이얼로그

Templates 화면 요소:
- 화면 제목: `Theme Design`
- 좌측 상단 X 버튼
- 화면 중앙에 큰 휴대폰 형태의 앱 미리보기
- 미리보기 좌우에는 이전/다음 템플릿의 일부가 살짝 보이게 한다.
- 사용자는 좌우 스와이프로 템플릿을 넘긴다.
- 화면 하단에는 현재 선택한 템플릿의 주요 액션 버튼을 크게 표시한다.
- 템플릿은 무료 테마와 유료 테마를 구분한다.
- 무료 테마의 주요 액션은 `Apply`이다.
- 유료 테마는 `Apply` 버튼 상단 왼쪽에 crown icon을 표시한다.
- 실제 결제는 아직 연결하지 않는다.
- 결제가 연결되기 전까지 유료 테마도 무료 테마처럼 `Apply`할 수 있다.
- 현재 적용 중인 템플릿은 버튼을 `Applied`로 표시하고 비활성화한다.
- 출시 예정 템플릿은 버튼 대신 `Coming Soon` 상태를 표시한다.
- 판매 중인 유료 템플릿도 현재 버전에서는 결제 없이 적용 가능하게 처리한다.
- 드롭다운 필터와 템플릿 카드 리스트는 1차 Templates 화면에서 제공하지 않는다.

Templates 화면 예시:
```txt
[X]              Theme Design

        [previous preview edge]

             [large phone preview]

        [next preview edge]

[Apply]
```

유료 테마 버튼 예시:
```txt
[crown icon]
[Apply]
```

큰 앱 미리보기 구성:
- 선택한 템플릿의 배경색 또는 종이 질감
- 선택한 템플릿의 주요 버튼 색상
- 선택한 템플릿의 카드 색상과 radius
- 선택한 템플릿의 감정 배지 또는 작은 장식 포인트
- 샘플 추억 타임라인
- 샘플 추억 카드 1-2개
- 샘플 사진 프레임
- 하단 내비게이션 샘플
- 중앙 Add 버튼 샘플

큰 앱 미리보기 예시:
```txt
[phone preview]
  timeline line
  sample date
  sample memory card
  sample photos
  bottom navigation
  floating add button
```

템플릿 스와이프 동작:
- 좌우 스와이프로 이전/다음 템플릿을 탐색한다.
- 현재 중앙에 보이는 템플릿이 선택된 템플릿이다.
- 선택된 템플릿의 색상에 맞춰 화면 배경과 `Apply` 버튼 색상이 함께 바뀐다.
- 적용 전에는 미리보기 안에서만 테마가 바뀌고 실제 앱 전체 테마는 변경되지 않는다.
- `Apply`를 누르면 커플 공간의 `activeTemplateId`를 현재 선택 템플릿으로 저장한다.

상태별 동작:
- 무료 적용 가능 템플릿: `Apply`
- 현재 적용 중인 템플릿: `Applied`
- 유료 템플릿: crown icon 표시, 현재 버전에서는 무료처럼 `Apply`
- 구매 완료한 템플릿: `Apply` (결제 기능 연결 이후)
- 판매 중이지만 아직 결제가 연결되지 않은 템플릿: crown icon 표시 후 `Apply`
- 출시 예정 템플릿: `Coming Soon`
- 유료 템플릿과 GoodNotes PDF 다운로드는 결제 기능 연결 이후 별도 상세 화면에서 제공한다.

Premium Template 확장 방향:
- 1차 화면은 테마 미리보기와 적용에 집중한다.
- 결제 기능 연결 이후에는 선택한 템플릿 아래에 가격, GoodNotes PDF 포함 여부, `Buy Template` 버튼을 추가할 수 있다.

템플릿 추가 방식:
- 새 템플릿은 `TEMPLATE_CATALOG`에 객체 하나를 추가하는 방식으로 등록한다.
- 템플릿의 색상, 폰트, 배경, 카드, 버튼, 배지, 장식 값은 `themeTokens` 안에 모은다.
- 화면 컴포넌트는 템플릿 이름을 직접 확인하지 않고, 현재 템플릿의 `themeTokens`만 읽어 스타일을 적용한다.
- 프리뷰 이미지는 선택 사항이다. 이미지가 없으면 색상 팔레트와 미니 앱 샘플로 프리뷰를 만든다.

템플릿 판매 방식:
- 실제 결제는 아직 붙이지 않는다.
- MVP에서는 무료/유료 테마 구분과 유료 테마 왕관 아이콘을 보여준다.
- MVP에서 유료 테마도 결제 없이 `Apply`할 수 있다.
- 실제 결제 시스템이 연결되면 유료 테마의 Apply 전 구매 흐름을 추가한다.
- 사용자는 Premium Template을 개별 구매할 수 있다.
- 여러 템플릿을 묶어 판매하는 상품은 제공하지 않는다.
- Premium Template 상품은 앱 디자인 테마와 GoodNotes용 PDF 템플릿을 함께 제공한다.
- 사용자는 구매한 템플릿의 PDF 파일을 다운로드해 GoodNotes, Notability 등 PDF 필기 앱에서 사용할 수 있다.
- 구매 내역은 로그인 계정에 연결되어 기기를 바꿔도 복원할 수 있어야 한다.
- 커플 공간 안에서 한 사람이 구매한 템플릿은 두 사람이 함께 사용할 수 있다.
- 구매한 템플릿의 앱 테마 적용 권한과 PDF 다운로드 권한은 해당 커플 공간의 두 멤버에게 제공된다.
- 구매 권한은 구매 당시의 커플 공간에 귀속된다.
- 구매자가 커플 공간을 나가도 기존 커플 공간의 사용 권한은 유지된다.
- 구매 권한은 다른 커플 공간으로 기본 이전되지 않는다.
- 환불이 승인되면 해당 커플 공간에서 템플릿 앱 테마 적용 권한과 PDF 다운로드 권한을 제거한다.

구매 전 확인 페이지:
- 이 화면은 실제 결제 기능 연결 이후 제공한다.
- 사용자가 `Buy Template`을 누르면 결제 전 확인 페이지를 보여준다.
- 확인 페이지에는 상품명, 가격, 포함 항목, 커플 공간 공유 안내를 표시한다.
- 디지털 상품은 원칙적으로 환불 불가라는 안내를 표시한다.
- 버튼은 `Cancel`, `Continue to Payment`로 구성한다.

구매 전 확인 문구:
- `Buy Pressed Flowers?`
- `Premium Template · $2.99`
- `Includes:`
- `App Theme`
- `GoodNotes PDF`
- `Available for both of you.`
- `Digital templates and PDF files are non-refundable after purchase, except for duplicate payments, payment errors, or technical access issues.`
- `Continue to Payment`

구매 완료 화면:
- 이 화면은 실제 결제 기능 연결 이후 제공한다.
- 개별 템플릿 구매 완료 시 `Apply Template`, `Download PDF` 버튼을 제공한다.

구매 완료 문구:
- `Template purchased`
- `Pressed Flowers is now available for both of you.`
- `View Templates`

구매 실패 문구:
- `Payment couldn't be completed.`
- `Please try again.`

구매 복원 정책:
- `Restore Purchases`는 로그인 계정과 현재 커플 공간에 연결된 구매 권한을 다시 동기화한다.
- 복원 성공 시 `Your purchases have been restored.` 문구를 보여준다.
- 구매 내역이 없으면 `No purchases found.` 문구를 보여준다.
- 복원 실패 시 `Couldn't restore purchases. Try again.` 문구를 보여준다.

기본 템플릿 목록:
- `Soft Paper`: 기본 적용 템플릿. 크림 종이 배경, 세이지 버튼, 작은 꽃 포인트.
- `Simple Linen`: 무료 템플릿. 깨끗한 린넨 질감과 차분한 중립 색감.

출시 예정 템플릿 예시:
- `Pressed Flowers`
- `Blue Letter`
- `Cafe Date`
- `Travel Scrapbook`
- `Moonlight Long Distance`
- `Anniversary Gold`

## 4. 데이터 구조

### 계정과 커플 공간 데이터
상용화 버전에서는 두 사람이 각각 자기 계정으로 로그인하고, 하나의 커플 공간에 멤버로 참여한다.

커플 공간 구조:
```js
{
  id,
  relationshipStartDate,
  sharedPinHash,
  activeTemplateId: "soft-paper",
  members: [
    {
      userId,
      email,
      nickname,
      birthday,
      role: "member",
      joinedAt
    },
    {
      userId,
      email,
      nickname,
      birthday,
      role: "member",
      joinedAt
    }
  ],
  createdAt,
  updatedAt
}
```

계정 세션 구조:
```js
{
  userId,
  email,
  coupleSpaceId,
  isLoggedIn,
  lastPinVerifiedAt
}
```

초대 링크 데이터:
```js
{
  id,
  coupleSpaceId,
  createdByUserId,
  token,
  status: "active",
  expiresAt,
  usedAt,
  usedByUserId,
  revokedAt,
  createdAt
}
```

초대 링크 상태 값:
- `active`
- `expired`
- `used`
- `revoked`

### 템플릿 카탈로그 데이터
템플릿은 앱 상태와 분리된 고정 카탈로그 데이터로 관리한다.

```js
const TEMPLATE_CATALOG = [
  {
    id: "soft-paper",
    name: "Soft Paper",
    access: "free",
    status: "available",
    priceLabel: "Free",
    description: "A quiet cream paper diary with sage buttons and tiny floral details.",
    previewImage: null,
    pdfFiles: [],
    previewColors: ["#faf3e7", "#9caf88", "#e8a9a9", "#f3d98b"],
    themeTokens: {
      background: "#faf3e7",
      surface: "#fffaf0",
      primary: "#8fa47c",
      accent: "#e8a9a9",
      secondaryAccent: "#f3d98b",
      text: "#3f3a32",
      mutedText: "#7b7165",
      border: "#eadfcb",
      cardRadius: "18px",
      buttonRadius: "999px",
      bodyFont: "Nunito",
      displayFont: "Gaegu",
      texture: "paper",
      decorativeMotif: "tiny-flowers",
      photoFrameStyle: "soft-polaroid",
      calendarMarkStyle: "tiny-sticker",
      emotionBadgeStyle: "pastel-label"
    }
  }
];
```

템플릿 상태 값:
- `available`: 무료 또는 이미 사용 가능한 템플릿
- `coming-soon`: 출시 예정 템플릿
- `for-sale`: 향후 결제가 연결된 유료 템플릿
- `purchased`: 향후 구매 완료된 유료 템플릿

템플릿 접근 값:
- `free`
- `premium`

템플릿 적용 규칙:
- 앱 시작 시 `activeTemplateId`로 현재 템플릿을 찾는다.
- 값이 없거나 잘못된 경우 `soft-paper`를 기본값으로 사용한다.
- `status`가 `available`, `for-sale`, `purchased`인 템플릿은 현재 버전에서 적용할 수 있다.
- `coming-soon` 템플릿은 미리보기만 가능하다.
- `for-sale` 템플릿은 premium 표시와 crown icon을 보여주지만, 결제 시스템 연결 전까지 무료처럼 적용할 수 있다.
- 결제 시스템 연결 후에는 premium 템플릿 구매 흐름을 추가한다.

PDF 파일 구조:
```js
{
  id,
  label: "GoodNotes PDF",
  format: "pdf",
  pageSize: "A4",
  orientation: "portrait",
  fileUrl,
  thumbnailUrl,
  pageCount
}
```

PDF 제공 규칙:
- 무료 템플릿은 PDF를 제공하지 않거나 샘플 PDF만 제공할 수 있다.
- 유료 템플릿은 구매 후 PDF 다운로드를 제공한다.
- 유료 템플릿은 구매 전 Preview 화면에서도 GoodNotes PDF 썸네일을 보여준다.
- PDF 파일은 GoodNotes에서 바로 가져와 쓸 수 있는 정적 다이어리 속지로 제공한다.
- PDF 다운로드는 `Templates` 메뉴의 구매 완료 템플릿 상세와 Settings > Template Purchases에서 접근할 수 있다.

### 3.13 사주 궁합
커플의 생년월일과 태어난 시간을 바탕으로 사주 궁합 리포트를 제공하는 Match 화면.

기본 원칙:
- 하단 탭 이름은 `Match`로 표시한다.
- 화면 제목은 `Saju Compatibility`로 표시한다.
- 결과는 점수 하나만 보여주는 화면이 아니라, PDF 리포트처럼 요약과 항목별 긴 해석을 함께 제공한다.
- 현재 구현에서는 입력값을 바탕으로 실제 AI 분석 리포트를 생성한다.
- 결제 시스템은 아직 붙이지 않는다.
- 무료/유료 잠금 없이 전체 리포트 화면 구조를 먼저 구현한다.
- 실제 점술적 정확성을 보장한다는 표현은 사용하지 않고, 연애 대화와 자기이해를 돕는 엔터테인먼트 리포트로 안내한다.

입력 항목:
- Person A name
- Person A birthday
- Person A birth time
- Person B name
- Person B birthday
- Person B birth time
- Relationship status

Relationship status 옵션:
- Talking stage
- Crush
- Getting to know each other
- Early dating
- Dating
- Long-term relationship
- Long-distance
- Living together
- Engaged
- Married
- Reconnected
- Complicated

입력 조건:
- 이름은 필수이다.
- 생년월일은 필수이다.
- 태어난 시간은 선택 입력이다.
- 태어난 시간을 모를 경우 `I don't know the birth time`을 선택할 수 있다.
- 태어난 시간이 없으면 리포트에 `Birth time was not provided, so the reading may be lighter.` 안내를 표시한다.

Match 화면 구조:
```txt
Saju Compatibility

Mina ♥ Doyoon

Overall Match
88

A quiet bond that feels familiar and steady.

[View Full Reading]

Compatibility Categories

[Fate Match]      88
[Fun Match]       82
[Love Match]      91
[Wealth Match]    76
[Children Match]  73
[Marriage Match]  86
```

리포트 상세 화면 구조:
```txt
[X]          Compatibility Reading

Mina ♥ Doyoon
Overall Match 88

Summary
...

Fate Match
...

Fun Match
...

Love Match
...

Wealth Match
...

Children Match
...

Marriage Match
...

Gentle Advice
...

[Share] [Save as PDF]
```

리포트 상세 화면 액션:
- `Share` 버튼을 제공한다.
- `Save as PDF` 버튼을 제공한다.
- 무료 상태에서는 두 버튼을 잠금 또는 Coming Soon 상태로 표시할 수 있다.
- 유료 전체 리포트에서는 Share와 Save as PDF를 사용할 수 있다.
- Share는 리포트 요약 링크 또는 이미지/PDF 공유로 확장할 수 있다.
- Save as PDF는 궁합 점수, 6개 카테고리 상세, Gentle Advice를 포함한 리포트 파일을 저장한다.

궁합 카테고리:
- Fate Match: 두 사람이 왜 끌리는지, 관계의 인연감과 안정감을 해석한다.
- Fun Match: 대화, 취향, 데이트 방식, 함께 있을 때의 재미와 리듬을 해석한다.
- Love Match: 애정 표현, 정서적 친밀감, 설렘과 안정감의 균형을 해석한다.
- Wealth Match: 돈을 대하는 방식, 소비/저축 리듬, 함께 재정을 관리할 때의 궁합을 해석한다.
- Children Match: 가족관, 돌봄 방식, 미래 자녀에 대한 태도와 양육 리듬을 조심스럽게 해석한다.
- Marriage Match: 장기 관계, 생활 습관, 책임감, 결혼 후 안정성을 해석한다.

리포트 문체:
- 사주 궁합 리포트와 앱 UI는 모두 영어로 제공한다.
- 문체는 부드럽고 따뜻한 연애 리포트 느낌으로 구성한다.
- 단정적인 예언보다 `you may`, `you tend to`, `this relationship can feel` 같은 완곡한 표현을 사용한다.
- 장점만 말하지 않고 조심해야 할 관계 패턴도 부드럽게 알려준다.
- 겁을 주는 표현, 이별을 단정하는 표현, 질병/불임/사망 같은 고위험 예측은 제공하지 않는다.
- Children Match는 임신 가능성이나 실제 자녀 수를 예측하지 않고, 가족관과 돌봄 성향 중심으로 해석한다.

각 카테고리 상세 구성:
- Score
- Short summary
- What feels natural
- What may need care
- Conversation prompt for the couple

카테고리 상세 예시:
```txt
Love Match
Score 91

Short summary
Your affection can feel warm, steady, and easy to return to.

What feels natural
...

What may need care
...

Conversation prompt
What kind of love makes each of us feel safest?
```

무료/유료 정책:
- 현재 구현: 실제 AI 분석으로 전체 점수, 6개 카테고리 상세 해석, Gentle Advice를 생성한다.
- 현재 구현: Share와 Save as PDF 버튼은 화면에 제공한다.
- 현재 구현: 결제는 붙이지 않는다.
- 향후 상용화: 무료 요약 + 유료 전체 리포트 구조로 확장할 수 있다.

데이터 저장:
```js
{
  id,
  coupleSpaceId,
  personA,
  personB,
  relationshipStatus,
  overallScore,
  categoryScores,
  summary,
  sections,
  createdAt,
  updatedAt
}
```

categoryScores 예시:
```js
{
  fate: 88,
  fun: 82,
  love: 91,
  wealth: 76,
  children: 73,
  marriage: 86
}
```

### 3.14 설정
상용화 버전에서는 기록 기능과 판매 기능을 안정적으로 운영하기 위해 Settings 메뉴를 제공한다.

Settings 메뉴 목적:
- 커플 공간과 사용자 정보를 관리한다.
- PIN과 접근 잠금 설정을 관리한다.
- 템플릿 구매, 약관, 개인정보 처리방침 등 상용화에 필요한 정보를 제공한다.
- 데이터 내보내기, 백업, 삭제 등 사용자의 데이터 통제 기능을 제공한다.

Settings 화면 구성:
- Couple Space
- Security
- Template Purchases
- Data
- Legal
- Support
- App Info

Couple Space:
- 현재 커플 공간 이름 또는 앱 제목 표시
- 내 닉네임 표시
- 내 생일 표시
- 상대 닉네임 표시
- 상대 생일 표시
- 사귄 날짜 표시
- `Edit Couple Info` 버튼

Edit Couple Info 입력 항목:
- Your nickname: 수정 가능
- Your birthday: 수정 가능
- Partner's nickname: 읽기 전용
- Partner's birthday: 읽기 전용
- The day you started: 수정 가능

Edit Couple Info 동작:
- 각 사용자는 자기 닉네임과 생일만 수정할 수 있다.
- 상대방의 닉네임과 생일은 읽기 전용으로 표시한다.
- 사귄 날짜는 두 사용자 모두 수정할 수 있다.
- 두 닉네임은 서로 달라야 한다.
- 날짜 값은 유효한 날짜만 허용한다.
- 사귄 날짜가 바뀌면 자동 기념일과 함께한 날짜 수를 다시 계산한다.
- 본인 생일이 바뀌면 해당 사용자의 생일 자동 기념일을 다시 계산한다.
- 닉네임이 바뀌면 기존 추억의 작성자 표시도 새 닉네임으로 보여준다.
- 저장 후 `Couple info updated.` 문구를 보여준다.

Edit Couple Info 오류 문구:
- `Nickname can't be empty.`
- `Nicknames must be different.`
- `Please enter a valid birthday.`
- `Please enter a valid start date.`

Security:
- `Change PIN`
- `Reset PIN by Email`
- `Change Account Password`
- `Sign Out`

Change PIN 입력 항목:
- Current PIN
- New 4-digit PIN
- Confirm new PIN

Change PIN 동작:
- 현재 PIN이 일치해야 변경할 수 있다.
- 새 PIN은 숫자 4자리만 허용한다.
- 새 PIN과 확인 PIN이 일치해야 한다.
- 성공 시 `Your PIN has been changed.` 문구를 보여준다.
- 실패 시 상황에 맞는 오류 문구를 보여준다.

Security 오류 문구:
- `Current PIN doesn't match.`
- `PIN must be 4 digits.`
- `New PINs don't match.`

Reset PIN by Email 동작:
- PIN 화면 또는 Settings > Security에서 시작할 수 있다.
- 로그인된 계정 이메일로 PIN 재설정 링크 또는 인증 코드를 보낸다.
- 이메일 인증이 완료된 사용자만 새 PIN을 설정할 수 있다.
- 새 PIN은 숫자 4자리만 허용한다.
- 재설정 후 PIN 입력 화면 또는 메인 화면으로 이동한다.

Reset PIN by Email 문구:
- `Forgot PIN?`
- `We'll send a reset link to your email.`
- `Send Reset Email`
- `Check your email to reset your PIN.`
- `Create a new 4-digit PIN`
- `Your PIN has been reset.`

Sign Out 동작:
- 로그아웃하면 현재 기기의 로그인 세션을 종료한다.
- 로그아웃 후 다시 앱을 사용하려면 계정 로그인과 PIN 입력을 모두 완료해야 한다.

Template Purchases:
- 현재 적용 중인 템플릿 표시
- 구매한 Premium Template 목록
- Premium Template 개별 구매 내역
- GoodNotes용 PDF 다운로드 목록
- 출시 예정 템플릿 안내
- 구매 복원 기능 제공
- 결제 영수증 또는 구매 상태 확인

Template Purchases 문구:
- `Purchased Templates`
- `Restore Purchases`
- `No purchased templates yet.`
- `Buy Template`
- `Download PDF`
- `GoodNotes PDF`
- `PDF Downloads`
- `Available for both of you`
- `Purchases are linked to your email account.`
- `Your purchases have been restored.`
- `Continue to Payment`
- `Template purchased`
- `View Templates`
- `Payment couldn't be completed.`
- `Please try again.`
- `No purchases found.`
- `Couldn't restore purchases. Try again.`

Data & Backup:
- `Backup`
- `Export Memories`
- `Account Deletion`

Backup 동작:
- 백업 상태는 Data & Backup 페이지 안에서 작게 표시한다.
- 사용자가 직접 실행하는 백업 버튼이 아니라, 현재 클라우드 저장 상태를 알려주는 안내 영역으로 제공한다.
- 마지막 저장 시간을 함께 표시한다.

Backup 문구:
- `Backup`
- `Your memories are safely backed up.`
- `Last updated: May 30, 2026`
- `Backing up...`
- `Backup will retry when you're online.`
- `Last backup failed.`

Export Memories 동작:
- 사용자는 커플 추억을 PDF Memory Book으로 내보낼 수 있다.
- 사진은 별도 ZIP 다운로드를 제공하지 않고, PDF Memory Book 안에 포함하는 방향으로 설계한다.
- JSON 백업 파일과 Import Backup 기능은 제공하지 않는다.

Export Memories 문구:
- `Export Memories`
- `Download your memories as a PDF memory book.`
- `Export PDF`

Account Deletion 동작:
- 사용자는 자기 계정을 삭제할 수 있다.
- 계정 삭제 후 해당 사용자는 더 이상 커플 공간에 접근할 수 없다.
- 과거에 작성한 추억은 커플 공간에 남는다.
- 과거 기록의 작성자 닉네임은 탈퇴 시점의 닉네임으로 유지한다.
- 상대방은 기존 기록을 계속 볼 수 있다.
- 사용자가 직접 커플 공간 전체를 삭제하는 버튼은 제공하지 않는다.
- 두 멤버가 모두 탈퇴하면 커플 공간은 30일 동안 비활성 보관 후 영구 삭제된다.

Account Deletion 확인 문구:
- `Delete your account?`
- `Your account will be deleted and you will lose access to this couple space. Memories you wrote before will stay in the shared diary with your nickname.`
- `If both members leave, this couple space will be scheduled for deletion.`
- `Inactive couple spaces are permanently deleted after 30 days.`
- 확인 입력: `DELETE MY ACCOUNT`

Legal:
- `Terms of Service`
- `Privacy Policy`
- `Refund Policy`
- `Digital templates and PDF files are non-refundable after purchase.`
- `Duplicate payments, payment errors, or technical access issues may be reviewed separately.`
- `Open Source Licenses`

Legal 동작:
- 각 항목은 별도 페이지로 연다.
- 실제 상용화 전 법률 전문가 검토를 거친 약관과 개인정보 처리방침으로 교체한다.
- MVP 문서에서는 약관 본문이 아니라 메뉴 위치와 연결 구조만 정의한다.

Refund Policy:
- 유료 템플릿과 GoodNotes PDF는 디지털 상품이므로 구매 후 원칙적으로 환불할 수 없다.
- 중복 결제, 결제 오류, 구매 후 템플릿 접근 불가, PDF 다운로드 불가, 파일 손상 등 기술적 문제는 예외적으로 검토한다.
- 환불 예외가 승인되면 해당 커플 공간에서 템플릿 앱 테마 적용 권한과 PDF 다운로드 권한을 제거한다.
- 환불된 템플릿이 현재 적용 중이면 기본 템플릿 `Soft Paper`로 되돌린다.
- 구매 전 확인 페이지에서 환불 불가 안내를 표시한다.

Refund Policy 문구:
- `Digital templates and PDF files are non-refundable after purchase.`
- `Duplicate payments, payment errors, or technical access issues may be reviewed separately.`
- `If a refund is approved, template access and PDF downloads will be removed from the couple space.`

Support:
- `Contact Us`
- `FAQ`

Support 동작:
- Contact Support, Send Feedback, Report a Problem은 별도 메뉴로 나누지 않고 `Contact Us`로 통합한다.
- 사용자는 앱 내부 문의 폼에서 문의 유형을 선택하고 메시지를 보낼 수 있다.
- 오류 신고, 결제 문의, 계정 문제, 템플릿/PDF 문의, 피드백은 모두 Contact Us에서 처리한다.
- 사진, 추억 본문, 개인 기록은 자동으로 첨부하지 않는다.

Contact Us 입력 항목:
- Category
- Subject
- Message
- Attach diagnostics

Contact Us Category 옵션:
- Account
- PIN & Login
- Couple Space
- Memories
- Templates & Purchases
- PDF Download
- Bug Report
- Feedback
- Other

Attach diagnostics 포함 정보:
- 앱 버전
- 사용자 ID
- 커플 공간 ID
- 로그인 이메일
- 현재 화면
- 브라우저/기기 정보
- 오류 시간
- 최근 오류 로그

Contact Us 문구:
- `Contact Us`
- `Category`
- `Subject`
- `Message`
- `Attach diagnostics`
- `Your message has been sent.`
- `We'll get back to you by email.`

FAQ 초기 질문:
- `How do I invite my partner?`
- `What happens if I forget my PIN?`
- `Can both of us use purchased templates?`
- `How do I download the GoodNotes PDF?`
- `What happens if I delete my account?`
- `Where are my memories stored?`

App Info:
- 앱 이름: `DUARI - Our Memory Book`
- 앱 버전
- 로그인 계정
- 커플 공간 ID 일부
- 데이터 저장 방식 안내
- 보안 안내
- 템플릿/PDF 저작권 안내
- 저작권 표시

App Info 안내 문구:
- `Version 1.0.0`
- `Signed in as`
- `Couple Space`
- `Your memories are stored securely in the cloud and connected to your couple space.`
- `Photos are stored in cloud storage and shown only inside your couple space.`
- `Your PIN is a quick app lock for signed-in devices.`
- `Your email account is used for login, purchase restore, and PIN reset.`
- `Purchased templates and PDF files are for personal use by your couple space.`
- `Redistribution, resale, or sharing outside your couple space is not allowed.`
- `© 2026 Our Memory Book. All rights reserved.`

### 추억 데이터
```js
{
  id,
  coupleSpaceId,
  title,
  date,
  place,
  type,
  emotion,
  content,
  photos,
  dailyTogether,
  dailyPlan,
  authorUserId,
  createdAt,
  updatedAt
}
```

### Daily Together 데이터
```js
{
  date,
  tags: {
    [dailyTogetherTagId]: {
      [userId]: true
    }
  }
}
```

### Daily Together 태그 데이터
```js
{
  id,
  coupleSpaceId,
  name,
  icon,
  isDefault,
  archived,
  createdAt,
  updatedAt
}
```

Daily Together 표시 정책:
- 기본 태그로 `Workout day`와 `Reading day`를 제공한다.
- 커플이 원하는 Custom Daily Together 태그를 추가할 수 있다.
- Custom Daily Together 태그는 커플 공간당 최대 10개까지 제공한다.
- Custom Daily Together 태그를 삭제하면 과거 기록은 유지하고 태그는 `archived: true`로 처리한다.
- archived 태그는 Add/Edit Memory 화면의 체크 항목으로는 보이지 않지만, 과거 Memory Detail에서는 기존 이름과 아이콘으로 표시한다.
- 캘린더 날짜 셀에는 체크된 항목의 아이콘만 표시한다.
- 캘린더 날짜 셀에는 Daily Together 아이콘을 최대 2개까지 표시하고, 더 많으면 `+` 표시로 축약한다.
- 한 명만 체크해도 해당 날짜에 아이콘을 표시한다.
- 두 명 모두 체크해도 같은 아이콘 하나만 표시한다.
- 선택한 날짜 상세에서는 각 항목별로 두 사람의 체크 여부를 표시한다.

선택 날짜 상세 예시:
```txt
Daily Together

Workout day      Mina ✓   Doyoon ✓
Reading day      Mina ✓   Doyoon -
Walk day         Mina -   Doyoon ✓
```

### Daily Plan 데이터
```js
{
  date,
  userId,
  goal,
  plan,
  createdAt,
  updatedAt
}
```

Daily Plan 표시 정책:
- 각 사용자는 같은 날짜에 하나의 Daily Plan만 작성할 수 있다.
- 본인의 Daily Plan만 작성/수정할 수 있다.
- 상대방의 Daily Plan은 읽기 전용으로 표시한다.
- Daily Plan은 Memories 선택 날짜 상세에는 표시하지 않는다.
- Daily Plan은 해당 Memory Detail 화면 안에서만 보여준다.

작성자 표시 정책:
- 추억은 `authorUserId`로 작성자를 저장한다.
- 화면에서는 `authorUserId`에 연결된 현재 닉네임을 찾아 닉네임으로 표시한다.
- 사용자가 닉네임을 변경하면 과거 기록도 새 닉네임으로 표시한다.

### 사진 데이터
```js
{
  id,
  url,
  fileName,
  storagePath,
  order,
  isCover
}
```

### 기념일 데이터
```js
{
  id,
  title,
  date,
  repeatYearly,
  memo,
  createdAt
}
```

기념일 반복 정책:
- `repeatYearly` 기본값은 `false`이다.
- `repeatYearly: true`인 기념일은 매년 같은 월/일에 표시한다.
- 반복 기념일의 원본 `date`는 최초 기념일 날짜로 유지한다.

## 5. 화면 흐름

1. 앱 실행
2. 로그인 세션 확인
3. 로그인 없음: Welcome 화면 표시
4. Welcome에서 Create Account, Log In, Use Test Account 중 선택
5. Use Test Account 선택: 테스트 커플 공간 로드 후 Memories > Calendar로 이동
6. Create Account 선택: 이메일/비밀번호 계정 생성 후 이메일 인증 화면
7. Log In 또는 소셜 로그인 선택: 계정 로그인 후 커플 공간 상태 확인
8. 이메일 인증 미완료: 이메일 인증 화면
9. 이메일 인증 완료 후 커플 공간 생성 또는 초대 링크 수락
10. 커플 공간 생성자: Shared PIN과 본인 정보 입력 후 초대 링크 공유
11. 초대받은 사용자: 초대 링크 열기, 계정 로그인, 필요 시 이메일 인증, Shared PIN과 본인 정보 입력
12. 커플 공간 생성자는 상대방 참여 여부와 관계없이 PIN 화면으로 이동
13. PIN 성공: Memories > Calendar로 이동
14. 상대방 미참여 상태라면 Memories에 partner pending 배너 표시
15. 상대방이 초대를 수락하면 같은 커플 공간에 연결
16. 메인 화면에서 Memories, Templates, Match 또는 Settings 사용
17. Memories 안에서 Calendar 또는 Collection 사용
18. Add Memory로 추억 작성
19. 저장 후 추억 상세 화면
20. 사진 클릭 시 갤러리 화면
21. Add Anniversary로 기념일 추가
22. Templates에서 Theme Design 미리보기 확인
23. 사용 가능한 템플릿일 경우 Apply로 앱 전체 디자인 변경
24. Match에서 Saju Compatibility 입력 및 리포트 확인
25. Settings에서 PIN 변경, 커플 정보 수정, 데이터 관리, 약관 확인
26. PIN 분실 시 이메일 인증으로 PIN 재설정

## 6. UI/UX 방향

### 전체 레이아웃
- 모바일 우선 화면
- 최대 폭 약 480px
- 앱 전체를 하나의 휴대폰 프레임처럼 구성
- 화면 내부는 스크롤 가능

### 화면 전환 원칙
- 삭제 확인을 제외한 모든 기능 화면은 모달이 아니라 별도 페이지로 만든다.
- Add/Edit Memory, Add/Edit Anniversary, Theme Design, Saju Compatibility, Compatibility Reading, Settings 하위 항목, Legal, FAQ, Contact Us는 모두 페이지로 제공한다.
- 삭제 확인만 모달 또는 확인 다이얼로그를 사용할 수 있다.
- 삭제 확인 모달은 위험 행동을 확인하는 용도로만 사용한다.
- 정보성 안내, 구매 전 확인, 상세 보기, 입력 폼은 모달로 만들지 않는다.

### 시각 스타일
- 크림색 종이 배경
- 세이지 그린 주요 버튼
- 연한 핑크와 버터 옐로우 포인트
- 약한 종이 질감
- 둥근 버튼과 카드
- 감성적인 제목에는 손글씨 폰트 사용

### 폰트
- UI 폰트: Nunito
- Display 폰트: Gaegu

### 컬러 키워드
- Cream
- Sage
- Warm Sand
- Flower Pink
- Butter Yellow
- Soft Sky

## 7. 주요 영어 UI 문구

브랜드:
- `DUARI`
- `Our Memory Book`
- `Open a private little place for the two of you`

로그인:
- `DUARI`
- `Our Memory Book`
- `Open a private little place for the two of you`
- `Save your memories, anniversaries, photos, feelings, and diary themes together.`
- `Create Account`
- `Log In`
- `Continue with Google`
- `Continue with Apple`
- `Use Test Account`
- `Email`
- `Password`
- `Confirm Password`
- `I agree to the Terms of Service and Privacy Policy.`
- `Already have an account? Log In`
- `Forgot password?`
- `We'll send a password reset link to your email.`
- `Send Reset Email`
- `Check your email to reset your password.`
- `Please enter a valid email.`
- `Password must be at least 8 characters.`
- `Password must include letters and numbers.`
- `Passwords don't match.`
- `Please agree to continue.`
- `Email or password doesn't match.`
- `Please verify your email to continue.`
- `Verify your email`
- `We sent a verification link to your email.`
- `Check your inbox to continue.`
- `Resend verification email`
- `Email verified. Continue`
- `Create Our Book`
- `Set up a private memory book for the two of you.`
- `Shared 4-digit PIN`
- `Confirm PIN`
- `Enter your PIN`
- `Forgot PIN?`
- `Log Out`
- `Join Our Book`
- `You were invited to a private memory book for two.`

메인:
- `Memories`
- `Calendar`
- `Collection`
- `Templates`
- `Match`
- `Settings`
- `My Nickname ♥ Partner Nickname`
- `N days together`

추억:
- `Add Memory`
- `Edit Memory`
- `Memory Detail`
- `Photo Gallery`
- `Memory type`
- `Daily Review`
- `Feeling`
- `Daily Together`
- `Workout day`
- `Reading day`
- `Add custom`
- `Daily Plan`
- `My goal today`
- `My plan today`
- `Mina's memory`
- `Note`
- `Where did it happen?`
- `Write down the moment you want to remember today.`
- `Save`
- `Save Changes`
- `Delete this memory?`
- `X`

기념일:
- `Add Anniversary`
- `Edit Anniversary`
- `Anniversary name`
- `Repeat yearly`
- `100 Days Together`
- `1st Anniversary`
- `Nickname's Birthday`
- `Delete this anniversary?`

검색:
- `Search by title, place, note, or feeling`
- `Memory type`
- `Author`
- `All`
- `Total memories`
- `Load More`

템플릿:
- `Theme Design`
- `Apply`
- `Applied`
- `Premium`
- `Free`
- `Coming Soon`
- `This template will be available soon.`
- `Choose the diary look for your memory book.`
- `Buy Template`
- `Download PDF`
- `GoodNotes PDF`
- `PDF Downloads`
- `Available for both of you`
- `Premium · Coming Soon`

궁합:
- `Saju Compatibility`
- `Compatibility Reading`
- `Overall Match`
- `View Full Reading`
- `Compatibility Categories`
- `Share`
- `Save as PDF`
- `Fate Match`
- `Fun Match`
- `Love Match`
- `Wealth Match`
- `Children Match`
- `Marriage Match`
- `Summary`
- `What feels natural`
- `What may need care`
- `Conversation prompt`
- `Gentle Advice`
- `I don't know the birth time`
- `Birth time was not provided, so the reading may be lighter.`
- `Relationship status`
- `Talking stage`
- `Crush`
- `Getting to know each other`
- `Early dating`
- `Dating`
- `Long-term relationship`
- `Long-distance`
- `Living together`
- `Engaged`
- `Married`
- `Reconnected`
- `Complicated`

설정:
- `Settings`
- `Couple Space`
- `Edit Couple Info`
- `Couple info updated.`
- `Security`
- `Change PIN`
- `Current PIN`
- `New 4-digit PIN`
- `Confirm new PIN`
- `Your PIN has been changed.`
- `Current PIN doesn't match.`
- `PIN must be 4 digits.`
- `New PINs don't match.`
- `Template Purchases`
- `Purchased Templates`
- `Restore Purchases`
- `Data & Backup`
- `Backup`
- `Your memories are safely backed up.`
- `Last updated: May 30, 2026`
- `Backing up...`
- `Backup will retry when you're online.`
- `Last backup failed.`
- `Export Memories`
- `Download your memories as a PDF memory book.`
- `Export PDF`
- `Account Deletion`
- `Delete My Account`
- `Delete your account?`
- `DELETE MY ACCOUNT`
- `Terms of Service`
- `Privacy Policy`
- `Refund Policy`
- `Open Source Licenses`
- `Contact Us`
- `Category`
- `Subject`
- `Message`
- `Attach diagnostics`
- `Your message has been sent.`
- `We'll get back to you by email.`
- `FAQ`
- `How do I invite my partner?`
- `What happens if I forget my PIN?`
- `Can both of us use purchased templates?`
- `How do I download the GoodNotes PDF?`
- `What happens if I delete my account?`
- `Where are my memories stored?`
- `App Info`

## 8. 정책 및 제약

### 상용화 버전 기준
- 두 사람은 각각 자기 계정으로 로그인한다. 계정 방식은 이메일/비밀번호, Google, Apple 중 하나를 사용할 수 있다.
- 이메일/비밀번호 계정은 이메일 인증이 완료되기 전에는 커플 공간 생성 또는 참여를 진행할 수 없다.
- 한 번 로그인한 기기는 로그아웃하기 전까지 PIN만 입력하면 메인 화면으로 이동한다.
- 로그아웃한 경우 계정 로그인과 PIN 입력을 모두 완료해야 한다.
- PIN은 로그인된 기기에서 앱을 빠르게 여는 잠금번호이다.
- 로그인 계정은 사용자 신원 확인, 데이터 소유권, 구매 복원, PIN 재설정에 사용한다.
- PIN을 잊은 경우 이메일 인증 후 새 PIN을 설정할 수 있다.
- 커플 공간은 초대 링크로 참여한다.
- 초대 링크는 인증된 계정 로그인과 Shared PIN 입력을 모두 요구한다.
- 초대 링크는 1회 사용 가능하며, 기본 7일 후 만료된다.
- 커플 공간은 기본적으로 두 명까지만 참여할 수 있다.
- 두 명이 모두 참여하기 전에도 생성자는 메인 화면을 사용할 수 있다.
- 상대방이 아직 참여하지 않은 커플 공간은 Memories에 partner pending 상태를 표시한다.
- 사진은 클라우드 스토리지에 저장하고, 데이터베이스에는 사진 메타데이터와 storagePath를 저장한다.
- 유료 템플릿 구매 권한은 커플 공간 단위로 공유되어 두 멤버가 함께 사용할 수 있다.
- 유료 템플릿 구매 권한은 구매 당시의 커플 공간에 귀속되며 다른 커플 공간으로 기본 이전되지 않는다.
- 유료 템플릿은 앱 디자인 테마와 GoodNotes용 PDF 다운로드를 함께 제공한다.
- 출시 예정 템플릿은 미리보기만 가능하며, 실제 적용이나 구매는 제공하지 않는다.
- MVP에서는 실제 결제 기능을 제공하지 않는다.
- 사용자가 직접 커플 공간 전체를 삭제하는 버튼은 제공하지 않는다.
- 각 사용자는 자기 계정을 삭제할 수 있으며, 한 명이 탈퇴해도 커플 공간과 기존 기록은 남는다.
- 두 멤버가 모두 탈퇴하면 커플 공간은 30일 동안 비활성 보관 후 영구 삭제된다.
- 상용화 전 Terms of Service, Privacy Policy, Refund Policy는 실제 서비스 구조와 결제 방식에 맞게 별도 검토 후 확정한다.
- 사용자가 데이터 삭제, 백업, 내보내기 방식을 이해할 수 있도록 Settings 안에 명확한 안내를 제공한다.

### 첫 구현 기준
- 첫 구현은 localStorage 기반 프로토타입으로 진행한다.
- 실제 출시 앱은 Firebase 기반으로 전환한다.
- 첫 구현은 HTML/CSS/JS와 localStorage를 사용해 화면과 핵심 기능을 먼저 완성한다.
- Firebase, Stripe, Cloud Functions는 사용자가 별도로 요청할 때 이후 단계에서 연결한다.
- localStorage 버전에서는 이메일 계정, 이메일 인증, 초대 링크, 실시간 공유를 실제로 제공하지 않는다.
- localStorage 버전에서는 최초 설정에서 두 사람의 닉네임, 생일, 사귄 날짜, Shared PIN을 한 번에 입력한다.
- localStorage 버전에서는 PIN 통과 후 `Who is here today?` 사용자 선택 화면으로 현재 작성자를 정한다.
- Firebase 버전으로 이전할 때 사용자 선택 방식은 로그인 계정 기반 작성자 자동 인식으로 바꾼다.
- localStorage 버전에서도 상용화 화면 구조는 최대한 미리 만들어둔다.
- 서버가 필요한 기능은 더미 상태, Coming Soon 상태, 또는 안내 화면으로 제공한다.

### 이후 개선 가능성
- 알림 기능
- 월별 추억 리포트
- 댓글 또는 반응 기능
- 다국어 전환

## 9. 구현 우선순위

### 1차 구현: localStorage 완성형 프로토타입
- HTML/CSS/JS 기반 단일 페이지 앱
- localStorage 저장
- 실제 서비스 화면 구조 구현
- Google/Apple 버튼은 표시만 하고 이동하지 않음
- 최초 설정
- Shared 4-digit PIN 설정
- PIN 로그인
- `Who is here today?` 사용자 선택
- 두 사용자 닉네임/생일/사귄 날짜 설정
- `My Nickname ♥ Partner Nickname`
- `N days together`
- Memories 메뉴
- Calendar 하위 탭
- Collection 하위 탭
- 추억 추가/수정/삭제
- Memory 삭제는 작성자만 가능
- 사진 업로드와 갤러리
- 사진 삭제
- 첫 번째 사진 Cover
- Memory Detail
- Photo Gallery
- 기념일 추가/수정/삭제
- 자동 기념일
- 검색과 필터
- Templates 메뉴
- Theme Design 캐러셀
- 무료/유료 테마 구분
- 유료 테마 crown icon 표시
- 무료/유료 테마 모두 Apply 가능
- 실제 결제는 붙이지 않음
- Match 메뉴
- Saju Compatibility 입력 화면
- 실제 AI 사주 궁합 분석
- Compatibility Reading 상세 화면
- Share / Save as PDF 버튼 UI
- Settings 메뉴
- Couple Space
- PIN 변경
- Legal 내부 페이지
- FAQ 페이지
- App Info
- Contact Us 폼 UI
- Data & Backup 화면 UI
- Backup 상태는 더미 문구로 표시
- Export Memories는 안내 또는 비활성 상태로 표시
- Account Deletion은 안내 또는 비활성 상태로 표시

### 2차 구현: Firebase 이전
- 이메일/비밀번호 계정 생성/로그인
- Google 로그인
- Apple 로그인
- 이메일/비밀번호 계정은 이메일 인증 필수 진행
- 비밀번호 재설정
- 커플 공간 생성
- 초대 링크 생성/수락
- 작성자 자동 인식
- Firestore 데이터 저장
- Firebase Storage 사진 업로드
- 실시간 공유
- 이메일 인증 기반 PIN 재설정
- Contact Us 실제 전송
- Account Deletion 실제 처리
- Backup 상태 실제 표시

### 3차 구현: 상용화 결제
- Stripe Checkout
- Firebase Cloud Functions
- Stripe Webhook
- 실제 결제 연동
- 구매 권한 커플 공간 귀속 처리
- 구매 복원
- GoodNotes PDF 다운로드
- PDF Memory Book 내보내기
- 환불 예외 처리
- 템플릿 프리뷰 고도화
- 알림 기능
- 월별 추억 리포트
- 반응/댓글


## 10. 수익 모델

- 앱 자체 무료
- 구독 없음, 일회성 인앱결제만
- 템플릿 개별 구매: $2.99 (앱 테마 + GoodNotes Planner PDF 포함)
- 사주 궁합 풀이: 현재 구현에서는 실제 AI 분석을 제공하고 결제는 붙이지 않음. 향후 $0.99 유료 전체 리포트로 확장 가능

## 11. 앱스토어 전략

- **앱 이름:** DUARI - Our Memory Book
- **카테고리:** Lifestyle
- **키워드:** couple diary, anniversary tracker, memory book, couples journal, diary template, relationship diary, photo diary, couple app, korean saju, saju compatibility

## 12. 마케팅 계획

- **플랫폼:** Instagram
- **시작 시점:** 앱 출시 후
- **톤앤매너:** 조용하고 따뜻한 감성, 여백 있는 aesthetic

### 콘텐츠 유형

**1. 앱 비주얼 (주 2-3회)**
- 템플릿 디자인 소개 (Soft Paper, Pressed Flowers 등)
- 앱 화면 목업 + 감성적인 영어 문구
- 예: *"A quiet little place for the two of you."*

**2. 커플 공감 콘텐츠 (주 1-2회)**
- "기록하고 싶은 순간" 시리즈
- 첫 데이트, 100일, 여행, 일상의 작은 순간
- Reels로 제작해 도달률 극대화

**3. 사용자 후기 리포스트 (비정기)**
- 실제 사용자 스크린샷 공유
- 초반엔 지인/베타 테스터 활용

**4. 사주 궁합 콘텐츠 (비정기)**
- "우리 커플 사주 궁합은?" 시리즈
- K-culture 관심 해외 팔로워 유입 목적
- 예: *"Korean Saju says you two are meant to be 🔮"*

**5. 템플릿 + GoodNotes Planner 세트 홍보**
- "하나 사면 앱 테마 + GoodNotes planner 둘 다 받아요" 강조
- GoodNotes 사용자 커뮤니티 타겟
- PDF planner 미리보기 이미지 콘텐츠
- 예: *"Buy a template, get the matching GoodNotes planner too. $2.99"*

## 13. 성공 기준

- 사용자가 1분 안에 커플 공간을 만들 수 있다.
- 날짜를 선택하고 그날의 추억을 바로 작성할 수 있다.
- 저장한 추억을 캘린더와 모아보기에서 모두 찾을 수 있다.
- 사진이 있는 추억은 커버 이미지와 갤러리로 자연스럽게 볼 수 있다.
- 영어 UI가 어색하지 않고 따뜻한 커플 다이어리 느낌을 준다.
- 모바일 화면에서 버튼, 필드, 카드가 겹치거나 깨지지 않는다.

## 14. 비용 및 수익 예상

### 초기 비용 (one-time)
- Apple Developer 등록: $99/년 (약 13만원)
- Google Play 등록: $25 평생 1회 (약 3만원)
- 도메인: $12/년 (약 1만6천원)
- **첫 해 총 비용: 약 $136 (약 17만원)**

### 월간 운영 비용
- Firebase (서버 + 데이터베이스 + 사진 Storage 포함): 초기 무료 티어로 충분, 사용자 증가 시 $10-30/월
  - 무료 티어 포함 내용: 데이터베이스, 사진 Storage 5GB, 로그인/인증, 하루 읽기 50,000번·쓰기 20,000번
- AI API (사주 궁합 생성): 건당 $0.01-0.02, 초반 거의 무료
- Stripe 결제 수수료: 결제액의 2.9% + $0.30
- **초반 월 고정비: 사실상 $0-30**

### 수익 예상

앱스토어 수수료: 연 $1M 이하 소규모 개발자 기준 **15%** (Apple Small Business Program)

**보수적 시나리오 (출시 후 1년)**
- 월 다운로드: 200-500명
- 템플릿 구매 전환율: 5%
- 월 매출: $30-60 → 수수료 제외 후 약 $25-51/월

**중간 시나리오 (Instagram 마케팅 효과)**
- 월 다운로드: 500-2,000명
- 템플릿 + 사주 궁합 구매 포함
- 월 매출: $150-400 → 수수료 제외 후 약 $130-340/월

**낙관적 시나리오 (바이럴 or GoodNotes 커뮤니티 유입)**
- 월 다운로드: 5,000명+
- 월 매출: $1,000-3,000 → 수수료 제외 후 약 $850-2,500/월

### 사업성 평가

**결론: 진행 추천**

- 직접 개발이라 초기 비용이 거의 없어 리스크가 매우 낮음
- Between처럼 성공한 선례가 있는 검증된 시장
- GoodNotes PDF 번들은 구매 동기가 명확한 차별점
- 사주 궁합은 경쟁 앱에 없는 유니크한 수익원
- 앱을 한번 만들어두면 자는 동안에도 수익 발생 가능
- 단기 수익보다 장기적으로 사용자 베이스를 쌓는 것이 목표

**주의점**
- 초반 1년은 수익이 크지 않을 수 있음
- 가장 큰 허들은 사용자 유입 — GoodNotes 커뮤니티, Reddit 등 타겟 커뮤니티 공략 필요
