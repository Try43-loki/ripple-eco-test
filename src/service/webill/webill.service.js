export const getAccessTokenService = async (formData) => {
  try {
    const res = await fetch(
      "https://apitest-va.webill365.com/kh/api/wbi/client/v1/auth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error fetching access token:", e);
  }
};

export const createQuickBillsService = async (formData, accessToken) => {
  try {
    const res = await fetch(
      "https://apitest-va.webill365.com/kh/api/wbi/client/v1/quick-bills",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to create quick bill: ${res.status} ${errorText}`
      );
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error creating quick bill:", e);
    throw e;
  }
};

export const checkPaymentStatusService = async (billNumbers, accessToken) => {
  try {
    const res = await fetch(
      "https://apitest-va.webill365.com/kh/api/wbi/client/v1/payments/check-status",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          bill_no: billNumbers, // should be an array
        }),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to check payment status: ${res.status} ${errorText}`
      );
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error checking payment status:", e);
    throw e;
  }
};
