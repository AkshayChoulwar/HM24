/**
 * Make the request to the resource.
 * @param url Url to the resource.
 * @returns Returns the promise of data.
 */
export async function fetchData(url: string, opts?: RequestInit): Promise<any> {
  try {
    const response = await fetch(url, opts);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Error while making the request to: ${url}`);
  }
}