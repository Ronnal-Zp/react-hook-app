import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { HooksApp } from "./HooksApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp/> */}
    <CounterWithCustomHook/>
  </StrictMode>
)
