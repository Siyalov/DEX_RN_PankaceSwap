import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Exchange: undefined;
};

export type Props<PageName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, PageName>;
