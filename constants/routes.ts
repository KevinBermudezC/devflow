const ROUTES: {
  SIGN_IN: string;
  SIGN_UP: string;
  HOME: string;
  PROFILE: (id: string) => string;
  TAGS: (id: string) => string;
} = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
