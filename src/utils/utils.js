export const dateFormat = (date) => {
  const d = new Date(date);
  return d.getUTCMinutes();
};

export const timeFormat = (dateString) => {
  const date = new Date(dateString);

  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options).replace(",", "");
};

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");
  const data = await res.json();
  return data;
}
