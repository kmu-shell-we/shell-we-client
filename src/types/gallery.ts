export type TeamPhoto = {
  id: string;
  url: string;
  alt?: string;
};

export type TeamBlock = {
  id: string;
  teamName: string;
  photos: TeamPhoto[];
};
