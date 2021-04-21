const ids = [
  '5e2f6821e943b27a10009bbfdbe62893',
  'bfe04d0f34f1239f15478f5ffccdc97a',
  '5eb3b5570d5af2ab83ad98dd45fcc09f',
];

export const getGravatarUrl = (index: number) =>
  `https://gravatar.com/avatar/${ids[index % 3]}?s=200&d=robohash&r=x`;
