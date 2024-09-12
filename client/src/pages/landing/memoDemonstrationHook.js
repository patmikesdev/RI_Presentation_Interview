import {useState, useEffect, useMemo, useCallback} from 'react'

export default function useDemonstration(){
    //Going to compare the difference between simply declaring a value as part of the rendering process vs Memoizing the value so it's only re-declared when we want it to be. 

     // eslint-disable-next-line 
    const non_memoized_props = {
        header: "Welcome!",
        footer: "Let's a go!"
    }
  
    const memoized_props = useMemo(() => {
        return {
            header: "Welcome!",
            footer: "Let's a go!",
            classes: "landing-card"
        }
    }, [])

    // Not super important to understand what goes on underneath here, most of this is just code to help me trigger extra renders on demand and log what happens. 

    // trivial piece of state, flipping it's value will trigger a re-render of this component
    const [renderTrigger, setRenderTrigger] = useState(true); 

    //Event handling function to demonstrate usefulness of useMemo by triggering multiple re-renders on demand
    const demoListener = useCallback(e => {
        if(e.key === 'r') setRenderTrigger(!renderTrigger)
    }, [renderTrigger])
    
    //attach the listener once when the component mounts, remove it when the component is totally unmounted
    useEffect(()=>{
        document.addEventListener('keydown', demoListener); 
        return ()=> document.removeEventListener('keydown', demoListener)
    }, [demoListener])

    //THREE LOGGING FUNCTIONS TO KEEP TRACK OF WHAT CHANGES AND WHEN RENDERS OCCUR
    useEffect(()=>{
        console.log('RENDER OCCURRED!')
        //absence of any dependency array means this function fires on every render
    })
    useEffect(()=>{
        console.log('non_memoized_props were set')
    }, [non_memoized_props])
    
    useEffect(()=>{
        console.log('Properly memoized props were set')
    }, [memoized_props])

    return memoized_props
}