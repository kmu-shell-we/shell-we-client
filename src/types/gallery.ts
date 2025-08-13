export type TeamPhoto = {
  id: string;
  url: string;
  title: string;
  description: string;
  date: string;
};

export type TeamBlock = {
  id: string;
  teamName: string;
  photos: TeamPhoto[];
};
