export type Email = {
  id: string;
  name: string;
  avatar: string;
  marker?: string;
  subject: string;
  message: string;
  star: boolean;
  date: string;
};

export type EmailProps = {
  data: Email;
};