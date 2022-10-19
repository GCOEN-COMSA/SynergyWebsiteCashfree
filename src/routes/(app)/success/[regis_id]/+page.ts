import type { PageLoad } from "./$types";
import { events } from "$lib/data/events";
import { error } from "@sveltejs/kit";
import { supabaseClient } from "$lib/db";
export const load: PageLoad = async ({ params }) => {
  const { data: db_1 } = await supabaseClient
    .from("registrations")
    .select("*")
    .eq("id", params.regis_id)
    .limit(1)
    .single();
  
  if (db_1) return { db: db_1, event: events.find((e) => e.id === db_1.event) };
  else throw error(404, "Registration ID not found");
};

export const sample = {
  session: null,
  db: {
    id: 1,
    created_at: "2022-10-17T09:02:18.946+00:00",
    name: "Rogue Catalyst",
    email: "parapallidev@gmail.com",
    education: "GCOEN",
    event: "events-0",
    amount: 10400,
    status: false,
    team: ["", "", "", ""],
    rzp_pid: null,
    rzp_oid: "order_KUqQFLytagaILt",
    rzp_sig: null,
    phone: null,
    cf_id: null,
    cf_token: null,
    cf_status: null,
    rzp_status: null,
  },
  event: {
    id: "events-0",
    name: "CoderCut v6.0",
    long_desc: "Longer CoderCut v6.9",
    desc: "CoderCut v6.9",
    amount: 10000,
    image: "https://placeimg.com/192/108/tech",
    icon: "clarity:bar-code-line",
    date: "2021-09-01",
    players: 1,
  },
};
