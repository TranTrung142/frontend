let initialState = [{
        id: 1,
        name: "iphone 11 pro max",
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png',
        price: 500,
        description: "Smart phone của công ty APPLE",
        inventory: 100, //so luong con lai trong kho,
        rating: 3
    },
    {
        id: 2,
        name: "Samsung galaxy s10",
        image: 'https://didongthongminh.vn/upload_images/2019/01/SAMSUNG-GALAXY-S10-WHITE.png',
        price: 400,
        description: "Smart phone của công ty SAMSUNG",
        inventory: 150, //so luong con lai trong kho,
        rating: 4
    },
    {
        id: 3,
        name: "Xiaomi mi 10",
        image: 'https://sudospaces.com/mobilecity-vn/images/2020/02/xiaomi-mi10-xanh.jpg',
        price: 300,
        description: "Smart phone của công ty XIAOMI",
        inventory: 200, //so luong con lai trong kho
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default products;