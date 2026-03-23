Both useCallback and useMemo are React performance optimization hooks, but they solve slightly different problems.

🔹 useCallback — Memoize a function

It returns a memoized function (i.e., the same function reference unless dependencies change).

✅ Use it when:
You pass functions to child components
You want to prevent unnecessary re-renders (especially with React.memo)
Example:
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

👉 Without useCallback, a new function is created on every render, which can trigger unnecessary re-renders in child components.

🔹 useMemo — Memoize a value

It returns a memoized computed value.

✅ Use it when:
You have expensive calculations
You want to avoid recalculating on every render
Example:
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

👉 Without useMemo, the calculation runs on every render.

🔥 Key Differences
Feature	useCallback	useMemo
Returns	Function	Value
Purpose	Prevent function recreation	Prevent expensive recalculation
Use case	Event handlers, callbacks	Derived data, calculations
Syntax	useCallback(fn, deps)	useMemo(() => value, deps)
🧠 Simple Way to Remember
useCallback = function ko yaad rakho
useMemo = result/value ko yaad rakho
⚠️ Important Note

Don’t overuse them ❌
They also have a cost. Use only when:

Performance issue exists
OR you are passing props to memoized child components
🚀 Quick Real Example
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  const doubled = useMemo(() => count * 2, [count]);

  return (
    <>
      <Child onClick={handleClick} />
      <p>{doubled}</p>
    </>
  );
};

If you want, I can also show:
✅ When NOT to use them
✅ Interview questions
✅ Real-world optimization patterns (very useful for FAANG prep)