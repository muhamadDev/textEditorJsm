"use client"
import { Editor } from "@/components/editor/Editor"

export default function Home() {

    function save(html) {
        localStorage.setItem("note", html.outerHTML);
    }
    
    function load(ref) {
        const html = localStorage.getItem("note");
        if(html) ref.current.innerHTML = html
    }
    
    return (
        <div suppressHydrationWarning>
            <Editor onSave={save} onLoad={load} />
        </div>
    )  
}