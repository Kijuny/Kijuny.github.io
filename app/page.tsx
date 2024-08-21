import Link from "next/link"
import { BsGithub, BsGlobe2, BsJournalText } from "react-icons/bs";

const data = {
  "info": {
    "name": "방기준",
    "job": "문제를 해결하는 백엔드 개발자",
    "email": "gkjpang@gmail.com",
    "image": "profile_image.jpeg",
    "github": "https://github.com/Kijuny",
    "blog": "",
    "website": "https://kijuny.github.io",
  },
  "aboutMe": {
    "zone1" : `
      안녕하세요, 저는 다양한 기술과 프로젝트를 다루며 <strong><i>문제 해결에 집중해온 개발자</i></strong> 입니다. 
      현재는 스타트업에서 CTO로 활동하며 새로운 경험을 쌓고 있습니다. <br/>
    <br/>
      저는 <strong>각 기술은 특정 문제를 해결하는 도구</strong>라고 생각합니다. 하나의 도구로는 모든 문제를 해결할 수 없기 때문에, 
      다양한 기술을 조합하거나 새로운 도구를 만들어 문제를 해결하는 것을 중요하게 여깁니다. <br/>
      이를 통해 사용자의 요구사항과 문제를 효과적으로 해결하는 것이 저의 개발 철학입니다.<br/>
    `,
    "zone2": `
      Java, Node.js, Python과 같은 프로그래밍 언어를 사용하며, AWS와 GCP를 비롯한 클라우드 플랫폼에서 안정적이고 효율적인 시스템을 구축해왔습니다. <br/>
      <strong>MSA</strong>, <strong>EDA</strong>, <strong>CQRS</strong> 등 고급 아키텍처 설계 및 구현에 능숙하며, 
      구글 인증, 카카오 인증, 결제 시스템 등 다양한 보안 및 인증 시스템을 성공적으로 구현한 경험이 있습니다. <br/>
      <br/>
      최근에는 <strong>AI/LLM</strong> 기술을 활용한 서비스 구현에 집중하고 있으며, 이를 통해 사용자의 요구를 이해하고, 문제를 해결하는 데 필요한 기술을 적재적소에 활용하고 있습니다.<br/>
    `
  },
  "experience": [
    {
      "company": "링클로브(LINKLOBE)",
      "description": "AI+DX 스타트업",
      "period": "2023.02 ~ ",
      "roles": ["Co-Founder", "CTO","설계","기술 연구","Back-End","DevOps"],
      "technologies": ["MSA", "EDA", "AI/LLM", "DX", "클라우드 네이티브"],
      "achievements": [
        "Edge Cloud 환경 기반의 다수 서비스 구현",
        "Multi-Agent를 활용한 대화형 교육 Chatbot B2B 서비스 구축",
        "내부용 spring-boot starter 및 node.js & react 용 다수 library 개발 및 운영 환경 구축",
        "spring boot, node.js, python(faskAPI) F/W 을 활용한 MSA + EDA 프로젝트 환경 구축",
        {
          "title": "다수의 IT 전시회 참가 with 협력사",
          "descriptions": [
            "코엑스 AI 대전 2024 참가 with Brycen KR",
            "킨텍스 보안 전시회 2024 참가 with cammsys",
            "일본 Edge Tech 2023+ 참가 with Brycen JP"
          ]
        }
      ]
    },
    {
      "company": "아이준",
      "description": "AIoT 전문기업",
      "period": "2022.04 ~ 2023.02",
      "roles": ["설계", "Back-End"],
      "technologies": ["MSA", "EDA", "AIoT", "DX"],
      "achievements": [
        "AIoT 기반 공압 데이터 활용 DX 인프라 구축 (정부과제)",
        "AIoT를 활용한 지능형 출입 관리 시스템 구축"
      ]
    },
    {
      "company": "엔씨아이티에스",
      "description": "엔씨소프트 자회사. 사내용 IT 서비스 구축 및 제공",
      "period": "2011.01 ~ 2022.04",
      "roles": ["Full-stack","TF Leader","설계","Back-End"],
      "technologies": ["ASP.Net", "Spring", "EDA"],
      "achievements": [
        "ITSM 서비스 구축 (게임사 최초 ISO/IEC 20000 인증 획득)",
        "전자결재 전체 설계 및 구축",
        "배포포털, 보안포털, ACL 관리 시스템 등 다수 프로젝트 개발 및 운영"
      ]
    },
    {
      "company": "디아이티",
      "description": "노루홀딩스(노루페인트) 계열사. IT SI/SM 전문",
      "period": "2007.03 ~ 2010.11",
      "roles": ["Full-stack", "인프라 관리"],
      "technologies": ["ASP", "MS-SQL", "IIS", "DNS운영", "Mail서버운영"],
      "achievements": [
        "노루홀딩스 및 기타 고객사 다수 서비스 개발 및 유지보수, 인프라 운영"
      ]
    },
    {
      "company": "인텔리와이어리스",
      "description": "KT 매직엔 커뮤니티 서비스 전담",
      "period": "2005.12 ~ 2007.01",
      "roles": ["Full-stack"],
      "technologies": ["ASP", "MS-SQL", "IIS"],
      "achievements": [
        "KT 매직엔 커뮤니티 개발 및 유지보수"
      ]
    }
  ],
  "majorProjects": [
    {
      "name": "SAZO 물류 추적 시스템",
      "period": "2024.07 [1개월]",
      "roles": ["서비스 설계", "백엔드", "데브옵스"],
      "technologies": ["Node.js", "Redis", "MariaDB", "Envoy", "Nginx", "FFmpeg", "구글 인증", "자체 구축 인스턴스 분산 처리 라이브러리", "MSA", "EDA 아키텍처", "GCP"],
      "achievements": [
        "확장성 있는 실시간 물류 추적 시스템 구현",
        "데이터 처리 효율성 향상",
        "MSA를 이용한 이커머스와 물류의 분리된 환경 구성"
      ]
    },
    {
      "name": "AIHADA",
      "description": "LLM 캐릭터 대화 기반 다중 도메인 멀티에이전트 서비스",
      "period": "2024.03 ~ 진행 중",
      "roles": ["설계", "연구", "Back-End", "DevOps"],
      "technologies": ["Node.js", "Python (FastAPI, gRPC, WebSocket)", "MariaDB", "Envoy", "LLM", "Langchain", "Langgraph(Multi-Agent)", "RAG", "MSA", "EDA 아키텍처", "토스페이먼츠", "카카오 인증 및 알림톡 연동", "AWS"],
      "achievements": [
        "Multi-Agent와 RAG를 활용한 다양한 도메인에 대응 가능한 대화형 서비스 설계 및 구축",
        "다수 기능에 대한 Front/Back-End 라이브러리 구축"
      ]
    },
    {
      "name": "패밀리타운",
      "description": "샌드버드 기반 채팅 어플 및 웹 서비스",
      "period": "2023.02 ~ 2023.08 [6개월]",
      "roles": ["설계", "고객사 프레임워크 구현", "백엔드", "데브옵스"],
      "technologies": ["Spring Boot (커스텀 스타터 구성)", "ELS", "Kafka", "MariaDB(RDS)", "AWS ECS", "MSA", "EDA 아키텍처", "Kafka Stream", "AWS"],
      "achievements": [
        "레거시 서비스 분석 후 안전하게 MSA, EDA 도입",
        "Event-Bus, 스케쥴러, 인증, 강업, 파일 등 다수 서비스 구현"
      ]
    },
    {
      "name": "지능형 출입 관리 시스템",
      "description": "AIoT를 활용한 지능형 출입 관리 시스템 구축",
      "period": "2022.10 ~ 2022.12 [3개월]",
      "roles": ["설계", "백엔드"],
      "technologies": ["Spring Boot", "MariaDB", "Kafka", "Redis", "Envoy", "FFmpeg", "MSA", "EDA"],
      "achievements": [
        "서버실 출입문 CCTV를 활용한 AI 기반 출입 및 인원 정보 추적 출입 관리 시스템 구축"
      ]
    },
    {
      "name": "공압 데이터 DX 인프라 구축",
      "description": "AIoT 기반 공압 데이터 활용 DX 인프라 구축 (정부과제)",
      "period": "2022.03 ~ 2022.12 [10개월]",
      "roles": ["설계", "백엔드"],
      "technologies": ["On Device AI", "Node.js", "SQLite", "MariaDB", "FFmpeg", "Modbus", "MQTT", "ELS", "Redis", "Envoy", "Docker", "MSA", "EDA", "AWS"],
      "achievements": [
        "공압/전력, 작업자 손동작, 완제품 영상을 활용한 Edge (각종 센서 및 On Device AI) > Cloud 형태의 DX 인프라 구축"
      ]
    },
    {
      "name": "ITSM 리뉴얼",
      "description": "ITIL 기반 엔씨소프트 사 내부용 ITSM 구축",
      "period": "2019.02 ~ 2022.02 [3년]",
      "roles": ["팀장", "설계", "Back-End"],
      "technologies": ["Spring Boot", "RabbitMQ", "Redis", "Firebase", "MariaDB", "MSSQL", "GraphQL", "ELS", "EDA", "CQRS", "모바일 환경 대응 (푸시, 강제 업데이트 등)", "ABAC", "ITIL 표준 준수"],
      "achievements": [
        "동적 UI + Workflow 기반 처리 구조 + ABAC 권한 체계의 도입",
        "다양한 요구사항에 즉각적인 서비스 반영",
        "웹 외 모바일 환경에서도 동일한 사용자 경험 제공"
      ]
    },
    {
      "name": "엔씨소프트 전자결재",
      "description": "기존 전자결재 대신 웹 기반 전자결재 구축",
      "period": "2017.02 ~ 2019.01 [2년]",
      "roles": ["프로젝트 리딩", "설계", "Full-Stack", "운영"],
      "technologies": ["Spring Boot", "MariaDB", "jQuery", "Redis"],
      "achievements": [
        "기존 ActiveX 어플리케이션 환경에서 Web & Mobile 환경으로 성공적인 전환",
        "다수 사내 시스템과 API 연동 환경 구축"
      ]
    },
    {
      "name": "레거시 ITSM 개발 및 운영",
      "description": "엔씨소프트 사 내부용 ITSM 구축",
      "period": "2012.02 ~ 2017.01 [5년]",
      "roles": ["프로젝트 리더", "설계", "풀스택", "운영"],
      "technologies": ["MS-SQL", "ASP.NET"],
      "achievements": [
        "이전에 사용하던 해외 ITSM 서비스인 Maximo를 내재화",
        "지속적인 개발과 운영 업무",
        "ISO/IEC 20000 표준 라이센스 획득"
      ]
    },
    {
      "name": "웹 서비스 배포 포탈, 정보 보안 포탈, ACL 통합 관리 등",
      "description": "엔씨소프트 사 내부용 다수 서비스 구축",
      "period": "2012.02 ~ 2017.01 [5년]",
      "roles": ["프로젝트 리더", "설계", "풀스택", "운영"],
      "technologies": ["MS-SQL", "ASP.NET"],
      "achievements": [
        "다수 서비스에 대하여 성공적인 구축 및 운영"
      ]
    },
    {
      "name": "그 이전",
      "description": "ASP 기반 다수 웹 서비스 개발",
      "period": "2006.01 ~ 2012.01 [6년]",
      "roles": ["Full-Stack 개발자"],
      "technologies": ["ASP", "ASP.NET"],
      "achievements": []
    }
  ],
  "abilities": {
    "aiLlm": {
      "title": "AI/LLM",
      "descriptions": [
        {
          "title": "Langchain",
          "descriptions": [
            "LLM을 활용한 자연어 처리를 위하여 사용하는 라이브러리입니다. 다양한 AI와 툴, 기능들을 제공하며, 계속해서 업데이트됩니다.",
            "또한, Langsmith 외에는 무료로 제공되어 감사하게 사용하고 있습니다. js보다는 python의 라이브러리 출시나 업데이트가 월등히 빠릅니다.",
            "(그래서 LLM 관련 서비스는 python으로 구축하였습니다.)"
          ]
        },
        {
          "title": "Langgraph",
          "descriptions": [
            "Multi-Agent를 구축하기 위해 사용하는 프레임워크입니다. langchain 및 workflow에 대한 구조적인 개념을 가진 상태라면 쉽게 사용할 수 있습니다.",
            "Multi-Agent는 LLM 기반의 AI 서비스를 제공할 예정이라면 필수 스택이 될 것으로 예상합니다."
          ]
        },
        {
          "title": "RAG",
          "descriptions": [
            "기존의 키워드 검색과는 색다른 검색 방식입니다. 다양한 검색 방법(연관성, 최신 정보, 요약 기반 등)이 존재하며, 데이터를 필요로 하는 도메인에 따라 설계와 구축이 달라질 필요가 있습니다.",
            "위 방법에 따라 Vectorize 하는 방법도 다양하게 존재하며, 그에 따른 인프라 서비스에 대한 고민이 필요합니다.",
            "저는 기존에 사용하던 검색 엔진인 ELS를 선택하여 다양한 조건 및 키워드 검색과 RAG를 동시에 충족시켰습니다."
          ]
        }
      ]
    },
    "architecture": {
      "title": "Architecture",
      "descriptions": [
        {
          "title": "MSA",
          "descriptions": [
            "최근 신규 구축하는 서비스의 경우 MSA를 기본 구성으로 구축하고 있습니다. 레거시에서 전환할 때는 기존 도메인 분석을 우선하고, 순차적인 분리를 제안하며 이를 위한 환경 구성을 가장 먼저 수행합니다.",
            "ITSM(ITIL4)의 경험을 토대로 모든 서비스는 지속적으로 개선되며 발전해야 한다고 생각합니다. 그래서 대형 서비스가 아니더라도 Aggregate들을 분리해 얻을 수 있는 안전성과 확장성을 위해 MSA를 자주 사용합니다."
          ]
        },
        {
          "title": "EDA",
          "descriptions": [
            "MSA를 선택하게 되면 자연스럽게 따라오는 아키텍처입니다. 물론 모놀리틱 서비스에도 도입되면 많은 장점을 가집니다.",
            "이벤트 기반으로 로직을 처리하면 각 기능이 고유한 역할에 집중할 수 있고, 이벤트를 통해 로직의 확장성을 확보할 수 있습니다."
          ]
        },
        {
          "title": "CQRS",
          "descriptions": [
            "서비스의 기능과 다양한 데이터가 많아질수록 이에 대한 요구는 더 많이 발생합니다. 모든 서비스나 콘텐츠에 필요하지 않지만, 많은 사용자가 자주 사용하는 곳에 도입하면 큰 효과를 볼 수 있습니다.",
            "CRUD에서 R이 가장 많은 트랜잭션을 발생시키므로, 이것만으로도 필요한 이유가 될 수 있습니다."
          ]
        }
      ]
    },
    "dx": {
      "title": "DX",
      "descriptions": [
        {
          "title": "End-Edge to Cloud",
          "descriptions": [
            "On device AI 기술이 발전함에 따라 Edge Device와 Cloud 양쪽의 필요성이 커지고, 그에 따른 역할의 분리가 명확해질 필요가 있습니다.",
            "Sensor 혹은 End-Edge에서 발생하는 많은 센싱/추론 데이터를 모두 Cloud에 전송하게 되면 부하와 비용이 발생합니다.",
            "이를 End-Edge / Middle-Edge에 일부 역할을 위임하고, 정제된 유효한(의미 있는) 데이터를 생성하여 Cloud에 전송하는 구조를 가져야 합니다. 또한, 이를 역으로 관리할 수 있는 파이프라인도 동시에 필요하게 됩니다.",
            "이를 위한 KubeEdge, AWS GreenGrass 등 다양한 프로젝트나 서비스가 출시되고 있습니다.",
            "저의 경우, 위 프로젝트나 서비스에 구축하려던 도메인에 부합되지 않는 부분이 있어 직접 구축을 하였습니다."
          ]
        },
        {
          "title": "Edge Side 구성",
          "descriptions": [
            "Device Manager: 단일 디바이스의 관리를 목적으로 합니다. Cloud Side와의 연결 및 상태, 제공하는 기능에 대한 창구가 됩니다.",
            "Container Controller: 모든 어플리케이션을 Docker Container에서 구동되도록 하였으며, 이를 원격에서 제어할 수 있도록 했습니다.",
            "Remote Service-Bus: Cloud Side에서 Edge에서 제공하는 웹 기반 어플리케이션에 직접 연결할 수 있는 기능을 구현하였습니다. Edge가 존재하는 네트워크 망의 포트포워딩 없이 연결이 가능합니다."
          ]
        },
        {
          "title": "Cloud Side 구성",
          "descriptions": [
            "Device Connect Manager: Edge 측으로부터의 연결 및 모니터링을 위한 Data Flow, 제어를 위한 Control Flow를 담당합니다.",
            "ITSM: 장애 관리 및 변경 관리 등 DX 환경의 이상 상황에 대한 대응 및 배포/운영을 담당합니다."
          ]
        }
      ]
    },
    "itsm": {
      "title": "ITSM",
      "descriptions": [
        {
          "title": "ITILv3 to ITIL4 전환",
          "descriptions": [
            "ITILv3은 IT 서비스의 Lifecycle에 초점을 맞추고 있습니다. 예를 들어, 기획 > 개발 > 테스트 > 배포 > 장애 > 문제 대응 등 'IT 서비스의 관리'에 초점이 있습니다.",
            "ERP, PMS, 모니터링 등 다양한 IT 서비스들이 늘어나면서, 여러 IT 서비스와 연계하여 더 큰 가치를 창출하는 방향으로 전환된 것이 ITIL4입니다.",
            "이를 위해 린(Lean), 애자일(Agile), 데브옵스(DevOps) 방법론을 도입하고, 고객 중심의 지속적인 개선이 가능한 서비스를 만들게 되었습니다.",
            "아래는 ITIL4로 전환하며 생긴 많은 변화 중 제가 가장 가치있게 생각하는 3가지를 뽑았습니다."
          ]
        },
        {
          "title": "워크플로우 구조",
          "descriptions": [
            "ITSM은 다른 IT서비스와는 다르게, 특정 작업을 처리하기 위한 서비스가 아닙니다.",
            "기업 내 모든 조직에서 사용하고, 그만큼 다양한 고객의 니즈가 발생할 수 밖에 없는 구조입니다. 엔씨소프트의 경우 부서만 700개가 넘었고, 각 부서에서 수행되는 작업만해도 몇개씩은 있었습니다.",
            "그래서 관계도 형태로 동적으로 생성 가능한 워크플로우 시스템을 만들었고, 그 안에 다양한 ABAC의 권한 체계와 동적 UI가 매핑되는 구조로 구현했었습니다.",
            "위와 같이 구현할 경우, 구현의 복잡도는 올라가지만, 고객의 다양한 요구사항을 빠르게 대응할 수 있었습니다. 예들 들어 기존 프로세스 변경 개발을 하게 되면 최소 몇주에서 몇개월이 걸리던 요청들이 단 몇 분만에 해결이 되었으니까요."
          ]
        },
        {
          "title": "ABAC (Attribute-Based Access Control) 방법론",
          "descriptions": [
            "워크플로우만으로 다양하고 빠른 고객 요청을 대응 할 수 없습니다. ITSM에서 가장 중요한 요소 중 하나인 권한 체계가 빠르게 대응 가능해야 하기 때문입니다.",
            "ABAC는 ITIL4로 전환을 하는 과정에 제가 주장하여 도입이 된 형태로, 대표적으로 AWS의 IAM이 ABAC 방법론으로 구축되어 있습니다.",
            "단순하게 설명하자면, 권한의 관리를 일반적으로 사용되는 Role 기반 (RBAC)이 아니라, 개인이 가진 속성(개인, 부서, DL, 직급, 직책 등)에 권한을 부여하고, 이를 관리하는 형태였습니다.",
            "이렇게 ABAC를 하는 경우, 각 부서의 요구사항에 따라 Role이 계속 만들어지지도 않고, 실무에서 필요로 하는 부서나 DL 단위로 권한을 제어하게되어, 관리부서의 부담을 대폭 줄일 수 있었습니다."
          ]
        },
        {
          "title": "동적 UI 기능",
          "descriptions": [
            "워크플로우와 ABAC만으로는 사용자의 모든 요청을 만족 시킬 수 없습니다. 바로 워크플로우의 각 스탭(단계)와 사용자가 보유한 권한에 따른 다른 UI가 제공되어야 의미가 있기 때문입니다.",
            "이 부분은 프론트엔드와 백엔드의 협업이 매우 중요합니다. 동적 UI의 기능은 모두 사전에 정의된 json 형태의 spec을 확정해야하며,",
            "백엔드는 현재 티켓의 정보와 접속자의 정보를 토대로 계산하여 보여줘야 하는 json을 동적으로 생성해야 하기 때문입니다.",
            "그리고, 프론트엔드는 모든 경우에 대한 spec에 대하여 계속해서 변경이 가능하도록 미들웨어로 구성된 UI 렌더러를 따로 구현을 해야 했습니다.",
            "여기에, 모바일 환경에 대한 대응도 해야 했고, 자연스러운 모바일 UI 제공을 위해 네이티브 앱 느낌이 들게 할 필요가 있어, 프론트를 React + React Native로 하고, 관련 Spec의 설정을 관리자가 직접 설정할 수 있는 기능까지 만들었습니다."
          ]
        }
      ]
    },
    "전자결재": {
      "title": "전자결재",
      "descriptions": [
        {
          "title": "웹 기반 전자결재 환경으로의 변화",
          "descriptions": [
            "모바일 환경이 당연한 환경이 되기 전, 많은 곳에서 사용되던 전자결재는 응용프로그램 혹은 Active X 환경에서 제공되는 경우가 많았습니다.",
            "회사 내부에서 모바일이 당연시되고, 플랫폼에 영향 없이 어디서든 기안을 올리고 승인할 수 있는 것은 당연하게 취급받는 시점이 왔었습니다.",
            "제가 전자결재를 개발할 당시가 그 시점이었고, 웹 + 하이브리드 앱을 통해서 웹이 되는곳 어디든, 그리고 모바일에서 기안과 승인을 모두 할 수 있는 서비스를 풀스택의 프로젝트 리더로 수행하였습니다.",
            "NCSOFT의 경우, 사내에서 사용되던 전자결재는 커스터마이징을 필요로 하는 요구사항이 상당히 많았습니다. 그래서 상용제품이 아닌 직접 구축을 하게 되었습니다.",
            "아래는 이 전자결재 프로젝트에서 가치있는 특징 2가지를 뽑아보았습니다."
          ]
        },
        {
          "title": "데이터와 기안/승인자 기준 동적 결재선",
          "descriptions": [
            "많은 기안 문서들이 각각의 목적과 정책을 가지고 만들어집니다. 어떤 기안문서는 팀장 전결로, 어떤 기안문서는 본인 전결이되, 팀장이 공유를 받는 것으로, 또 어떤 기안문서는 특정 부서의 검토(승인)이 통과되야 하기도…",
            "이런 다양한 요구사항 때문에, 모든 기안 템플릿을 만들 때, 조건을 동적으로 작성할 수 있는 결재선을 구현하였습니다. 심지어, 각 조직 등급/직책이나 중복 결재선 등 다양한 상황에 대한 설계가 포함된 구조였습니다."
          ]
        },
        {
          "title": "단일 서비스가 아닌 연동으로의 초점",
          "descriptions": [
            "업무를 기준으로 볼 때, 많은 결재가 단순히 승인을 요청하고 받는 것에서 끝나지 않습니다.",
            "어떤 곳은 승인이 된 후 자동으로 담당부서의 업무시스템에 등록이 되어야 하기도하고, ERP와 연동이 되어야 하기도 했습니다.",
            "이를위하여 각 단계별 이벤트가 트리거되었을 때, 후속처리를 위한 연동 설정 부분을 만들고, OpenAPI와 WebHook 기능을 구현하였습니다."
          ]
        }
      ]
    }
  },
  "skills": {
    "Development": {
      "languages": {
        "title": "개발 언어",
        "skills": ["Java", "Javascript", "Python", "ASP.NET"]
      },
      "frameworksAndLibraries": {
        "title": "프레임워크 및 라이브러리",
        "skills": ["Spring Boot", "FastAPI", "Node.js", "Langchain", "Langgraph"]
      },
      "apiAndCommunication": {
        "title": "API 및 통신",
        "skills": ["RESTful", "GraphQL", "gRPC", "WebSocket", "SSE"]
      },
      "databases": {
        "title": "데이터베이스",
        "skills": ["MariaDB", "MS-SQL", "SQLite", "Redis"]
      },
      "messagingAndStreaming": {
        "title": "메시징 및 스트리밍",
        "skills": ["Kafka", "RabbitMQ", "Redis"]
      },
      "searchEngines": {
        "title": "검색 엔진",
        "skills": ["Elasticsearch"]
      },
      "cloudAndInfrastructure": {
        "title": "클라우드 및 인프라",
        "skills": ["AWS", "GCP", "Linux", "Docker"]
      },
      "paymentSystems": {
        "title": "결제 시스템",
        "skills": ["토스페이먼츠"]
      },
      "securityAndAuthentication": {
        "title": "보안 및 인증",
        "skills": ["구글 인증", "카카오 인증", "OAuth인증", "Ldap 인증"]
      }
    },
    "Design": {
      "architectures": {
        "title": "아키텍처",
        "skills": ["Microservices Architecture (MSA)", "Event-Driven Architecture (EDA)", "CQRS"]
      },
      "methodologies": {
        "title": "방법론",
        "skills": ["Agile", "DevOps", "Lean", "ITIL", "ABAC"]
      }
    },
    "DevOps": {
      "tools": {
        "title": "도구",
        "skills": ["Jenkins (CI/CD 파이프라인)", "AWS", "GCP"]
      }
    },
    "Collaboration": {
      "tools": {
        "title": "협업 도구",
        "skills": ["Git", "JIRA", "Slack", "Zoom", "MS Teams"]
      }
    }
  }
}

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-5xl min-w-[320px] bg-white p-4">
          {/* Header Area */}
          <div className="mt-12 flex justify-between items-center">
            <div className="text-2xl sm:text-3xl font-bold">
              <div>{data.info.name}</div>
              <div className="text-sm sm:text-base italic text-[#c3c3c3]">
                {data.info.job}
              </div>
            </div>
            <div className="">
              <div className="gap-4 flex justify-end ">
                {data.info.github && (
                    <div className="text-2xl sm:text-3xl cursor-pointer">
                      <Link href={data.info.github} target="_blank">
                        <BsGithub />
                      </Link>
                    </div>
                )}
                {data.info.blog && (
                    <div className="text-2xl sm:text-3xl cursor-pointer">
                      <Link href={data.info.blog} target="_blank">
                        <BsJournalText />
                      </Link>
                    </div>
                )}
                {data.info.website && (
                    <div className="text-2xl sm:text-3xl cursor-pointer">
                      <Link href={data.info.website} target="_blank">
                        <BsGlobe2 />
                      </Link>
                    </div>
                )}
              </div>
              <div className="mt-2">
                Email:&nbsp;
                <span className="text-sm sm:text-base font-bold">
                {data.info.email}
              </span>
              </div>
            </div>
          </div>
          {/* About Me Area */}
          <div className="mt-8 sm:mt-20">
            <div className="text-3xl sm:text-4xl mb-2">Introduce.</div>
            <div className="w-full border border-t border-solid" />
            <div className="text-base">
              <div className="mt-4 gap-4 flex items-center">
                <div className="hidden sm:block rounded-3xl overflow-hidden min-w-24 max-w-32">
                  <img className="w-full h-full object-cover" src={data.info.image} alt={data.info.name} />
                </div>
                <div>
                  <p className="mt-4" dangerouslySetInnerHTML={{ __html: data.aboutMe.zone1 }} />
                </div>
              </div>
              <div className="mt-8">
                <p className="mt-4" dangerouslySetInnerHTML={{ __html: data.aboutMe.zone2 }} />
              </div>
            </div>
          </div>
          {/* Experience Area */}
          <div className="mt-8 sm:mt-20">
            <div className="text-3xl sm:text-4xl mb-2">Experience.</div>
            <div className="w-full border border-t border-solid" />
            <div className="text-base">
              {data.experience.map((exp, index) => (
                  <div
                      key={index}
                      className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12"
                  >
                    <div className="w-full sm:w-1/3 text-left">
                      <div className="text-lg">{exp.period}</div>
                      <div className="flex gap-1 pl-2 mt-1 flex-wrap">
                        {exp.roles.map((role, idx) => (
                            <span key={idx} className="xs-badge">
                        {role}
                      </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full sm:w-2/3 text-left">
                      <div className="text-2xl">{exp.company}</div>
                      <div className="mt-2">{exp.description}</div>
                      <ul className="mt-2 list-disc pl-5">
                        {exp.achievements.map((ach, idx) => (
                            <li key={idx}>{
                              (typeof ach === 'string') ? ach : (
                                  <div>
                                    <span>{ach.title}</span>
                                    <ul>
                                      {ach.descriptions.map((sub, i) => (
                                          <li key={(idx + '_' + i)}>{sub}</li>
                                      ))}
                                    </ul>
                                  </div>
                              )
                            }</li>
                        ))}
                      </ul>
                      <div className="font-semibold mt-2"> • Skill Keywords</div>
                      <div className="flex gap-2 flex-wrap">
                        {exp.technologies.map((skill, idx) => (
                            <div key={idx} className="skills">
                              {skill}
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          {/* Major Projects Area */}
          <div className="mt-8 sm:mt-20">
            <div className="text-3xl sm:text-4xl mb-2">Major Projects.</div>
            <div className="w-full border border-t border-solid" />
            <div className="text-base">
              {data.majorProjects.map((project, index) => (
                  <div key={index} className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12">
                    <div className="w-full sm:w-1/3 text-left">
                      <div className="text-lg">{project.period}</div>
                      <div className="flex gap-1 pl-2 mt-1 flex-wrap">
                        {project.roles.map((role, idx) => (
                            <span key={idx} className="xs-badge">
                        {role}
                      </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full sm:w-2/3 text-left">
                      <div className="text-2xl">{project.name}</div>
                      <div className="mt-2">{project.description}</div>
                      <ul className="mt-2 list-disc pl-5">
                        {project.achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                        ))}
                      </ul>
                      <div className="font-semibold mt-2"> • Technologies</div>
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.map((tech, idx) => (
                            <div key={idx} className="skills">
                              {tech}
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          {/* Abilities Area */}
          <div className="mt-8 sm:mt-20">
            <div className="text-3xl sm:text-4xl mb-2">Abilities.</div>
            <div className="w-full border border-t border-solid" />
            <div className="text-base">
              {Object.values(data.abilities).map((ability, index) => (
                  <div key={index} className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12">
                    <div className="w-full sm:w-1/6 text-left">
                      <div className="text-lg">{ability.title}</div>
                    </div>
                    <div className="w-full sm:w-5/6 text-left">
                      {ability.descriptions.map((desc, idx) => (
                          <div key={idx} className="mb-4">
                            <div className="text-2xl">{desc.title}</div>
                            <ul className="mt-2 list-disc pl-5">
                              {desc.descriptions.map((description, i) => (
                                  <li key={i}>{description}</li>
                              ))}
                            </ul>
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
          {/* Skills Area */}
          <div className="mt-8 sm:mt-20">
            <div className="text-3xl sm:text-4xl mb-2">Skills.</div>
            <div className="w-full border border-t border-solid" />
            <div className="text-base">
              {Object.entries(data.skills).map(([category, skillCategory], index) => (
                  <div key={index} className="mt-4 sm:mt-8">
                    {(
                        <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12">
                          <div className="w-full sm:w-1/5 text-left">
                            <div className="text-lg">{category}</div>
                          </div>
                          <div className="w-full sm:w-4/5 text-left">
                            {Object.entries(skillCategory).map(([type, skillSet], idx) => (
                                type !== "title" && (
                                    <div key={idx} className="mb-2">
                                      <div className="font-semibold"> • {skillSet.title}</div>
                                      <div className="flex gap-2 flex-wrap">
                                        {skillSet.skills.map((skill, s_idx) => (
                                            <div key={s_idx} className="skills">
                                              {skill}
                                            </div>
                                        ))}
                                      </div>
                                    </div>
                                )
                            ))}
                          </div>
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </main>
  );
}

