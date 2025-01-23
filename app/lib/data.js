const classData = [
    "클라우드 서비스 개발",
    "AI 엔지니어링",
    "클라우드 엔지니어링"
];
const tagsData = [
    "이론",
    "실습",
    "프로젝트",
    "기타"
];

const postType = [
    'QnA',
    'CodeShare',
    'Daily'
]

const status = [
    'active',
    'inactive'
]

const user = [
    {
        id: 0,
        name: "정호쌤",
        email: "admin@admin.com",
        password: "admin",
        role: "admin",
        status: "active",
    },
    {
        id: 1,
        name: "김코딩",
        email: "test01@test.com",
        password: "test01",
        role: "user",
        status: "active",
    },
    {
        id: 2,
        name: "이코딩",
        email: "test02@test.com",
        password: "test02",
        role: "user",
        status: "active",
    },
]

const postData = [
    {
        id: 1,
        userId: 2,
        class: classData[0],
        title: "What is React?",
        content: "React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. React was created by Jordan Walke, a software engineer at Facebook. The first deployment was on Facebook's newsfeed in 2011 and on Instagram.com in 2012.",
        tags: tagsData[0],
        type: postType[0],
        status: status[0],
        createdAt: "2024.12.12",
    },
    {
        id: 2,
        userId: 1,
        class: classData[1],
        title: "Introduction to Node.js",
        content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side. Node.js was created by Ryan Dahl in 2009, and its package ecosystem, npm, is the largest ecosystem of open source libraries in the world.",
        tags: tagsData[1],
        type: postType[0],
        status: status[0],        
        createdAt: "2024.12.13",
    },
    {
        id: 3,
        userId: 0,
        class: classData[2],
        title: "Understanding Angular",
        content: "Angular is a platform for building mobile and desktop web applications. It is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
        tags: tagsData[2],
        type: postType[1],
        status: status[0],        
        createdAt: "2024.12.14",
    },
    {
        id: 4,
        userId: 0,
        class: classData[3],
        title: "Getting Started with Vue.js",
        content: "Vue.js is a progressive JavaScript framework for building user interfaces. It was created by Evan You, and is maintained by him and the rest of the active core team members. Vue is designed from the ground up to be incrementally adoptable.",
        tags: tagsData[3],
        type: postType[2],
        status: status[0],        
        createdAt: "2024.12.15",
    },
    {
        id: 5,
        userId: 1,
        class: classData[4],
        title: "Exploring Svelte",
        content: "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.",
        tags: tagsData[4],
        type: postType[0],
        status: status[0],        
        createdAt: "2024.12.16",
    }
];

const commentData = [
    {
        id: 1,
        userId: 1,
        postId: 1,
        content: "This is a comment",
        createdAt: "2024.12.12",

    },
    {
        id: 2,
        userId: 1,
        postId: 1,
        content: "This is a comment",
        createdAt: "2024.12.12",

    },    
    {
        id: 3,
        userId: 4,
        postId: 1,
        content: "This is a comment",
        createdAt: "2024.12.12",

    }
]

export function fetchQnAData() {
    const data = postData.filter((post) => post.type === postType[0] && post.status === status[0]).sort((a, b) => b.createdAt - a.createdAt);
    return data;
}

export function fetchQnAByClass(className) {
    const data = postData.filter((post) => post.type === postType[0] && post.status === status[0] && post.class === className).sort((a, b) => b.createdAt - a.createdAt);
    return data;
}

export function fetchCodeShareData() {
    const data = postData.filter((post) => post.type === postType[1] && post.status === status[0]).sort((a, b) => b.createdAt - a.createdAt);
    return data;
}

export function fetchDailySummaryData() {
    const data = postData.filter((post) => post.type === postType[2] && post.status === status[0]).sort((a, b) => b.createdAt - a.createdAt);
    return data;
}

export function fetchCommentByPostId(postsId) {
    const data = commentData.filter((comment) => comment.postId === postId && comment.status === status[0]).sort((a, b) => b.createdAt - a.createdAt);
    return data;
}

export function isUserAdmin(email) {
    const user = user.find((user) => user.email === email);
    return user.role === "admin";
}

export function isUserOwnerPostData(postId, email) {
    const post = postData.find((post) => post.id === postId);
    const user = user.find((user) => user.email === email);
    return post.userId === user.id;
}

export function isUserOwnerCommentData(commentId, email) {
    const comment = commentData.find((comment) => comment.id === commentId);
    const user = user.find((user) => user.email === email);
    return comment.userId === user.id;
}
