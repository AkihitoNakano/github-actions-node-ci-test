export const setTimer = async () => {
  let ans = false
  setTimeout(() => {
    ans = true
  }, 1000)
  return ans
}
