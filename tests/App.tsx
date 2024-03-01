type AppProps = {
  id: number;
  name: string;
  content: Content;
};

type Content = {
  title: string;
  body: string;
};

export const App = (_props: AppProps) => {
  return "App";
};
