import HJLogo from './img/hj_logo.png';
import PreBlog1 from './img/pre_blog_1.png';
import PreBlog2 from './img/pre_blog_2.png';
import PreCareer1 from './img/pre_career_1.png';
import PreCareer2 from './img/pre_career_2.png';
import PrePackage1 from './img/pre_package_1.png';
import PrePackage2 from './img/pre_package_2.png';

const skills = [
  'React',
  'JavaScript ',
  'Node.js',
  'Django',
  'Python',
  'GraphQL',
  'AWS',
  'SaaS',
  'PostgreSQL',
  'Responsive Web',
  'CSS3',
  'HTML5',
  'HTTP',
  'ReactAdmin',
];

const jobs = [
  {
    id: 1,
    logo: HJLogo,
    company: '플래너리',
    url: 'https://heyjoyce.com',
    date: '2020.07.07 ~ 2021.01.07 (인턴) / 2021.01.08 ~ 현재 (정규)',
    summary:
      '스타트업의 5인으로 이루어진 개발팀에서 풀스택 웹개발자로 근무하고 있습니다. 적은 인원으로 이루어진 개발팀이기에 크고 작은 프로젝트들을 주도적으로 진행하고있습니다. AWS를 이용하여 효율적으로 BE개발을 하고 React로 FE를 구현하며 빠른 delivery를 하고있습니다.',
    projects: [
      {
        title: '배너 자동화',
        content:
          '웹사이트 메인 페이지의 상단/하단 배너를 관리하는 adminAPI/clientAPI를 구현했습니다.\n[adminAPI] 관리자가 노출 조건(기간, 대상, 우선순위)을 설정하여 배너를 생성할 수 있음\n[clinetAPI] 웹사이트에서 조건에 맞는 배너를 가져와 화면에 표시함',
        boundary: ['BE'],
        tech: ['Django', 'Python', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: 'https://heyjoyce.com',
      },
      {
        title: '쿠폰 패키지 (신규 서비스)',
        content:
          '쿠폰 묶음 상품을 구매할 수 있는 화면과, 쿠폰 구매 후 생성되는 데이터를 구독하여 쿠폰을 자동 발급하는 시스템을 구현했습니다.\n1. order_event가 생기면 AWS-EventBridge에서 구독중인 규칙에 의해 couponCreat(AWS-Lambda 함수)가 호출됨\n2. 호출 된 함수에서 쿠폰 발급 후 coupon_created_event를 생성함\n3. toast API를 이용하여 유저에게 알림을 보냄',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Lambda', 'AWS-EventBridge', 'AWS-DynamoDB', 'SAAS', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: 'https://heyjoyce.com/package',
        preview: [PrePackage1, PrePackage2],
      },
      {
        title: '콘텐츠 검색 기능 (신규 서비스)',
        content:
          '커리어 상담 페이지에 카테고리로 필터링하는 기능과 키워드로 콘텐츠를 검색하는 기능을 구현했습니다.\n1. AWS-DynamoDB의 data를 AWS-Elasticsearch에 PUT하고 mapping&indexing\n2. GraphQL로 search 스키마를 정의하고 resolver에 ES 쿼리를 작성함\n3. client에서 검색 GraphQL 쿼리를 호출하여 원하는 결과 리스트를 받음',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: 'https://heyjoyce.com/feed/list',
        preview: [PreCareer1, PreCareer2],
      },
      {
        title: '디지털 콘텐츠 자동 등록',
        content:
          'teachable(SaaS)를 통해 제공되는 디지털 콘텐츠 자동 등록 프로세스를 구현했습니다.\n1. 콘텐츠 구매 후 생성되는 order_event를 AWS-EventBridge에서 구독하여 registerTeachable(AWS-Lambda 함수)를 호출함\n2. teachable API를 이용하여 유저 계정 생성 및 코스 등록함',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Lambda', 'AWS-DynamoDB', 'AWS-EventBridge', 'SaaS', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: '',
      },
      {
        title: '통합 검색 시스템 (신규 서비스)',
        content:
          '서비스하는 모든 콘텐츠에대한 통합 검색 기능 MVP를 AWS-Elasticsearch를 이용하여 구현했습니다.\n1. 다양한 타입의 콘텐츠를 추가할 수 있게 union type을 이용하여 확장성 있는 GraphQL schema를 정의함\n2. 30분마다 update된 postgreSQL의 data를 AWS-EventBridge로 구독하여 AWS-Elasticsearch에 싱크함\n3. GraphQL로 search 스키마를 정의하고 resolver에 ES 쿼리를 작성하여 검색 시스템을 구현함',
        boundary: ['BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL', 'AWS-Lambda', 'AWS-EventBridge'],
        url: 'https://heyjoyce.com',
      },
      {
        title: 'table 확장 설계 (feat. microservice)',
        content:
          'microservice 중 하나인 feed service를 확장 설계하여 여러 타입의 콘텐츠(ex. 블로그, 리뷰)를 제공할 수 있도록 설계했습니다.\n1. 모든 타입에서 사용하는 공통 필드와 개별 필들를 정의하고 CRUD를 재 정의함\n2. 각 요청에 맞게 GraphQL input을 수정하고, resolver에 ES 쿼리를 작성하여 조건에 맞는 콘텐츠를 제공할 수 있도록 구현함',
        boundary: ['BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL'],
        url: '',
      },
      {
        title: '블로그 (신규 서비스)',
        content:
          "브랜드 스토리, 가이드, 인터뷰를 담고 있는 블로그 페이지를 구현했습니다.\n1. AWS-Elasticsearch 매핑시 블로그 타입같이 고정값을 가지는 필드는 'keyword' 타입으로 정의함.\n2.'keyword'로 정의된 필드는 'filter-term'으로 쿼리하여 검색 효율을 높임\n3. GraphQL 스키마를 블로그 타입별로 가져올 수 있게 수정함",
        boundary: ['FE'],
        tech: ['AWS-Elasticsearch', 'GraphQL', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: 'https://heyjoyce.com/blog/list',
        preview: [PreBlog1, PreBlog2],
      },
      {
        title: '아이디/비밀번호 찾기 개선 (VoC 이슈)',
        content:
          '등록된 계정을 찾고, 비밀번호를 재설정하는 과정을 단계별로 쪼개 API를 구현하여 유저 편의를 높이는 경험으로 개선했습니다.\n1. 기존 하나의 API로 작동하던 것을 confirm_user(해당 유저가 가입된 계정인지 확인하는 API)와 이후 작업들로 분리함\n2. 계정확인 후 이뤄지는 이후 작업에 보안 절차를 추가함',
        boundary: ['FE', 'BE'],
        tech: ['Django', 'React', 'JavaScript', 'Node.js', 'CSS', 'SaaS'],
        url: '',
      },
    ],
  },
];

export { skills, jobs };
