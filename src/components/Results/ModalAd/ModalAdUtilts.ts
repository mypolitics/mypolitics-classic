const MODAL_AD_STORAGE_KEY = 'M4PAD-VIEWED-ON';
const MAX_HIDE_LIMIT_MS = 3600 * 24 * 3 * 1000; // 3 days

export const getShowValue = (): boolean => {
  const currentValue = localStorage.getItem(MODAL_AD_STORAGE_KEY) || '0';
  const currentTime = new Date().getTime();
  const difference = currentTime - parseInt(currentValue, 10);

  return difference > MAX_HIDE_LIMIT_MS;
};

export const setShowValue = (timestamp: number) => (
  localStorage.setItem(MODAL_AD_STORAGE_KEY, timestamp.toString())
);
