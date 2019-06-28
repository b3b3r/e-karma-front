const initialState = [
  {
    id: 1,
    pseudo: "Babouche",
    avatar: "/images/avatars/avatar1.png",
    karma: 64,
  },
  {
    id: 2,
    pseudo: "Dora",
    avatar: "/images/avatars/avatar2.png",
    karma: 94,
  },
  {
    id: 3,
    pseudo: "Diego",
    avatar: "/images/avatars/avatar3.png",
    karma: -12,
  },
  {
    id: 4,
    pseudo: "Chippeur",
    avatar: "/images/avatars/avatar7.png",
    karma: -83,
  }
];

const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
