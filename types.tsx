/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */




export type RootStackParamList = {
  Root: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Coming_Soon: undefined;
  Search: undefined;
  Downloads: undefined;
  Ranking: undefined;
};

export type HomeParamList = {
  TabOneScreen: undefined;
  MovieDetailsScreen: undefined;
  TabThreeScreen: undefined;
  TabFourScreen: undefined;
  TabFiveScreen: undefined;
  MediaScreen: undefined;
  SplashScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
  TabThreeScreen: undefined;
  TabFourScreen: undefined;
};

export type Episode = {
  id: string,
  title: string,
  poster: string,
  duration: string,
  plot: string,
  video: string,
}

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

