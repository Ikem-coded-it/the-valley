
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function FullScreenLoader() {
    return (
        <div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center bg-opacity-5 bg-slate-400">
            <div className="card">
                <p className="mb-[20px] font-semibold text-lg">Please wait...</p>
                <ProgressSpinner style={{width: '100px', height: '100px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".2s" />
            </div>
        </div>
    );
}
        