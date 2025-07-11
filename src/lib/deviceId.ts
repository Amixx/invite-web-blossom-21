// Simple cooldown management using localStorage only

// Check if device is in cooldown period
export const isInCooldown = (): boolean => {
  const lastWishTime = localStorage.getItem('last_wish_time')
  if (!lastWishTime) return false
  
  const timeSinceLastWish = Date.now() - parseInt(lastWishTime)
  const cooldownPeriod = 5 * 60 * 1000 // 5 minutes in milliseconds
  
  return timeSinceLastWish < cooldownPeriod
}

// Get remaining cooldown time in seconds
export const getRemainingCooldownTime = (): number => {
  const lastWishTime = localStorage.getItem('last_wish_time')
  if (!lastWishTime) return 0
  
  const timeSinceLastWish = Date.now() - parseInt(lastWishTime)
  const cooldownPeriod = 5 * 60 * 1000 // 5 minutes in milliseconds
  
  if (timeSinceLastWish >= cooldownPeriod) return 0
  
  return Math.ceil((cooldownPeriod - timeSinceLastWish) / 1000)
}

// Set the last wish time
export const setLastWishTime = (): void => {
  localStorage.setItem('last_wish_time', Date.now().toString())
}
