import { create } from 'zustand';

type TIntrostore = {
  toggleIntro: boolean;
  setToggleIntro: (bool: boolean) => void;
};

export const IntroStore = create<TIntrostore>()((set, _get) => ({
  toggleIntro: false,
  setToggleIntro(bool) {
    set(() => ({ toggleIntro: bool }));
  },
}));
