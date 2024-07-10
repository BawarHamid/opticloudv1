/* This file is a wrapper for 'fetch'
 * It keeps the access to the env variable in one place, handles errors,
 * converts the response data and reduces boilerplate code
 */

"server-only";

import { redirect } from "next/navigation";
import { getSession } from "./actions/auth";

export async function get(url: string) {
  const session = await getSession();

  const response = await fetch(process.env.API_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session}`,
    },
  }).then(handleResponse);

  return response;
}

export async function post(url: string, body: any) {
  const session = await getSession();

  const response = await fetch(process.env.API_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session}`,
    },
    body: JSON.stringify(body),
  }).then(handleResponse);

  return response;
}

async function handleResponse(response: Response) {
  if (response.status === 200) {
    const data = await response.json();
    //throw new Error('error')              // For test - To mock an error
    //return { error: 'Error message' };    // For test - To mock an error
    return data;
  } else if (response.status === 401) {
    console.log("User unauthorized - redirecting to login");
    redirect("/login");
  } else {
    const errorMessage = await response.text();
    return { error: errorMessage };
  }
}
