import {create} from 'zustand';

interface AddUserButtonProps {
  isAddUserClicked  : boolean;
  toggleAddUserClicked  : () => void;
};

export const useAddUserButtonStore = create<AddUserButtonProps> ((set)=>({
    isAddUserClicked : false,
    toggleAddUserClicked : ()=> set((state)=>({
        isAddUserClicked : !state.isAddUserClicked
    })),
}));
