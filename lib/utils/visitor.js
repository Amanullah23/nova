export function getVisitorId() {
  if (typeof window === "undefined") return null;
  const key = "nova_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}
