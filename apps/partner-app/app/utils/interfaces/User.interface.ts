export type UserInterface = {
  userId?: string;
  userEmail?: string;
  authToken?: string;
  role?: string;

  // Hack to get rid of Union type issue I was facing
  status: string;
  message?: string;
};
