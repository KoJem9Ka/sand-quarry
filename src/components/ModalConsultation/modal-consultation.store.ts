import { create } from 'zustand/react';


type State = {
  isOpen: boolean;
}

type Actions = {
  open: () => void;
  close: () => void;
}

const useModalConsultation = create<State & Actions>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const modalConsultationOpen = useModalConsultation.getState().open;
export const modalConsultationClose = useModalConsultation.getState().close;
export const useIsModalConsultationOpen = () => useModalConsultation((state) => state.isOpen);
