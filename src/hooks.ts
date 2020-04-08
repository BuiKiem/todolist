import { useState } from "react";

export const useModal = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const open: () => void = () => setValue(true);

  const close: () => void = () => setValue(false);

  return [value, open, close] as const;
};
