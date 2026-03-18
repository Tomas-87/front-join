const urlApi = "http://localhost:3000";

export const fetchData = async () => {
  try {
    const response = await fetch(urlApi);
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (title) => {
  try {
    const response = await fetch(`${urlApi}/create`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${urlApi}/id/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
