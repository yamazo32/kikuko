// src/utils/date.ts
export const getTimestamp = (dateVal: any) => {
  if (!dateVal) return 0;
  // WordPress形式（YYYY-MM-DD HH:mm:ss等）のハイフンをスラッシュに置換して安定させる
  const normalized =
    typeof dateVal === "string" ? dateVal.replace(/-/g, "/") : dateVal;
  const time = new Date(normalized).valueOf();
  return Number.isNaN(time) ? 0 : time;
};
