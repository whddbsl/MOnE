import { useTranslation } from "next-i18next";

interface ProjectDetail {
    projectIndex: number;
    title: string;
    icon: string;
    subTitle?: string;
    description: string;
    subDescription?: string;
    genre: string;
    target: string;
    format: string;
    hasRichContent?: boolean;
}

export const useProjectDetails = () => {
    const { t } = useTranslation("common");

    const projectDetails: ProjectDetail[] = [
        {
            projectIndex: 0,
            title: "슈퍼클락",
            icon: "/images/icons/Superclock_icon.png",
            description:
                "어느 날, 유진은 이상한 세상을 마주했다.\n 가로등 대신 횃불이 서 있고, 자동차는 헤드라이트 대신 촛불을 달고 달리고 있었다.\n 헐... 전구가 사라졌어.\n 알고 보니 누군가가 과거를 건드렸다. 역사가 뒤틀리자 현재가 엉망이 된 것.\n 그리고... 유진은 문방구에서 시간여행하는 우주경찰 '아담스'를 만난다.\n 문재해결? 어른은 못 타는 타임머신.\n 결국 유진과 친구들, 일명 '리틀어벤져스'가\n 전구를 지키고, 공룡을 타고, 모나리자를 구하러 간다.\n 초딩 4인방이 세계사를 바로잡는 히어로 타임 어드벤처!",
            subDescription: "'출동하라! SuperClock'",
            genre: "히스토리 액션 어드벤처",
            target: "6 ~ 10세",
            format: "11분 x 26편 / 3D CGI_2D FX",
            hasRichContent: false,
        },
        {
            projectIndex: 1,
            title: "푸즈",
            icon: "/images/icons/Fuzz_icon.png",
            subTitle: "세상에 예쁜 건 다 가라. 센터는 푸즈다.",
            description:
                " 털은 삐죽삐죽, 눈은 항상 불만 가득. 자기는 못생겼다고 믿는 고양이, 푸즈.\n 질투는 기본, 귀여운척은 실패, 셀프 염색은 대참사.\n 그런데 이상하게, 푸즈를 보고 있으면 자꾸 웃음이 나고,\n 나도 '이래도 괜찮나?' 싶은 용기가 생긴다.\n 못생긴 것도 개성이고, 자기혐오도 하나의 연기고, 엉망이어도 당당하면...",
            subDescription:
                "그게 바로 푸즈 스타일.\n '예쁨? 몰라. 못생김도 콘텐츠 되는 세상이야.'",
            genre: "코미디 / 셀프 디스 힐링 시트콤 / 캐릭터 슬랩스틱",
            target: "13 ~ 29세 (Z세대부터 MZ세대까지)\n 자기비하 + 유머 + 공감에 열광하는 층",
            format: "3 ~ 5분 x 30편 / 2D or 3D 숏폼\n YouTube Shorts, TikTok, Instagram Reels 최적화",
            hasRichContent: false,
        },
        {
            projectIndex: 2,
            title: "오퍼튜니티",
            icon: "/images/icons/Opportunity_icon.png",
            subTitle: "별들 사이의 로맨스,\n 기계의 가슴이 뛰기 시작할 때.",
            description:
                "화성에 홀로 남겨진 탐사 로봇 '오퍼튜니티'.\n 죽음을 기다리던 어느 날, 지구로부터 노래 한 곡이 도착한다.\n 이름 모를 방송, 얼굴 없는 소녀. 그녀는 '루나'라는 이름으로 노래를 부르고,\n 그 노래는 화성의 고요한 표면 위에 닿는다.\n 그런데, 그 로봇 안에는 어릴 적 그녀가 사랑했던 한 소년의 기억이 숨겨져 있다.\n '나, 진짜 사람이었던 걸까?\n 기계와 인간, 진실과 조작, 첫사랑과 우주 이주의 거대한 음모.\n 그리고 지금, 우주로 흩어졌던 꿈들이 다시 하나로 모이기 시작한다.",
            subDescription:
                "오퍼튜니티 - 화성을 넘어,\n 기억과 사랑을 향한 여정",
            genre: "SF / 가족영화 / 감성 로맨스 / 우주 어드벤처",
            target: "전 연령 (특히 가족 관객, Z세대 ~ M세대 감성 소비층)",
            format: "극장용 장편 3D 애니메이션 / 러닝 타임 120분",
            hasRichContent: false,
        },
        {
            projectIndex: 3,
            title: "핍팝포피아",
            icon: "/images/icons/Pippoppopia_icon.png",
            subTitle: "중2병, 초능력, 그리고... 아이돌 오디션?",
            description:
                "아이돌 그룹 <Seven Spirit>의 광팬인 5명의 중학교 2학년.\n 어느날 길고양이와 수상한 액세서리 상자를 주운 그날부터,\n 그녀들의 인생은 예측불허로 뒤집힌다.\n 하늘을 나는 목걸이, 순간이동 발찌, 5분 후 미래가 보이는 머리띠,\n 엄청난 파워가 생기는 팔찌, 동물과 대화할 수 있는 귀걸이,\n 그리고 귀차니즘 고양이 히어로 '복실이'.\n 지구를 구하는 건 관심 없고, 사랑, 우정, 질투, 연예인 덕질에 진심인 그녀들.\n 그런데... 아이돌 오디션 참가까지?",
            subDescription:
                "'우리가 트렌드다. 이 세계는 이제 PipPopPoPiA가 지킨다!'",
            genre: "히어로 x 아이돌 x 코미디 x 성장 드라마",
            target: "9 ~ 13세",
            format: "11분 x 26편 / 3D CGI",
            hasRichContent: false,
        },
        {
            projectIndex: 4,
            title: "푸드레인저스",
            icon: "/images/icons/FoodRangers_icon.png",
            subTitle: "요리는 아이들의 무기다.",
            description:
                "아이들은 요리로 세상을 구합니다.\n 건강, 맛, 팀워크, 상상력이 버무려진 액션 요리 어드벤처!\n 정크푸드 악당에 맞서, 진짜 맛을 지키는 푸드레인저스의 전쟁이 시작된다.",
            genre: "코믹, 쿠킹, 어드벤처",
            target: "4 ~ 6세",
            format: "11분 x 26편 / 3D CGI_2D FX",
            hasRichContent: false,
        },
        {
            projectIndex: 5,
            title: "파우와우",
            icon: "/images/icons/Pawaw_icon.png",
            subTitle:
                "'우리 애기, 유치원 가면 사회성 배운다더니... 왠지 더 세졌어요?'",
            description: `똥글 유치원은 다릅니다.\n 건식 vs 습식 급식 전쟁, 수상한 약물 거래,\n 몰래 찍은 틱톡 댄스, 그리고 은밀한 랩 배틀까지.\n 겉은 천사, 속은 악마.\n 귀여운 얼굴에 한 성격 하는 댕냥이들이\n 하루하루 대환장 드라마를 찍는 곳.\n <img src="/images/icons/cat.png" /> 똥글냥이 - 최소 노력 최대 이득 시크냥\n 똥글리버 - 자발적 일 중독 천사견\n 똥글카 - 침 뱉는 래퍼 알파카\n 똥글펭 - 몰래 파티 주최하는 수영장 마스터\n 똥글빗 - 개썰 타임 전문 인싸 토끼\n 똥글릿 - 유치원 창고 털이범\n 똥글기니 - 약을 지배하는 금수저 밀거래상\n 똥글카라 - 댄스로 세상을 구하는 전학생\n 오늘도 선생님은 말합니다. '얘들아~ 오늘도 평화롭게 지내자~'`,
            subDescription: "파우와우 - 귀여운 척 하는 B급 유치원 시트콤!",
            genre: "막장 학원물, 반려동물 패러디 시트콤, 코미디",
            target: "13 ~ 19세 알파세대 + 반려인 20, 30대",
            format: "2분 x 다회차 / 숏폼 (TikTok, Shorts, Reels 중심)",
            hasRichContent: true,
        },
        {
            projectIndex: 6,
            title: "핀핀",
            icon: "/images/icons/PinPin_icon.png",
            subTitle: "'어디든 꽃히는 매력, 핀핀.'",
            description:
                " 가방끈, 벽, 책상 위... 움직이면 안되는 줄 알았던 인형들.\n 근데 얘네, 조용히 제일 난리야.\n Cot - 자존감으로 세상을 지배하는 귀염 폭발 사고 유발러\n Bella - 계획 없으면 멘붕 오는 예민 완벽주의자\n Peony - '망했다'를 입에 달고 사는 소심 혼돈 힐러 인간 앞에선 인형처럼 얼어붙고,\n 사람 없을 땐 시트콤처럼 대 환장.",
            subDescription:
                "핀핀은 그냥 귀엽지 않다.\n 너무 귀여워서, 진짜 문제다",
            genre: "B급 숏폼 시트콤, 코미디, 캐릭터 슬랩스틱",
            target: "7 ~ 25세 / 짧고 중독성 있는 유머를 좋아하는 Z세대",
            format: "5분 x 26편 / 실사 + 3D 캐릭터 하이브리드 TikTok, Shorts, Reels 중심 숏폼",
            hasRichContent: true,
        },
        {
            projectIndex: 7,
            title: "부키파키",
            icon: "/images/icons/Bookpaky_icon.png",
            subTitle: "어디에도 없는 이야기, 아이의 손 끝에서 시작된다.",
            description:
                "부키파키는 아이가 선택하고 완성하는\n 세상에서 단 하나뿐인 맞춤형 AI 그림동화 앱입니다.\n 이야기의 주인공도, 결말도 아이의 선택으로!\n 선택할 수록 다른 세계가 펼쳐지는 무한한 스토리라인\n 완성된 이야기는 디지털 동화책으로 저장 그리고 실물 책으로 소장까지!\n 이야기 중간엔 퍼즐, 숨은그림찾기, 미니게임도 숨어 있고\n 모든 선택은 스토리에 영향을 줍니다.\n 그리고 마지막엔...\n '이건 내가 만든 이야기야!'\n 라는 자존감 가득한 웃음이 남습니다.",
            subDescription: "부키파키 - 선택이 이야기를 만든다",
            genre: "인터랙티브 AI 동화 앱, 키즈 테크 콘텐츠",
            target: "3 ~ 7세 유아 + 부모 (상상력 / 창의력 발달 중심)",
            format: "모바일 앱 기반 / AI 스토리 + 이미지 생성 / 실물 책 연동",
            hasRichContent: true,
        },
    ];

    const getProjectDetail = (projectIndex: number) => {
        const project = projectDetails.find(
            (detail) => detail.projectIndex === projectIndex
        );
        if (!project) return null;

        const projectKey = getProjectKey(projectIndex);
        return {
            ...project,
            title: t(`projectDetails.${projectKey}.title`),
            subTitle: t(`projectDetails.${projectKey}.subTitle`, {
                defaultValue: "",
            }),
            description: t(`projectDetails.${projectKey}.description`, {
                defaultValue: "",
            }),
            subDescription: t(`projectDetails.${projectKey}.subDescription`, {
                defaultValue: "",
            }),
            genre: t(`projectDetails.${projectKey}.genre`),
            target: t(`projectDetails.${projectKey}.target`),
            format: t(`projectDetails.${projectKey}.format`),
        };
    };

    const getProjectKey = (projectIndex: number): string => {
        const keys = [
            "superclock",
            "fuzz",
            "opportunity",
            "pippoppopia",
            "foodrangers",
            "pawaw",
            "pinpin",
            "bookypaky",
        ];
        return keys[projectIndex] || "";
    };

    return {
        projectDetails,
        getProjectDetail,
    };
};
