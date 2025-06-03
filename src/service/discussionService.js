// Get all discussion
const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
export const getAllDiscussionsService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/all`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get discussion by id
export const getDiscussionByIdService = async (discussionId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/${discussionId}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get Total Discussion
export const getTotalDiscussionService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/all-discussion-count`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get all Popular discussion
export const getAllPopularDiscussionService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/popular`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
