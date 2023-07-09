type UseChangeTehemeReturnType = [(theme: string) => void];

export const useChangeTeheme = (): UseChangeTehemeReturnType => {
  const setTeheme = (theme: string) => {
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", theme);
  };

  return [setTeheme];
};
