import HJLogo from './img/hj_logo.png';
import PreBlog1 from './img/pre_blog_1.png';
import PreBlog2 from './img/pre_blog_2.png';
import PreCareer1 from './img/pre_career_1.png';
import PreCareer2 from './img/pre_career_2.png';
import PrePackage1 from './img/pre_package_1.png';
import PrePackage2 from './img/pre_package_2.png';
import B2BEnroll from './img/pre_b2b_enroll.png';
import B2BMain from './img/pre_b2b_main.png';

const skills = {
  main: ['React',
    'JavaScript ',
    'CSS',
    'Responsive Web',
    'GraphQL',
    'Sequelize',
    'AWS',
    'ReactAdmin',
  ],
  sub: [
    'Django',
    'Python',
    'React-Native',
    'next.js',
    'TypeScript',
    'PostgreSQL'
  ]

};
const introduce = `사람을 위한 프로덕트를 만드는 개발자가 되고자 컴퓨터공학을 주 전공으로하며 디지털 인문학을 복수로 전공했습니다. 디자인 수업에서 유저 분석과 UX/UI에 대해 배우고 프로젝트를 진행하며 유저 중심으로 사고하는 법을 배웠습니다.\n실제 비즈니스 성장에 기여하며 개발 실력을 쌓고자 스타트업의 풀 스택 개발자로 커리어를 시작했습니다. CTO와 개발자 2인으로 구성된 작은 개발팀으로 시작하여 pm과 디자이너가 포함된 7인의 프로덕트 팀으로 성장하는 과정에서 개발 능력뿐만 아니라 프로덕트에 대해 항상 고민하는 개발자가 되었습니다. 크고 작은 프로젝트에서 기획/FE/BE 다양한 포지션으로 업무를 진행하며, 애자일하게 일을 진행하는 능력과 커뮤니케이션 능력을 키우고 있습니다.
`
const jobs = [
  {
    id: 1,
    logo: HJLogo,
    company: '플래너리',
    url: 'https://heyjoyce.com',
    date: '2020.07.07 ~ 2021.01.07 (인턴) / 2021.01.08 ~ 현재 (정규)',
    summary:
      '6인으로 이루어진 프로덕트팀에서 풀스택 웹개발자로 근무하고 있습니다.\n유저와 만나는 웹/앱 프런트부터 서비스를 지탱하는 백엔드까지, 크고 작은 프로젝트들을 주도적으로 진행하고있습니다.\nAWS를 이용하여 BE 개발을 하고 React로 FE를 구현하며 빠른 delivery를 하고있습니다.',
    projects: [
      {
        title: '배너 자동화',
        content:
          '특정 유저를 타겟팅한 배너 노출을 통해 구매율을 높이기 위해 웹사이트 메인 페이지의 상단/하단 배너를 관리하는 adminAPI/clientAPI를 구현했습니다.\n1. 관리자가 노출 조건(기간, 대상, 우선순위)을 설정하여 배너를 생성할 수 있음\n2. 웹사이트에서 조건에 맞는 배너를 가져와 화면에 표시함',
        boundary: ['BE'],
        tech: ['Django', 'Python', 'React', 'JavaScript'],
        url: 'https://heyjoyce.com',
      },
      {
        title: '쿠폰 패키지 (신규 서비스)',
        content:
          '구매율을 높이기 위해 쿠폰 묶음 상품을 판매할 수 있는 화면과, 쿠폰 구매 후 생성되는 데이터를 구독하여 쿠폰을 자동 발급하는 시스템을 구현했습니다.\n1. order_event가 생기면 AWS-EventBridge에서 구독중인 규칙에 의해 couponCreat(AWS-Lambda 함수)가 호출됨\n2. 호출 된 함수에서 쿠폰 발급 후 coupon_created_event를 생성함\n3. toast API를 이용하여 유저에게 알림을 보냄',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Lambda', 'AWS-EventBridge', 'AWS-DynamoDB', 'React', 'JavaScript'],
        url: 'https://heyjoyce.com/package',
        preview: [PrePackage1, PrePackage2],
      },
      {
        title: '콘텐츠 검색 기능 (신규 서비스)',
        content:
          '유저가 원하는 컨텐츠를 쉽게 찾을 수 있게 하기 위해 커리어 상담 페이지에 카테고리로 필터링하는 기능과 키워드로 콘텐츠를 검색하는 기능을 구현했습니다.\n1. AWS-DynamoDB의 data를 AWS-Elasticsearch에 PUT하고 mapping&indexing\n2. GraphQL로 search 스키마를 정의하고 resolver에 ES 쿼리를 작성함\n3. client에서 검색 GraphQL 쿼리를 호출하여 원하는 결과 리스트를 받음',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL', 'React', 'JavaScript'],
        url: 'https://heyjoyce.com/feed/list',
        preview: [PreCareer1, PreCareer2],
      },
      {
        title: '디지털 콘텐츠 자동 등록',
        content:
          '관리자의 편의와 유저의 사용성 개선을 위해 teachable(SaaS)를 통해 제공되는 디지털 콘텐츠 자동 등록 프로세스를 구현했습니다.\n1. 콘텐츠 구매 후 생성되는 order_event를 AWS-EventBridge에서 구독하여 registerTeachable(AWS-Lambda 함수)를 호출함\n2. teachable API를 이용하여 유저 계정 생성 및 코스 등록함',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Lambda', 'AWS-DynamoDB', 'AWS-EventBridge', 'React', 'JavaScript'],
        url: '',
      },
      {
        title: '통합 검색 시스템 (신규 서비스)',
        content:
          '유저가 원하는 상품을 쉽게 찾을 수 있게 하기 위해 서비스하는 모든 콘텐츠에대한 통합 검색 기능을 AWS-Elasticsearch를 이용하여 구현했습니다.\n1. 다양한 타입의 콘텐츠를 추가할 수 있게 union type을 이용하여 확장성 있는 GraphQL schema를 정의함\n2. 30분마다 update된 postgreSQL의 data를 AWS-EventBridge로 구독하여 AWS-Elasticsearch에 싱크함\n3. GraphQL로 search 스키마를 정의하고 resolver에 ES 쿼리를 작성하여 검색 시스템을 구현함',
        boundary: ['BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL', 'AWS-Lambda', 'AWS-EventBridge', 'JavaScript'],
        url: 'https://heyjoyce.com',
      },
      {
        title: 'table 확장 설계 (feat. microservice)',
        content:
          'microservice 중 하나인 feed service를 확장 설계하여 여러 타입의 콘텐츠(ex. 블로그, 리뷰)를 제공할 수 있도록 설계했습니다.\n1. 모든 타입에서 사용하는 공통 필드와 개별 필들를 정의하고 CRUD를 재 정의함\n2. 각 요청에 맞게 GraphQL input을 개선하고, resolver에 ES 쿼리를 작성하여 조건에 맞는 콘텐츠를 제공할 수 있도록 구현함',
        boundary: ['BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL', 'JavaScript'],
        url: '',
      },
      {
        title: '블로그 (신규 서비스)',
        content:
          "사이트 내에서 다양한 컨텐츠를 제공하여 유저의 유입과 체류 시간을 높이기 위해 브랜드 스토리, 가이드, 인터뷰를 담고 있는 블로그 페이지를 구현했습니다.\n1. AWS-Elasticsearch 매핑시 블로그 타입같이 고정값을 가지는 필드는 'keyword' 타입으로 정의함.\n2.'keyword'로 정의된 필드는 'filter-term'으로 쿼리하여 검색 효율을 높임\n3. GraphQL 스키마를 블로그 타입별로 가져올 수 있게 개선함",
        boundary: ['FE'],
        tech: ['AWS-Elasticsearch', 'GraphQL', 'React', 'JavaScript'],
        url: 'https://heyjoyce.com/blog/list',
        preview: [PreBlog1, PreBlog2],
      },
      {
        title: '휴면계정 30일전 안내 및 당일 전환',
        content:
          '마지막 로그인 날짜로 부터 1년이 지난 유저를 대상으로 30일전 안내와 당일 휴면 계정 전환 프로세스를 구현했습니다.\n1. Sequelize(ORM for Postgres)를 이용하여 30일 전 안내 대상 유저와 당일 전환되는 유저 리스트를 생성함\n2. 리스트 별로 쿠폰 대량 자동 지급 또는 SaaS API를 이용하여 알림톡과 메일을 보내는 람다함수를 작성함\n3. AWS-EventBridge로 매일 자정에 휴면 계정 처리 람다함수를 호출함',
        boundary: ['FE', 'BE'],
        tech: ['AWS-EventBridge', 'AWS-Lambda', 'React', 'JavaScript', 'Sequelize', 'PostgreSQL'],
        url: '',
      },
      // {
      //   title: '아이디/비밀번호 찾기 개선 (VoC 이슈)',
      //   content:
      //     '등록된 계정을 찾고, 비밀번호를 재설정하는 과정을 단계별로 쪼개 API를 구현하여 유저 편의를 높이는 경험으로 개선했습니다.\n1. 기존 하나의 API로 작동하던 것을 confirm_user(해당 유저가 가입된 계정인지 확인하는 API)와 이후 작업들로 분리함\n2. 계정확인 후 이뤄지는 이후 작업에 보안 절차를 추가함',
      //   boundary: ['FE', 'BE'],
      //   tech: ['Django', 'React', 'JavaScript'],
      //   url: '',
      // },
      {
        title: '앱 개편',
        content:
          '앱 이용자 수를 늘리기 위해 사용성을 개선하고 앱에서만 사용할 수 있는 기능을 추가했습니다.\n1. 커뮤니티를 활성화하기 위해 앱 전용 프로필 페이지를 구현함',
        boundary: ['FE'],
        tech: ['React-Native', 'next.js', 'TypeScript'],
        url: '',
      },
      {
        title: '쿠폰 시스템 리뉴얼',
        content:
          '쿠폰의 사용성을 높여 비즈니스에 적극 활용하기 위해 기존의 쿠폰 테이블의 필드와 로직을 개선했습니다.\n1. 필드 간의 독립성을 높여 다양한 조합의 쿠폰을 생성할 수 있도록 함\n2. 난수-쿠폰 조합을 생성하는 시스템을 구현하여 쿠폰의 비즈니스 활용도를 높임',
        boundary: ['BE'],
        tech: ['AWS-Lambda', 'Sequelize', 'PostgreSQL', 'JavaScript', 'AWS-DynamoDB', 'GraphQL'],
        url: '',
      },
      {
        title: 'B2B 시스템 구현 (신규 서비스)',
        content:
          '기업 교육을 통해 새로운 수익 모델을 만들고 회원 수를 높이기 위해 B2B 시스템을 개발했습니다.\n1. 기업 별 링크를 통해 기업 회원으로 가입할 수 있음\n2. 유저의 stage 값에 따라 유저 경험을 다르게 줌',
        boundary: ['FE', 'BE'],
        tech: ['React', 'JavaScript', 'AWS-Lambda', 'AWS-DynamoDB', 'GraphQL'],
        url: '',
        preview: [B2BEnroll, B2BMain],
      },
    ],
  },
];

export { skills, introduce, jobs };
