export const Users = [
    {
        uuid: "123abc",
        name: "Brian",
        email: "briannelson95@proton.me",
    },
    {
        uuid: "456def",
        name: "kate",
        email: "kate@example.com",
    },
    {
        uuid: "789ghi",
        name: "Drew",
        email: "drew@example.com",
    },
];

export const GiftExchanges = [
    {
        id: "1",
        created_at: "2024-12-01T08:00:00.000Z",
        host_id: "123abc",
        name: "Nelson's Secret Santa",
        maxAmount: 75,
        desctription: "This is an example description for the first gift exchange",
        endDate: "2024-12-22T11:00:00.000Z",
        pickDate: "2024-12-01T10:00:00.000Z",
    },
    {
        id: "2",
        created_at: "2024-12-05T08:00:00.000Z",
        host_id: "789ghi",
        name: "Drew's Party",
        maxAmount: 50,
        desctription: "Another example of a gift exhange",
        endDate: "2024-12-21T19:00:00.000Z",
        pickDate: "2024-12-05T10:00:00.000Z",
    }
];

export const GuestList = [
    {
        id: "1",
        user_id: "123abc",
        exchange_id: "1"
    },
    {
        id: "2",
        user_id: "456def",
        exchange_id: "1"
    },
    {
        id: "3",
        user_id: "789ghi",
        exchange_id: "1"
    },
    {
        id: "4",
        user_id: "789ghi",
        exchange_id: "2"
    },
    {
        id: "5",
        user_id: "123abc",
        exchange_id: "2"
    },
];

export const WishList = [
    {
        id: "1",
        exchange_id: "1",
        user_id: "123abc",
        item_name: "Item Number One",
        item_url: "https://google.com/",
        item_price: 59.98
    },
    {
        id: "2",
        exchange_id: "1",
        user_id: "123abc",
        item_name: "Item Number Two",
        item_url: "https://google.com/",
        item_price: 23.99
    },
    {
        id: "3",
        exchange_id: "2",
        user_id: "123abc",
        item_name: "Item Number Three",
        item_url: "https://google.com/",
        item_price: 64.98
    },
    {
        id: "4",
        exchange_id: "1",
        user_id: "456def",
        item_name: "Kate's Item One",
        item_url: "https://google.com/",
        item_price: 64.98
    },
    {
        id: "5",
        exchange_id: "1",
        user_id: "456def",
        item_name: "Kate Item Two",
        item_url: "https://google.com/",
        item_price: 44.99
    },
    {
        id: "6",
        exchange_id: "1",
        user_id: "789ghi",
        item_name: "Drew Item",
        item_url: "https://google.com/",
        item_price: 70.43
    },
]