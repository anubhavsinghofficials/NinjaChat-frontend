import { create } from 'zustand';

type TToaststore = {
  toastMessage: string;
  toggleToast: boolean;
  setToggleToast: (message: string | boolean) => void;
};

export const toastStore = create<TToaststore>()((set, _get) => ({
  toastMessage: '',
  toggleToast: false,
  setToggleToast(message) {
    if (message && typeof message === 'string') {
      set(() => ({ toastMessage: message, toggleToast: true }));
    } else {
      set(() => ({ toastMessage: '', toggleToast: false }));
    }
  },
}));
