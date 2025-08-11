export type TeamPhoto = {
  id: string;
  url: string;
  alt?: string;
};

export type TeamBlock = {
  teamName: string;
  photos: TeamPhoto[];
};
