export const setCookieTimeInMinutes = (minutes: number) => {
    let now = new Date();
    now.setTime(now.getTime() + minutes * 60 * 1000);
    const time = now.toUTCString();
    return time;
  };

export const ValidityCheck = (value: string) => {
    if (value.trim().length > 3) return true;
    return false;
  };