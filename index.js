const data = [
    'đi chơi game',
    'đi ăn cơm',
    'đi đá bóng',
    'đi ngủ'
];

var listData = document.getElementById('data');

var content = data.map((item) => `<li><p>${item}</p></li>`);

content = content.join('');

listData.innerHTML = content;

const data2 = [
    {
        id: "1760221",
        name: "Trần Quốc Trung"
    },
    {
        id: "1760123",
        name: "Tào Văn Lao"
    },
    {
        id: "1760124",
        name: "Búa Văn Xua"
    },
    {
        id: "1760125",
        name: "Đào Thị Xoắn"
    },
    {
        id: "1760555",
        name: "Thơ Văn Chương"
    },
    {
        id: "1760553",
        name: "Võ Sĩ Quyền Năng"
    }
];

var listStudentCards = document.getElementById('data-2');

var content2 = data2.map((item) => `<div class="box"><h3>${item.id}</h3><hr><h4>${item.name}</h4></div>`);

content2 = content2.join('');

listStudentCards.innerHTML = content2;

