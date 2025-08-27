import { useState } from 'react';

import { toast } from 'sonner';

export function useApi(): [
  boolean,
  (func: () => Promise<unknown>) => void,
  manual: (value: boolean) => void,
] {
  const [isPending, setPending] = useState(false);

  async function start(func: () => Promise<unknown>) {
    setPending(true);
    func()
      .catch((e) => toast.error(e.message))
      .finally(() => setPending(false));
  }

  return [isPending, start, setPending];
}
