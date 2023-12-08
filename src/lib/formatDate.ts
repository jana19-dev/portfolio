export function formatDate(dateString: string) {
  try {
    const parsed = new Date(`${dateString}T00:00:00Z`).toLocaleDateString(
      'en-US',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      },
    )

    if (parsed === 'Invalid Date') {
      return dateString
    } else {
      return parsed
    }
  } catch (error) {
    return dateString
  }
}
