import ProjectSushiStack from './img/스시스택.png';
import ProjectYolo from './img/욜로.png';
import ProjectParadise from './img/파라다이스.png';
import ProjectTagDocs from './img/태그독스.png';
import ProjectPoint from './img/포인트.png';
import ProjectTransport from './img/대중교통.png';

const gameProjects = [
  {
    id: 1,
    data: {
      thumbnail: ProjectSushiStack,
      title: '스시스택',
      desc: '떨어지는 접시와 초밥을 손님에따라 골라서 받아내는 모바일 캐쥬얼 게임',
      role: 'PM, 기획, 그래픽',
      techInfo: 'Unity,C#',
      link: 'https://github.com/Jo-Yewon/SushiStack',
    },
  },
  {
    id: 2,
    data: {
      thumbnail: ProjectYolo,
      title: '욜로프로젝트',
      desc: '4개의 미니 게임으로 이루어진 웹게임. 돈과 즐거움, 당신의 인생관은?',
      role: 'PM, 기획, 그래픽, 개발',
      techInfo: 'Phaser, JavaScripts',
      link: 'https://github.com/sojung127/YOLOproject',
    },
  },
  {
    id: 3,
    data: {
      thumbnail: ProjectParadise,
      title: '파라다이스 빌리지',
      desc: '마을에서 일어난 살인 사건의 범인을 찾는 추리 웹앱 게임',
      role: 'PM, 개발',
      techInfo: 'Unity, ASP.NET',
      link: 'https://github.com/jinee525/ParadiseVillageMobile',
    },
  },
];
const AIProjects = [
  {
    id: 1,
    data: {
      thumbnail: ProjectTagDocs,
      title: '태그독스',
      desc: '인공지능을 활용하여 추출한 문서의 형식, 내용 태그를 활용하여 편리한 검색 & 분류 를 제공하는 프로그램',
      role: '',
      techInfo: 'C#, Python, Anaconda',
      link: 'https://github.com/sojung127/TagDocx',
    },
  },
];
const UXProjects = [
  {
    id: 1,
    data: {
      thumbnail: ProjectPoint,
      title: '카카오톡 포인트 적립',
      desc: '카페/식당 포인트 적립 서비스를 기획하고 프로토타입을 제작 (개인 프로젝트)',
      techInfo: 'AdobeXD',
      link: 'https://xd.adobe.com/view/00425b86-7f18-4449-6762-14129515057c-7673/',
    },
  },
  {
    id: 2,
    data: {
      thumbnail: ProjectTransport,
      title: 'T-Bus',
      desc: '타임매니저 시스템을 중심으로 대중교통 앱을 기획하고 프로토타입을 제작 (팀 프로젝트)',
      techInfo: 'AdobeXD',
      link: 'https://xd.adobe.com/view/031c64a2-38d5-4cca-577c-cc82ca783f00-752d/',
    },
  },
];

const clubs = [
  {
    id: 1,
    data: {
      title: '벽화 봉사 동아리 (담이랑)',
      desc: '활동 설명',
    },
  },
  {
    id: 2,
    data: {
      title: '게임 개발 동아리 (KING)',
      desc: '활동 설명',
    },
  },
  {
    id: 3,
    data: {
      title: '그림/공예 소모임',
      desc: '활동 설명',
    },
  },
  {
    id: 4,
    data: {
      title: '클래식 기타 동아리 (예율회)',
      desc: '중앙 동아리에서 클래식 기타를 배움',
    },
  },
  {
    id: 5,
    data: {
      title: '동물보호 연합동아리 (애니메이트)',
      desc: '유기견 보호소 봉사 활동',
    },
  },
  {
    id: 6,
    data: {
      title: '오토데스크 자격증',
      desc: '오토데스크 수업을 수료하고 자격증 취득',
    },
  },
  {
    id: 7,
    data: {
      title: '부스터 2기',
      desc: '부스트코스 웹 서포터즈 활동',
    },
  },
  {
    id: 8,
    data: {
      title: '전공 수업 멘토링',
      desc: '2학년 전공 수업의 멘토로 활동',
    },
  },
  {
    id: 9,
    data: {
      title: 'KCC 2020 논문',
      desc: '졸업프로젝트를 KCC 2020 학회에 발표',
    },
  },
  {
    id: 10,
    data: {
      title: 'we-up 리더스 클럽',
      desc: '활동 설명',
    },
  },
];

export { gameProjects, AIProjects, UXProjects, clubs };
