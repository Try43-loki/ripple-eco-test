"use server";

import {
  checkPaymentStatusService,
  createQuickBillsService,
  getAccessTokenService,
} from "@/service/webill/webill.service";

export const createQuickBillAction = async (formData) => {
  try {
    // 1. Get access token
    const tokenFormData = {
      client_id: process.env.WEBILL_CLIENT_ID,
      client_secret: process.env.WEBILL_CLIENT_SECRET,
    };

    const authRes = await getAccessTokenService(tokenFormData);

    const accessToken = authRes?.data?.access_token;

    if (!accessToken) {
      return { success: false, error: "Access token not received" };
    }

    // 2. Create quick bill
    const billRes = await createQuickBillsService(formData, accessToken);

    return { success: true, data: billRes };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const checkPaymentStatusAction = async (billNumbers) => {
  try {
    // 1. Get access token
    const tokenFormData = {
      client_id: process.env.WEBILL_CLIENT_ID,
      client_secret: process.env.WEBILL_CLIENT_SECRET,
    };

    const authRes = await getAccessTokenService(tokenFormData);

    const accessToken = authRes?.data?.access_token;

    if (!accessToken) {
      return { success: false, error: "Access token not received" };
    }

    // 2. Check payment status
    const statusRes = await checkPaymentStatusService(billNumbers, accessToken);
    return { success: true, data: statusRes };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
