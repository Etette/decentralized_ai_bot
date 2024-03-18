import toast from "react-hot-toast";
import { retreiveAssistantFromOpenai } from "./chat";
import axios from "axios";

axios.create({
  // backend canister url
  baseURL: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943",
});

const endpoints = {
  getAssistant: "/assistant",
  updateUsername: "/user",
  getUsername: (userIdentity) => `/user/${userIdentity}`,
  saveThread: "/thread",
  getThread: (threadIdentity) => `/thread/${threadIdentity}`,
  deleteThread: "/thread",
  verifyThread: "/thread/verify",
};

export const getMyAssistant = async () => {
  try {
    const { data } = await axios.get(endpoints.getAssistant);
    console.log(data);
    // const assistant = retreiveAssistantFromOpenai(data);
    return assistant;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};

export const updateUsername = async (username, userIdentity) => {
  try {
    const { data } = await axios.post(endpoints.updateUsername, {
      userIdentity,
      username,
    });

    console.log(data);

    // window.canister.assistant.updateUsername(userIdentity, username);

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};

export const getUsername = async (userIdentity) => {
  try {
    const { data } = await axios.get(endpoints.getUsername(userIdentity));

    // window.canister.assistant.getUsername(userIdentity);
    // if (data.Err) {
    //   throw data.Err;
    // }

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveThread = async (userIdentity, thread) => {
  try {
    const { data } = await axios.put(endpoints.saveThread, {
      userIdentity,
      thread,
    });
    // window.canister.assistant.saveThread(
    //   userIdentity,
    //   thread
    // );
    // if (data.Err) {
    //   throw data.Err;
    // }

    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};

export const getThread = async (userIdentity) => {
  try {
    const { data } = await axios.get(endpoints.getThread(userIdentity));
    // \
    // \window.canister.assistant.getThread(userIdentity);
    // if (data.Err) {
    //   throw data.Err;
    // }

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};

export const deleteThread = async (userIdentity) => {
  try {
    const { data } = await axios.delete(endpoints.deleteThread, {
      userIdentity,
    });

    return data;
  } catch (error) {
    console.error(error);
    toast.error(error.message || error.error.message);
  }
};

export const hasASavedThread = async (userIdentity) => {
  try {
    const data = await axios.post(endpoints.verifyThread, { userIdentity });

    // window.canister.assistant.hasASavedThread(userIdentity);
    // if (data.Err) {
    //   throw data.Err;
    // }

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    toast.error(error.message || error.error.message);
  }
};
