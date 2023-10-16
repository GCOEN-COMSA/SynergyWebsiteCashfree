// import { CF_API_KEY, CF_SECRET_KEY } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabaseClient } from "$lib/db";

// TODO: const PG_URL = (dev) ? 'https://sandbox.cashfree.com/pg/orders':""
const PG_URL = "https://sandbox.cashfree.com/pg/orders/";

export const GET: RequestHandler = async ({ url }) => {
  const cf_id = url.searchParams.get("cf_id");
  const cf_token = url.searchParams.get("cf_token");

  if (cf_id && cf_token) {
    const res: Response = await fetch(PG_URL + cf_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": "",
        "x-client-secret": "",
        "x-api-version": "2022-01-01",
      },
    });
    console.log(await res.clone().json(), res.clone().status, cf_token);
    if (res.status == 200) {
      const data = await res.json();
      if (data && data.order_status === "PAID") {
        // update in supabase
        const { data: _data, error: _error } = await supabaseClient
          .from("registrations")
          .update({ cf_status: data.order_status, cf_token: cf_token })
          .eq("id", cf_id.split("_")[0])
          .select()
          .single();
        console.log(_data, _error);
        if (_data && !_error && _data.cf_status === "PAID") {
          throw redirect(307, "/success/" + _data.id);
        } else {
          throw error(500, "Payment failed");
        }
      }
    }
    throw error(500, "Incorrect cf_id or cf_token");
  }
  throw error(500, "Missing cf_token and cf_id");
};

export const _sample = {
  cf_order_id: 594193729,
  created_at: "2021-09-22T13:46:51+05:30",
  customer_details: {
    customer_id: "P9999711",
    customer_name: null,
    customer_email: "abc@yahoo.co.in",
    customer_phone: "9899049110",
  },
  entity: "order",
  order_amount: 1.0,
  order_currency: "INR",
  order_expiry_time: "2021-10-22T13:46:51+05:30",
  order_id: "order_1471yUGAj97hSGoOB",
  order_meta: {
    return_url: "http://localhost:1774/resp.php?order_id={order_id}&order_token={order_token}",
    notify_url: "https://b8af79f41056.eu.ngrok.io/webhook.php",
    payment_methods: null,
  },
  order_note: null,
  order_splits: [],
  order_status: "PAID",
  order_tags: null,
  order_token: "9AtvrNXIXgQqFsJbaRVc",
  payment_link: "https://payments.cashfree.com/order/#9AtvrNXIXgQqFsJbaRVc",
  payments: {
    url: "https://api.cashfree.com/pg/orders/order_1471yUGAj97hSGoOB/payments",
  },
  refunds: {
    url: "https://api.cashfree.com/pg/orders/order_1471yUGAj97hSGoOB/refunds",
  },
  settlements: {
    url: "https://api.cashfree.com/pg/orders/order_1471yUGAj97hSGoOB/settlements",
  },
};
