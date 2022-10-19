import type { PageServerLoad } from "./$types";
import { events } from "$lib/data/events";
import { error, json } from "@sveltejs/kit";
import { slugify } from "$lib/util";
import { supabaseClient } from "$lib/db";
import {dev} from '$app/environment';
import { CF_API_KEY, CF_SECRET_KEY } from "$env/static/private";

// TODO: const PG_URL = (dev) ? 'https://sandbox.cashfree.com/pg/orders':""
const PG_URL = "https://sandbox.cashfree.com/pg/orders";

export const load: PageServerLoad = async (event) => {
  let { data } = await supabaseClient
    .from("registrations")
    .select("*")
    .eq("id", event.params.id)
    .single();
  // POST TO RZP
  const _req = await fetch(PG_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client-id": CF_API_KEY,
      "x-client-secret": CF_SECRET_KEY,
      "x-api-version": "2022-01-01"
    },
    body: JSON.stringify({
      "order_id": (data.id).toString()+"_"+((new Date()).valueOf()/1000).toFixed(0),
      "order_amount": data.amount/100,
      "order_currency": "INR",
      "order_note": "Additional order info",
      "customer_details": {
       "customer_id": slugify(data.name +"="+ data.phone),
        "customer_name": data.name,
        "customer_email": data.email,
        "customer_phone": data.phone
      },
      "order_meta": {
        // TODO: 
        "return_url": "http://synergy-22-cf.vercel.app/pg/process_return?cf_id={order_id}&cf_token={order_token}"
      }
    }),
  });
  const _data = await _req.json();
  ({data} = await supabaseClient.from('registrations').update({cf_id: _data.cf_order_id, cf_token: _data.order_token, cf_status: _data.order_status}).eq('id', data.id).select().single());
  if(dev){console.log(data);
  console.log(_data);}
  if (data && _data) return { db: data, pg: _data };
  else throw error(404, "Registration ID not found");
};







export const sample_response = {
  "cf_order_id": 1539553,
  "created_at": "2021-07-19T16:13:35+05:30",
  "customer_details": {
    "customer_id": "7112AAA812234",
    "customer_name": null,
    "customer_email": "john@cashfree.com",
    "customer_phone": "9908734801"
  },
  "entity": "order",
  "order_amount": 5.01,
  "order_currency": "INR",
  "order_expiry_time": "2021-08-18T16:13:34+05:30",
  "order_id": "order_271vWwzSQOHe01ZVXpEcguVxQSRqr",
  "order_meta": {
    "return_url": "https://b8af79f41056.eu.ngrok.io?order_id={order_id}&order_token={order_token}",
    "notify_url": "https://b8af79f41056.eu.ngrok.io/webhook.php",
    "payment_methods": null
  },
  "order_note": null,
  "order_status": "PAID",
  "order_token": "BtJEHHxOB9bFpNsaHmEL",
  "payment_link": "https://payments-test.cashfree.com/order/#BtJEHHxOB9bFpNsaHmEL",
  "payments": {
    "url": "https://sandbox.cashfree.com/pg/orders/order_271vWwzSQOHe01ZVXpEcguVxQSRqr/payments"
  },
  "refunds": {
    "url": "https://sandbox.cashfree.com/pg/orders/order_271vWwzSQOHe01ZVXpEcguVxQSRqr/refunds"
  },
  "settlements": {
    "url": "https://sandbox.cashfree.com/pg/orders/order_271vWwzSQOHe01ZVXpEcguVxQSRqr/settlements"
  }
}

/*
{
  id: 1,
  created_at: '2022-10-17T09:02:18.946+00:00',
  name: 'Rogue Catalyst',
  email: 'parapallidev@gmail.com',
  education: 'GCOEN',
  event: 'events-1',
  amount: 10400,
  status: false,
  team: [ 'Player B', 'Player C', '', '' ],
  rzp_pid: null,
  rzp_oid: 'order_KUqQFLytagaILt',
  rzp_sig: null,
  phone: '8793150182',
  cf_id: '3090503',
  cf_token: 'uMxNEwkNaVzybVZ4B3iv',
  cf_status: 'ACTIVE',
  rzp_status: null
}
{
  cf_order_id: 3090503,
  order_id: '1_1666198901',
  entity: 'order',
  order_currency: 'INR',
  order_amount: 104,
  order_expiry_time: '2022-11-18T22:30:48+05:30',
  customer_details: {
    customer_id: 'rogue-catalyst8793150182',
    customer_name: 'Rogue Catalyst',
    customer_email: 'parapallidev@gmail.com',
    customer_phone: '8793150182'
  },
  order_meta: { return_url: null, notify_url: null, payment_methods: null },
  settlements: {
    url: 'https://sandbox.cashfree.com/pg/orders/1_1666198901/settlements'
  },
  payments: {
    url: 'https://sandbox.cashfree.com/pg/orders/1_1666198901/payments'
  },
  refunds: {
    url: 'https://sandbox.cashfree.com/pg/orders/1_1666198901/refunds'
  },
  order_status: 'ACTIVE',
  order_token: 'uMxNEwkNaVzybVZ4B3iv',
  order_note: 'Additional order info',
  payment_link: 'https://payments-test.cashfree.com/order/#uMxNEwkNaVzybVZ4B3iv',
  order_tags: null,
  order_splits: []
}
*/