export function getUserIdFromToken(token: string | null): string | null {
    // console.log(token)
  try {
    const payload = token?.split('.')[1] || null;
    // console.log(payload)
    const decoded = payload ? JSON.parse(atob(payload)) : null;
    console.log(decoded)
    return decoded?.userId || decoded?.sub ||  decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || null;
  } catch (error) {
    return null;
  }
}