const comments = [
  {
    id: "7fa839a8-3165-4dba-96a2-fa82c55677b6",
    createdAt: "2022-08-08T10:55:24.769Z",
    content: "Line, se quiser ajuda no pdi to por aqui",
    by_nickname: "Maurício",
    moderator: null,
    page: {
      id: "24945e3b-b92b-4946-a4d2-490cadf1aa03",
      slug: "f0uijn82iuxhlcb8k0xc5of0uijrjroa",
      url: null,
      title: null,
      createdAt: "2022-08-05T14:40:56.601Z",
      updatedAt: "2022-08-05T14:40:56.601Z",
      projectId: "3896125a-c074-4577-9530-19838d9ba62e",
    },
    moderatorId: null,
    replies: {
      data: [],
      commentCount: 0,
      pageSize: 100,
      pageCount: 1,
    },
    parsedContent: "<p>Line, se quiser ajuda no pdi to por aqui</p>\n",
    parsedCreatedAt: "Invalid Date",
  },
  {
    id: "bf7afc8b-ef4c-44e2-b86e-7972639e0b0d",
    createdAt: "2022-08-05T19:47:29.286Z",
    content: "Fico feliz de estar no mesmo time que tu!",
    by_nickname: "Rodrigo",
    moderator: null,
    page: {
      id: "24945e3b-b92b-4946-a4d2-490cadf1aa03",
      slug: "f0uijn82iuxhlcb8k0xc5of0uijrjroa",
      url: null,
      title: null,
      createdAt: "2022-08-05T14:40:56.601Z",
      updatedAt: "2022-08-05T14:40:56.601Z",
      projectId: "3896125a-c074-4577-9530-19838d9ba62e",
    },
    moderatorId: null,
    replies: {
      data: [],
      commentCount: 0,
      pageSize: 100,
      pageCount: 1,
    },
    parsedContent: "<p>Fico feliz de estar no mesmo time que tu!</p>\n",
    parsedCreatedAt: "Invalid Date",
  },
  {
    id: "37cb262e-7423-421e-8104-a2c84237ad71",
    createdAt: "2022-08-05T14:40:56.982Z",
    content: "Vamo que vamo!!!\nBora fazer uns pomodoro pra PDI",
    by_nickname: "Gu",
    moderator: null,
    page: {
      id: "24945e3b-b92b-4946-a4d2-490cadf1aa03",
      slug: "f0uijn82iuxhlcb8k0xc5of0uijrjroa",
      url: null,
      title: null,
      createdAt: "2022-08-05T14:40:56.601Z",
      updatedAt: "2022-08-05T14:40:56.601Z",
      projectId: "3896125a-c074-4577-9530-19838d9ba62e",
    },
    moderatorId: null,
    replies: {
      data: [],
      commentCount: 0,
      pageSize: 100,
      pageCount: 1,
    },
    parsedContent: "<p>Vamo que vamo!!!\nBora fazer uns pomodoro pra PDI</p>\n",
    parsedCreatedAt: "Invalid Date",
  },
];

export const getComments = () => ({
  data: {
    commentCount: 3,
    data: comments,
    pageCount: 1,
    pageSize: 10,
  },
});
