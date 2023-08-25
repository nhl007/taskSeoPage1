type filesData = {
  name: string;
  data: string | ArrayBuffer | null;
}[];

export const uploadFiles = async (files: filesData) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  await fetch(`${apiUrl}/upload`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(files),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.alert('upload successful');
    })
    .catch((err) => {
      console.log(err);
      window.alert('error occurred');
    });
};
