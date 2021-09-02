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
      '스타트업의 5인으로 이루어진 개발팀에서 풀스택 웹개발자로 근무하고 있습니다. 적은 인원으로 이루어진 개발팀이기에 크고 작은 프로젝트들을 주도적으로 진행하고있습니다. AWS를 이용하여 효율적으로 BE개발을 하고 Reat로 FE MVP를 구현하며 빠른 delivery를 하고있습니다.',
    projects: [
      {
        title: '배너 자동화',
        content:
          '웹사이트 메인 페이지의 상단/하단 배너를 관리하는 adminAPI/clientAPI를 구현함. adminAPI: 관리자가 조건(기간, 대상 유저, 우선순위)을 설정하여 배너를 생성할 수 있음. clinetAPI: 웹사이트에서 조건에 맞는 배너를 가져와 화면에 표시함',
        boundary: ['BE'],
        tech: ['Django', 'Python', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: '',
      },
      {
        title: '쿠폰 패키지 (신규 서비스)',
        content:
          '쿠폰 묶음 상품을 구매할 수 있는 화면을 구현함, 쿠폰 구매 후 생성되는 데이터를 구독하여 쿠폰을 발급하는 시스템을 구현함 (AWS: Lambda, EventBridge 등). toast API를 이용하여 유저에게 알림을 보냄',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Lambda', 'AWS-EventBridge', 'AWS-DynamoDB', 'SAAS', 'React', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: 'https://heyjoyce.com/package',
        preview: [PrePackage1, PrePackage2],
      },
      {
        title: '콘텐츠 검색 기능 (신규 서비스)',
        content:
          '커리어 상담 페이지에 카테고리로 필터링하는 기능과 키워드로 콘텐츠를 검색하는 기능을 구현함. dynamoDB의 data를 AWS Elasticsearch를 이용하여 mapping&indexing하여 검색기능을 구현함.',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: 'https://heyjoyce.com/feed/list',
        preview: [PreCareer1, PreCareer2],
      },
      {
        title: '디지털 콘텐츠 자동 등록 및 안내',
        content:
          'teachable(SaaS)를 통해 제공되는 디지털 콘텐츠 자동 등록 프로세스를 구현함. 콘텐츠 구매 후 생성되는 데이터를 구동하여 teachable API를 이용하여 유저 계정 생성 및 코스 등록 과정을 자동화 함. 구매 후 웹사이트 유저 마이페이지와 알림톡으로 결과를 안내함',
        boundary: ['FE', 'BE'],
        tech: ['AWS-Lambda', 'AWS-DynamoDB', 'AWS-EventBridge', 'SaaS', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: '',
      },
      {
        title: '통합 검색 시스템 (신규 서비스)',
        content:
          '서비스하는 모든 콘텐츠에대한 통합 검색 기능 MVP를 AWS-Elasticsearch를 이용하여 구현함. 다양한 타입의 콘텐츠를 추가할 수 있게 확장성 있는 schema를 정의함. 30분마다 update된 postgreSQL의 data를 (AWS) 이벤트브릿지로 구독하여 AWS Elasticsearch에 싱크함. ES query로 데이터를 만들고, graphQL를 api로 사용하여 검색 시스템을 구현함',
        boundary: ['BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL', 'AWS-Lambda', 'AWS-EventBridge'],
        url: 'https://heyjoyce.com',
      },
      {
        title: 'table 확장 설계 (feat. microservice)',
        content:
          'microservice 중 하나인 feed services를 확장 설계하여 여러가지 콘텐츠를 제공할 수 있도록 함. 여러 타입의 콘텐츠에서 사용하는 필드와 개별 필들를 정하고 dynamoDB를 재 설계함. 각 요청에 맞게 graphQL를 수정하고, 각 resolver에 AWS-Elasticsearch의 쿼리 기능을 연결하여 적절한 콘텐츠를 제공할 수 있도록 구현함',
        boundary: ['BE'],
        tech: ['AWS-Elasticsearch', 'AWS-DynamoDB', 'GraphQL'],
        url: '',
      },
      {
        title: '블로그 (신규 서비스)',
        content:
          '브랜드 스토리, 가이드, 인터뷰를 담고 있는 블로그 페이지를 구현함. graphQL 쿼리를 이용하여 리스트와 각 데이터를 불러오고 세부 타입별로 나누어 탭을 구성함',
        boundary: ['FE'],
        tech: ['GraphQL', 'React', 'JavaScript', 'Node.js', 'CSS'],
        url: 'https://heyjoyce.com/blog/list',
        preview: [PreBlog1, PreBlog2],
      },
    ],
  },
];

export { skills, jobs };
