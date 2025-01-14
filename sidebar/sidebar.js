const data = [
    {
        text: "대시보드",
        type: "page",
        children: []
    },
    {
        text: "기준정보",
        type: "group",
        children: [
        {
            text: "자재",
            type: "page",
            children: []
        },
        {
            text: "비즈니스 파트너",
            type: "page",
            children: []
        }
        ]
    },
    {
        text: "협업",
        type: "group",
        children: [
        {
            text: "ㄴㄴㅁㅇㅁㄴㅇ",
            type: "group",
            children: []
        }
        ]
    }
];

// 힘수
// 메인 메뉴 생성 시 마우스오버/아웃 이벤트 추가
function createSideMenu(nav, tree) {
    tree.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("level-1");

        const list = document.createElement("div");
        list.classList.add("arrow-parent");

        const linkName = document.createElement("div");
        linkName.classList.add("link_name");
        linkName.textContent = item.text;

        // const icon = createIcon(getImageUrl(item.text));
        // list.appendChild(icon);
        list.appendChild(linkName);

        menuItem.appendChild(list);
        nav.appendChild(menuItem);
    });
}


// 실행
const sidebarElement = document.querySelector('.sidebar');
const nav = sidebarElement.querySelector(".nav-links");
createSideMenu(nav, data);

