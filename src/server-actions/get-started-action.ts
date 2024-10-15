"use server";

export async function getStarted(data: any) {
  const response = await fetch("http://localhost:8000/api/get-started", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();

  return res;
}
