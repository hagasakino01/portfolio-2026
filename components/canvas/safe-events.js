import { events as createPointerEvents } from "@react-three/fiber";

export function createSafePointerEvents(store) {
  const baseEvents = createPointerEvents(store);

  return {
    ...baseEvents,
    connect: (target) => {
      const fallbackTarget = target ?? store.getState().gl?.domElement ?? null;

      if (!fallbackTarget) {
        return;
      }

      baseEvents.connect?.(fallbackTarget);
    },
  };
}
