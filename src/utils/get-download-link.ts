import { AxiosResponse } from "axios";

export const getDownloadLink = (
  response: AxiosResponse<Blob>,
  fileName: string
) => {
  try {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error(err);
  }
};
