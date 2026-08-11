export async function fetchData() {
  const url = `https://api.scryfall.com/cards/search?q=type:sorcery`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Couldn't fetch`);
    }

    const data = await response.json();
    console.log(data.data[0]);

    return data.data.slice(0, 16);
  } catch (error) {
    console.error(`Error ${error}`);
  }
}
