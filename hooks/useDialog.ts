import { useState } from 'react';

export default function useModal(initialMode = false) {
  const [dialogVisible, setDialogVisible] = useState(initialMode);

  const toggleDialog = (): void => {
    setDialogVisible(!dialogVisible);
    document.body.style.overflow = dialogVisible ? 'unset' : 'hidden';
  };

  return { dialogVisible, toggleDialog };
}
