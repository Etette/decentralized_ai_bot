import toast from "react-hot-toast";

const baseUrl = "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943";
const endpoints = {
  getAssistant: "assistant",
  updateUsername: "user",
  getUsername: (userIdentity) => `user/${userIdentity}`,
  saveThread: "thread",
  getThread: (threadIdentity) => `thread/${threadIdentity}`,
  deleteThread: "thread",
  verifyThread: "thread/verify",
};

export const getMyAssistant = async () => {
  try {
    const response = await fetch(`${baseUrl}/${endpoints.getAssistant}`, {
      headers: [["Content-Type", "application/json"]],
    });

    const result = await response.json();
    return result?.assistantId;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const updateUsername = async (username, userIdentity) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoints.updateUsername}`, {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({
        userIdentity,
        username,
      }),
    });

    if (!response.ok) {
      throw await response.json();
    }
    const data = await response.json();
    return data.username;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};

export const getUsername = async (userIdentity) => {
  try {
    const response = await fetch(
      `${baseUrl}/${endpoints.getUsername(userIdentity)}`,
      {
        headers: [["Content-Type", "application/json"]],
      }
    );

    if (!response.ok) {
      throw await response.json();
    }
    const data = await response.json();

    return data.username;
  } catch (error) {
    toast.error(error.message);
    console.log(error.message);
  }
};

export const saveThread = async (userIdentity, thread) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoints.saveThread}`, {
      method: "PUT",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({
        userIdentity,
        thread,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};

export const getThread = async (userIdentity) => {
  try {
    const response = await fetch(
      `${baseUrl}/${endpoints.getThread(userIdentity)}`,
      {
        headers: [["Content-Type", "application/json"]],
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};

export const deleteThread = async (userIdentity) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoints.deleteThread}`, {
      method: "DELETE",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({ userIdentity }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    toast.error(error.message || error.error.message);
  }
};

export const hasASavedThread = async (userIdentity) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoints.verifyThread}`, {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({ userIdentity }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    toast.error(error.message || error.error.message);
  }
};
