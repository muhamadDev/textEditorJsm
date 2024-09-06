'use client';


import Theme from './plugins/Theme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import { HeadingNode } from '@lexical/rich-text';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useEffect, useRef } from 'react';

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

export function Editor({ onSave, onLoad }) {
    const Aref = useRef();

    useEffect(() => {
        onLoad(Aref)
    }, []);

    const initialConfig = {
        namespace: 'Editor',
        nodes: [HeadingNode],
        onError: (error) => {
            console.error(error);
            throw error;
        },
        theme: Theme,
        editable: true,
    };


    return (
        <LexicalComposer initialConfig={initialConfig} >
            <div className="editor-container size-full">
                <ToolbarPlugin onSave={onSave} />
 
                <div className="editor-inner h-[1100px]" ref={Aref} >
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="editor-input h-full" />
                        }
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                </div>
            </div>
        </LexicalComposer>
    );
}
